function AboutArea() {
    return (
        <div className="h-screen w-full text-gray-300">
            <div className="flex h-full w-full flex-col items-center justify-center">
                <div className="grid w-full grid-cols-2 gap-8">
                    <div className="pb-8 pl-4 sm:text-right">
                        <p className="inline border-b-4 border-pink-600 text-4xl font-bold">
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className="grid w-full gap-8 px-4 sm:grid-cols-2">
                    <div className="text-4xl font-bold sm:text-right">
                        <p>
                            Hi. I'm Aiman, nice to meet you. Please take a look
                            around.
                        </p>
                    </div>
                    <div>
                        <p>
                            I am passionate about building excellent software
                            that improves the lives of those around me. I
                            specialize in creating software for clients ranging
                            from individuals and small-businesses all the way to
                            large enterprise corporations. What would you do if
                            you had a software expert available at your
                            fingertips?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { AboutArea };
