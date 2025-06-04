export default function Sec2() {
    return (
        <section
            id="video-section"
            className="!flex !flex-col md:!flex-row !items-center !justify-center !gap-10 !pt-20 !px-14 !bg-custom-yellow"
        >
            <div className="!w-full !md:w-1/3 !bg-gray-900 !rounded-2xl !shadow-xl !overflow-hidden !border-3 !border-white">
                <video
                    className="!w-full !h-auto !object-cover"
                    src="/videos/IAmUnstoppable.mp4"
                    controls
                    autoPlay
                    loop
                    muted
                >
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="!max-w-md !text-justify">
                <p className="!text-white text-sm !leading-relaxed !mb-4 !uppercase">
                    Watch our Battlecry Manifesto
                </p>
                <h2 className="text-3xl !font-bold !text-white !mb-4">
                    #IAmUnstoppable
                </h2>
                <p className="!text-white !leading-relaxed !mb-4 !font-[DMSans]">
                    In the face of adversities, challenges hinder our Tamaraw experience.
                    But you are more than what stops you. Because you are Unstoppable.
                    Get to know the meaning of an Unstoppable FEUture.
                </p>
            </div>
        </section>
    );
}