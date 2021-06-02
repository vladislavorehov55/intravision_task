import React from 'react';
import styles from './Comment.module.css'
const Comment = ({info}) => {
    const getDate = (date) => {
        const months = {0: 'января', 1: 'февраля', 2: 'марта', 3: 'апреля', 4: 'мая', 5: 'июня', 6: 'июля',
            7: 'августа', 8: 'сентября', 9: 'октября', 10: 'ноября', 11: 'декабря'}

        return `${date.getDate()} ${months[date.getMonth()]}, ${date.getHours()}:${date.getMinutes()}  прокомментировал`
    }
    return (
        <div className={styles.wrap}>
            <div className={styles.photo}> </div>
            <div className={styles.description}>
                <span className={styles.commentatorName}>{info.commentatorName}</span>
                <span className={styles.date}>{getDate(new Date(info.commentDate))}</span>
                <p className={styles.content}>{info.value}</p>
            </div>

        </div>
    )
}
export default Comment