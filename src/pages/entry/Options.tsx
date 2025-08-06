import axios from "axios";
import { useEffect, useState } from "react";
import ScoopOption from "./ScoopOptions";
import Row from 'react-bootstrap/Row';
//import ToppingOption from "./ToppingOption";  WE DELETED THE FILE AND CHANGED IT TO TOTAL UPDATES SO?
import AlertBanner from "../common/AlertBanner";
import { pricePerItem } from "../../constants";
import { formatCurrency } from "../../utilities";
import {useOrderDetails} from "../../contexts/UseOrderDetails"

interface OptionsProps {
  optionType: "scoops" | "toppings";
}

export default function Options({ optionType }: OptionsProps) {
  interface ItemType {
    name: string;
    imagePath: string;
    
  }
  const [items, setItems] = useState<ItemType[]>([]);
  const [error, setError] = useState(false);
  const {totals} = useOrderDetails();

  // optionType is 'scoops' or 'toppings'
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((_error) => setError(true));
  }, [optionType]);

  if (error) {
    return <AlertBanner message={undefined} varient={undefined} />;
  }

  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption; //ALSO BECAUSE WE DELETED THE FILE AND CHANGED IT TO TOTAL UPDATES SO?
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();
  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return (
    <>
      <h2>{title}</h2>
      <p>{formatCurrency(pricePerItem[optionType])} each</p>
      <p>{title} total: {formatCurrency(totals[optionType])} </p>
      <Row>{optionItems}</Row>
    </>);
}
