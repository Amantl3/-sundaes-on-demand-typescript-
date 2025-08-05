import { render } from "@testing-library/react";
import { OrderDetailsProvider } from "../contexts/OrderDetails";
import type { ReactNode } from "react";
import type { RenderOptions } from "@testing-library/react"

const renderWithContext = (ui: ReactNode, options?: RenderOptions) => render(ui,{wrapper: OrderDetailsProvider, ...options});

export { screen, fireEvent }  from "@testing-library/react";

export {renderWithContext as render}
