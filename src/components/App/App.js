import React, {useState, useEffect} from 'react'
import './App.module.css';
import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import TasksList from "../TasksList/TasksList";
import styles from './App.module.css';
import FormCreate from "../FormCreate/FormCreate";
import EditForm from "../EditForm/EditForm";

function App() {
    const [tasks, setTasks] = useState([]);
    const [isOpenedCreateForm, setIsOpenedCreateForm] = useState(false);
    const [isOpenedEditForm, setIsOpenedEditForm] = useState(false);
    const [editTask, setEditTask] = useState({});

    useEffect(() => {
        fetch('http://intravision-task.test01.intravision.ru/odata/tasks?tenantguid=56834bca-0b20-4e25-9d61-3301aab7508b')
            .then(res => res.json())
            .then(json => {
                console.log(json.value);
                setTasks(json.value);
            })
    },[]);

    const openForm = (formName, id = null) => {
        switch (formName) {
            case 'create':
                setIsOpenedCreateForm(true);
                break;
            case 'edit':

                setIsOpenedEditForm(true);
                setEditTask(...tasks.filter(task => task.id === id));
                break;
            default:
                break;
        }
    };
    const closeForm = (formName) => {
        switch (formName) {
            case 'create':
                setIsOpenedCreateForm(false);
                break;
            case 'edit':
                setIsOpenedEditForm(false);
                break;
            default:
                break;
        }
    };

    const saveTask = (name, description) => {
        fetch('http://intravision-task.test01.intravision.ru/api/56834bca-0b20-4e25-9d61-3301aab7508b/Tasks',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json;charset=utf-8'},
                body: JSON.stringify({name, description})
            })
            .then(() => {
                setIsOpenedCreateForm(false);
                setIsOpenedEditForm(true);
            })
    };

    return (
        <div className={styles.App}>
            <Header/>
            <Aside/>
            <button className={styles.btnCreate} onClick={() => openForm('create')}>Создать заявку</button>
            <TasksList tasks={tasks} openForm={openForm}/>
            {
                isOpenedCreateForm && <FormCreate closeForm={closeForm} saveTask={saveTask}/>
            }
            {
                isOpenedEditForm && <EditForm task={editTask} closeForm={closeForm}/>
            }
        </div>
  );
}

export default App;
