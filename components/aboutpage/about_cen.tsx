import '../../css/pat_global.css';
import '../../css/about_exec.css'
import { Nav } from '../nav/nav';

export default function Cen(){
    return(
        <>
            <Nav />
            <h6 className='text-[#3a3838]'>YOUR FEUCSO 89</h6>
            <h2 className='text-[#d0ad22]'>THE CENTRAL BOARD</h2>
            <div className='row row-cen'>
                <div className='column flex-1'>
                    <img src="/about/cen/1.png" className='aspect-4/5 object-cover object-top h-[30vh] mt-[5vh] rounded-2xl'alt="image" />
                    <h4 className='leading-none'>Presidential<br/> Chief of Staff</h4>
                    <h6>
                        CAMILLE LOUISE ARTILLAGA<br />
                        BA ACCOUNTANCY<br />                           
                        IABF
                    </h6>
                </div>
                <div className='column flex-1'>
                    <img src="/about/cen/2.png" className='aspect-4/5 object-cover object-top h-[30vh] mt-[5vh] rounded-2xl'alt="image" />
                    <h4 className='leading-none'>Executive Secretary<br/> to the Pesident</h4>
                    <h6>
                        KURT SAN PASCUAL<br />
                        BA PSYCHOLOGY<br />                           
                        IAS
                    </h6>
                </div>
                <div className='column flex-1'>
                    <img src="/about/cen/3.png" className='aspect-4/5 object-cover object-top h-[30vh] mt-[5vh] rounded-2xl'alt="image" />
                    <h4 className='leading-none'>Presidential<br/> Chief of<br/> Communication</h4>
                    <h6>
                        ALEXANDER PAULE<br />
                        BA PSYCHOLOGY<br />                           
                        IAS
                    </h6>
                </div>
                <div className='column flex-1'>
                    <img src="/about/cen/4.png" className='aspect-4/5 object-cover object-top h-[30vh] mt-[5vh] rounded-2xl'alt="image" />
                    <h4 className='leading-none'>Executive Consultant<br/> for Organizational<br/> Affairs</h4>
                    <h6>
                        JOSHUA MAIGUE<br />
                        BA BIOLOGY<br />                           
                        IAS
                    </h6>
                </div>
                <div className='column flex-1'>
                    <img src="/about/cen/5.png" className='aspect-4/5 object-cover object-top h-[30vh] mt-[5vh] rounded-2xl'alt="image" />
                    <h4 className='leading-none'>Executive Consultant<br/> for Socio-Political<br/> Affairs</h4>
                    <h6>
                        ROMARIE RELATOR<br />
                        BA NURSING<br />                           
                        IHSN
                    </h6>
                </div>
            </div>
            <div className='cen-pad'></div>
        </>
    )
}