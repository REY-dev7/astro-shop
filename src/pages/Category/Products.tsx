import React, { useState } from "react";
import "./products.css";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { SubcategoryProps } from "../../types/types";
import { Dropdown } from "flowbite-react";
import Filters from "../../components/filters/Filters";

const Products = () => {
  const params = useParams();
  const catId = parseInt(params?.id as string);
  const [maxPrice, setMaxPrice] = useState<number>(2000);
  const [sort, setSort] = useState<string>("");
  const [selectedSubCates, setSelectedSubCates] = useState<string[]>([]);

  const { productData } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChangeSubCategories = (e: any) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCates(
      isChecked
        ? [...selectedSubCates, value]
        : selectedSubCates.filter((item) => item !== value)
    );
  };

  const removeFilter = () => {
    setSort("");
    setMaxPrice(2000);
    setSelectedSubCates([]);
  };


  return (
    <div className="products flex gap-4 flex-col md:flex-row px-2">
      <div className="left py-3">
        <div className="lg:ml-10 md:h-[100%] h-0 md:flex-1 sticky top-3">
          <Filters
            catId={catId}
            maxPrice={maxPrice}
            sort={sort}
            setSort={setSort}
            setMaxPrice={setMaxPrice}
            removeFilter={removeFilter}
            productData={productData}
            selectedSubCates={selectedSubCates}
            handleChangeSubCategories={handleChangeSubCategories}
          />
        </div>
        <div className="flex justify-between visible md:invisible py-2">
          <div className="border-2 py-3 px-4 rounded-lg  font-bold">
            <Dropdown inline={true} label="Filters" className="rounded-lg">
              <div className="grid gap-6 w-52 text-base px-2">
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
                          checked={selectedSubCates.includes(
                            item?.id.toString()
                          )}
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
              </div>
            </Dropdown>
          </div>
          <button
            className="py-3 px-4 rounded-lg font-bold text-white bg-black"
            onClick={removeFilter}
          >
            Remove Filter
          </button>
        </div>
      </div>
      <div className="right md:flex-[3]">
        <img
          className="catImg w-[100%] h-[300px] object-cover mb-5 md:mb-10"
          src="https://images.pexels.com/photos/953262/pexels-photo-953262.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCates={selectedSubCates}
        />
      </div>
    </div>
  );
};

export default Products;
