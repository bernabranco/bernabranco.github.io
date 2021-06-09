import './App.css';
import {Route} from 'react-router-dom'; 

//components
import Navbar from './components/Navbar/Navbar';
import FadeCarrousel from './components/FadeCarrousel/FadeCarrousel';
import Gallery from './components/Gallery/Gallery';
import PortfolioGrid from './components/PortfolioGrid/PortfolioGrid';
import ProjectCover2 from './components/ProjectCover2/ProjectCover2';
import Scroll from './components/Scroll/Scroll';
import Footer from './components/Footer/Footer';
import Threejs from './components/Threejs';
import Infor from './components/Info/Info';
import ViewPortfolio from './components/ViewPortfolio/ViewPortfolio';

function App() {

  //page components
  const Home = () => (
    <div> 
    <FadeCarrousel/>
    <Scroll/>
    <ProjectCover2/>
    <ViewPortfolio/>
    </div>
  )

  const Work = () => (
    <div> 
    <PortfolioGrid/>
    </div>
  )

  const Info = () => (
    <div> 
    <Infor/>
    <Threejs/>
    </div>
  )

  return (
    <div className="App">
       <Navbar/>
       <Route exact path='/' component={Home} />
       <Route exact path='/home' component={Home} />
       <Route exact path='/work' component={Work} />
       <Route exact path='/info' component={Info} />
       <Footer/>
    </div>
  );
}

export default App;
