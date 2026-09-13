import React, { useState } from "react";
export default function Contact() {
  // Only confirmation visibility is stored; editing any field clears the preview.
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="contact-layout">
      <div>
        <p className="eyebrow">Let’s talk</p>
        <h1>
          Something
          <br />
          in mind?
        </h1>
        <p className="lede">
          Great work starts with a conversation.
          <br />
          Tell us what you’re thinking.
        </p>
        <p className="demo-note">
          This is a theme demo. The form previews a confirmation only; nothing
          is sent or stored.
        </p>
      </div>
      <form
        aria-label="Demo contact"
        onSubmit={(event) => {
          // Keep this demo local: prevent native submission and show a confirmation only.
          event.preventDefault();
          setSubmitted(true);
        }}
        onChange={() => setSubmitted(false)}
      >
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          placeholder="Alex Taylor"
          required
          maxLength={100}
        />
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="alex@example.com"
          required
        />
        <label htmlFor="message">What are you working on?</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="A little about your idea…"
          required
          maxLength={2000}
        />
        <button className="button" type="submit">
          Preview submission <span aria-hidden="true">↗</span>
        </button>
        {submitted && (
          <p role="status" className="success">
            Thanks for trying the demo. Your message has not been sent or saved.
          </p>
        )}
      </form>
    </div>
  );
}
