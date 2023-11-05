import './App.css';
import createModal from './Modal';
import Note from './Components/Note';

const App = () => {
  return (
    <>
      <div className='container'>
        <div className='content'>
          <button className='btn' onClick={() => createModal(<Note />)}>
            click on me to show modal
          </button>
        </div>
      </div>
    </>
  )
}

export default App;
