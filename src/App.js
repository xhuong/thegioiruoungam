import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" />
          <Route path="/cart" />
          <Route path="/product/:id/details" />
          <Route path="*" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
