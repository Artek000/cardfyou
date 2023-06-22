import Header from "../header";
import BigInfo from "../bigInfo";
import Partners from "../partners";
import Calculator from "../calculator";
import Offers from "../offers";

function Home() {
    return(
        <div>
            <Header/>
            <BigInfo/>
            <Partners/>
            <Calculator title={"Рассчитаем и подберем для вас лучшее предложение"}/>
            {/*Рассчитаем и подберем для вас <span>лучшее предложение</span>*/}
            <Offers/>
        </div>
    );
}

export default Home;