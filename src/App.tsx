import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Provider } from "react-redux";
import store from "./Store/store.js";

function App() {
  return (
    <Router>
      <Routes>
        <Provider store={store}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Provider>
      </Routes>
    </Router>
  );
}

export default App;
