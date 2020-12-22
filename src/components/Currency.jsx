import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Currency = ({data}) => {

    return ( 
        <div>
        {data.sana ?
        data.sana.data.map(currency => (
            <div className="Currency">

            <div className="Name">
            <div className="nameBottom">کد ارز : {currency.slug}</div>
            <div className="nameBottom">نام ارز : {currency.title}</div>
            </div>

            <div className="BuySell">
            <div className="buybottom">خرید : {currency.p}</div>
            <div className="sellbottom">فروش : {currency.p}</div>
            </div>

            </div>

        )) 
        :
        null
}

        </div>
     );
}
 
export default Currency;