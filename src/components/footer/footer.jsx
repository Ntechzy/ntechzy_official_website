'use client'

import { useState } from "react"
import Link from "next/link"
import FooterSlider from "./FooterSlider";

export function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiry: '',
    message: '',
    agreed: false
  })

  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!formData.name) newErrors.name = 'This field is required.'
    if (!formData.email) newErrors.email = 'This field is required.'
    if (!formData.message) newErrors.message = 'This field is required.'
    if (!formData.agreed) newErrors.agreed = 'You must agree to the Terms & Conditions.'

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      // Handle form submission
      console.log('Form submitted:', formData)
    }
  }



  return (
    <footer className="bg-secondary h-auto flex flex-col text-white rounded-3xl my-8 py-12 md:px-6 lg:px-8">
      <FooterSlider />
      <div className="bg-primary mx-auto w-full px-4 py-12 md:px-6 lg:px-8 rounded-3xl">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-2xl font-bold">
              <span className="text-blue-500">•</span> You have request?
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 md:mr-12">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-lg border border-gray-700 bg-[#111317] px-4 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-lg border border-gray-700 bg-[#111317] px-4 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
              </div>

              <select
                className="w-full rounded-lg border border-gray-700 bg-[#111317] px-4 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.inquiry}
                onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
              >
                <option value="">Your inquiry about</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="sales">Sales</option>
              </select>

              <div>
                <textarea
                  placeholder="Message"
                  className="min-h-[120px] w-full rounded-lg border border-gray-700 bg-[#111317] px-4 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2 ">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 rounded border-gray-700 bg-gray-900"
                    checked={formData.agreed}
                    onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                  />
                  <label htmlFor="terms" className="text-md text-gray-400">
                    By submitting, I'm agreed to the{' '}
                    <Link href="#" className="text-white font-bold hover:text-secondary">
                      Terms & Conditions
                    </Link>
                  </label>
                </div>
                {errors.agreed && <p className="text-sm text-red-500">{errors.agreed}</p>}

                <button
                  type="submit"
                  className="rounded-md bg-secondary px-6 py-2 font-medium text-white transition-colors hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
                >
                  Get started
                </button>
              </div>
            </form>
          </div>

          {/* Navigation & Contact Info */}
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-lg font-semibold">Services</h3>
                <ul className="space-y-3 text-gray-400">
                  <li><Link href="#" className="hover:text-white">It Consultations</Link></li>
                  <li><Link href="#" className="hover:text-white">Data Security</Link></li>
                  <li><Link href="#" className="hover:text-white">Blockchain</Link></li>
                  <li><Link href="#" className="hover:text-white">AI Chatbot</Link></li>
                  <li><Link href="#" className="hover:text-white">Game Development</Link></li>
                  <li><Link href="#" className="hover:text-white">Virtual Reality</Link></li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-lg font-semibold">Home</h3>
                <ul className="space-y-3 text-gray-400">
                  <li><Link href="#" className="hover:text-white">Pages</Link></li>
                  <li><Link href="#" className="hover:text-white">Blogs</Link></li>
                  <li><Link href="#" className="hover:text-white">Projects</Link></li>
                  <li><Link href="#" className="hover:text-white">Contact</Link></li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-lg font-semibold">Contact</h3>
                <div className="space-y-3 text-gray-400">
                  <p className="font-medium text-white">Address</p>
                  <p>58 Howard, San Francisco CA 411</p>

                  <p className="font-medium text-white">Email</p>
                  <p>contact@Tecko.co</p>

                  <p className="font-medium text-white">Fax</p>
                  <p>fax@Tecko.co</p>

                  <p className="font-medium text-white">Work Hour</p>
                  <p>Mon - Sat: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="mt-12 flex justify-end">
          <Link href="/" className="flex items-center space-x-2 pr-12">
            <img src="/logo.png" alt="" />
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex space-x-6 text-gray-400">
              <Link href="#" className="hover:text-white">Facebook</Link>
              <Link href="#" className="hover:text-white">Instagram</Link>
              <Link href="#" className="hover:text-white">LinkedIn</Link>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
              <Link href="#" className="hover:text-white">Terms of Services</Link>
              <Link href="#" className="hover:text-white">Virtual Reality</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

