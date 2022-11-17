import './App.css';
import { BrowserRouter as Router } from
  'react-router-dom';
import Navbar from './components/Navbar';
import FigureTable from './components/FigureTable';
import FigureEditor from './components/FigureEditor';
import ComponentEditor from './components/ComponentEditor';


function App() {


  return (
    <>
      <Router>
        <Navbar />
        <FigureTable />
        <FigureEditor />
        <hr />
        <ComponentEditor />
      </Router>
    </>
  );
}

export default App;
