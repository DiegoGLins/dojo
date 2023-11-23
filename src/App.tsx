import { Provider } from "react-redux";
import RoutesApp from "./routes/RoutesApp";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <RoutesApp />
    </Provider>
  )
}
