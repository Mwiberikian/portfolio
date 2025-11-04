import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-300 mb-6">I’m open to internships and collaboration. Send me a message and I’ll get back to you at muchemikian@gmail.com.</p>

        <form action="https://formsubmit.co/muchemikian@gmail.com" method="POST" className="space-y-4 bg-gray-800 p-6 rounded">
          <input type="hidden" name="_subject" value="New message from portfolio" />
          <input type="hidden" name="_captcha" value="false" />
          <div>
            <label className="text-sm text-gray-300">Name</label>
            <input name="name" required className="w-full mt-1 p-2 bg-gray-900 border border-gray-700 rounded" />
          </div>
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input type="email" name="email" required className="w-full mt-1 p-2 bg-gray-900 border border-gray-700 rounded" />
          </div>
          <div>
            <label className="text-sm text-gray-300">Message</label>
            <textarea name="message" rows="5" required className="w-full mt-1 p-2 bg-gray-900 border border-gray-700 rounded"></textarea>
          </div>
          <div className="flex items-center justify-end">
            <button type="submit" className="px-4 py-2 bg-tealbrand text-black rounded font-semibold">Send Message</button>
          </div>
        </form>

      </div>
    </section>
  )
}
