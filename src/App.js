import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './layout/Home';
import AddData from './layout/AddData';
import About from './layout/About';
import Edit from './layout/edit';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Test</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
              <Link to="/" className="nav-link">test Link</Link>
              </li>
              <li className="nav-item">
              <Link to="/add" className="nav-link">Add</Link>
              </li>
              <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
              </li>
          
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={< Home/>} />
        <Route path='/add' element={<AddData/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/edit/:id' element={<Edit/>} />
      </Routes>
    </>
  );
}

export default App;
