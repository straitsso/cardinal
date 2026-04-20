import { BookingCard } from "./BookingCard";

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div>
            <div className="eyebrow contact-eyebrow">
              <span className="dot" />
              Let&rsquo;s Talk
            </div>
            <h2>
              If you&rsquo;re mid-hold and something isn&rsquo;t{" "}
              <em>compounding</em> — let&rsquo;s talk.
            </h2>
          </div>
          <BookingCard />
        </div>
      </div>
    </section>
  );
}
