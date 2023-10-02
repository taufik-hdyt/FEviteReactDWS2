import Home from "./pages/Home";
import "./app.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from 'react'

export default class App extends React.Component {
render(){
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home  />} />
          {/* <Route path="/" element={<PrivateRoute />}>
            <Route path="/product-detail/:id" element={<DetailProduct />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
}
