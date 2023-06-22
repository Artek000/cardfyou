import './css/App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/main/Home";
import Cards from "./components/main/Cards";
import Credits from "./components/main/Credits";

function App() {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/credit_cards" element={<Cards/>} />
                <Route path="/credits" element={<Credits/>} />
            </Routes>
        </div>
    );
}

export default App;
