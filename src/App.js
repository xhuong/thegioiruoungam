import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import cartSvg from "./assets/images/icons/cart.svg";
import messengerSvg from "./assets/images/icons/messenger.svg";
import zaloSvg from "./assets/images/icons/zalo.svg";
import ShopPage from "./pages/ShopPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<ShopPage />} />
          <Route path="/cart" />
          <Route path="/product/:id/details" element={<ProductDetailsPage />} />
          <Route path="*" />
        </Routes>
      </Router>
      <div className="app_action_list">
        <div className="app_action_item">
          <div className="app_action_item_wrapper">
            <img src={cartSvg} alt="" />
          </div>
          Xem giỏ hàng
        </div>
        <div className="app_action_item">
          <div className="app_action_item_wrapper">
            <img src={zaloSvg} alt="" />
          </div>
          Zalo
        </div>
        <div className="app_action_item">
          <div className="app_action_item_wrapper">
            <img src={messengerSvg} alt="" />
          </div>
          Messenger
        </div>
        <div className="app_action_item">
          <div className="app_action_item_wrapper">
            <img src={require("./assets/images/icons/phone.png")} alt="" />
          </div>
          Hotline
        </div>
      </div>
    </div>
  );
}

export default App;
