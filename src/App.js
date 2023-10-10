import './App.css';

function App() {
  return (
    <div className='container'>
      <h2>My Pixabay</h2>
      <form>
        <input type='text' placeholder='画像を探す' />
        <imageGrallery />
      </form>
    </div>
  );
}

export default App;
