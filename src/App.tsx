import { Container } from "react-bootstrap";
import OrderEntry from "./pages/entry/OrderEntry";
import { OrderDetailsProvider } from "./contexts/OrderDetails";
import { useState } from "react";
import OrderSummary from "./pages/summary/OrderSummary";
import OrderConfirmation from "./pages/confirmation/OrderConfirmation";

function App() {
  const [step, setStep] = useState("order"); // order, summary, confirmation

  let Component;

  switch (step) {
    case 'order':
      Component = OrderEntry;
      break;
    case 'review':
      Component = OrderSummary;
      break;
    case 'confirmation':
      Component = OrderConfirmation;
      break;
    default:
      Component = OrderEntry;
      break;
  }

  return (
    <Container>
      <OrderDetailsProvider>
       <Component setStep={setStep} />
       
      </OrderDetailsProvider>
    </Container>

  );
}

export default App;