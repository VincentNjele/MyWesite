import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Experience } from './components/experience/Experience';
import { Footer } from './components/footer/Footer';
import { Headers } from './components/header/Headers';
import { Tabs } from './components/header/Tabs';
import Home from './components/Home';
import { Portfolio } from './components/portfolio/Portfolio';
import { Services } from './components/services/Services';
import { Space } from './components/Space';


function App() {
  return (
   <div>
  <Headers />
  <Tabs />
  <About />
  <Space />
  <Experience />
  <Services />
  <Portfolio />
  <Contact />
 <Footer />
  </div>

  );
}

export default App;
