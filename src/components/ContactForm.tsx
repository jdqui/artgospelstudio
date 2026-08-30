"use client";

import { useState } from "react";
import Button from "@/components/Button";

const SERVICES = [
  "Branding",
  "Digital (Website, Email, Ads, Illustrations, etc)",
  "Print (Packaging, Flyers, Booth, etc)",
];

const WEB3FORMS_ACCESS_KEY = "a3d2bf0c-e333-47dd-a4ae-a121b8c68d43";

export default function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);
    setStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    // Optional: makes the email subject/formatting nicer
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const service = formData.get("service");
    formData.append("subject", `New inquiry: ${service} — from ${firstname} ${lastname}`);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(result.message ?? "Something went wrong.");
      }
    } catch (err) {
      console.error("Send failed:", err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full p-6 sm:p-10 border-solid border-1 rounded-lg border-[var(--secondary-accent)]">
      <label> Name </label>
      <div className="name flex flex-row justify-between w-full gap-4">
        <input
          type="text"
          name="firstname"
          placeholder="First name"
          required
          className="text-sm border-b border-[var(--secondary-background)]/30 bg-transparent w-full lg:w-1/2 py-2 outline-none"
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last name"
          required
          className="text-sm border-b border-[var(--secondary-background)]/30 bg-transparent w-full lg:w-1/2 py-2 outline-none"
        />
      </div>
      <label> Email </label>
      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
        className="text-sm border-b border-[var(--primary-font-color)]/30 bg-transparent py-2 outline-none"
      />

      <fieldset className="flex flex-col gap-2">
        <legend className="mb-4">How can I help?</legend>
        {SERVICES.map((service) => (
          <label
            key={service}
            className="flex items-center gap-2 text-sm cursor-pointer"
          >
            <input
              type="radio"
              name="service"
              value={service}
              required
              className="
                appearance-none
                w-4 h-4 rounded-full shrink-0
                border-1 border-[var(--secondary-accent)]
                p-[2px]
                bg-clip-content
                checked:bg-[var(--secondary-accent)]
                cursor-pointer
                transition-colors
              "
            />
            {service}
          </label>
        ))}
      </fieldset>

      <label> Please share anything else you'd like for me to know </label>
      <textarea
        name="message"
        placeholder="Write message here"
        required
        rows={5}
        className="text-xs border-b border-[var(--primary-font-color)]/30 bg-transparent py-2 outline-none resize-none"
      />

      <Button type="submit" disabled={isPending} variant="solid" className="mt-2 self-start">
        {isPending ? "Sending..." : "Send Message"}
      </Button>

      {status === "success" && (
        <p className="text-sm text-green-600">Thanks! Your message has been sent.</p>
      )}
      {status === "error" && <p className="text-sm text-red-600">{errorMsg}</p>}
    </form>
  );
}