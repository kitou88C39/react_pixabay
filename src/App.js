import './App.css';
import { imageGrallery } from './imageGrallery';

function App() {
  return (
    <div className='container'>
      <h2>My Pixabay</h2>
      <form>
        <input type='text' placeholder='画像を探す' />
      </form>
      <imageGrallery />
    </div>
  );
}

export default App;
