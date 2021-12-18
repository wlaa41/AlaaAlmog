import './App.scss';
import Briefstrip from './briefstrip/Briefstrip';
import Footer from './footer/Footer';
import Intro from './intro/intro'
import pro from './intro/programming.jpg'
import Menu from './menu/Menu';
import SkillLogo from './skill_logo/SkillLogo'

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Intro>
      
      </Intro>
      <Briefstrip>
      </Briefstrip>
      {/* <div className='blackdiv'> */}
        <SkillLogo></SkillLogo>
        <Footer></Footer>

    </div>
  );
}

export default App;
