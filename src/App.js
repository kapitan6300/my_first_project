import './App.css';
import News from './news/newsContainer';
import { Route, Routes } from 'react-router-dom';
import Header from './header/header';
import NewsContainer from './news/newsContainer';

function App(props) {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/news' element={<NewsContainer/>}/>
      </Routes>
    </div>
  );
}

export default App;
