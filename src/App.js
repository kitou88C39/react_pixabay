import { useRef, useState } from 'react';
import './App.css';
import Grallery from './Grallery';

const App = () => {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefalt();
    console.log(ref.current.value);

    //APIURL
    const endpointURL = `https://pixabay.com/api/?key=23092783-0998eba9be67fd0d70aa43e8e&q=${ref.current.value}&image_type=photo`;
    //APIを叩く
    fetch(endpointURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.hits);
        setFetchData(data.hits);
      });
  };

  return (
    <div className='container'>
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type='text' placeholder='画像を探す' ref={ref} />
      </form>
      <Grallery fetchData={fetchData} />
    </div>
  );
};

export default App;
