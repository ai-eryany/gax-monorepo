// Packages
import { useState } from 'react';

// Data
import { Db } from '@data';

function WorkComp() {
    const [projects] = useState(Db.works);

    return (
        <div className="w-full text-gray-300 md:h-screen">
            <div className="mx-auto flex h-full w-full flex-col justify-center p-4">
                <div className="pb-8">
                    <p className="inline border-b-4 border-pink-600 text-4xl font-bold text-gray-300">
                        Work
                    </p>
                    <p className="py-6">// Check out some of my recent work</p>
                </div>

                {/* container for projects */}
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {/* Gird Item */}
                    {projects.map((item, index) => (
                        <div
                            key={index}
                            style={{ backgroundImage: `url(${item.image})` }}
                            className="content-div group container mx-auto flex 
              items-center justify-center rounded-md text-center shadow-lg shadow-[#040c16] "
                        >
                            {/* Hover effect for images */}
                            <div className="opacity-0 group-hover:opacity-100 ">
                                <span className="font bold text-2xl tracking-wider text-white ">
                                    {item.name}
                                </span>
                                <div className="pt-8 text-center ">
                                    <a href={item.repo} target="_blank">
                                        <button
                                            className="m-2 rounded-lg bg-white px-4 py-3
                       text-center text-lg font-bold text-gray-700"
                                        >
                                            Code
                                        </button>
                                    </a>
                                    <a href={item.demo} target="_blank">
                                        <button
                                            className="m-2 rounded-lg bg-white px-4 py-3
                       text-center text-lg font-bold text-gray-700"
                                        >
                                            Live
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export { WorkComp };
