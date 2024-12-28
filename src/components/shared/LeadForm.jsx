'use client'
import React, { useState } from 'react';
import toast from "react-hot-toast";
import client from "@/lib/sanity";
import { contactValidation } from '@/Validation/ContactValidation';

const LeadForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        query: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await contactValidation.validate(formData, { abortEarly: true })
            const data = {
                _type: 'contactResponse',
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                website: formData.website,
                type: formData.query,
                message: formData.message,
            };

            toast.promise(client.create(data), {
                loading: 'Submitting your request...',
                success: 'Request submitted successfully',
                error: 'Failed to submit'
            });
        } catch (error) {
            if (error.name === 'ValidationError') {
                toast.error(error.message);
            } else {
                toast.error("An unexpected error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="text-white p-4 md:p-8 rounded-lg shadow-lg w-full"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name *"
                        value={formData.name}
                        onChange={handleChange}
                        className="p-3 rounded bg-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email *"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-3 rounded bg-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="p-3 rounded bg-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        name="website"
                        placeholder="Your Website"
                        value={formData.website}
                        onChange={handleChange}
                        className="p-3 rounded bg-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <select
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                    className="p-3 mb-4 w-full rounded bg-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">How can we help you?</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Support">Support</option>
                    <option value="Feedback">Feedback</option>
                </select>

                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows="4"
                    className="p-3 w-full mb-4 rounded bg-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>

                <p className="text-[16px] font-[400] text-[#7E8695] mb-4">
                    By submitting this form I accept the{' '}
                    <a href="#" className="underline">Privacy Policy</a> of this site.
                </p>

                <button
                    type="submit"
                    className="w-full py-3 bg-secondary hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
                >
                    Send your request
                </button>
            </form>
        </div>
    );
};

export default LeadForm;
