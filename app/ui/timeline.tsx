

export const Timeline = () => {
    return (
        <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
            <h1 className="text-3xl text-center font-bold text-blue-500">Timeline with Tailwindcss</h1>
            <div className="border-l-2 mt-10">
                <div className="transform transition cursor-pointer ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                    <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                    <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>
                    <div className="flex-auto">
                        <h1 className="text-lg">Day 1</h1>
                    </div>
                </div>

                <div className="transform transition cursor-pointer ml-10 relative flex items-center px-6 py-4 bg-orange-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                    <div className="w-5 h-5 bg-orange-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                    <div className="w-10 h-1 bg-orange-300 absolute -left-10 z-0"></div>
                    <div className="flex-auto">
                        <h1 className="text-lg">Day 2</h1>
                    </div>
                </div>

                <div className="transform transition cursor-pointer ml-10 relative flex items-center px-6 py-4 bg-red-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                    <div className="w-5 h-5 bg-red-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                    <div className="w-10 h-1 bg-red-300 absolute -left-10 z-0"></div>
                    <div className="flex-auto">
                        <h1 className="text-lg">Day 3</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}