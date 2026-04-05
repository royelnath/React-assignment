export default function Submit() {
  return (
    <div className="submit-success-container">
      {/* Visual Success Indicator */}
      <div className="success-icon">
        ✓
      </div>

      <h1>Message Sent!</h1>
      <p>Thank you for reaching out. I will contact you soon.</p>

      <a href="/" className="home-btn">
        Go Back Home
      </a>
    </div>
  );
}