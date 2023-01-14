import ReactSlider from "react-slider";
import {useState} from "react";
import CurrencyInput from 'react-currency-input-field';
import {CSSTransition} from "react-transition-group";

function AppCalculator() {
    const [moneyCard, setMoneyCard] = useState(160000);
    const [moneyZaim, setMoneyZaim] = useState(5000);
    const [daysCard, setDaysCard] = useState(90);
    const [daysZaim, setDaysZaim] = useState(30);
    const [showCard, setShowCard] = useState(true);
    const [showZaim, setShowZaim] = useState(false);

    function onChangeMoneyCard(moneyIn) {
        if (!isNaN(moneyIn)) {
            setMoneyCard(moneyIn);
        } else {
            setMoneyCard(0);
        }
    }

    function onChangeMoneyZaim(moneyIn) {
        if (!isNaN(moneyIn)) {
            setMoneyZaim(moneyIn);
        } else {
            setMoneyZaim(0);
        }
    }

    function onChangeDaysCard(dayIn) {
        if (!isNaN(dayIn)) {
            setDaysCard(dayIn);
        } else {
            setDaysCard(0);
        }
    }

    function onChangeDaysZaim(dayIn) {
        if (!isNaN(dayIn)) {
            setDaysZaim(dayIn);
        } else {
            setDaysZaim(0);
        }
    }

    function validCardMoney() {
        if (moneyCard < 100000) {
            setMoneyCard(100000);
        } else if (moneyCard > 1000000) {
            setMoneyCard(1000000);
        }
    }

    function validZaimMoney() {
        if (moneyZaim < 500) {
            setMoneyZaim(500);
        } else if (moneyZaim > 30000) {
            setMoneyZaim(30000);
        }
    }

    function validCardDays() {
        if (daysCard < 55) {
            setDaysCard(55);
        } else if (daysCard > 365) {
            setDaysCard(365);
        }
    }

    function validZaimDays() {
        if (daysZaim < 7) {
            setDaysZaim(7);
        } else if (daysZaim > 365) {
            setDaysZaim(365);
        }
    }

    function showController(whatDisplay) {
        if (whatDisplay === "card") {
            setShowZaim(false);
            setShowCard(true);
        } else if (whatDisplay === "zaim") {
            setShowCard(false);
            setShowZaim(true);
        }
    }

    return (
        <div className="calculator_app_content">
            <div className="calculator_tabs">
                <button className={showCard ? "active" : ""} onClick={() => showController("card")}>Кредитные карты</button>
                <button className={showZaim ? "active" : ""} onClick={() => showController("zaim")}>Займы</button>
            </div>
            <div className="tab_content">
                <CSSTransition in={showCard} timeout={300} classNames="active-tab" unmountOnExit>
                    <div className="calculator_credit">
                        <div className="calculator_value">
                            <div className="input_block">
                                <div className="input_slider">
                                    <span className="input_slider_title">Мне нужно</span>
                                    <CurrencyInput value={moneyCard}
                                                   defaultValue={160000}
                                                   allowDecimals={false}
                                                   allowNegativeValue={false}
                                                   onBlur={(e) => validCardMoney()}
                                                   onValueChange={value => onChangeMoneyCard(Number(value))}
                                    />
                                    <span className="input_slider_cur">
                                    <span>₽</span>
                                </span>
                                </div>
                                <ReactSlider
                                    className={"input_slider_slider"}
                                    thumbClassName={"input_slider_dot"}
                                    trackClassName={"input_slider_track"}
                                    min={100000}
                                    max={1000000}
                                    value={moneyCard}
                                    step={20000}
                                    onChange={value => onChangeMoneyCard(value)}
                                />
                            </div>
                        </div>
                        <div className="calculator_value">
                            <div className="input_block">
                                <div className="input_slider">
                                    <span className="input_slider_title">Льготный период</span>
                                    <CurrencyInput value={daysCard}
                                                   defaultValue={90}
                                                   allowDecimals={false}
                                                   allowNegativeValue={false}
                                                   onBlur={(e) => validCardDays()}
                                                   onValueChange={value => onChangeDaysCard(Number(value))}
                                    />
                                    <span className="input_slider_cur">
                                    <span unselectable="on">Дней</span>
                                </span>
                                </div>
                                <ReactSlider
                                    className={"input_slider_slider"}
                                    thumbClassName={"input_slider_dot"}
                                    trackClassName={"input_slider_track"}
                                    min={55}
                                    max={365}
                                    value={daysCard}
                                    step={5}
                                    onChange={value => onChangeDaysCard(value)}
                                />
                            </div>
                        </div>
                        <div className="calculator_big_value">
                            <div className="calculator_big_decorator">
                                <span className="big_decorator"></span>
                            </div>
                            <button className="btn big_btn">
                                <span>Подобрать карту</span>
                            </button>
                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition in={showZaim} timeout={300} classNames="active-tab" unmountOnExit>
                    <div className="calculator_zaim">
                        <div className="calculator_value">
                            <div className="input_block">
                                <div className="input_slider">
                                    <span className="input_slider_title">Мне нужно</span>
                                    <CurrencyInput value={moneyZaim}
                                                   defaultValue={5000}
                                                   allowDecimals={false}
                                                   allowNegativeValue={false}
                                                   onBlur={(e) => validZaimMoney()}
                                                   onValueChange={value => onChangeMoneyZaim(Number(value))}
                                    />
                                    <span className="input_slider_cur">
                                    <span>₽</span>
                                </span>
                                </div>
                                <ReactSlider
                                    className={"input_slider_slider"}
                                    thumbClassName={"input_slider_dot"}
                                    trackClassName={"input_slider_track"}
                                    min={500}
                                    max={30000}
                                    value={moneyZaim}
                                    step={500}
                                    onChange={value => onChangeMoneyZaim(value)}
                                />
                            </div>
                        </div>
                        <div className="calculator_value">
                            <div className="input_block">
                                <div className="input_slider">
                                    <span className="input_slider_title">На срок</span>
                                    <CurrencyInput value={daysZaim}
                                                   defaultValue={30}
                                                   allowDecimals={false}
                                                   allowNegativeValue={false}
                                                   onBlur={(e) => validZaimDays()}
                                                   onValueChange={value => onChangeDaysZaim(Number(value))}
                                    />
                                    <span className="input_slider_cur">
                                    <span unselectable="on">Дней</span>
                                </span>
                                </div>
                                <ReactSlider
                                    className={"input_slider_slider"}
                                    thumbClassName={"input_slider_dot"}
                                    trackClassName={"input_slider_track"}
                                    min={7}
                                    max={365}
                                    value={daysZaim}
                                    step={1}
                                    onChange={value => onChangeDaysZaim(value)}
                                />
                            </div>
                        </div>
                        <div className="calculator_big_value">
                            <div className="calculator_big_decorator">
                                <span className="big_decorator"></span>
                            </div>
                            <button className="btn big_btn">
                                <span>Подобрать карту</span>
                            </button>
                        </div>
                    </div>
                </CSSTransition>
                <p className="calculator_under_text">
                    Расчеты в калькуляторе являются предварительными.
                    <br/>
                    Подробные условия вы сможете узнать при оформлении заявки.
                </p>
            </div>
        </div>
    );
}

export default AppCalculator;