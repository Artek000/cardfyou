import ReactSlider from "react-slider";
import {useState} from "react";
import CurrencyInput from 'react-currency-input-field';
import Select from 'react-select';
import {CSSTransition} from "react-transition-group";

function AppCalculator() {
    const [money, setMoney] = useState(160000);
    const [days, setDays] = useState(90);
    const [showCard, setShowCard] = useState(true);
    const [showZaim, setShowZaim] = useState(false);

    function onChangeMoney(moneyIn) {
        if (!isNaN(moneyIn)) {
            setMoney(moneyIn);
        } else {
            setMoney(0);
        }
    }

    function onChangeDays(dayIn) {
        if (!isNaN(dayIn)) {
            setDays(dayIn);
        } else {
            setDays(0);
        }
    }

    function validCardMoney() {
        if (money < 100000) {
            setMoney(100000);
        } else if (money > 1000000) {
            setMoney(1000000);
        }
    }

    function validCardDays() {
        if (days < 55) {
            setDays(55);
        } else if (money > 365) {
            setDays(365);
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
                                    <CurrencyInput value={money}
                                                   defaultValue={160000}
                                                   allowDecimals={false}
                                                   allowNegativeValue={false}
                                                   onBlur={(e) => validCardMoney()}
                                                   onValueChange={value => onChangeMoney(Number(value))}
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
                                    value={money}
                                    step={20000}
                                    onChange={value => onChangeMoney(value)}
                                />
                            </div>
                        </div>
                        <div className="calculator_value">
                            <div className="input_block">
                                <div className="input_slider">
                                    <span className="input_slider_title">Льготный период</span>
                                    <CurrencyInput value={days}
                                                   defaultValue={90}
                                                   allowDecimals={false}
                                                   allowNegativeValue={false}
                                                   onBlur={(e) => validCardDays()}
                                                   onValueChange={value => onChangeDays(Number(value))}
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
                                    value={days}
                                    step={5}
                                    onChange={value => onChangeDays(value)}
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
                                    <CurrencyInput value={money}
                                                   defaultValue={160000}
                                                   allowDecimals={false}
                                                   allowNegativeValue={false}
                                                   onBlur={(e) => validCardMoney()}
                                                   onValueChange={value => onChangeMoney(Number(value))}
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
                                    value={money}
                                    step={20000}
                                    onChange={value => onChangeMoney(value)}
                                />
                            </div>
                        </div>
                        <div className="calculator_value">
                            <div className="input_block">
                                <div className="input_slider">
                                    <span className="input_slider_title">Льготный период</span>
                                    <CurrencyInput value={days}
                                                   defaultValue={90}
                                                   allowDecimals={false}
                                                   allowNegativeValue={false}
                                                   onBlur={(e) => validCardDays()}
                                                   onValueChange={value => onChangeDays(Number(value))}
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
                                    value={days}
                                    step={5}
                                    onChange={value => onChangeDays(value)}
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