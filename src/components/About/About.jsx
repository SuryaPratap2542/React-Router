import React from 'react';

export default function About() {
    return (
        <div className="py-16 bg-orange-200">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="Startup illustration"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Why Choose React for Web Development?
                        </h2>
                        <p className="mt-6 text-gray-600">
                            React is a popular JavaScript library for building user interfaces. It is chosen by passionate developers for several reasons:
                        </p>
                        <ul className="list-disc pl-6 mt-4 text-gray-600">
                            <li>React provides a component-based architecture, making it easy to build and maintain complex UIs.</li>
                            <li>It offers excellent performance optimizations through the use of a virtual DOM.</li>
                            <li>React has a large and active community, ensuring access to a wealth of resources and libraries.</li>
                            <li>It is backed by Facebook and Instagram, giving it industry credibility and support.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}
