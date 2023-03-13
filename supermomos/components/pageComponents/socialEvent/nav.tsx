import { Navbar, Nav } from "react-bootstrap";
import styles from "../../../styles/socialEvent.module.scss";
const NavBar = () => {
    return(
        <>
            <div className={`d-flex pt-3 pb-5`}>
                <div className={`${styles.logo}`}>
                    <img src="/supermomos_logo.png" alt=""/>
                </div>
                <Navbar.Collapse className={`d-xl-flex flex-nowrap ${styles.navMenu}`}>
                    <Nav>
                        <Nav.Link className={`${styles.menuLink}`}>
                            Blog
                        </Nav.Link>
                        <Nav.Link className={`${styles.menuLink}`}>
                            Socials
                        </Nav.Link>
                        <Nav.Link className={`${styles.menuLink}`}>
                            Past Socials
                        </Nav.Link>
                        <Nav.Link className={`${styles.menuLink}`}>
                            Clubs
                        </Nav.Link>
                        <Nav.Link className={`${styles.menuLink}`}>
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
            
        </>
    )
}

export default NavBar