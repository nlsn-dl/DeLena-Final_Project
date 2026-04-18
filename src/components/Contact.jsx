import React from 'react';

function Contact() {
  return (
    <section id="contact" className="bg-white p-8 my-10 max-w-5xl mx-auto rounded-2xl">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>

      <form className="space-y-4">
        <input className="w-full p-3 border rounded" placeholder="Name" />
        <input className="w-full p-3 border rounded" placeholder="Email" />
        <textarea className="w-full p-3 border rounded" placeholder="Message"></textarea>

        <button className="bg-[#2F4156] text-white px-6 py-2 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;