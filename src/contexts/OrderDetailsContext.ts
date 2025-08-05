import type { ReactNode } from 'react';


export type OptionType = "scoops" | "toppings" ;

export interface OptionCounts{
    
    scoops: Record<string,number>;
    toppings: Record<string,number>;
 }

export interface Totals{
    
    scoops: number;
    toppings: number;
 }

export interface OrderDetails {

    optionCounts: OptionCounts;
    totals: Totals;
    updateItemCount: (itemName:string, newItemCount:number,optionType: OptionType) => void;
    resetOrder: () => void
 }

export interface OrderDetailsProviderProps{

    children: ReactNode;
 }
 

 

