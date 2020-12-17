import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Item = ({data}) => {

    return ( 
        <div>
        {data.Item ?
        data.Item.map(Item => (
            <div className="Items">

            <div className="Item">
            <div className="nameItemBottom"> {Item.Name} :</div>
            </div>

            <div className="Item">
            <div className="itemButton"> {Item.Rate}</div>
            </div>

            </div>

        )) 
        :
        null
}

        </div>
     );
}
 
export default Item;