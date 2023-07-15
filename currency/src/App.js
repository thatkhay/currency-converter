
import { useEffect } from 'react';
import './App.css';
import CurrencyRow from './componets/CurrencyRow';
import axios from 'axios';

const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest'
const accessKey = 'c515f1cbe6895005fa9590ab97401235'


function App() {

  useEffect(() => {
    axios.get(`${BASE_URL}?access_key=${accessKey}`)
      .then(response => {
       
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
  return (
    <div className="App">
      <h1>convert</h1>
     <CurrencyRow/>
     <div className='equals'>=</div>
     <CurrencyRow/>
    </div>
  );
}

export default App;
