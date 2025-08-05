import { createContext, useContext, useState } from "react";
import {pricePerItem} from '../constants/index';

 type optionType = "scoops" | "toppings" ;

 interface OptionCounts{
    
    scoops: Record<string,number>;
    toppinggs: Record<string,number>;
 }

 interface Totals{
    
    scoops: number;
    toppings: number;
 }

 interface OrderDetails {

    optionCounts: OptionCounts;
    totals: Totals;
    updateItemCount: (itemName:string, newItemCount:number,optionType: OptionType) => void;
 }

 interface OrderDetailsProviderPros{

    children: ReactNode;
 }

 const OrderDetails = createContext < OrderDetailsContextType | null> (null);


/*

export function useOrderDetails() {

    const contextValue = useContext(OrderDetails);

    if (contextValue){
        throw new Error('useOrderDetails mast be called from within an OrderDetailsProvider');
    }

    return contextValue;
}

export function OrderDetailsProvider(props) {
    
    const [optionCounts, setOptionCounts] = useState({
        scoops:{},
        toppings:{}
    });


function updateItemCount(itemName:string , newItemCount: number, optionType:"scoops"|"toppings") {
    
    const newOptionCounts = {...optionCounts};
    newOptionCounts[optionType][itemName] = newItemCount;
    setOptionCounts(newOptionCounts);

}

function resetOrder() {
 
    setOptionCounts({scoops: {},toppings: {}});
}    

function calculateTotal(optionType) {
    
    const countsArray = Object.values(optionCounts[optionType]);
    const totalCount = countsArray.reduce((total,value) => total + value,0);
    
    return totalCount*pricePerItem[optionType];
}

const totals = {
    
    scoops: calculateTotal("scoops"),
    toppings: calculateTotal('toppings'),
};

const value = {optionCounts,totals,updateItemCount,resetOrder};

return <OrderDetails.Provider value={value} {...props}/>;
}*/