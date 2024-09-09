import React from "react";
import FormatCurrency from "../utilities/FormatCurrency";
import { ShopingCardUse } from "../Content/ShopingCard";


interface Store {
  id: number;
  name: string;
  price: number;
  img: string;
  alt: string;
}

const StoreItem = ({ name, id, price, img, alt }: Store) => {
  
  const  {getItemQuantity,increaseCardQuantity,decreaseCardQuantity,RemoveCard}  =ShopingCardUse()
  const para = getItemQuantity(id);
  
  return (
    <div>
      <div className=" ">
        <div className="">
          <div>
            <img className="h-96 w-96" src={img} alt={alt} />
            <div className="flex my-2 justify-between items-center w-96">
              <p className="font-bold text-2xl ">{name}</p>
              <p className="text-gray-400">{FormatCurrency(price)}</p>
            </div>
          </div>
          {para>0 ?   
           <div>

            <div>
              <div className="w-96 flex items-center justify-center">
                <button onClick={()=>increaseCardQuantity(id)} className="text-white bg-blue-500 hover:bg-blue-500/70 h-10 w-10 rounded-md">
                  +
                </button>
                <p className="mx-2">{para} in cart</p>
                <button onClick={()=>decreaseCardQuantity(id)} className="text-white hover:bg-blue-500/70  bg-blue-500 h-10 w-10 rounded-md">
                  -
                </button>
              </div>
            </div>
            <div className="w-96 my-2 flex items-center justify-center">
              <button onClick={()=>RemoveCard(id)} className="py-2 w-20 text-white hover:bg-red-500/70 bg-red-500 rounded-md">
                Remove
              </button>
            </div>
          </div>

          :
          <div className="flex justify-center"><button onClick={()=>increaseCardQuantity(id)} className="hover:bg-blue-500/60 bg-blue-500 w-80 h-10 rounded-md text-white">+  Add Card </button></div>}
       
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
