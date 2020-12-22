import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Currency from './components/Currency';
import LastModified from './components/LastModified';

const App = () => {
  
  const [data, setData] = useState("");

  useEffect(() =>  {
    const fetchData = async () => {
    await Axios.get('https://gist.githubusercontent.com/ahmadpanah/e6225b11235a04397b813d0de6e6f5ad/raw/ab559a1146b5e6f2d57bd546c20c090842d5fcc6/sana.json')
    .then((res) => setData(res.data))
    }
    fetchData()
}, [])

  return ( 
    <>
    <Currency data={data} />
    </>
   );
}
 
export default App;
