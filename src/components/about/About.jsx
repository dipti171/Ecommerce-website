import React from "react";

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Full Stack development 
                        </h2>
                        <p className="mt-6 text-gray-600">
                        I am a Full stack Developer and i have knowledge about sql, frontend 
                        and Backend web technologies like React, Nodejs, Express, MongoDB, MySQL, HTML, CSS, JavaScriptTailwind CSS, etc.


                        </p>
                        <p className="mt-4 text-gray-600">
                           fresher in the field of web development and looking for a job in the same field.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

//export default About;