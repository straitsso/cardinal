export function BookingCard() {
  return (
    <div className="book-card">
      <div>
        <div className="label">Book a 30-minute intro</div>
        <div className="book-heading">Schedule a call with Joel</div>
      </div>
      <a
        className="book-btn"
        href="https://calendly.com/joel-cardinalprincipals/30min"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Open Calendly</span>
        <span>→</span>
      </a>
      <div className="book-alt">
        Prefer email?{" "}
        <a href="mailto:joel@cardinalprincipals.com">
          joel@cardinalprincipals.com
        </a>
        <br />
        30-minute intro · video or phone · no materials required.
      </div>
    </div>
  );
}
