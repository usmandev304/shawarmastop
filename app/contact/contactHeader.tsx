export default function ContactHeader() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 font-sans text-[#1a1a1a]">
      {/* Top Text Content */}
      <div className="mb-10">
        <p className="text-xl md:text-2xl leading-relaxed mb-8 text-gray-800">
          Whether you have a question, feedback, or just want to say hi, we're 
          always here for you. Reach out and let us know how we can make your 
          experience even better.
        </p>

        <div className="space-y-2 text-sm md:text-base">
          <p><span className="font-bold">Location:</span> Lahore</p>
          <p><span className="font-bold">Phone Number:</span> 03144445074</p>
          <p><span className="font-bold">Email:</span> Info@shawarmastop.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <form className="space-y-4 md:pb-7">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-md p-3 outline-none focus:ring-1 focus:ring-orange-500 placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="w-full border border-gray-300 rounded-md p-3 outline-none focus:ring-1 focus:ring-orange-500 placeholder-gray-400"
          />
        </div>
        
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md p-3 outline-none focus:ring-1 focus:ring-orange-500 placeholder-gray-400"
        />

        <textarea
          placeholder="Comment"
          rows={5}
          className="w-full border border-gray-300 rounded-md p-3 outline-none focus:ring-1 focus:ring-orange-500 placeholder-gray-400 resize-none md:mb-5"
        ></textarea>

        <button
          type="submit"
          className="bg-[#FF5A35] hover:bg-[#e44e2b] text-white font-semibold py-3 px-16 rounded-full transition-colors duration-200 text-lg shadow-sm"
        >
          Send
        </button>
      </form>
    </section>
  );
}