import NavLink from "./navLink";

function NavPanel() {
    return(
        <nav className="nav-panel">
            <NavLink href={""} name={"Вклады"}></NavLink>
            <NavLink href={""} name={"Кредиты"}></NavLink>
            <NavLink href={""} name={"Карты"}></NavLink>
            <NavLink href={""} name={"Займы"}></NavLink>
            <NavLink href={""} name={"Еще"}></NavLink>
        </nav>
    );
}

export default NavPanel;