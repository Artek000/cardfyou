import logo from '../logo.svg';
import '../css/header.css';
import NavPanel from "./navPanel";
function Header() {
    return(
        <div className="header">
            <div className="header_wrapper">
                <div className="header_content container">
                    <a href="/" className="header_logo">
                        <img src={logo} alt="Логотип"/>
                        <span>CardFYou</span>
                    </a>
                    <NavPanel></NavPanel>
                </div>
            </div>
        </div>
    );
}

export default Header;