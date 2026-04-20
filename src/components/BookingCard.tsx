"use client";

import { useState } from "react";

type Slot = {
  id: string;
  day: string;
  time: string;
};

const SLOTS: Slot[] = [
  { id: "tue-1030", day: "Tue · 21 Apr", time: "10:30 AM" },
  { id: "wed-200", day: "Wed · 22 Apr", time: "2:00 PM" },
  { id: "wed-400", day: "Wed · 22 Apr", time: "4:00 PM" },
  { id: "thu-900", day: "Thu · 23 Apr", time: "9:00 AM" },
  { id: "thu-1100", day: "Thu · 23 Apr", time: "11:00 AM" },
  { id: "fri-300", day: "Fri · 24 Apr", time: "3:00 PM" },
];

type BookingState = "idle" | "sending" | "sent";

export function BookingCard() {
  const [currentSlot, setCurrentSlot] = useState<string>("wed-200");
  const [bookingState, setBookingState] = useState<BookingState>("idle");

  const selected = SLOTS.find((s) => s.id === currentSlot) ?? SLOTS[1];
  const [weekday, date] = selected.day.split(" · ");
  const buttonLabel =
    bookingState === "sending"
      ? "Sending calendar invite…"
      : bookingState === "sent"
        ? "✓ Invite sent — check your inbox"
        : `Confirm · ${weekday} ${date}, ${selected.time} ET`;

  const handleConfirm = () => {
    if (bookingState !== "idle") return;
    setBookingState("sending");
    setTimeout(() => setBookingState("sent"), 700);
  };

  return (
    <div className="book-card">
      <div>
        <div className="label">Book a 30-minute intro</div>
        <div className="book-heading">Next available — this week</div>
      </div>
      <div className="slots">
        {SLOTS.map((slot) => (
          <div
            key={slot.id}
            className={`slot${slot.id === currentSlot ? " active" : ""}`}
            onClick={() => {
              setCurrentSlot(slot.id);
              if (bookingState !== "idle") setBookingState("idle");
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setCurrentSlot(slot.id);
                if (bookingState !== "idle") setBookingState("idle");
              }
            }}
          >
            <span className="day">{slot.day}</span>
            {slot.time}
          </div>
        ))}
      </div>
      <button
        className={`book-btn${bookingState === "sent" ? " sent" : ""}`}
        onClick={handleConfirm}
        disabled={bookingState !== "idle"}
      >
        <span>{buttonLabel}</span>
        <span>→</span>
      </button>
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
