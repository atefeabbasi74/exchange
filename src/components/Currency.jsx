import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Currency = ({data}) => {

    return ( 
        <div>
        {data.Currency ?
        data.Currency.map(currency => (
            <div className="Currency">

            <div className="Name">
            <div className="nameBottom">کد ارز : {currency.Code}</div>
            <div className="nameBottom">نام ارز : {currency.Currency}</div>
            </div>

            <div className="BuySell">
            <div className="buybottom">خرید : {currency.Buy}</div>
            <div className="sellbottom">فروش : {currency.Sell}</div>
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