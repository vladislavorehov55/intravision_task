import React from 'react';
import styles from './Task.module.css'
const Task = ({task, openForm}) => {
    return (
        <div className={styles.wrap} onClick={() => openForm('edit', task.id)}>
           <div className={styles.id}>{task.id}</div>
            <div className={styles.title}>{task.name}</div>
            <div className={styles.status}>{task.statusName}</div>
            <div className={styles.executor}>{task.executorName}</div>
        </div>

    )
}
export default Task