import '../../css/pat_global.css';
import '../../css/about_exec.css'

export default function Exec1() {
    return(
        <>
            <div className='pt-[15vh] pl-[15vh] h-screen'>
                <h6 className='text-[#3a3838]'>YOUR FEUCSO 89</h6>
                <h2 className='text-[#d0ad22]'>THE EXECUTIVE BOARD</h2>
                <div className='row row-exec'>
                    <div className='column flex-1'>
                        <img src="/about/exec/1.png" className='aspect-4/5 object-cover object-top h-[50vh] mt-[5vh] rounded-2xl'alt="image" />
                        <h3>President</h3>
                        <h6>
                            CHRISTMER ROLAND ORDANES<br />
                            BA COMMUNICATION<br />                           
                            IAS
                        </h6>
                    </div>
                    <div className='column flex-1'>
                        <img src="/about/exec/2.png" className='aspect-4/5 object-cover object-top h-[50vh] mt-[5vh] rounded-2xl'alt="image" />
                        <h3>Vice President</h3>
                        <h6>
                            PATRICIA MAY LUANSING<br />
                            BS PSYCHOLOGY<br />                           
                            IAS
                        </h6>
                    </div>
                    <div className='column flex-1'>
                        <img src="/about/exec/3.png" className='aspect-4/5 object-cover object-top h-[50vh] mt-[5vh] rounded-2xl'alt="image" />
                        <h3>Secretary</h3>
                        <h6>
                            MARIAN BANGAYAN<br />
                            BS TOURISM MANAGEMENT<br />                           
                            ITHM
                        </h6>
                    </div>
                </div> 
                <div className='exec-pad'>
                </div>
            </div>    

        </>
    )
}