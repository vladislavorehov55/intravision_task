import React from 'react';
import styles from './Aside.module.css';
import settings from '../../images/settings.png';
import analytics from '../../images/analytics.png';
import clients from '../../images/clients.png';
import worker from '../../images/people.png';
import file from '../../images/file.png';
import book from '../../images/book.png';
import logo from '../../images/logo.png'
const Aside = () => {
    return (
        <div className={styles.wrapper}>
            <img src={logo} alt="" className={styles.logo}/>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <img src={book} alt=""/>
                    База знаний
                </li>
                <li className={styles.listItem}>
                    <img src={file} alt=""/>
                    Заявки
                </li>
                <li className={styles.listItem}>
                    <img src={worker} alt=""/>
                    Сотрудники
                </li>
                <li className={styles.listItem}>
                    <img src={clients} alt=""/>
                    Клиенты
                </li>
                <li className={styles.listItem}>
                    <img src={analytics} alt=""/>
                    Активы
                </li>
                <li className={styles.listItem}>
                    <img src={settings} alt=""/>
                    Настройки
                </li>

            </ul>

        </div>
    )
}
export default Aside