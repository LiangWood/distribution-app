import './App.css';
import Rooms from './components/Rooms';

const people = 8;
const rooms = [{ min: 2, max: 4 }, { min: 3,  max: 4 }];

function App() {
  return (
      <div className="App">
          <div className="picker">
              <div className="info">住客人數: {people}人 / {rooms.length}房</div>
              <Rooms people={people} rooms={rooms} />
          </div>
    </div>
  );
}

export default App;
