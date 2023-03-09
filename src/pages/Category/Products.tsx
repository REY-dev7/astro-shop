import React, { useState } from "react";
import "./products.css";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";

type Props = {};

const Products = (props: Props) => {
  const params = useParams();
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState<string | null>(null);
  
  
  const catId = parseInt(params?.id as string);
    
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h1>Product Categories</h1>
          <div className="inputItem">
            <div className="">
              <input type="checkbox" name="" id="1" value={1} />
              <label htmlFor="1">shoes</label>
            </div>
            <div className="">
              <input type="checkbox" name="" id="2" value={2} />
              <label htmlFor="2">tshirt</label>
            </div>
          </div>
        </div>
        <div className="filterItem">
          <h1>Filter by Price</h1>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e:any)=>setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h1>Sort by</h1>
          <div className="inputItem">
            <div className="">
              <input type="radio" name="price" id="asc" value="asc" onChange={(e)=>setSort("asc")} />
              <label htmlFor="asc">Price (Lowest first)</label>
            </div>
            <div className="">
              <input type="radio" name="price" id="desc" value="desc" onChange={(e)=>setSort("desc")} />
              <label htmlFor="desc">Price (Highest first)</label>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="catImg" src="https://images.pexels.com/photos/953262/pexels-photo-953262.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
