import {useState} from 'react';
const Todo = () => {
    const [activity, setActivity] = useState('');
    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState('');
    const [edit, setEdit] = useState({});

    const saveTodoHandler = (event) => {
        event.preventDefault();
        if(!activity) {
            return setMessage('data tidak boleh kosong');
        }
        setMessage('');
        if(edit.id){
           const updateTodo = {
            ...edit,
            activity
           }

           const editTodoIndex = todos.findIndex((todo)=> {
                return todo.id === edit.id;
           });

           const updateTodos = [
                ...todos
           ];

           updateTodos[editTodoIndex] = updateTodo;
           setTodos(updateTodos);
           setActivity('');

           return
        }

        setTodos([
            ...todos, 
            {
                id: generatedId(),
                activity,
                done: false
            }
        ]);
        setMessage('');
        setActivity('');
    }
    console.log(todos);

    const generatedId = () => {
        return +new Date();
    }

    const editTodoHandler = (todo) => {
        setActivity(todo.activity);
        setEdit(todo);
        setMessage('');

    }

    const resetTodoHandler = () => {
        setEdit({});
        setActivity('');
        setMessage('');
    }

    const removeTodoHandler = (todoId) => {
        const filteredTodos = todos.filter((todo)=> {
            // console.log(todoId,todo.id);
            return todo.id !== todoId;
        });

        setTodos(filteredTodos);
        if(edit.id) resetTodoHandler();

    }

    const doneTodoHandler = (todo) => {
        const updateChakedToList = {
            ...todo,
            done: todo.done ? false : true
        };

        const editTodoIndex = todos.findIndex ((currentTodo) => {
            return currentTodo.id === todo.id;
        });

        const updateChakeds = [...todos];
        updateChakeds[editTodoIndex] = updateChakedToList;
        setTodos(updateChakeds);
    }

    return (
        <>
            <header>
                <h1 className="title">Simple Todo List</h1>
            </header>
            <div className="wrapper">
                <div className="container bg-white shadow">
                    <h2 className="container-header text-center">Tambah Activity</h2>
                    <form onSubmit = {saveTodoHandler}>
                        <div className="form-group form-title">
                            <label>Masukkan yang harus dilakukan</label>
                            <input
                                type="text"
                                value={activity}
                                placeholder="What Activities Today"
                                onChange={(event)=> {
                                    setActivity(event.target.value);
                                }}
                            />
                        </div>
                        <button className="btn-submit" type="submit">{edit.id ? "Edit to Data " : "Save to Data" }</button>
                        {edit.id &&
                            <button className="btn-reset" onClick={resetTodoHandler}> Reset</button>
                        }
                    </form>
                </div>

                <div className="container">
                <h3 className="container-header">List Item</h3>
                {message && <div style={{color: '#F24A72',fontSize: '15px'}}>{message}</div>}
                    {todos.map((todo)=> {
                        return (
                            <div className="list-item" key={todo.id}>
                                <div className="data-item">
                                    <div className="row-ceklis">
                                    <input
                                        type="checkbox"
                                        onChange={()=> {
                                            doneTodoHandler(todo);
                                        }}
                                    />
                                    </div>
                                    <div className="row-desc">
                                        <p>{todo.activity} <span>{todo.done ? <b>Selesai</b> : <b>Belum Selesai</b>}</span></p>
                                    </div>
                                    <div className="row-btn">
                                        <button className="btn-edit" onClick={()=> {
                                            editTodoHandler(todo);
                                        }}>edit</button>
                                        <button className="btn-delete" onClick={()=> {
                                            removeTodoHandler(todo.id);
                                        }}>hapus</button>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
            </div>
            </div>
        </>
    );
}

export default Todo;