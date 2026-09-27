import React from "react";
import Email from "@assets/icons/Email.svg";
import Message from "@assets/icons/Message.svg";
import Phone from "@assets/icons/Phone.svg";
import User from "@assets/icons/User.svg";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type Locale = "en" | "es" | "pt";
type InquiryType = "demo" | "service" | "other";

const CONTACT_EMAIL = "info@moka.bio";

const copy = {
  en: {
    name: "Name",
    namePlaceholder: "Enter your name...",
    company: "Company",
    companyPlaceholder: "Enter your company...",
    email: "Email",
    emailPlaceholder: "Enter your email address...",
    phone: "Phone Number",
    phonePlaceholder: "Enter your phone number...",
    inquiry: "What are you interested in?",
    inquiryOptions: {
      demo: "Moka BDE platform demo",
      service: "R&D service (extract, fraction or molecule)",
      other: "Other inquiry",
    },
    message: "Message",
    messagePlaceholder: "Tell us about your project or the plants you are interested in...",
    send: "Send",
    subject: "New inquiry",
  },
  es: {
    name: "Nombre",
    namePlaceholder: "Ingresa tu nombre...",
    company: "Empresa",
    companyPlaceholder: "Ingresa tu empresa...",
    email: "Correo electrónico",
    emailPlaceholder: "Ingresa tu correo electrónico...",
    phone: "Teléfono",
    phonePlaceholder: "Ingresa tu teléfono...",
    inquiry: "¿Qué te interesa?",
    inquiryOptions: {
      demo: "Demo de la plataforma Moka BDE",
      service: "Servicio de I+D (extracto, fracción o molécula)",
      other: "Otra consulta",
    },
    message: "Mensaje",
    messagePlaceholder: "Cuéntanos sobre tu proyecto o las plantas que te interesan...",
    send: "Enviar",
    subject: "Nueva consulta",
  },
  pt: {
    name: "Nome",
    namePlaceholder: "Digite seu nome...",
    company: "Empresa",
    companyPlaceholder: "Digite sua empresa...",
    email: "E-mail",
    emailPlaceholder: "Digite seu e-mail...",
    phone: "Telefone",
    phonePlaceholder: "Digite seu telefone...",
    inquiry: "Qual é o seu interesse?",
    inquiryOptions: {
      demo: "Demonstração da plataforma Moka BDE",
      service: "Serviço de P&D (extrato, fração ou molécula)",
      other: "Outra consulta",
    },
    message: "Mensagem",
    messagePlaceholder: "Conte sobre seu projeto ou as plantas que interessam a você...",
    send: "Enviar",
    subject: "Nova consulta",
  },
};

// Tailwind can't apply /opacity modifiers to the var()-based theme colors,
// so the translucent tones are written as explicit rgba values.
const fieldBase =
  "w-full border border-[rgba(86,114,99,0.3)] bg-[rgba(19,45,37,0.75)] text-base text-pure placeholder:text-[rgba(222,222,222,0.45)] outline-none focus:border-freshgreen focus:bg-deepforest transition-all";
const inputClass = `${fieldBase} rounded-full pl-14 pr-6 h-16`;
const labelClass = "font-medium text-[18px] md:text-[20px] font-inter text-freshgreen";
const iconClass = "absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60 group-focus-within:opacity-100 transition-opacity";

const inquiryTypes: InquiryType[] = ["demo", "service", "other"];

// Links such as /contact-us?interest=service preselect the inquiry type.
const initialInquiry = (): InquiryType => {
  if (typeof window === "undefined") return "demo";
  const interest = new URLSearchParams(window.location.search).get("interest") as InquiryType | null;
  return interest && inquiryTypes.includes(interest) ? interest : "demo";
};

export const ContactForm: React.FC<{ locale?: Locale }> = ({ locale = "en" }) => {
  const t = copy[locale];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const value = (key: string) => String(formData.get(key) ?? "").trim();
    const name = value("user_name");
    const company = value("user_company");
    const email = value("user_email");
    const phone = value("user_phone");
    const inquiry = value("inquiry_type") as InquiryType;
    const message = value("user_message");
    const inquiryLabel = t.inquiryOptions[inquiry] ?? t.inquiryOptions.other;

    const subject = `${t.subject}: ${inquiryLabel} — ${name}${company ? ` (${company})` : ""}`;
    const body = [
      `${t.inquiry} ${inquiryLabel}`,
      `${t.name}: ${name}`,
      `${t.company}: ${company}`,
      `${t.email}: ${email}`,
      `${t.phone}: ${phone || "-"}`,
      "",
      `${t.message}:`,
      message,
    ].join("\r\n");

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    if (typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", {
        event_category: "contact",
        event_label: `contact_form_${locale}`,
        form_destination: "mailto",
        inquiry_type: inquiry,
      });
    }

    window.location.href = mailtoUrl;
  };

  return (
    <form
      className="flex flex-col gap-6 w-full max-w-xl mx-auto"
      onSubmit={handleSubmit}
    >
      {/* Name Field */}
      <div className="w-full flex flex-col gap-3">
        <label htmlFor="Name" className={labelClass}>
          {t.name}
        </label>
        <div className="relative group">
          <img src={User.src} alt="" className={iconClass} />
          <input
            className={inputClass}
            type="text"
            name="user_name"
            id="Name"
            autoComplete="name"
            placeholder={t.namePlaceholder}
            required
          />
        </div>
      </div>

      {/* Company Field */}
      <div className="w-full flex flex-col gap-3">
        <label htmlFor="Company" className={labelClass}>
          {t.company}
        </label>
        <div className="relative group">
          <img src={User.src} alt="" className={iconClass} />
          <input
            className={inputClass}
            type="text"
            name="user_company"
            id="Company"
            autoComplete="organization"
            placeholder={t.companyPlaceholder}
            required
          />
        </div>
      </div>

      {/* Email Field */}
      <div className="w-full flex flex-col gap-3">
        <label htmlFor="Email" className={labelClass}>
          {t.email}
        </label>
        <div className="relative group">
          <img src={Email.src} alt="" className={iconClass} />
          <input
            className={inputClass}
            type="email"
            name="user_email"
            id="Email"
            autoComplete="email"
            placeholder={t.emailPlaceholder}
            required
          />
        </div>
      </div>

      {/* Phone Field */}
      <div className="w-full flex flex-col gap-3">
        <label htmlFor="Phone" className={labelClass}>
          {t.phone}
        </label>
        <div className="relative group">
          <img src={Phone.src} alt="" className={iconClass} />
          <input
            className={inputClass}
            type="tel"
            name="user_phone"
            id="Phone"
            autoComplete="tel"
            placeholder={t.phonePlaceholder}
          />
        </div>
      </div>

      {/* Inquiry Type Field */}
      <div className="w-full flex flex-col gap-3">
        <label htmlFor="InquiryType" className={labelClass}>
          {t.inquiry}
        </label>
        <div className="relative group">
          <img src={Message.src} alt="" className={iconClass} />
          <select
            className={`${inputClass} appearance-none pr-12 cursor-pointer [&>option]:bg-deepforest [&>option]:text-pure`}
            name="inquiry_type"
            id="InquiryType"
            defaultValue={initialInquiry()}
            required
          >
            <option value="demo">{t.inquiryOptions.demo}</option>
            <option value="service">{t.inquiryOptions.service}</option>
            <option value="other">{t.inquiryOptions.other}</option>
          </select>
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-freshgreen"
            fill="currentColor"
          >
            <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.39a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z" />
          </svg>
        </div>
      </div>

      {/* Message Field */}
      <div className="w-full flex flex-col gap-3">
        <label htmlFor="Message" className={labelClass}>
          {t.message}
        </label>
        <div className="relative group">
          <img src={Message.src} alt="" className="absolute left-5 top-6 w-5 h-5 opacity-60 group-focus-within:opacity-100 transition-opacity" />
          <textarea
            id="Message"
            name="user_message"
            placeholder={t.messagePlaceholder}
            rows={4}
            className={`${fieldBase} rounded-[2rem] pl-14 pr-6 py-5 md:text-lg resize-none`}
            required
          />
        </div>
      </div>

      <div className="flex justify-end mt-2">
        <button
          className="font-roboto text-[18px] md:text-[20px] font-bold bg-pure px-10 py-3 rounded-full text-charcoal hover:bg-freshgreen hover:scale-105 transition-all shadow-lg active:scale-95"
          type="submit"
        >
          {t.send}
        </button>
      </div>
    </form>
  );
};
