import * as React from "react";
import Circular from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const CircularProgress = (variant:any) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Circular color="inherit" variant={variant} />
    </Box>
  );
};

export default CircularProgress;
