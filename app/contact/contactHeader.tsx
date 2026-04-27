'use client';
import { useState } from 'react';

export default function ContactHeader() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comment: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    let newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.comment.trim()) newErrors.comment = 'Message cannot be empty';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    // 1. Page reload ko rokne ke liye
    e.preventDefault(); 
    
    // 2. Validation check karein
    if (validate()) {
      console.log('Form Submitted:', formData);
      alert('Thank you! Your message has been sent.');
      
      // 3. Form reset karein
      setFormData({ name: '', phone: '', email: '', comment: '' });
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16 font-sans text-[#1a1a1a]">
      {/* Top Text Content */}
      <div className="mb-10">
        <p className="text-xl md:text-2xl text-[17px] leading-relaxed mb-8 text-gray-800">
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

      {/* 4. onSubmit={handleSubmit} lazmi add karein */}
      <form onSubmit={handleSubmit} className="space-y-4 md:pb-7">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="w-full">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md p-4 outline-none focus:ring-1 focus:ring-orange-500 placeholder-gray-400`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div className="w-full">
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md p-4 outline-none focus:ring-1 focus:ring-orange-500 placeholder-gray-400`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div className="w-full">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md p-4 outline-none focus:ring-1 focus:ring-orange-500 placeholder-gray-400`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div className="w-full">
          <textarea
            name="comment"
            placeholder="Comment"
            value={formData.comment}
            onChange={handleChange}
            rows={5}
            className={`w-full border ${errors.comment ? 'border-red-500' : 'border-gray-300'} rounded-md p-3 outline-none focus:ring-1 focus:ring-orange-500 placeholder-gray-400 resize-none`}
          ></textarea>
          {errors.comment && <p className="text-red-500 text-xs mt-1 mb-4">{errors.comment}</p>}
        </div>

        <button
          type="submit"
         className="bg-[#FF5A35] hover:bg-[#e44e2b] cursor-pointer text-white font-semibold py-3 px-16 rounded-full transition-colors duration-200 md:text-lg text-[15px] shadow-sm w-full md:w-auto"
        >
          Send
        </button>
      </form>
    </section>
  );
}