import axios from "axios";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import ScoopOption from "./ScoopOptions";
import ToppingOption from "./ToppingOptions";
import AlertBanner from "../common/AlertBanner";
import { pricePerItem } from "../../constants";
import { formatCurrency } from "../../utilities";
import { useOrderDetails } from "../../contexts/UseOrderDetails";

export interface OptionProps{
    optionType: 'scoops' | 'toppings'
}

export interface ItemType{
    name: string,
    imagePath: string
}

export default function Options({ optionType }: OptionProps) {
  const [items, setItems] = useState<ItemType[]>([]);
  const [error, setError] = useState(false);
  const { totals } = useOrderDetails();

  // optionType is 'scoops' or 'toppings
  useEffect(() => {

    console.log('useEffect running for optionType:', optionType)
    const controller = new AbortController();
    axios
      .get(`http://localhost:3030/${optionType}`, { signal: controller.signal })
        .then((response) => {setItems(response.data)})
      .catch((error) => {
          console.log('API error:', error.name, error.message);
          setError(true);
      });

    return () => controller.abort();
  }, [optionType]);

  if (error) {

    return <AlertBanner message="" variant=""/>;
  }

  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;
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
      <p>
        {title} total: {formatCurrency(totals[optionType])}
      </p>
      <Row>{optionItems}</Row>
    </>
  );
}
