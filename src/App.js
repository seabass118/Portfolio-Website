import Header from './Components/Header/Header';
import Message from './Components/Message/Message';
import Fish from './Components/Fish/Fish';

function App() {
  return (
    <div className="App font-readex-pro flex flex-col">
      <div className="pb-14">
        <Header />
      </div>
      <div className="w=full flex justify-center items-center">
        <Fish />
      </div>
      <div className="w-full flex justify-center items-center">
        <Message />
      </div>
    </div>
  );
}

export default App;
