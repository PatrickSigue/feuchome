import ConnectDialog from "./ConnectDialog";
import '../../css/sec1.css'
import EmblaCarousel from './carousel';

export default function Sec1() {
    return(
      <>
        <div className="row row-1">
          <div className="column column-logo">
            <img className="w-[20vw] h-[20vw] aspect-square max-w-[20vw]" src="/home/feucso1.png" alt="image description" />
          </div>
          <div className="column column-welcome">
            <h6>WELCOME,</h6>
            <h1>
              <span>Towards an</span><br />
              <strong>Unstoppable FEUture!</strong>
            </h1>
            <p>
              The FEU Central Student Organization is the highest<br />
              student governing body of Far Eastern University.
            </p>
            <ConnectDialog />
          </div>
        </div>
        <div className='row row-2'>
          <div className='column column-carousel'>
            <EmblaCarousel />
          </div>
          <div className='column column-griev'>
            <h1>Got student concerns<br/> Or need assistance?</h1>
            <h5>Let’s assess it and get you the right assistance. <br/ >We’re here to help!</h5>
            <a href='#'>CLICK HERE</a>
          </div>
        </div>
        <div className='row row-pad'></div>
      </>
    );
}