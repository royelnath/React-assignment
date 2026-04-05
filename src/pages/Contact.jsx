export default function Contact() {
  const handleMessage = () => {
    console.info("I will contact you soon....");
  };

  return (
    <div className="contact-container">
      <form action="/submit">
        <h2 style={{ textAlign: 'center', marginBottom: '10px', fontWeight: 'bold' }}>
          Get in Touch
        </h2>
        <input type="text" placeholder="Enter your name" required />
        <input type="email" placeholder="Enter your email" required />
        <textarea name="message" placeholder="How can I help you?"></textarea>

        {/* Fixed: Wrapped console.info in a function */}
        <button type="submit" onClick={handleMessage}>
          Send Message
        </button>
      </form>
    </div>
  );
}