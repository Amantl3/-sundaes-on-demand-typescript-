import { render, screen } from "../../../test-utils/testing-library-utils";
import Options from "../Options";
import { expect } from "vitest";
import userEvent from "@testing-library/user-event";

test("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  // Find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i }) as HTMLImageElement[]; 
  expect(scoopImages).toHaveLength(2);

  // Confirm alt text of images
  const altText = scoopImages.map((img) => img.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("displays image for each topping option from server", async () => {
  render(<Options optionType="toppings" />);

  // Find images
  const toppingImages = await screen.findAllByRole("img", { name: /topping$/i }) as HTMLImageElement[];
  expect(toppingImages).toHaveLength(3);

  // Confirm alt text of images
  const altText = toppingImages.map((img) => img.alt);
  expect(altText).toEqual(["Cherries topping", "M&Ms topping", "Hot fudge topping"]);
});

test("doesn't update total if scoops input is invalid", async () => {
  const user = userEvent.setup();
  render(<Options optionType="scoops" />);

  const vanillaInput = await screen.findByRole("spinbutton", { name: "Vanilla" });
  const scoopsSubtotal = screen.getByText(/Scoops total:/i);

  // Try invalid values
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "2.5");
  expect(scoopsSubtotal).toHaveTextContent("P 0.00");

  await user.clear(vanillaInput);
  await user.type(vanillaInput, "100");
  expect(scoopsSubtotal).toHaveTextContent("P 0.00");

  await user.clear(vanillaInput);
  await user.type(vanillaInput, "-1");
  expect(scoopsSubtotal).toHaveTextContent("P 0.00");
});
