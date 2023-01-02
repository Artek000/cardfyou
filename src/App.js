import './css/App.css';
import Header from "./components/header";
import BigInfo from "./components/bigInfo";
import Calculator from "./components/calculator";
import Partners from "./components/partners";

function App() {
    return(
        <div>
            <Header/>
            <BigInfo/>
            <Partners/>
            <Calculator/>
        </div>
    );
}

export default App;
