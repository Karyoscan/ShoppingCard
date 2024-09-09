import React from "react";
import StoreData from "../Data/StoreData";
import StoreItem from "../companent/StoreItem";

const data = StoreData.map((us) => (
  <StoreItem
    key={us.id}
    id={us.id}
    name={us.name}
    price={us.price}
    img={us.img}
    alt={us.alt}
  />
));

const Store = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Store</h1>
      <div className="flex justify-evenly">
        <div className="   grid grid-cols-2 my-4  gap-x-40 gap-y-10 ">
          {data}
        </div>
      </div>
    </div>
  );
};

export default Store;
