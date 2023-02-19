import '../css/offers.css';

function Offers() {
    return (
        <div className={"offers"}>
            <div className={"offers_wrapper"}>
                <div className={"offers_container container"}>
                    <div className={"offers_inner"}>
                        <h2 className="title_inner offers_title">Что предлагает <span>сервис</span>?</h2>
                        <div className="offers_picture">
                            <img src="https://zefir.ru/img/vector/structure.svg" alt={"Логотип"}/>
                        </div>
                        <div className="offers_items">
                            <div className="offers_item">
                                <span>500+</span>
                                <p>предложений</p>
                            </div>
                            <div className="offers_item">
                                <p>Сервисы <br/> для подбора<br/> предложений</p>
                            </div>
                            <div className="offers_item">
                                <span>60+</span>
                                <p>МФО</p>
                            </div>
                            <div className="offers_item">
                                <span>40+</span>
                                <p>банков</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"offers_container container"}>
                    <div className="free_service_inner">
                        <div className="free_service_col">
                            <h2 className="title_inner free_service_title">
                                Сервис абсолютно
                                <span>бесплатный</span>
                            </h2>
                            <p className="free_service_subtitle">Без скрытых платежей и комиссий</p>
                            <button className="btn btn-dark"><span>Попробовать Сервис</span></button>
                        </div>
                        <div className="free_service_col">
                            <div className="free_service_pic">
                                <img src="https://zefir.ru/img/vector/handphone.svg" alt="Картинка"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Offers;