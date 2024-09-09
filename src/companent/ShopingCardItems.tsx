import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { ShopingCardUse } from "../Content/ShopingCard";
import ItemCard from "./ItemCard";
import StoreData from "../Data/StoreData";
import FormatCurrency from "../utilities/FormatCurrency";





const ShopingCardItems = () => {
  const { openClose, SetOpenClose, CardItem } = ShopingCardUse();

  return (
    <div
      className={
        openClose
          ? "absolute top-0 right-0  h-full w-1/4 transition-all duration-500 bg-gray-300/80 translate-x-1 rounded-md "
          : "absolute top-0 right-0  h-full w-0 transition-all duration-500 bg-gray-300/80 translate-x-1 rounded-md"
      }
    >
      {openClose && (
        <div>
          <div className=" flex  justify-between items-center mx-10 my-10 cursor-pointer   ">
            <div className="">Card</div>
            <div onClick={() => SetOpenClose((us) => !us)}>
              <IoCloseSharp
                className="  hover:border-2 border-white  scale-100 hover:scale-125 rounded-md hover:text-white transition-all duration-300"
                size={25}
              />
            </div>
          </div>
          {CardItem.map((us) => (
            <ItemCard key={us.id} {...us} />
          ))}

          <div className="flex text-xl justify-end mt-10 mr-2">
            Total :
            {FormatCurrency(
              CardItem.reduce((first, Items) => {
                const item = StoreData.find((us) => us.id === Items.id);

                return first + (item?.price || 0) * Items.quantity;
              }, 0)
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopingCardItems;
