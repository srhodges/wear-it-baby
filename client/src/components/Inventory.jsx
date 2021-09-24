import React from "react";
import { useEffect, useState } from "react";
// import ReactPaginate from "react-paginate";
import { fetchInventory } from '../services/index';
import Card from "./Card";


const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/inventory`

console.log(URL);

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};


export default function Inventory() {
  const [items, setItems] = useState([]);


  useEffect(() => {
    const getInventory = async () => {
      setItems(await fetchInventory());
    };
    getInventory();
  }, []);

  
  return (
    <div className="inventory-container">
       <h1 className="inventory-title">Wear It, Baby!</h1>

    <div className="inventory">
     
        {items.map((item) => {
          return (
            // <ReactPaginate/>
            <Card item={item}/>
            );
          })}
    </div>
          </div>
  );
}