import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const formData = new FormData(form.current);
    const email = formData.get('user_email')?.toString() || '';

    // ✅ Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error('❌ Invalid email format');
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        'service_4e2xu1u',         // ✅ Your actual service ID
        'template_al16q29',        // ✅ Your template ID
        form.current,
        'uCmZp_MXhzlgw9zE4'        // ✅ Your public key
      )
      .then(
        () => {
          toast.success('✅ Message sent successfully!');
          console.log('📩 Sent data:', {
            name: formData.get('user_name'),
            email: formData.get('user_email'),
            message: formData.get('message'),
          });
          form.current?.reset();
        },
        (err) => {
          console.error('❌ EmailJS Error:', err);
          toast.error('❌ Failed to send. Please try again.');
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="bg-white dark:bg-gray-900 px-4 py-12 max-w-xl mx-auto rounded-2xl shadow-md mt-10"
    >
      <Toaster position="top-center" reverseOrder={false} />
      {/* <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
        Contact Me
      </h2> */}

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="user_name"
          required
          placeholder="Your Name"
          className="p-3 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
        <input
          type="email"
          name="user_email"
          required
          placeholder="Your Email"
          className="p-3 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Your Message"
          className="p-3 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
        <input type="hidden" name="time" value={new Date().toLocaleString()} />

        <button
          type="submit"
          className={`flex items-center justify-center gap-2 bg-blue-600 text-yellow-200 px-4 py-2 rounded hover:bg-blue-700 ${
            loading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
          disabled={loading}
        >
          {loading && (
            <svg
              className="animate-spin h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
          )}
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
