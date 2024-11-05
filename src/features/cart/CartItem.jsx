import { formatCurrency } from "../utils/helpers";
import DeleteItem from "./deleteItem";

function CartItem({ item }) {
  const { name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="sm: mb-0 mb-1">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <DeleteItem item={item} />
      </div>
    </li>
  );
}

export default CartItem;
