"use client";

import emailjs from "@emailjs/browser";

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

      // const res = await emailjs.send(
      //   serviceID,
      //   templateID,
      //   emailParams,
      //   userID
      // );

      // if (res.status === 200) {
      //   alert("Message sent successfully!");
      //   target.reset();
      // }
    } catch (error) {
      alert("Failed to send message. Please try again later.");
      console.error(error);
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
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full md:w-1/2 p-2 border-2 border-gray-200 bg-white"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full md:w-1/2 p-2 border-2 border-gray-200 bg-white"
            required
          />
        </div>

        {/* Email + Phone */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Please enter a valid email"
            className="w-full p-2 border-2 border-gray-200 bg-white"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone (e.g., 1234567890)"
            className="w-full p-2 border-2 border-gray-200 bg-white"
            pattern="^\d{10}$"
            title="Please enter a 10-digit Phone Number, e.g., 9876543210"
            required
          />
        </div>

        {/* Postal Code + School Year */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code (e.g., M5V3L9)"
            className="w-full p-2 border-2 border-gray-200 bg-white"
            pattern="^[ABCEGHJKLMNPRSTVXYabceghjklmnprstvxy]{1}\d{1}[A-Za-z]{1} *\d{1}[A-Za-z]{1}\d{1}$"
            title="Please enter a valid Postal Code, e.g., M5V3L9"
            required
          />
          <select
            name="schoolYear"
            className="w-full p-2 border-2 border-gray-200 bg-white h-[2.5rem]"
            defaultValue=""
            required
          >
            <option value="" disabled hidden>
              Current School Year
            </option>
            <option value="Elementary K-5">Elementary K-5</option>
            <option value="Middle School 6-8">Middle School 6-8</option>
            <option value="High School 9-12">High School 9-12</option>
            <option value="College University Student">
              College / University Student
            </option>
            <option value="Adult">Adult</option>
          </select>
        </div>

        {/* Learning Needs */}
        <textarea
          name="learningNeeds"
          placeholder="Please share any challenges your student faces as well as their goals or learning preferences..."
          className="w-full p-2 border-2 border-gray-200 bg-white"
          rows={4}
          required
        ></textarea>

        {/* Availability */}
        <textarea
          name="availability"
          placeholder="Please include your availability/ preferred method of communication for a consultation, or leave blank if you just have a question."
          className="w-full p-2 border-2 border-gray-200 bg-white"
          rows={3}
          required
        ></textarea>

        {/* Referral Source */}
        <select
          name="referralSource"
          className="w-full p-2 border-2 border-gray-200 bg-white h-[2.5rem]"
          defaultValue=""
          required
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
      </form>
    </div>
  );
}
