import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section className="px-4 md:px-8 py-12 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-400">Contact Me</h2>
      <ContactForm />
    </section>
  );
};

export default Contact;
