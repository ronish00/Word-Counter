import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';

function App() {
  return (
    <>
      <Navbar title="WordCounter" />
      <div className="container">
        <Textform heading="Enter the text to analyze below"/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
