import React from "react";
import Email from "@assets/icons/Email.svg";
import Message from "@assets/icons/Message.svg";
import Phone from "@assets/icons/Phone.svg";
import User from "@assets/icons/User.svg";

export const ContactForm: React.FC = () => {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 1. Grab the data from the form
    const formData = new FormData(e.currentTarget);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const phone = formData.get("user_phone");
    const message = formData.get("user_message");

    // 2. Construct the mailto URL
    const mailtoUrl = `mailto:info@moka.bio?subject=New Contact from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    // 3. Open the user's email client
    window.location.href = mailtoUrl;
  };

  return (
    <form
      className="flex flex-col gap-6 w-full max-w-xl mx-auto"
      onSubmit={handleSubmit}
    >
      {/* Name Field */}
      <div className="w-full flex flex-col gap-3">
        <label htmlFor="Name" className="font-medium text-[18px] md:text-[20px] font-inter text-freshgreen">
          Name
        </label>
        <div className="relative group">
          <img src={User.src} alt="User" className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 opacity-70 group-focus-within:opacity-100 transition-opacity" />
          <input
            className="rounded-full w-full border border-sage/30 bg-deepforest/75 pl-14 pr-6 text-base h-16 text-pure placeholder:text-birch/45 outline-none focus:border-freshgreen focus:bg-deepforest transition-all"
            type="text"
            name="user_name" // Added name attribute
            id="Name"
            placeholder="Enter your name..."
            required
          />
        </div>
      </div>

      {/* Email Field */}
      <div className="w-full flex flex-col gap-3">
        <label htmlFor="Email" className="font-medium text-[18px] md:text-[20px] font-inter text-freshgreen">
          Email
        </label>
        <div className="relative group">
          <img src={Email.src} alt="Email" className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60 group-focus-within:opacity-100 transition-opacity" />
          <input
            className="rounded-full w-full border border-sage/30 bg-deepforest/75 pl-14 pr-6 text-base h-16 text-pure placeholder:text-birch/45 outline-none focus:border-freshgreen focus:bg-deepforest transition-all"
            type="email"
            name="user_email" // Added name attribute
            id="Email"
            placeholder="Enter your email address..."
            required
          />
        </div>
      </div>

      {/* Phone Field */}
      <div className="w-full flex flex-col gap-3">
        <label htmlFor="Phone" className="font-medium text-[18px] md:text-[20px] font-inter text-freshgreen">
          Phone Number
        </label>
        <div className="relative group">
          <img src={Phone.src} alt="Phone" className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60 group-focus-within:opacity-100 transition-opacity" />
          <input
            className="rounded-full w-full border border-sage/30 bg-deepforest/75 pl-14 pr-6 text-base h-16 text-pure placeholder:text-birch/45 outline-none focus:border-freshgreen focus:bg-deepforest transition-all"
            type="tel"
            name="user_phone" // Added name attribute
            id="Phone"
            placeholder="Enter your phone number..."
          />
        </div>
      </div>

      {/* Message Field */}
      <div className="w-full flex flex-col gap-3">
        <label htmlFor="Message" className="font-medium text-[18px] md:text-[20px] font-inter text-freshgreen">
          Message
        </label>
        <div className="relative group">
          <img src={Message.src} alt="Message" className="absolute left-5 top-6 w-5 h-5 opacity-60 group-focus-within:opacity-100 transition-opacity" />
          <textarea
            id="Message"
            name="user_message" // Added name attribute
            placeholder="Enter your message..."
            rows={4}
            className="rounded-[2rem] w-full border border-sage/30 bg-deepforest/75 pl-14 pr-6 py-5 text-base md:text-lg resize-none text-pure placeholder:text-birch/45 outline-none focus:border-freshgreen focus:bg-deepforest transition-all"
            required
          />
        </div>
      </div>

      <div className="flex justify-end mt-2">
        <button
          className="font-roboto text-[18px] md:text-[20px] font-bold bg-pure px-10 py-3 rounded-full text-charcoal hover:bg-freshgreen hover:scale-105 transition-all shadow-lg active:scale-95"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
};
