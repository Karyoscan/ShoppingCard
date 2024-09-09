import { createContext, useContext, useState } from "react";
import ShopingCardItems from "../companent/ShopingCardItems";
import { useLocalStorage } from "@uidotdev/usehooks";
import { UseLocalStore } from "../hook/UseLocalStore";



const ShopingCard = createContext({} as ShopingCardUseItem);

export const ShopingCardUse = () => {
  return useContext(ShopingCard);
};

type CardItems = {
  id: number;
  quantity: number;
};

type ShoppingUseContentProviderChildren = {
  children: React.ReactNode;
};
type ShopingCardUseItem = {
  getItemQuantity: (id: number) => number;
  increaseCardQuantity: (id: number) => void;
  decreaseCardQuantity: (id: number) => void;
  RemoveCard: (id: number) => void;
  ItemCardLength: number;
  openClose: boolean;
  SetOpenClose: React.Dispatch<React.SetStateAction<boolean>>;
  CardItem:CardItems[]
};

export function ShoppingUseContentProvider({
  children,
}: ShoppingUseContentProviderChildren) {
  const [CardItem, setCardItem] = UseLocalStore<CardItems[]>('Local',[]);

  const getItemQuantity = (id: number) => {
    return CardItem.find((us) => us.id === id)?.quantity || 0;
  };

  const increaseCardQuantity = (id: number) => {
    setCardItem((items) => {
      if (items.find((us) => us.id === id) == null) {
        return [...items, { id, quantity: 1 }];
      } else {
        return items.map((us) => {
          if (us.id === id) {
            return { ...us, quantity: us.quantity + 1 };
          } else {
            return us;
          }
        });
      }
    });
  };

  const decreaseCardQuantity = (id: number) => {
    setCardItem((items) => {
      if (items.find((us) => us.id === id)?.quantity === 1) {
        return items.filter((us) => us.id !== id);
      } else {
        return items.map((us) => {
          if (id === us.id) {
            return { ...us, quantity: us.quantity - 1 };
          } else {
            return us;
          }
        });
      }
    });
  };

  const RemoveCard = (id: number) => {
    setCardItem((items) => items.filter((us) => us.id !== id));
  };

  const ItemCardLength = CardItem.reduce(
    (quantity, items) => items.quantity + quantity,
    0
  );

  const [openClose, SetOpenClose] = useState<boolean>(false);

  return (
    <ShopingCard.Provider
      value={{
        getItemQuantity,
        increaseCardQuantity,
        decreaseCardQuantity,
        RemoveCard,
        ItemCardLength,
        openClose,
        SetOpenClose,
        CardItem,
      }}
    >
      {children}
      <ShopingCardItems />
    </ShopingCard.Provider>
  );
}
