
import { Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import Album from './pages/Album'
import Artist from './pages/Artist'
import Search from './pages/Search'


function App() {

  return (
    <Routes>
        <Route path="/" exact={true} Component={Home} ></Route>
        <Route path="/album/:albumid" exact={true} Component={Album} ></Route>
        <Route path="/artist/:artistid" exact={true} Component={Artist} ></Route>
        <Route path="/search/:serchtext" exact={true} Component={Search} ></Route>
    </Routes>
  );
}

export default App;
