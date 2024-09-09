import React from "react";
import StoreData from "../Data/StoreData";
import FormatCurrency from "../utilities/FormatCurrency";
import { IoCloseSharp } from "react-icons/io5";
import { ShopingCardUse } from "../Content/ShopingCard";


type ItemCard = {
  id: number;
  quantity: number;
};

const ItemCard = ({ id, quantity }: ItemCard) => {
  const Item = StoreData.find((us) => us.id === id);
  if (Item == null) {
    return null;
  }

const {RemoveCard} = ShopingCardUse()


  return (
    <div className="mt-5 mx-5 flex justify-between items-center">
      <div className="flex items-center">
        <img className="h-24 w-24" src={Item.img} alt={Item.alt} />
        <div className="ml-3">
          <div className="">
            {Item.name}
            <span className="text-[12px] ml-1 text-gray-400">x{quantity}</span>
          </div>
          <div className="text-gray-400 text-sm">
            {FormatCurrency(Item.price)}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {FormatCurrency(Item.price * quantity)}
        <div onClick={()=>RemoveCard(id)} className="  border-2 border-cyan-200 text-white hover:border-green-400 rounded-md hover:bg-red-300 hover:text-green-300 transition-all duration-300" >
        <IoCloseSharp size={25} />

        </div>
      </div>
    </div>
  );
};

export default ItemCard;
