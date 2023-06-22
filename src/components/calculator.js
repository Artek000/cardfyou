import AppCalculator from "./appCalculator";
import '../css/calculator.css';

function Calculator(props) {
    return(
        <div className="calculator_wrapper">
            <div className="calculator_content container">
                <div className="calculator_title">
                    <h2>{props.title}</h2>
                </div>
                <div className="calculator_app">
                    <AppCalculator/>
                </div>
            </div>
        </div>
    );
}

export default Calculator;