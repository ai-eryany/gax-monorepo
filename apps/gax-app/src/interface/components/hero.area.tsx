import { HiArrowNarrowRight } from 'react-icons/hi';

function HeroArea() {
    return (
        <>
            {/* Container */}
            <div className="mx-auto flex h-full w-full flex-col justify-center px-8">
                <p className="text-pink-600">Hi, my name is</p>
                <h1 className="text-4xl font-bold text-[#ccd6f6] sm:text-7xl">
                    Aiman Al Eryany
                </h1>
                <h2 className="text-4xl font-bold text-[#8892b0] sm:text-7xl">
                    I am cancer. I enjoy sunsets, long walks on the beach, and
                    coding.
                </h2>
                <p className="max-w-[700px] py-4 text-[#8892b0]">
                    I am a MERN Full-Stack developer on a life journey to
                    understand the purpose of programming and create awesome
                    apps while I am at it.
                </p>
                <div>
                    <button className="group my-2 flex items-center border-2 px-6 py-3 text-white hover:border-pink-600 hover:bg-pink-600">
                        View Work
                        <span className="duration-300 group-hover:rotate-90">
                            <HiArrowNarrowRight className="ml-3 " />
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
}

export { HeroArea };
