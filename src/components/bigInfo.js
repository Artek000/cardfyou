import Puzzle from "./puzzle";
import '../css/bigInfo.css';

function BigInfo() {
    return(
        <div className="big-info_wrapper">
            <div className="big-info_panel">
                <div className="big-info_content container">
                    <div className="big-info_left">
                        <h2 className="title-block">
                            Карта для каждого
                            <span>без скрытых смыслов</span>
                        </h2>
                        <picture>
                            <img srcSet={'/img/big_info.png'} alt=""/>
                        </picture>
                    </div>
                    <div className="big-info-puzzle">
                        {/*<Puzzle href={"/"} title={"Вклады"} about={"Хранить деньги и зарабатывать"}></Puzzle>*/}
                        <Puzzle href={"/"} title={"Займы"} about={"Получить деньги срочно, но выгодно"}></Puzzle>
                        {/*<Puzzle href={"/"} title={"Кредиты наличными"} about={"Получить нужную сумму на важную покупку"}></Puzzle>*/}
                        <Puzzle href={"/"} title={"Кредитные карты"} about={"Не платить проценты более 100 дней"}></Puzzle>
                        <Puzzle href={"/"} title={"Дебетовые карты"} about={"Получать самый высокий кэшбэк"}></Puzzle>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BigInfo;