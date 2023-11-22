import axios from "axios";
import React, { Component } from "react";

export default class ReservationLists extends Component {

    constructor(props){
        super(props);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeGuestNum = this.onChangeGuestNum.bind(this);
        this.onChangeFname = this.onChangeFname.bind(this);
        this.onChangeLname = this.onChangeLname.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state={
            date:'',
            time:'',
            geustNum:'',
            fname:'',
            lname:'',
            contact:''
        }
    }

    onChangeDate(e){
        this.setState({
            date:e.target.value
        })
    }

    onChangeTime(e){
        this.setState({
            time:e.target.value
        })
    }

    onChangeGuestNum(e){
        this.setState({
            geustNum:e.target.value
        })
    }

    onChangeFname(e){
        this.setState({
            fname:e.target.value
        })
    }

    onChangeLname(e){
        this.setState({
            lname:e.target.value
        })
    }

    onChangeContact(e){
        this.setState({
            contact:e.target.value
        })
    }
    
    onSubmit(e){
       e.preventDefault();
       console.log(this.state.date)
       console.log(this.state.time)
       console.log(this.state.geustNum)
       console.log(this.state.fname)
       console.log(this.state.lname)
       console.log(this.state.contact)


        const todo = {
            date:this.state.date,
            time:this.state.time,
            geustNum: this.state.geustNum,
            fname: this.state.fname,
            lname:this.state.lname,
            contact:this.state.contact
        }

        axios.post('http://localhost:8081/add',todo)
            .then(res=>
                console.log(res.data))




       this.setState({
        date:'',
            time:'',
            geustNum:'',
            fname:'',
            lname:'',
            contact:'',
       
     })
    }
    
    

    render() {
        const myStyle = {
            backgroundColor: '#1e1e1eca',
            fontSize: '18px',
            
            border: '1px solid gray',
            padding: '10px'
          };
            
        return (
            <div class="container justify-content-center" style={myStyle}> 
                
                <div class="col-lg-12 p-5 text-white">
                    <form onSubmit={this.onSubmit}>
                        <div class="form-group m-5">
                            <label for="exampleFormControlInput1" >Date</label>
                            <input type="text" class="form-control" value={this.state.date} onChange={this.onChangeDate}  />
                        </div>

                        <div class="form-group m-5">
                            <label for="exampleFormControlInput1">Time</label>
                            <input type="text" class="form-control" value={this.state.time} onChange={this.onChangeTime}/>
                        </div>

                        <div class="form-group m-5">
                            <label for="exampleFormControlInput1">The numbers of Guests</label>
                            <input type="text" class="form-control" value={this.state.guestNum} onChange={this.onChangeGuestNum} />
                        </div>

                        <div class="form-group m-5">
                            <label for="exampleFormControlInput1">First Name</label>
                            <input type="text" class="form-control" value={this.state.fname} onChange={this.onChangeFname} />
                        </div>

                        <div class="form-group m-5">
                            <label for="exampleFormControlInput1">Last Name</label>
                            <input type="text" class="form-control" value={this.state.lanme} onChange={this.onChangeLname} />
                        </div>

                        <div class="form-group m-5">
                            <label for="exampleFormControlInput1">Contact</label>
                            <input type="text" class="form-control" value={this.state.contact} onChange={this.onChangeContact} />
                        </div>

                        
                        <button type="submit" class="btn btn-primary">Make a reservation</button>
                    </form>
                </div>
            </div>
        )
    }
}
