import React,{useState,useEffect,useRef} from 'react'

function TodoForm(props) {
    const [input,setInput] = useState('') //state초기화

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (e) =>{
        setInput(e.target.value);  //input에 입력값을 바꿀수 있게 해주는 event
    }

    const handleSubmit = (e) =>{ //form을 눌렀을때 event를 지정
        e.preventDefault();
        props.onSubmit({ //부모로 onSubmit을 넘겨준다.
            id:Math.floor(Math.random() * 10000), //랜덤으로 값을 넣는다.
            text:input //들어오는 input text의 값
        })
        setInput('');  //Submit을 하고나면 다시 state에 ''초기화를 시켜준다.
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
            <>
            <input 
            type="text" 
            placeholder="Update your item" 
            value={input} 
            name="text" 
            className="todo-input edit" 
            onChange={handleChange} 
            ref={inputRef}/>
            <button className="todo-button edit">Update Todo</button>
            </> 
            ):
            (
            <>    
                <input 
                type="text" 
                placeholder="Add a todo" 
                value={input} 
                name="text" 
                className="todo-input" 
                onChange={handleChange} 
                ref={inputRef}/>
                <button className="todo-button">Add Todo</button>
            </>
                )}
        </form>
    )
}

export default TodoForm
