import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Currency = ({data}) => {

    return ( 
        <>
        {data.Currency ?
        data.Currency.map(currency => (
            <div className="Currency">

            <div className="Name">
            <div>کد ارز : {currency.Code}</div>
            <div>نام ارز : {currency.Currency}</div>
            </div>

            <div className="BuySell">
            <div>خرید : {currency.Buy}</div>
            <div>فروش : {currency.Sell}</div>
            </div>

            </div>

        )) 
        :
        null
}

        </>
     );
}
 
export default Currency;