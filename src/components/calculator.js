import AppCalculator from "./appCalculator";
import '../css/calculator.css';

function Calculator() {
    return(
        <div className="calculator_wrapper">
            <div className="calculator_content container">
                <div className="calculator_title">
                    <h2>Рассчитаем и подберем для вас <span>лучшее предложение</span></h2>
                </div>
                <div className="calculator_app">
                    <AppCalculator/>
                </div>
            </div>
        </div>
    );
}

export default Calculator;