function ContactArea() {
    return (
        <div className="flex h-screen w-full items-center justify-center p-4">
            <form
                method="POST"
                action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
                className="flex w-full max-w-[600px] flex-col"
            >
                <div className="pb-8">
                    <p className="inline border-b-4 border-pink-600 text-4xl font-bold text-gray-300">
                        Contact
                    </p>
                    <p className="py-4 text-gray-300">
                        // Submit the form below or shoot me an email -
                        vutukuri.kumar192st.niituniversity.in
                    </p>
                </div>
                <input
                    className="bg-[#ccd6f6] p-2"
                    type="text"
                    placeholder="Name"
                    name="name"
                />
                <input
                    className="my-4 bg-[#ccd6f6] p-2"
                    type="email"
                    placeholder="Email"
                    name="email"
                />
                <textarea
                    className="bg-[#ccd6f6] p-2"
                    name="message"
                    rows={10}
                    placeholder="Message"
                ></textarea>
                <button className="mx-auto my-8 flex items-center border-2 px-4 py-3 text-white hover:border-pink-600 hover:bg-pink-600">
                    Let's Collaborate
                </button>
            </form>
        </div>
    );
}

export { ContactArea };
