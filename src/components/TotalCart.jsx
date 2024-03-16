import { useSelector } from "react-redux";
import { getTotalCartPrice } from "../redux/cartSlice";
import { CellButton, Group, SplitCol } from "@vkontakte/vkui";
import {
  Icon20CancelCircleFillRed,
  Icon20CheckSquareOutline,
} from "@vkontakte/icons";

function TotalCart() {
  const totalCartPrice = useSelector(getTotalCartPrice);
  const items = useSelector((state) => state.cart.cart.products);

  return (
    <SplitCol width="33%">
      <Group>
        <span>Total price: {totalCartPrice} rub.</span>

        {items?.map((item) => (
          <div key={item.id}>
            <span>
              x{item.quantity} {item.title} for the price of {item.total} rub.
            </span>
          </div>
        ))}
        <div style={{ display: "flex" }}>
          <CellButton
            disabled
            onClick={() => {}}
            before={<Icon20CancelCircleFillRed />}
          >
            Cancel
          </CellButton>
          <CellButton
            onClick={() => {
              alert("Congrats!");
            }}
            before={<Icon20CheckSquareOutline />}
          >
            Buy
          </CellButton>
        </div>
      </Group>
    </SplitCol>
  );
}

export default TotalCart;
