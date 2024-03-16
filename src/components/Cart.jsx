import { SplitCol } from "@vkontakte/vkui";
import CartItem from "./CartItem";

function Cart() {
  return (
    <SplitCol width="66%">
      <CartItem />
    </SplitCol>
  );
}

export default Cart;
