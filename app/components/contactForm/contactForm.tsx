"use client";

import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

export default function ContactForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const honeypot = (target.elements.namedItem("website") as HTMLInputElement)
      .value;

    if (honeypot) {
      // Bot detected
      return;
    }

    const showSuccessToastMessage = () => {
      toast.success("Thank you! We will get back to you within 24 hours.", {
        position: "top-right",
        style: {
          background: "#ffffff",
          color: "#000000",
        },
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#bf9255"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1 17l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" />
          </svg>
        ),
      });
    };

    const showFailureToastMessage = () => {
      toast.error(
        "Oops! There was an error sending your message. Please try again.",
        {
          position: "top-right",
          style: {
            background: "#ffffff",
            color: "#000000",
          },
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#bf9255"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1 17l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" />
            </svg>
          ),
        }
      );
    };

    // Gather user input from the form
    const formData = new FormData(target);
    const emailParams = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      postalCode: formData.get("postalCode"),
      schoolYear: formData.get("schoolYear"),
      learningNeeds: formData.get("learningNeeds"),
      availability: formData.get("availability"),
      referralSource: formData.get("referralSource"),
      startTime: formData.get("startTime"),
    };

    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      const res = await emailjs.send(
        serviceID,
        templateID,
        emailParams,
        userID
      );

      if (res.status === 200) {
        showSuccessToastMessage();
        target.reset();
      }
    } catch (error) {
      showFailureToastMessage();
    }
  };

  return (
    <div
      id="contact"
      className="w-full lg:w-3/5 background-muted px-6 py-8 lg:px-17 lg:py-20 subtext scroll-mt-20"
    >
      <h3 className="heading-text mb-6 text-center">Book A Consultation</h3>
      <div
        className="underline"
        style={{ margin: "-1.3rem auto 2.5rem" }}
      ></div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <input
          type="text"
          name="website"
          className="absolute -left-full -top-full"
          autoComplete="off"
        />

        {/* Student Name */}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="w-full md:w-1/2 p-2 border-2 border-gray-200 bg-white"
          required
          autoComplete="given-name"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="w-full md:w-1/2 p-2 border-2 border-gray-200 bg-white"
          required
          autoComplete="family-name"
        />

        {/* Email + Phone */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Please enter a valid email"
          className="w-full p-2 border-2 border-gray-200 bg-white"
          required
          autoComplete="email"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone (e.g., 1234567890)"
          className="w-full p-2 border-2 border-gray-200 bg-white"
          pattern="^\d{10}$"
          title="Please enter a 10-digit Phone Number, e.g., 9876543210"
          required
          autoComplete="tel"
        />

        {/* Postal Code */}
        <input
          type="text"
          name="postalCode"
          placeholder="Postal Code (e.g., M5V3L9)"
          className="w-full p-2 border-2 border-gray-200 bg-white"
          pattern="^[ABCEGHJKLMNPRSTVXYabceghjklmnprstvxy]{1}\d{1}[A-Za-z]{1} *\d{1}[A-Za-z]{1}\d{1}$"
          title="Please enter a valid Postal Code, e.g., M5V3L9"
          required
          autoComplete="postal-code"
        />

        {/* School Year */}
        <select
          name="schoolYear"
          className="w-full p-2 border-2 border-gray-200 bg-white h-[2.5rem]"
          defaultValue=""
          autoComplete="education-level"
        />

        {/* Learning Needs */}
        <textarea
          name="learningNeeds"
          placeholder="Please share your student’s challenges, goals, or learning preferences..."
          className="w-full p-2 border-2 border-gray-200 bg-white"
          rows={4}
          title="Provide details about your student’s challenges and goals to help us tailor tutoring."
          required
          autoComplete="off"
        ></textarea>

        {/* Availability */}
        <textarea
          name="availability"
          placeholder="Share your availability and preferred contact method for a consultation."
          className="w-full p-2 border-2 border-gray-200 bg-white"
          rows={3}
        ></textarea>

        {/* Referral Source */}
        <select
          name="referralSource"
          className="w-full p-2 border-2 border-gray-200 bg-white h-[2.5rem]"
          defaultValue=""
        >
          <option value="" disabled hidden>
            How did you hear about us?
          </option>
          <option value="google">Google</option>
          <option value="friend">Friend/Referral</option>
          <option value="school">School</option>
          <option value="social">Social Media</option>
          <option value="other">Other</option>
        </select>

        {/* Start Time */}
        <input
          type="text"
          name="startTime"
          placeholder="How soon do you want to start?"
          className="w-full p-2 border-2 border-gray-200 bg-white"
        />

        {/* Submit */}
        <button
          type="submit"
          className="p-3 w-full md:w-1/6 border-none shadow-2xl bg-[var(--background-dark)] text-[var(--text-on-dark)] transition-colors duration-200 hover:bg-[var(--background-accent)] active:bg-[var(--background-accent)]"
        >
          Submit
        </button>
        <ToastContainer theme="light" />
      </form>
    </div>
  );
}
