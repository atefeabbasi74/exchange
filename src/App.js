import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Currency from './components/Currency';
import LastModified from './components/LastModified';
import Gold from './components/Gold';
import Item from './components/Items';

const App = () => {
  
  const [data, setData] = useState("");

  useEffect(() =>  {
    const fetchData = async () => {
    await Axios.get('https://currency.jafari.li/json')
    .then((res) => setData(res.data))
    }
    fetchData()
}, [])

  return ( 
    <>

    <LastModified data={data} />
    <Currency data={data} />
    <Gold data={data} />
    <Item data={data} />
    </>
   );
}
 
export default App;
