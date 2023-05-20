import React from "react";

let Table=({user})=>{
    let {id,name,image,symbol,current_price,total_volume,price_change_percentage_24h,market_cap}=user;
    let col="";
    if(Number(price_change_percentage_24h)>=0){
        col="green"   
    }else{
        col="red"
    }


return <>
        <tr key={id}>
            <td>
                <img className="logo" src={image} alt={symbol}/>
            </td>

            <td>
                {name}
            </td>

            <td>
                {symbol}
            </td>
            <td>
            {current_price}$
            </td>
            <td>
                {total_volume}
            </td>
            <td style={{color:col}}>
                {price_change_percentage_24h}
            </td>
            <td>
                {market_cap}
            </td> 
        </tr>

     </>
    
}
export default Table;