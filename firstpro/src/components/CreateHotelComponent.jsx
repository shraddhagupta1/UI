import React, { Component } from 'react';
import Getdataservice from '../services/Getdataservice';

class CreateHotelComponent extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            hotel_id : '',
            room_category_id : '',
            date :'',
            price1 :'',
            price2: '',
            price3: '',
            reason:'',
           
            check:false


        }
        this.changeHotelidhandler = this.changeHotelidhandler.bind(this);
        this.changeHotelroomhandler = this.changeHotelroomhandler.bind(this);
        this.changeHoteldatehandler = this.changeHoteldatehandler.bind(this);
        this.saveClicked = this.saveClicked.bind(this);
    }
    saveClicked = (e) => {
        e.preventDefault();
        let price = {price1: this.state.price1, price2:this.state.price2, price3:this.state.price3}
        let obj = {hotel_id: this.state.hotel_id, room_category_id: this.state.room_category_id,date: this.state.date,prices:price,reason:this.state.reason}
          console.log(obj);
        Getdataservice.addData(obj).then(res =>{
          
            this.setState({ check: true });
            
            // this.props.history.push('/');
            console.log(res);
            
        });
    }
    // changeHotelidhandler= (event)=>{
    //     this.setState({hotel_id: event.target.value});
    // }
    changeHotelroomhandler= (event)=>{
        this.setState({room_category_id: event.target.value});
    }
    changeHoteldatehandler= (event)=>{
        this.setState({date: event.target.value});
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
                      <h3 className ="text-center"> Add Data </h3>
                      <div className = "card-body">
                        <form>
                            <div className="form-group">
                                <label>Hotel Id</label>
                                <input placeholder="hotel id" name="hotel_id" className = "form-control" value={this.state.hotel_id} onChange={this.changeHotelidhandler} />
                                <label>Room Category Id</label>
                                <input placeholder="room Category id" name="room_category_id" className = "form-control" value={this.state.room_category_id} onChange={this.changeHotelidhandler} />
                                <label>Date</label>
                                <input placeholder="Date" name="date" className = "form-control" value={this.state.date} onChange={this.changeHotelidhandler} />
                                <label>Price for Single Occupancy</label>
                                <input placeholder="price" name="price1" className = "form-control" value={this.state.price1} onChange={this.changeHotelidhandler} />
                                <label>Price for Double Occupancy</label>
                                <input placeholder="price" name="price2" className = "form-control" value={this.state.price2} onChange={this.changeHotelidhandler} />
                                <label>Price for Triple Occupancy</label>
                                <input placeholder="price" name="price3" className = "form-control" value={this.state.price3} onChange={this.changeHotelidhandler} />
                            
                               <label>Reason</label>
                                <input placeholder="reason" name="reason" className = "form-control" value={this.state.reason} onChange={this.changeHotelidhandler} />
                            </div>
                            <button className="btn btn-success" style={{marginLeft:"30px"}}onClick={this.saveClicked}>Save</button>
                       
                        </form>
                      </div>
                    </div>
                </div>
                </div>
                {this.state.check && <div> <h2 className ="text-center">ADDED SUCCESSFULLY</h2> 
                </div>}
                
               </div>
        );
    }
}

export default CreateHotelComponent;