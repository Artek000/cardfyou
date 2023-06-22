import NavLink from "./navLink";

function NavPanel() {
    return(
        <nav className="nav-panel">
            <NavLink href={"/credits"} name={"Кредиты"}></NavLink>
            <NavLink href={"/cards"} name={"Карты"}></NavLink>
            <NavLink href={""} name={"Займы"}></NavLink>
        </nav>
    );
}

export default NavPanel;