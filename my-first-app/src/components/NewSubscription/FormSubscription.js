import './FormSubscription.css'
import {useState} from 'react';

const FormSubscription=()=>{
    //const [userTitle,setUserTitle]=useState("");
    //const [userDate,setUserDate]=useState("");
    //const [userAmount,setUserAmount]=useState("");
    const [form,setForm]=useState({userTitle:'',userDate:'',userAmount:''})

    const titleChangeHandler=(events)=>{
        //setUserTitle(events.target.value)
    }
    const dateChangeHandler=(events)=>{
        //setUserDate(events.target.value)
        console.log("userDate",userDate);
    }
    const amountChangeHandler=(events)=>{
        //setUserAmount(events.target.value)
        console.log("userAmount",userAmount);
    }
    return(
        <form>
            <div className="new_subscription_controls">
                <div className="new_subscription_control">
                    <label>Title</label>
                    <input type='text' name="title" onChange={titleChangeHandler}></input>
                </div>
                <div className="new_subscription_control">
                    <label>Date</label>
                    <input type='date' name="date" onChange={dateChangeHandler}></input>
                </div>
                <div className="new_subscription_control">
                    <label>Amount</label>
                    <input type='text' name="amount" onChange={amountChangeHandler}></input>
                </div>
            </div>
            <div className="new_subscription_actions">
                <button type='submit'>Add Subscription</button>
            </div>
        </form>
    )
}
export default FormSubscription