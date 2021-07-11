import './App.css';
import Rooms from './components/Rooms';

const people = 3;
const rooms = [{ min: 1, max: 3 }, { min: 1,  max: 2 }];

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
