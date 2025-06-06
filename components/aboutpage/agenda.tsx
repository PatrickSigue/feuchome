import ImageCard from './ImageCard';

export default function Agenda() {
  return (
        <section id="agenda-section" className="!flex !flex-col !px-14 !pt-25 !mx-auto !max-w-7xl !w-full">
          <div className="!flex !flex-col md:!flex-row !space-y-8 !space-x-40"> 
            <div className="!flex-1 !max-w-md"> 
                <p className="!text-[#3a3838] !text-base !leading-loose !mb-4 !uppercase !text-justify !pt-5">Our Step</p>
                <h2 className="!text-5xl !font-bold !text-[#d0ad22] !mb-6 !uppercase">The Unstoppable <br />4-Point Agenda</h2> 
                <p className="!text-[#3a3838] !text-base !leading-loose !mb-4 !text-justify !font-dm-sans">            
                For nearly nine decades, FEUCSO has created spaces and opportunities for
                students to take the lead. Allowing them to be at the forefront of every
                initiative and campaign.
                <br /> <br />
                Through every challenge faced, it has continuously stood firm, unwavering
                in its commitment to battle for the right, ensuring that the voices of every
                student are heard and respected.
                <br /> <br />
                These are the steps to being <span className="!font-bold">Unstoppable</span>.
                </p>
            </div>

            <div className="!flex-1 !flex !flex-col !space-y-4"> 
            
              <ImageCard
                imageSrc='/about/agenda/1.jpg'
                altText="FEU students from 1935"
                isBorderLeft={true}
                cardHeader="Strengthening Students' Rights"
                cardBody="Fighting for our rights to consultation and protection."
                iconSvg={
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    >
                    <path d="M12,17a4,4,0,1,1,4-4A4,4,0,0,1,12,17Zm6,4a3,3,0,0,0-3-3H9a3,3,0,0,0-3,3v3H18ZM18,8a4,4,0,1,1,4-4A4,4,0,0,1,18,8ZM6,8a4,4,0,1,1,4-4A4,4,0,0,1,6,8Zm0,5A5.968,5.968,0,0,1,7.537,9H3a3,3,0,0,0-3,3v3H6.349A5.971,5.971,0,0,1,6,13Zm11.651,2H24V12a3,3,0,0,0-3-3H16.463a5.952,5.952,0,0,1,1.188,6Z"/>
                    </svg>
                }
              />
              <ImageCard
                imageSrc= '/about/agenda/2.jpg'
                altText="Students in 1960s campus"
                isBorderLeft={false}
                cardHeader="Transparency Driven Systems"
                cardBody="Keeping the student looped in every decisions."
                iconSvg={
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    >
                    <path d="m21,12c0-.537-.051-1.082-.153-1.625l3.052-1.755-2.99-5.202-3.051,1.754c-.841-.721-1.81-1.28-2.857-1.649V0h-6v3.522c-1.047.37-2.016.929-2.857,1.649l-3.05-1.754L.102,8.62l3.052,1.755c-.102.544-.153,1.088-.153,1.625s.051,1.082.153,1.625L.102,15.38l2.991,5.202,3.05-1.754c.841.721,1.81,1.28,2.857,1.649v3.522h6v-3.522c1.047-.37,2.016-.929,2.857-1.649l3.051,1.754,2.99-5.202-3.052-1.755c.102-.544.153-1.088.153-1.625Zm-9.505-4.949c.169-.017.332-.051.505-.051s.336.034.504.051c1.139.233,1.995,1.241,1.995,2.449,0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5c0-1.208.856-2.215,1.995-2.449Zm2.505,9.525s-.5.424-2,.424-2-.424-2-.424c-.8-.351-1.481-.912-1.997-1.604.015-1.09.904-1.972,1.997-1.972h4c1.094,0,1.982.882,1.997,1.972-.516.692-1.197,1.253-1.997,1.604Z"/>
                    </svg>
                }
              />
              <ImageCard
                imageSrc='/about/agenda/3.jpg'
                altText="Student protest in the 80s"
                isBorderLeft={true}
                cardHeader="Equitable-Sectoral Representations"
                cardBody="No one is left behind."
                iconSvg={
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    >
                    <path d="M23.944,12.669l-3.031-8.66c-.42-1.202-1.559-2.01-2.832-2.01h-5.081V1c-.006-1.308-1.995-1.307-2,0v1H5.919c-1.273,0-2.412,.808-2.832,2.009L.056,12.669c-.037,.106-.056,.632-.056,.632,0,2.506,1.871,4.567,4.26,4.692,1.241,.069,2.434-.371,3.338-1.229,.892-.846,1.402-2.036,1.402-3.264,0,0-.021-.732-.061-.842L5.794,4.008c.041-.005,.083-.008,.125-.008h5.081V22H5c-1.308,.006-1.307,1.995,0,2h14c1.308-.006,1.307-1.995,0-2h-6V4h5.081c.042,0,.084,.002,.125,.008l-3.146,8.65c-.04,.109-.061,.842-.061,.842,0,1.229,.511,2.418,1.402,3.264,2.809,2.701,7.648,.752,7.598-3.462,0,0-.019-.526-.056-.632Zm-17.372-.669H2.409l2.042-5.833,2.121,5.833Zm12.977-5.833l2.042,5.833h-4.163l2.121-5.833Z"/>
                    </svg>
                }
              />
              <ImageCard
                imageSrc= '/about/agenda/4.jpg'
                altText="Modern FEU students"
                isBorderLeft={false}
                cardHeader="Pro-People Movement"
                cardBody="Empowering students to fulfil their socio-civic duties."
                iconSvg={
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    >
                    <path d="m8.37,3.79c-.697-.52-1.531-.77-2.369-.763v-.526c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5v1.875c-.186-.214-.396-.411-.631-.586Zm3.131,3.21c.828,0,1.5-.672,1.5-1.5V1.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5v4c0,.828.672,1.5,1.5,1.5Zm4,0c.828,0,1.5-.672,1.5-1.5V1.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5v4c0,.828.672,1.5,1.5,1.5Zm4-6c-.828,0-1.5.672-1.5,1.5v3c0,.828.672,1.5,1.5,1.5s1.5-.672,1.5-1.5v-3c0-.828-.672-1.5-1.5-1.5Zm-2,7.374c-.609.425-1.358.663-2.163.626-.678-.031-1.294-.273-1.81-.649-.572.408-1.273.649-2.028.649-.659,0-1.276-.183-1.803-.501-.059.147-.403.817-.827,1.269-.001-.002-.003-.003-.004-.004-.013.013-1.898,1.761-1.9,1.763-.392.369-1.005.367-1.389-.017-.39-.39-.39-1.023,0-1.414l1.839-1.698h0s0,0,0,0c.859-.859.773-2.304-.256-3.046-.808-.582-1.941-.412-2.646.291l-2.211,2.186c-1.73,1.71-1.738,4.502-.018,6.222l4.13,4.13c.375.375.586.884.586,1.414v3.404c0,.552.448,1,1,1h10c.552,0,1-.448,1-1v-2.199c0-1.233.248-2.475.862-3.545.746-1.3,1.138-2.773,1.138-4.272v-4.319c-.455.217-.964.338-1.5.338-.743,0-1.433-.233-2-.63Z"/>
                    </svg>
                }
              />
            </div>
          </div>

        </section>
    );
}