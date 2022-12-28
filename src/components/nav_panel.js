import Nav_link from "./nav_link";

function Nav_panel() {
    return(
        <nav className="nav-panel">
            <Nav_link href={""} name={"Вклады"}></Nav_link>
            <Nav_link href={""} name={"Кредиты"}></Nav_link>
            <Nav_link href={""} name={"Карты"}></Nav_link>
            <Nav_link href={""} name={"Займы"}></Nav_link>
            <Nav_link href={""} name={"Еще"}></Nav_link>
        </nav>
    );
}

export default Nav_panel;