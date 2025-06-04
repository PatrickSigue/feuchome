export default function OurHistory() {
    return (
        <section id="our-history-section">
            <div className="!flex !flex-col !px-14 !pt-20 !pb-10 !mx-auto !max-w-6xl !items-start">
                <p className="!text-[#3a3838] !text-base !leading-relaxed !mb-4 !uppercase !text-justify !pt-5">
                    Our History
                </p>
                <h1 className="!text-5xl !text-[#d0ad22] !mb-5 !max-w-md !font-bold">
                    The CSO has been around since 1935
                </h1>
            </div>

            <div className="!w-full !border-t-7 !border-[#d0ad22] overflow-hidden">
                <img
                    src="/about/ourhistory/feu.jpg"
                    alt="FEU"
                    className="!w-full !h-70 !object-cover !grayscale"
                  />
                </div>

            <div className="!flex !flex-col !px-14 !pt-10 !pb-10 !mx-auto !max-w-6xl !w-full !items-start">
                <p className="!text[#3a3838] !text-base !leading-relaxed !mb-4 !max-w-md !text-justify !font-dm-sans">
                    Established in 1935, the Far Eastern University Central Student Organization stands as the
                    university's premier student government, built on a legacy of leadership, service, and representation.
                    FEUCSO has continuously evolved to reflect the voice, vision, and values of the Tamaraw community.
                    <br /> <br />
                    Now in our 89th year, FEUCSO remains steadfast in reimagining student governance—adaptive,
                    forward-thinking, and fueled by the collective spirit of the students we serve.
                </p>
            </div>
        </section>
    );
}
