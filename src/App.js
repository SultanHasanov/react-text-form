import './style.css'
import { useState } from 'react'
function App() {
  const [text, setText] = useState('')
  const [textError, setTextError] = useState(true)
  const [send, setSend] = useState(false)
  const [blur, setBlur] = useState(false)
  
  const handleText = (e) => {
    setText(e.target.value)
    if (!e.target.value) {
      setTextError(true)
    } else{
      setTextError(false)
          setSend(false)
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setText('')
    console.log(text);
    setTextError(true)
    setSend(true)
    setBlur(false)
  }

const handleBlur = () => {
  setBlur(true)
  setSend(false)
}

  return (
    <div className='wrapper'>
    <form onSubmit={handleSubmit}>
      <h1>Регистрация</h1>
      <input type='text' value={text} placeholder='Введите текст' onChange={handleText} onBlur={handleBlur}/> 
      <button type='submit' disabled={textError}>П1елг 1от</button>
      {(textError && blur) && <div className='textError'>Поле не должно быть пустым</div>}
      {send && <div className='textOk'>Сообщение успешно отправлено</div>}
    </form>
    </div>
  );
}

export default App;
