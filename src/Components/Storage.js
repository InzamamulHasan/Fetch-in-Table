import React,{useState,useEffect} from "react";
import Table from "./Table.js";

const API="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
let Storage=()=> {

  let [arr,setArr]=useState([])

    useEffect(()=>{
      fetchUsers(API);
    },[])


  async function fetchUsers(API){
    try{
      let res=await fetch(API);
      let data=await res.json();
      if(data.length>0){
        setArr(data)
      }
      console.log(data);
    }catch(err){
      console.error("err",err);
    }
 }
 
  return (
    <div className="cont">
      <div className="tcon">
      <table>
        <thead>
          <tr className="trh">
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Current Price</th>
            <th>Total Volume</th>
            <th>Price Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {
            arr.map((item)=>
              <Table key={item.id} user={item} />
            )
          }
           
        </tbody>
      </table>
      </div>
    </div>
  );
}
export default Storage;