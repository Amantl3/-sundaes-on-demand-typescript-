import {useContext, createContext} from 'react';
import type { OrderDetails } from './OrderDetailsContext';

export const OrderDetailsContext = createContext < OrderDetails | null> (null);

export function useOrderDetails(): OrderDetails {
  
  const contextValue = useContext(OrderDetailsContext);
  
  if (!contextValue) {
    throw new Error("useOrderDetails must be used within an OrderDetailsProvider");
  }
  return contextValue;
}
