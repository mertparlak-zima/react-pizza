import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import { deleteItem } from "./cartSlice";

export default function DeleteItem({ item }) {
  const dispatch = useDispatch();

  function handleRemoveItemOnCart() {
    dispatch(deleteItem(item));
  }

  return (
    <Button onClick={handleRemoveItemOnCart} type="small">
      DELETE
    </Button>
  );
}
