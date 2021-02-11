import React, { Component } from 'react';
import Getdataservice from '../services/Getdataservice';
class GetDataById extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            hotel_id : '',
            room_category_id : '',
            date :'',
            hotels:'',
            check:'true',
            success: false
             }
        this.changeHotelidhandler = this.changeHotelidhandler.bind(this);
    
        this.saveClicked = this.saveClicked.bind(this);
    }
    saveClicked = (e) => {
        e.preventDefault();
        
        let obj = {hotel_id: this.state.hotel_id, room_category_id: this.state.room_category_id,date: this.state.date}
          console.log(obj);
        Getdataservice.getDatabyid(obj).then(res =>{
          
            
            
            this.setState({hotels: res.data})
            this.setState({ success: true });
            this.setState({ check: false });
            
            console.log(res);
            
        });
    }
    changeHotelidhandler(event)
    {
       
            //console.log(this.state);
            this.setState(
                {
                    [event.target.name]
                        : event.target.value
                }
            )
      

    }
    render() {
        return (
            <div>
            <div className="container"> 
            <div className = "row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                  <h3 className ="text-center"> ENTER FOLLOWING DETAILS </h3>
                  <div className = "card-body">
                    <form>
                        <div className="form-group">
                            <label>Hotel Id</label>
                            <input placeholder="hotel id" name="hotel_id" className = "form-control" value={this.state.hotel_id} onChange={this.changeHotelidhandler} />
                            <label>Room Category Id</label>
                            <input placeholder="room Category id" name="room_category_id" className = "form-control" value={this.state.room_category_id} onChange={this.changeHotelidhandler} />
                            <label>Date</label>
                            <input placeholder="Date" name="date" className = "form-control" value={this.state.date} onChange={this.changeHotelidhandler} />
                           
                        </div>
                        <button className="btn btn-success" style={{marginLeft:"30px"}}onClick={this.saveClicked}>SUBMIT</button>
                   
                    </form>
                  </div>
                </div>
            </div>
            </div>
            {this.state.success && <div>
              
               <table className = "table table-striped table-bordered">

                <div className = "container"> 
                
                <h3 className ="text-center" style={{marginTop:"50px"}}> Price for Single Occupancy Room = {this.state.hotels.prices.price1}</h3>
                <h3 className ="text-center"> Price for Double Occupancy Room = {this.state.hotels.prices.price2}</h3>
                <h3 className ="text-center"> Price for Triple Occupancy Room = {this.state.hotels.prices.price3}</h3>
                <h3 className ="text-center"> Created At = {this.state.hotels.created_at}</h3>
                <h3 className ="text-center">Updated At = {this.state.hotels.updated_at}</h3>
            
                </div>


                </table>
                </div>}
               
            
           </div>
        );
    }
}

export default GetDataById;