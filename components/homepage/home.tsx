import '../../css/pat_global.css';
import Sec1 from './sec1';
import Sec2 from './sec2';
import '../../css/sec1.css'
import { Nav, Footer } from '../nav/nav';

function Home() {
  return (
    <>
      <Nav />
      <div className="snap-y snap-mandatory overflow-y-auto h-screen">
        <div className="snap-start min-h-screen">
          <Sec1 />
        </div>
        <div className="snap-center max-h-screen row row-3">
          <Sec2 />
        </div>
        <div className="snap-end max-h-screen">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;