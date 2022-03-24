import "./topbar.scss"
import { GoMail } from 'react-icons/go';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar "+ (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <div className="logo">
                    Zaphod Schmidt
                    </div>
                    <div className="itemContainer">
                        <GoMail className="icon"/>
                        <span>Zapschmidt@hotmail.com</span>
                    </div>
                    {/* <a href="#work" className="itemContainer">
                        <GoBeaker className="icon" />
                        <span>Work</span>
                    </a>
                    <a href="#portfolio" className="itemContainer">
                        <GoBeaker className="icon" />
                        <span>Portfolio</span>
                    </a>
                    <a href="#contact" className="itemContainer">
                        <GoBeaker className="icon" />
                        <span>Contact</span>
                    </a> */}
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
