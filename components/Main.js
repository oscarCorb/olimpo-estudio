import About from 'pages/about';
import Contact from 'pages/contact';
import Projects from 'pages/projects';
import Services from 'pages/services';
import Opinions from 'pages/opinions';
import SeparationLine from './SeparationLine';

const Main = () => {
  return (
    <main>
      <Projects />
      <Services />
      <SeparationLine color={'primary'} />
      <Opinions />
      {/* <About />
      <Contact /> */}
    </main>
  );
};

export default Main;
