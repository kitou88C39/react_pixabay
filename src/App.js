import { useRef, useState } from 'react';
import './App.css';
import Grallery from './Grallery';

const App = () => {
  const [inputText, setInputText] = useState('');
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefalt();
    console.log(ref.current.value);
  };

  return (
    <div className='container'>
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type='text' placeholder='画像を探す' ref={ref} />
      </form>
      <Grallery />
    </div>
  );
};

export default App;
