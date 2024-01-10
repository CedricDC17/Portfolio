import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import ContactPage from './components/Contact/ContactPage';
import Header from './components/Header/Header';
import Work from './components/Work/Work';
import works from './works.json';

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/portfolio/" element={<HomePage />} />
          <Route path="/portfolio/contact" element={<ContactPage />} />
          <Route path="/portfolio/work/:id" element={<Work datas={works}/>} />
        </Routes>
      </Router>
  );
}



export default App;
