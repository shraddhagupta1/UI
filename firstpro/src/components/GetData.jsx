import React, { Component } from 'react';
import Getdataservice from '../services/Getdataservice';

class GetData extends Component {
    constructor(props)
    {
        super(props);
        
            this.state = {
                // hotels : []
            }
            this.addData = this.addData.bind(this);
            this.getDataById = this.getDataById.bind(this);
        
    }
    // componentDidMount(){
    //    Getdataservice.getData().then((res)=>
    //     {    console.log(res);
    //          this.setState({hotels: res.data})
    //     });
        
    // }
    addData()
    {
        this.props.history.push('/add-data');
    }
    getDataById()
    {
        this.props.history.push('/getdatabyid');
    }
    render() {
        return (
            <div className="container">
               <h1 className ="text-center" style={{marginRight:"80px" , marginTop:"50px" , color:"red" , textDecorationThickness:"100px"}}> WELCOME </h1>
            <div className ="text-center">
            <button className="btn btn-primary" style={{marginRight:"80px" , marginTop:"50px"}} onClick = {this.addData}> addData </button>
           {'\n'}
            <button className="btn btn-primary" style={{marginRight:"80px" , marginTop:"50px"}} onClick = {this.getDataById}> GetData </button>
            </div>
                {/* <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> hotel id</th>
                                <th> "room_category_id</th>
                               
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.hotels.map(
                                    hotel =>
                                    <tr key = {hotel.id}>
                                        <td>{hotel.hotel_id}</td>
                                        <td> {hotel.room_category_id} </td>
                                       
                                    </tr>
                                   
                                )
                            }
                        </tbody>

                    </table>

                </div> */}
                
            </div>
        );
    }
}

export default GetData;