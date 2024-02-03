import { useRef } from 'react'
import '../components/styles.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputFeilds: React.FC<Props> = ({todo, setTodo, handleAdd}) => {

    const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className='input' onSubmit={(e) => {
        handleAdd(e)
        inputRef.current?.blur()
        }}>
        <input 
        ref={inputRef}
        type="input" 
        value={todo}
        onChange={
            (e) => setTodo(e.target.value)
        }
        placeholder='Enter a New Task'  
        className='input_box'
        />
        <button className='input_submit' type='submit'>
            ADD
        </button>
    </form>
  )
}

export default InputFeilds
