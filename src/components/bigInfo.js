import Puzzle from "./puzzle";

function BigInfo() {
    return(
        <div className="big-info_wrapper">
            <div className="big-info_panel">
                <div className="big-info_content container">
                    <div className="big-info_left">
                        <h2 className="title-block">
                            Мечты сбываются, но не сдесь
                        </h2>
                        <picture>
                            <source srcSet={'/img/big_info.jpg'}/>
                            <img srcSet={'/img/big_info.jpg'}/>
                        </picture>
                    </div>
                    <div className="big-info-puzzle">
                        <Puzzle href={"/"} title={"Вклады"} about={"Хранить деньги и зарабатывать"}></Puzzle>
                        <Puzzle href={"/"} title={"Займы"} about={"Получить деньги срочно, но выгодно"}></Puzzle>
                        <Puzzle href={"/"} title={"Кредиты наличными"} about={"Получить нужную сумму на важную покупку"}></Puzzle>
                        <Puzzle href={"/"} title={"Кредитные карты"} about={"Не платить проценты более 100 дней"}></Puzzle>
                        <Puzzle href={"/"} title={"Дебетовые карты"} about={"Получать самый высокий кэшбэк"}></Puzzle>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BigInfo;