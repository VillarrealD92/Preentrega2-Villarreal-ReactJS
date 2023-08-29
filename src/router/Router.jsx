import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import NavBar from '../components/NavBar';
import ItemListContainer from '../components/ItemListContainer';




export default function Router (){

    return (
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:id" element={<ItemListContainer />} />
            <Route path="/categoria/:id" element={<ItemListContainer />} />
            <Route path="/categoria/:id" element={<ItemListContainer />} />
            <Route path="/categoria/:id" element={<ItemListContainer />} />
            <Route path="/categoria/:id" element={<ItemListContainer />} />
        </Routes>
        </BrowserRouter>
    )
}