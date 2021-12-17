import Message from '../Home/Message/Message';
import Fish from '../Home/Fish/Fish';
import About from '../Home/About/About';
import ProjectsButton from '../Home/ProjectsButton/ProjectsButton.js';
import Contact from '../Home/Contact/Contact';
import Etherium from '../Home/Etherium/Etherium';

function App() {
  return (
      <div className="flex w-full justify-center">
        <div className="sm:w-small md:w-medium lg:w-large h-auto">
          <div className="sm:px-6 md:px-0 md:w-auto">
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
      </div>
    
  );
}

export default App;
