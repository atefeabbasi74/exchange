import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const LastModified = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        Axios.get('https://currency.jafari.li/json')
        .then((res) => setData(res.data.LastModified))
    }, [])

    return ( 
        <div className="LastModified">
            آخرین بروزرسانی : {' '}
            {data}
        </div>
     );
}
 
export default LastModified;