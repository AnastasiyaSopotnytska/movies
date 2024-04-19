import { Box, Typography, } from "@mui/material";
import ops from "../assets/ops.png";

export const Step4 = () => {
  return (
    <Box
      sx={{
        width: { xs: "90%", md: "450px" },
        height: "80vh",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        maxWidth: "450px",
        alignItems: "center",
        padding: "14px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          maxWidth: "450px",
          alignItems: "center",
        }}
      >
        <img
          style={{
            height: "135px",
          }}
          src={ops}
          alt="ops"
        ></img>
        <Typography
          sx={{
            fontSize: "24px",
            marginBottom: "16px",
            fontWeight: 900,
          }}
        >
          Oops, no movie found
        </Typography>
      </Box>
    </Box>
  );
};
