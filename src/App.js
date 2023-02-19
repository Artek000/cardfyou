import './css/App.css';
import Header from "./components/header";
import BigInfo from "./components/bigInfo";
import Calculator from "./components/calculator";
import Partners from "./components/partners";
import Offers from "./components/offers";

function App() {
    return(
        <div>
            <Header/>
            <BigInfo/>
            <Partners/>
            <Calculator/>
            <Offers/>
        </div>
    );
}

export default App;
