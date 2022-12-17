import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './index.css';
import ItemDetailContainer from './Pages/ItemDetailContainer';
import ItemListContainer from './Pages/ItemListContainer';
import ItemShopCointainer from './Pages/ItemShopContainer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/shop/:id" element={<ItemShopCointainer/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
