import { useState, useRef, useEffect } from "react";

//scrollspy is deprecated
import Scrollspy from 'react-scrollspy';
import "@makotot/ghostui";

const Navbar = () => {


    const values = [
        { id: 1, text: "Home" },
        { id: 2, text: "About" },
        { id: 3, text: "Skills" },
        { id: 4, text: "Education" },
        { id: 5, text: "Experience" },
        { id: 6, text: "Contact" },
    ]

    const [active, setActive] = useState();


    //Close them menu once clicked outside the menu
    const [Open, setOpen] = useState(false);

    useEffect(() => {
        document.addEventListener("mousedown", clickedOutside, true);
    }, [])
    
    const menuRef = useRef();

    const clickedOutside = (e) => {
        if (!menuRef.current.contains(e.target)) {
            // console.log("clicked outside");
            setOpen(false);
        }
        // else {
        //     console.log("clicked inside");
        // }
    }

    return (
        <>
            <header>
                <a className="skip-link" href="#About">Skip Navigation Links</a>
                <h2 className="logo">Yaser Ali</h2>
                <nav>
                    <Scrollspy items={['Home', 'About', 'Skills', 'Education', 'Experience', 'Contact']} currentClassName="active">
                        {values.map((val) => (
                            <a key={val.id} onClick={() => setActive(val.id)} href={'#' + val.text} className={active === val.id ? "active" : "Inactive"}>
                                {val.text}
                            </a>
                        ))}
                    </Scrollspy>
                </nav>
                <div ref={menuRef} className="hamburger-menu">
                    <input onClick={() => setOpen(!Open)} id="menu__toggle" type="checkbox" />
                    <label className="menu__btn" htmlFor="menu__toggle">
                        <span></span>
                    </label>
                    <ul className="menu__box">
                        {values.map((mval) => (<li key={mval.id}>
                            <a onClick={() => setActive(mval.id)} href={'#' + mval.text} className="menu__item">
                                {mval.text}
                            </a>
                        </li>))}
                    </ul>
                </div>
            </header>
        </>
    );
};
export default Navbar;
