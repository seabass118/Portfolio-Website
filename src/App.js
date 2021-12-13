import Header from './Components/Header/Header';
import Message from './Components/Message/Message';
import Fish from './Components/Fish/Fish';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App font-readex-pro flex flex-col">
      <div className="pb-14">
        <Header />
      </div>
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
        <Projects />
      </div>
      <div className="pb-14">
        <Contact />
      </div>
    </div>
  );
}

export default App;
