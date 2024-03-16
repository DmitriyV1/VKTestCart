import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  deteleItem,
  fetchCartItems,
  increaseQuantity,
} from "../redux/cartSlice";
import {
  Icon20RemoveCircleOutline,
  Icon20AddCircleOutline,
  Icon20DeleteOutline,
} from "@vkontakte/icons";
import { CellButton, Div, Group, Image, Spinner } from "@vkontakte/vkui";
import data from "../data.json";

function CartItem() {
  const dispatch = useDispatch();
  useEffect(() => {
    // Getting items on mount
    dispatch(fetchCartItems(data));
  }, [dispatch]);

  const cart = useSelector((state) => state.cart);
  const status = cart.status;
  const items = cart.cart.products;

  return (
    <>
      {status === "loading" ? (
        <Spinner />
      ) : (
        items?.map((item) => (
          <Group style={{ display: "flex" }} key={item.id}>
            <Image size={128} src={item.thumbnail} />
            <Div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span>Name: {item.title}</span>
              <br />
              <span>Price: {item.price} rub.</span>
              <br />
              <span>Quantity: {item.quantity}</span>
              <br />

              <Group style={{ display: "flex" }}>
                <CellButton
                  onClick={() => {
                    dispatch(deteleItem(item.id));
                  }}
                  before={<Icon20DeleteOutline />}
                >
                  Delete item
                </CellButton>
                <CellButton
                  onClick={() => {
                    dispatch(increaseQuantity(item.id));
                  }}
                  before={<Icon20AddCircleOutline />}
                >
                  Increase quantity
                </CellButton>
                <CellButton
                  onClick={() => {
                    dispatch(decreaseQuantity(item.id));
                  }}
                  before={<Icon20RemoveCircleOutline />}
                >
                  Decrease quantity
                </CellButton>
              </Group>
            </Div>
          </Group>
        ))
      )}
    </>
  );
}

export default CartItem;
