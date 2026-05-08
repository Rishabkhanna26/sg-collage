"use client";

import { useState } from "react";

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  const phoneNumber = "919876543210";
  const message = "Hello! I would like to know more about SQ Group of Colleges.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Contact us on WhatsApp"
    >
      <div
        className={`absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white shadow-lg transition-all duration-300 ${
          hovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-2 pointer-events-none"
        }`}
      >
        Chat with us on WhatsApp
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full">
          <div className="border-8 border-transparent border-r-gray-900" />
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-60" />
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:bg-[#20BA5A] hover:scale-110 hover:shadow-xl">
          <svg viewBox="0 0 32 32" className="h-8 w-8" fill="currentColor">
            <path d="M16 0C7.164 0 0 7.164 0 16c0 2.825.738 5.488 2.031 7.794L0 32l8.394-2.031C10.7 31.262 13.363 32 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333c-2.456 0-4.794-.669-6.794-1.831l-.488-.294-5.056 1.225 1.225-5.056-.294-.488C3.336 20.794 2.667 18.456 2.667 16 2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333z" />
            <path d="M23.794 19.794c-.394-.2-2.331-1.15-2.694-1.281-.363-.131-.625-.2-.888.2-.262.4-1.019 1.281-1.25 1.544-.231.262-.462.294-.856.094-.394-.2-1.663-.613-3.169-1.956-1.169-1.044-1.956-2.331-2.188-2.725-.231-.394-.025-.606.175-.806.181-.181.394-.469.594-.706.2-.231.262-.394.394-.656.131-.262.069-.494-.031-.694-.1-.2-.888-2.137-1.219-2.925-.319-.769-.644-.669-.888-.681-.231-.013-.494-.013-.756-.013s-.694.1-1.056.494c-.363.394-1.381 1.35-1.381 3.294s1.413 3.819 1.606 4.081c.2.262 2.825 4.313 6.844 6.05.956.413 1.7.656 2.281.844.956.306 1.831.262 2.519.156.769-.113 2.331-.956 2.663-1.875.331-.919.331-1.706.231-1.875-.1-.169-.363-.269-.756-.469z" />
          </svg>
        </div>
        <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-green-400 border-2 border-white shadow-sm" />
      </div>
    </a>
  );
}
