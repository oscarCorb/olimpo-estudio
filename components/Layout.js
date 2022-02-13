import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />

      {/* Contenido de la página */}
      <Main></Main>

      {/* <Footer /> */}
    </div>
  );
};

Layout.defaultProps = {
  title: 'olimpoEstudio | Estudio de interiorismo y reformas en Madrid',
  description: 'TODO: escribir una descripción',
  keywords: 'interiorismo, reformas, baños, cocinas, proyectos',
};

export default Layout;
