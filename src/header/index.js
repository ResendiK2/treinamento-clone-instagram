/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */

import styles from './styles.module.css';

import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

function Header() {
    function logout() {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.background}>
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHl4Nw0ESXmAA/profile-displayphoto-shrink_800_800/0?e=1612396800&v=beta&t=oCRHXfEjNLrIDz2BZBvDEREmcv3gjjPAdar02VgdprA" className={styles.image} />
                </div>

                <div className={styles.search}>
                    <FaSearch size="15" />
                    <input className={styles.input} type={'text'} placeholder={"Pesquisar"} />
                </div>

                <div className={styles.buttonLogout}>
                    <button
                        className={styles.logout}
                        onClick={() => logout()}
                    >
                        <FaTimes />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;