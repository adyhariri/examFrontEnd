import React, { Component } from 'react';
import axios from 'axios';
import Item from './Item';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row , Col} from 'react-bootstrap';


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            myData:[],
        }

    }
    componentDidMount = async ()=>{
        const server = process.env.REACT_APP_SERVER;
        const myData=await axios.get(`${server}/`);
        this.setState({
            myData:myData.data,
        })
    }
    addFav=async(idx)=>{
        const server=process.env.REACT_APP_SERVER;
        const obj={
            strDrink:this.state.myData[idx].strDrink,
            strDrinkThumb:this.state.myData[idx].strDrinkThumb,
        } 
        await axios.post(`${server}/addTofav`,obj);
    }
    render() {
        return (
           <>
           <Row xs={1}  md={3} className="g-4">
               {this.state.myData.map((item,idx)=>{
                   <Col>
                   <Item key={idx} item={item} addFav={this.addFav} idx={idx} />
                   
                   </Col>
               })}
           </Row>
           </>
        )
    }
}
