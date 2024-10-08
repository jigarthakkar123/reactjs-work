import './Subscription.css'
import Container from '../templates/Container'
import SubscriptionDate from './SubscriptionDate'
import react,{useState} from 'react';
import {findRenderedComponentWithType} from 'react-dom/test-utils';

 const Subscription = (props)=>{
    const [title,setTitle]=useState(props.title)
    const onClickHandler=()=>{
        //title="Changed Title";
        setTitle("Changed Title")
    }
    return (
        <Container className="subscription" >
        <SubscriptionDate date={props.date}/>
        <h2 className="subscription_title">{title}</h2>
        <div className="subscription_price"> {props.amount} </div>
        <button type="button" id="changeTitleButton" onClick={onClickHandler}>Change Title</button>
        </Container>
    )
}
export default Subscription