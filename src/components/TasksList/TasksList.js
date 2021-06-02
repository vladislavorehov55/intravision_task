import React from 'react';
import Task from "./Task/Task";
import styles from './TasksList.module.css'
const TasksList = ({tasks, openForm}) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.titleRow}>
                <div className={styles.id}>ID</div>
                <div className={styles.title}>Название</div>
                <div className={styles.status}>Статус</div>
                <div className={styles.executor}>Исполнитель</div>
            </div>
            {tasks.map((task, ind) => <Task task={task} key={ind} openForm={openForm}/>)}
        </div>
    )
}
export default TasksList