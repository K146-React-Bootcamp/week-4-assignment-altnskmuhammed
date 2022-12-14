import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TopNavbar from "./Components/TopNavBar";
import { ThemeProvider } from "./Context/ThemeContext";
import Features from "./Pages/Features";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import Pricing from "./Pages/Pricing";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <TopNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
