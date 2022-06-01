import React from "react";

export default function VerificationSent() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 30,
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: 20,
      }}
    >
      <img
        src="undraw_Envelope_re_f5j4.svg"
        alt=""
        style={{
          width: 300,
        }}
      />
      <div>
        <h2 class="fs-2">
          A verification link has been sent to your email address.
        </h2>
        <h3 class="fs-4">You are just one step away from successfully registering.</h3>
      </div>
      <h6 className="fs-6">
        For issues/queries, email us at{" "}
        <a href="mailto:contact@nishkaera.com">contact@nishkaera.com</a>.
      </h6>
    </div>
  );
}
