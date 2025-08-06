import { useState } from "react";
import { pricePerItem } from '../constants/index';
import { OrderDetailsContext } from "./UseOrderDetails";


import type {   OrderDetailsProviderProps,
                OptionCounts,   
                OptionType,
                Totals,
                OrderDetails
            } from "./OrderDetailsContext";

export { useOrderDetails } from "./UseOrderDetails";

export function OrderDetailsProvider({ children }: OrderDetailsProviderProps) {
  
  const [optionCounts, setOptionCounts] = useState<OptionCounts>({
    scoops: {},
    toppings: {}
  });

  function updateItemCount(itemName: string, newItemCount: number, optionType: OptionType) {
    const newOptionCounts = { ...optionCounts };
    newOptionCounts[optionType][itemName] = newItemCount;
    setOptionCounts(newOptionCounts);
  }

  function resetOrder() {
    setOptionCounts({ scoops: {}, toppings: {} });
  }

  function calculateTotal(optionType: OptionType): number {
    const countsArray = Object.values(optionCounts[optionType]);
    const totalCount = countsArray.reduce((total, value) => total + value, 0);
    return totalCount * pricePerItem[optionType];
  }

  const totals: Totals = {
    scoops: calculateTotal("scoops"),
    toppings: calculateTotal("toppings")
  };

  const value: OrderDetails = {
    optionCounts,
    totals,
    updateItemCount,
    resetOrder
  };

  return (
    <OrderDetailsContext.Provider value={value}>
      {children}
    </OrderDetailsContext.Provider>
  );
}

