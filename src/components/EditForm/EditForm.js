import React, {useState} from 'react';
import styles from './EditForm.module.css'
import close from "../../images/close.png";
import Comment from "./Comment/Comment";
const EditForm = ({task, closeForm}) => {
    const [value, setValue] = useState('');
    const [comments, setComments] = useState([]);

    const onChange = (e) => {
        setValue(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setComments(prev => [...prev, {commentatorName: 'Иванов Александр', commentDate: new Date(), value}])
    }
    return (
        <div className={styles.formWrap}>
            <div className={styles.header}>
                <div>
                    <span className={styles.id}>№ {task.id} </span>
                    <span className={styles.name}>{task.name}</span>
                </div>
                <img src={close} alt="close" className={styles.close} onClick={() => closeForm('edit')}/>
            </div>
            <div className={styles.main}>
                <div>
                    <form className={styles.form} onSubmit={onSubmit}>
                        <span className={styles.title}>Описание</span>
                        <p className={styles.descr}>{task.description}</p>
                        <input type="text" placeholder='Добавление коментариев'
                               className={styles.input} value={value}
                               onChange={onChange}
                        />
                        <button className={styles.btnSave}>Сохранить</button>
                    </form>
                    {
                        comments.map((comment, ind) => <Comment info={comment} key={ind}/> )
                    }
                </div>


                <div className={styles.col2}>
                    <div className={styles.statusName}>{task.statusName}</div>

                    <span className={styles.title}>Заявитель</span>
                    <div>sdfsdf</div>

                    <span className={styles.title}>Создана</span>
                    <div className={styles.initiatorName}>{task.initiatorName}</div>

                    <span className={styles.title}>Исполнитель</span>
                    <div className={styles.executorName}>{task.executorName}</div>


                    <span className={styles.title}>Приоритет</span>
                    <div className={styles.priorityName}>{task.priorityName}</div>

                    <span className={styles.title}>Срок</span>
                    <div className={styles.resolutionDatePlan}>{task.resolutionDatePlan.split('T')[0]}</div>

                    <span className={styles.title}>Теги</span>
                    <div>
                        {task.tags.map((tag, i) => <span key={i} className={styles.tag}>{tag.name}</span>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditForm