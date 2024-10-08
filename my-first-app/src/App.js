import logo from './logo.svg';
import './App.css';
import Subscription from './components/Subscription';

function App() {
  let subscrptions=[
    {
      id:"1",
      date:new Date('2024','10','1'),
      title:"Monthly Subscription",
      amount:'125.5'
    },
    {
      id:"2",
      date:new Date('2024','10','10'),
      title:"Annual Subscription",
      amount:'1215.5'
    },
    {
      id:"3",
      date:new Date('2024','5','1'),
      title:"Quaterly Subscription",
      amount:'995.5'
    }

  ]

  return (
    <div>
      <Subscription date={subscrptions[0].date} title={subscrptions[0].title} amount={subscrptions[0].amount}/>
      <Subscription date={subscrptions[1].date} title={subscrptions[1].title} amount={subscrptions[1].amount}/>
      <Subscription date={subscrptions[2].date} title={subscrptions[2].title} amount={subscrptions[2].amount}/>
    </div>
  );

}

export default App;
