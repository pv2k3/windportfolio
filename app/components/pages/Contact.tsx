"use client";

import React, { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Clock,
  Send,
} from "lucide-react";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (): void => {
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col overflow-hidden">
      <h1 className="text-[clamp(1.5rem,2.5vw,1.875rem)] text-center mb-2 font-bold">
        Contact
      </h1>

      <p className="text-center text-slate-300 px-4 mb-4 text-sm">
        Have a project in mind or just want to connect?
      </p>

      <div className="flex-1 overflow-y-auto glass-scroll px-4 pb-6">
        <div className="flex flex-col gap-6 items-center">
          <div className="flex flex-wrap gap-6 justify-center w-full">
            <div className="flex-1 min-w-[260px] max-w-md bg-slate-800 rounded-xl p-5 shadow-xl border border-slate-700 flex flex-col gap-4">
              <h2 className="text-[clamp(1.05rem,2vw,1.25rem)] font-semibold">
                Direct Contact
              </h2>

              <a
                href="mailto:vermapriyanshu001@gmail.com"
                className="flex items-center gap-3 p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition"
              >
                <Mail className="w-5 h-5 text-slate-300" />
                <span className="text-sm break-all">
                  vermapriyanshu001@gmail.com
                </span>
              </a>

              <a
                href="https://github.com/pv2k3"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition"
              >
                <Github className="w-5 h-5 text-slate-300" />
                <span className="text-sm">github.com/pv2k3</span>
              </a>

              <a
                href="https://linkedin.com/in/priyanshu-verma-2k3/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition"
              >
                <Linkedin className="w-5 h-5 text-slate-300" />
                <span className="text-sm">Priyanshu Verma</span>
              </a>
            </div>

            <div className="flex-1 min-w-[260px] max-w-md bg-slate-800 rounded-xl p-5 shadow-xl border border-slate-700 flex flex-col gap-4">
              <h2 className="text-[clamp(1.05rem,2vw,1.25rem)] font-semibold flex items-center gap-2">
                <Clock className="w-5 h-5 text-slate-300" />
                Availability
              </h2>

              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-300">Mon – Fri</span>
                  <span className="text-slate-200">9 AM – 6 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Saturday</span>
                  <span className="text-slate-200">10 AM – 4 PM</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>

              <div className="mt-2 p-3 bg-slate-700 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-slate-200 text-sm font-medium">
                    Currently Available
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Response time: within 24 hours
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-4xl bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700">
            <h2 className="text-[clamp(1.1rem,2vw,1.3rem)] font-semibold flex items-center gap-2 mb-4">
              <Send className="w-5 h-5 text-slate-300" />
              Send a Message
            </h2>

            <div className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm bg-slate-700 border border-slate-600 rounded-lg outline-none focus:ring-2 focus:ring-slate-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm bg-slate-700 border border-slate-600 rounded-lg outline-none focus:ring-2 focus:ring-slate-500"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm bg-slate-700 border border-slate-600 rounded-lg outline-none resize-none focus:ring-2 focus:ring-slate-500"
              />

              <button
                onClick={handleSubmit}
                className="bg-slate-600 hover:bg-slate-500 text-white font-semibold py-2.5 rounded-lg transition text-sm"
              >
                {submitted ? "Message Sent!" : "Send Message"}
              </button>

              {submitted && (
                <p className="text-slate-300 text-xs text-center">
                  Thank you! I'll get back to you soon.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}