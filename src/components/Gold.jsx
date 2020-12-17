import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Gold = ({data}) => {

    return ( 
        <div>
        {data.Gold ?
        data.Gold.map(Gold => (
            <div className="Gold">

            <div className="Name">
            <div className="nameBottom2"> سکه {Gold.Coin}</div>
            </div>

            <div className="BuySell">
            <div className="buybottom">خرید : {Gold.Buy}</div>
            <div className="sellbottom">فروش : {Gold.Sell}</div>
            </div>

            </div>

        )) 
        :
        null
}

        </div>
     );
}
 
export default Gold;