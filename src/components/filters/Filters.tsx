import React from "react";
import { ProductProps, SubcategoryProps } from "../../types/types";

type FilterProps = {
  catId: number;
  maxPrice: number;
  sort: string;
  productData: ProductProps[];
  setSort: React.Dispatch<React.SetStateAction<string>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
  handleChangeSubCategories: (e: any) => void;
  removeFilter: () => void;
  selectedSubCates: string[]
};

const Filters = ({
  setMaxPrice,
  maxPrice,
  setSort,
  productData,
  sort,
  handleChangeSubCategories,
  removeFilter,
  selectedSubCates
}: FilterProps) => {

  console.log("sort", sort);

  
  return (
    <div className="grid gap-6 invisible md:visible">
      <div className="filterItem">
        <h1>Product Categories</h1>
        <div className="inputItem pl-5">
          {productData?.map((item: SubcategoryProps) => (
            <div
              className="flex items-center gap-1"
              key={item?.id}
              onChange={handleChangeSubCategories}
            >
              <input
                type="checkbox"
                name=""
                id={item?.id.toString()}
                checked={selectedSubCates.includes(item?.id.toString())}
                value={item?.id}
              />
              <label htmlFor={item?.id.toString()}>
                {item?.attributes?.title}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="filterItem">
        <h1>Sort by</h1>
        <div className="inputItem pl-5">
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="price"
              id="asc"
              value="asc"
              checked={sort === "asc"}
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="price"
              id="desc"
              value="desc"
              checked={sort === "desc"}
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="filterItem">
        <h1>Filter by Price</h1>
        <div className="inputItem">
          <span>0</span>
          <input
            type="range"
            min={0}
            max={2000}
            value={maxPrice}
            onChange={(e: any) => setMaxPrice(e.target.value)}
          />
          <span>{maxPrice === 0?"2000":maxPrice}</span>
        </div>
      </div>
      <button className="py-3 px-4 rounded-lg font-bold border-2 border-black" onClick={removeFilter}>
        Remove Filter
      </button>
    </div>
  );
};

export default Filters;
