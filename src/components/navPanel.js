import NavLink from "./navLink";

function NavPanel() {
    return(
        <nav className="nav-panel">
            <NavLink href={""} name={"Кредиты"}></NavLink>
            <NavLink href={""} name={"Карты"}></NavLink>
            <NavLink href={""} name={"Займы"}></NavLink>
        </nav>
    );
}

export default NavPanel;