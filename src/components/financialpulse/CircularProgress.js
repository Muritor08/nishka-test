import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularLoader({ showCircularLoader }) {
  return (
    <div
      style={{
        position: "fixed",
        height: "100vh",
        width: "100vw",
        top: 0,
        left: 0,
        display: showCircularLoader ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255,255,255,0.4)",
        zIndex: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: 100,
          height: 100,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(230,230,230)",
          borderRadius: 3 
        }}
      >
        <CircularProgress />
      </Box>
    </div>
  );
}
