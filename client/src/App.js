import React from "react";
import './styles/App.css';
import MainPage from "./components/MainPage";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
