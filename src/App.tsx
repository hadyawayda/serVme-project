import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Provider } from "react-redux";
import store from "./Store/store.js";
import { NameProvider } from "./Components/GlobalNameContext.jsx";

function App() {
  return (
    <Provider store={store}>
      <NameProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </NameProvider>
    </Provider>
  );
}

export default App;
