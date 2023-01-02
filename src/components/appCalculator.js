import $ from 'jquery';
import 'jquery-ui/ui/widgets/slider';

function AppCalculator() {
    $(window).on("load", function () {
        $( "" ).slider({
            animate: "slow",
            range: "min",
            value: 5000,
            min: 500,
            max: 30000,
            step: 500,
            slide: function (event, ui) {
                $("#iNeedSum").val(ui.value);
            }
        });
        $("").val($("").slider("value"));

        $( ".input_slider_slider" ).slider({
            animate: "slow",
            range: "min",
            value: 160000,
            min: 100000,
            max: 1000000,
            step: 20000,
            slide: function (event, ui) {
                $("#iNeedSum").val(ui.value);
            }
        });
        $("#iNeedSum").val($(".input_slider_slider").slider("value"));
    });
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
                                <input id="iNeedSum" />
                                <span className="input_slider_cur">
                                    <span>₽</span>
                                </span>
                            </div>
                            <div className="input_slider_slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" data-slider="">
                                <div className="ui-slider-range ui-slider-range-min" id="staticLine"></div>
                                <span tabIndex="0" className="ui-slider-handle input_slider_dot ui-state-default"></span>
                            </div>
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