import logo from '../logo.svg';
import '../css/header.css';
import Nav_panel from "./nav_panel";
function Header() {
    return(
        <div className="header">
            <div className="header_wrapper">
                <div className="header_content container">
                    <a href="/" className="header_logo">
                        <img src={logo} alt="Логотип"/>
                    </a>
                    <Nav_panel></Nav_panel>
                </div>
            </div>
        </div>
    );
}

export default Header;