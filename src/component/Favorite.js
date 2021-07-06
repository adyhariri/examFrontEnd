import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button , Row , Col} from 'react-bootstrap';
import UpdateForm from './UpdateForm';

export default class Favorite extends Component {
    constructor(props){
        super(props);
        this.state={
            favourite:[],
            show:false,
            index:-1,
            strDrink:'',
            strDrinkThumb:'',
        }
    }
    componentDidMount = async ()=>{
        const server = process.env.REACT_APP_SERVER;
        const favourite=await axios.get(`${server}/getFav`);
        this.setState({
            favourite:favourite.data,
        })
    }
    delete=async (id)=>{
        const server = `${process.env.REACT_APP_SERVER}`;
        const newArray = await axios.delete(`${server}/deletefav?id=${id}`);
        this.setState({
            favourite:newArray.data,
        })
    }
    showForm=(idx)=>{
        this.setState({
            show:true,
            index:idx,
            strDrink:this.state.favourite[idx].strDrink,
            strDrinkThumb:this.state.favourite[idx].strDrinkThumb,
        })
    }
    hClose=()=>{
        this.setState({
            show:false,
        })
    }
    updateData= async(e)=>{
        e.preventDefault();
        const obj={
            strDrink:e.target.strDrink.value,
            strDrinkThumb:e.target.strDrinkThumb.value,
            id:this.state.favourite[this.state.index]['_id']
        }
        const server= `${this.process.env.REACT_APP_SERVER}`;
        const newData=await.axios.put(`${server}/updateFav`,obj);
        this.setState({
            favourite:newData.data,
            show:false,
        })
    }
    render() {
        return (
           <>
           <Row xs={1}  md={3} className="g-4">
               {this.state.favourite.map((item,idx)=>{
                   <Col>
                   <Card style={{width:'18rem'}}>
                       <Card.Body>
                       <Card.Img variant="top" src="item.strDrinkThumb" alt={item.strDrink} />
                       
                        <Card.Title>{item.strDrink}</Card.Title>
                        <Button variant="primary" onClick={()=>this.showForm(idx)}>update</Button>
                        <Button variant="primary" onClick={()=>this.delete(item._id)}>delete</Button>
                       </Card.Body>
                   </Card>
                   
                   </Col>
               })}
           </Row>
           <UpdateForm show={this.state.show} hClose={this.hClose} strDrink={this.state.strDrink} strDrinkThumb={this.state.strDrinkThumb} />
           </>
        )
    }
}
