import TotalCart from "./components/TotalCart";
import Cart from "./components/Cart";
import { AppRoot, SplitLayout } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

function App() {
  return (
    <AppRoot>
      <SplitLayout>
        <Cart />
        <TotalCart />
      </SplitLayout>
    </AppRoot>
  );
}

export default App;
