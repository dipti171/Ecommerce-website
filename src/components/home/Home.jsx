import React from "react";
import { Link } from "react-router-dom";
import bg1 from "../../assets/images/bg1.png"; // Not needed as we use a URL directly

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <div className="relative flex items-center justify-center min-h-[700px] bg-white bg-custom sm:items-center sm:pt-0">
                <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 mt-10 px-4">
                    <div className="sm:w-1/2 p-4 bg-gray-200">
                        <h1 className="text-3xl font-bold mb-4">Dipti Yadav</h1>
                        <p className="text-gray-700">
                            Hello! I am [Your Name], a passionate developer with a love for creating beautiful and functional web applications.
                            Take a look around to see my projects, read about my journey, and feel free to get in touch.
                        </p>
                        <a
                            className="mt-4 inline-block bg-orange-700 text-white px-6 py-2 rounded-lg hover:bg-orange-800"
                            href="/contact"
                        >
                            Contact Me
                        </a>
                    </div>
                    <div className="sm:w-1/2 p-4 bg-gray-100">
                        <img className="w-full h-auto rounded-lg" src={bg1} alt="My Picture" />
                    </div>
                </div>
            </div>

            <div className="grid place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="" alt="image2" />
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 mt-10">
                <div className="sm:w-1/2 p-4">
                    <h2 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h2>
                    <p>
                        Hello! I am [Your Name], a passionate developer with a love for creating beautiful and functional web applications.
                        Take a look around to see my projects, read about my journey, and feel free to get in touch.
                    </p>
                </div>
                <div className="sm:w-1/2 p-4">
                    <img className="w-full h-auto rounded-lg" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="My Picture" />
                </div>
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>

            <div className="flex flex-col items-center space-y-10 py-10">
                <section className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4">My Projects</h3>
                    <p>
                        Here, you can showcase some of your best work. Add descriptions, links, and images to give visitors a taste of what you've done.
                    </p>
                </section>
                <section className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4">About Me</h3>
                    <p>
                        Share your story, your passions, and what drives you. Let visitors know more about you and why you do what you do.
                    </p>
                </section>
                <section className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                    <p>
                        Provide ways for visitors to contact you, whether through a contact form, email, or social media links.
                    </p>
                </section>
            </div>
        </div>
    );
}