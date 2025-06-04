import '../../css/pat_global.css';
import '../../css/about_exec.css'

export default function Exec2() {
    return(
        <div className='pt-[15vh] pl-[15vh]'>
            <h6 className='text-[#3a3838]'>YOUR FEUCSO 89</h6>
            <h2 className='text-[#d0ad22]'>THE EXECUTIVE BOARD</h2>
            <div className='row max-h-screen row-exec'>
                <div className='column flex-1'>
                    <img src="/about/exec/4.png" className='aspect-4/5 object-cover object-top h-[50vh] mt-[5vh] rounded-2xl'alt="image" />
                    <h3>Treasurer</h3>
                    <h6>
                        MIKAILEE DAPHNE ELPEDES<br />
                        BS NURSING<br />                           
                        IHSN
                    </h6>
                </div>
                <div className='column flex-1'>
                    <img src="/about/exec/5.png" className='aspect-4/5 object-cover object-top h-[50vh] mt-[5vh] rounded-2xl'alt="image" />
                    <h3>Auditor</h3>
                    <h6>
                        RAEZON GONZALES<br />
                        BS Accountancy<br />                           
                        IABF
                    </h6>
                </div>
                <div className='column flex-1'>
                    <img src="/about/exec/6.png" className='aspect-4/5 object-cover object-top h-[50vh] mt-[5vh] rounded-2xl'alt="image" />
                    <h3>Press Ralations Officer</h3>
                    <h6>
                        RICO ANGELES JR.<br />
                        BA COMMUNICATION<br />                           
                        IAS
                    </h6>
                </div>
            </div> 
            <div className='exec-pad'></div>
        </div>
    );
}