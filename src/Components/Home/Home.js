import Message from '../Home/Message/Message';
import Fish from '../Home/Fish/Fish';
import About from '../Home/About/About';
import ProjectsButton from '../Home/ProjectsButton/ProjectsButton.js';
import Contact from '../Home/Contact/Contact';
import Etherium from '../Home/Etherium/Etherium';

function App() {
  return (
      <div className="App">
        <div className="w-medium h-auto">
          <div className="w=full flex justify-center items-center">
            <Fish />
          </div>
          <div className="w-full flex justify-center items-center pb-12">
            <Message />
          </div>
          <div className="pb-14">
            <About />
          </div>
          <div className="w-full flex justify-center items-center pb-12">
            <ProjectsButton />
          </div>
          <div className="pb-14 w-min min-w-max">
            <Contact />
          </div>
          <div className="pb-14 w-min min-w-max">
            <Etherium />
          </div>
        </div>
      </div>
    
  );
}

export default App;
