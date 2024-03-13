'use client'

import { useState } from 'react';
import Image from 'next/image';
export default function Home() {
    const [email, setEmail] = useState('');
    const [supportCategory, setSupportCategory] = useState('');
    const [showThankYouMessage, setShowThankYouMessage] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Send form data to Formspree
        const response = await fetch('https://formspree.io/f/xleqlvwr', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, supportCategory }),
        });

        if (response.ok) {
            setShowThankYouMessage(true);
            setEmail('');
            setSupportCategory('');
        }
    };

    return (
        <div className="bg-gray-100 font-sans">
          
            {/* Navbar */}
            <nav className="bg-blue-600 text-white p-4">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-xl font-bold">Compassion Circle</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4 text-black">Invest in Your Emotional Health</h1>

                        <p className="text-lg lg:text-xl text-gray-700 mb-6">Sometimes, all you need is someone to listen. We are here for you.</p>
                        <form id="contactForm" className="flex flex-col lg:flex-row" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-white border border-gray-400 rounded-lg py-3 px-4 mb-2 lg:mb-0 lg:mr-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-300 ease-in-out"
                            />
                            <select
                                name="support_category"
                                value={supportCategory}
                                onChange={(e) => setSupportCategory(e.target.value)}
                                className="bg-white border text-gray-600 border-gray-400 rounded-lg py-3 px-4 mb-2 lg:mb-0 lg:mr-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-300 ease-in-out"
                            >
                                <option value="" disabled>Select Support Category</option>
                                <option value="24/7 Support">24/7 Support</option>
                                <option value="Anonymous Chat">Anonymous Chat</option>
                                <option value="Professional Counselors">Professional Counselors</option>
                            </select>
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 ease-in-out shadow-md"
                            >
                                Get Invitation
                            </button>
                        </form>
                        {showThankYouMessage && (
                            <div className="text-green-600 font-semibold mt-4">Thank you! We will send you an invitation soon!</div>
                        )}
                    </div>
                    <div className="lg:w-1/2">
                        <Image 
                            src="https://images.unsplash.com/photo-1564682895970-0dbb72e18d97"
                            alt="Phone a friend"
                            width={600} height={800}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-gray-200 py-16 px-4">
                <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-8 text-center">How We Can Help You</h2>

                    <div className="flex flex-col lg:flex-row justify-between">
                        {/* Feature 1 */}
                        <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg p-6 mb-4 lg:mb-0">
                            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                            <p className="text-gray-700">Our team is available around the clock to listen to your concerns and provide support.</p>
                        </div>
                        {/* Feature 2 */}
                        <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg p-6 mb-4 lg:mb-0">
                            <h3 className="text-xl font-semibold mb-2">Anonymous Chat</h3>
                            <p className="text-gray-700">Chat with us anonymously and feel safe sharing your thoughts and feelings.</p>
                        </div>
                        {/* Feature 3 */}
                        <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg p-6 mb-4 lg:mb-0">
                            <h3 className="text-xl font-semibold mb-2">Professional Counselors</h3>
                            <p className="text-gray-700">Our team consists of experienced counselors who are here to provide guidance and support.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-blue-600 text-white py-4 px-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Compassion Circle - All rights reserved</p>
                </div>
            </footer>
        </div>
    );
}
