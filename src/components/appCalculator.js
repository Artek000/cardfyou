import ReactSlider from "react-slider";
import { useState } from "react";

function AppCalculator() {
    const [money, setMoney] = useState(140000);
    function onChangeMoney(moneyIn) {
        setMoney(moneyIn);
    }
    return(
        <div className="calculator_app_content">
            <div className="calculator_tabs">
                <button className="active">Кредитные карты</button>
                <button className="">Займы</button>
            </div>
            <div className="tab_content">
                <div className="calculator_credit">
                    <div className="calculator_value">
                        <div className="input_block" id="creditHeaderParamMoney">
                            <div className="input_slider">
                                <span className="input_slider_title">Мне нужно</span>
                                <input itemID="iNeedSum" value={money} onChange={e => onChangeMoney(Number(e.target.value))} />
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
                    <div className="calculator_value"></div>
                    <div className="calculator_big_value"></div>
                </div>

                <div className="calculator_vklad"></div>
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