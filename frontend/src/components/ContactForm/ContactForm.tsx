import User from "@assets/icons/User.svg";
import Email from "@assets/icons/Email.svg";
import Phone from "@assets/icons/Phone.svg";
import Message from "@assets/icons/Message.svg";
import "@styles/ContactForm.style.css";

export const ContactForm: React.FC = () => {
  return (
    <div className="w-full xl:mb-16 lg:mb-44 md:mb-52">
      <form
        className="flex flex-col gap-4 xl:w-[50%] lg:w-[75%] md:w-[60%] h-[594px] mx-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="w-full flex flex-col gap-3">
          <label htmlFor="Name" className="font-medium text-[24px] font-inter">
            Name
          </label>
          <div className="relative">
            <img src={User.src} alt="User" className="absolute ml-3 mt-2" />
            <input
              className="rounded-full w-full border-none px-12 py-3 text-base md:text-lg md:h-12"
              type="text"
              id="Name"
              placeholder="Enter your name..."
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          <label htmlFor="Email" className="font-medium text-[24px] font-inter">
            Email
          </label>
          <div className="relative">
            <img src={Email.src} alt="Email" className="absolute ml-2 mt-2" />
            <input
              className="rounded-full w-full border-none px-12 py-3 text-base md:text-lg md:h-12"
              type="email"
              id="Email"
              placeholder="Enter your email address..."
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          <label htmlFor="Phone" className="font-medium text-[24px] font-inter">
            Phone Number
          </label>
          <div className="relative">
            <img src={Phone.src} alt="Phone" className="absolute ml-2 mt-2" />
            <input
              className="rounded-full w-full border-none px-12 py-3 text-base md:text-lg md:h-12"
              id="Phone"
              type="number"
              placeholder="Enter your phone number..."
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          <label
            htmlFor="Message"
            className="font-medium text-[24px] font-inter"
          >
            Message
          </label>
          <div className="relative">
            <img
              src={Message.src}
              alt="Message"
              className="absolute ml-2 mt-2"
            />
            <textarea
              id="Message"
              placeholder="Enter your message..."
              rows={3}
              className="rounded-lg w-full border-none px-12 py-3 text-base md:text-lg md:h-48 resize-none"
            />
          </div>
        </div>
        <div className="flex justify-end relative z-10">
          <button
            className="font-roboto text-[24px] font-medium bg-secondary px-[32px] py-3 rounded-full text-white md:text-xl"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
