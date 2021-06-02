import React from 'react';
import styles from './FormCreate.module.css';
import close from '../../images/close.png'
const FormCreate = ({closeForm, saveTask}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        saveTask(e.target[0].value, e.target[1].value);
    };
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.header}>
                Новая заявка
                <img src={close} alt="close" className={styles.close} onClick={() => closeForm('create') }/>
            </div>
            <div className={styles.main}>
                <div>Название</div>
                <div className={styles.textareaWrap}>
                    <textarea className={`${styles.textarea} ${styles.name}`}/>
                </div>
                <div className={styles.title}>Описание</div>
                <div className={styles.textareaWrap}>
                    <textarea className={`${styles.textarea} ${styles.descr}`}/>
                </div>
                <button className={styles.btnSave}>Сохранить</button>
            </div>
        </form>
    )
}
export default FormCreate