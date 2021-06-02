import React from 'react';
import styles from './Header.module.css';
import search from '../../images/search.png'
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.inputWrap}>
                <input type="text" className={styles.input}/>
                <img src={search} alt=""/>
            </div>

        </header>
    )
}
export default Header