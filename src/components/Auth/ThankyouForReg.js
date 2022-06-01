import React from "react";

export default function ThankyouForReg() {
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
        src="undraw_Welcome_re_h3d9.svg"
        alt=""
        style={{
          width: 300,
        }}
      />
      <div>
        <h2 class="fs-2">Your account has been successfully verified.</h2>
        <h3 class="fs-4">Thank you for registering with us!</h3>
      </div>
      <a href="/login" className="btn btn-primary">
        Login
      </a>
      <h6 className="fs-6">
        For issues/queries, email us at{" "}
        <a href="mailto:contact@nishkaera.com">contact@nishkaera.com</a>.
      </h6>
    </div>
  );
}
