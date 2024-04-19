import { Box, Typography, TextField } from "@mui/material";
import { SetStateAction } from "react";
import { ButtonComponent } from "./ButtonComponent";

interface Step2Props {
  title: string;
  isError: boolean;
  handleChange: (event: { target: { value: SetStateAction<string> } }) => void;
  onClickContinue: () => void;
}

export const Step2 = ({
  title,
  handleChange,
  isError,
  onClickContinue,
}: Step2Props) => {
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
        <Typography
          sx={{
            fontSize: "24px",
            width: "100%",
            marginBottom: "16px",
            fontWeight: 900,
          }}
        >
          Enter movie title
        </Typography>
        <TextField
          id="outlined-basic"
          placeholder="Movie title here"
          fullWidth
          variant="outlined"
          value={title}
          onChange={handleChange}
          error={isError}
          InputProps={{
            style: {
              borderRadius: "8px",
              borderColor: "rgba(64, 188, 163, 1)",
            },
          }}
          sx={{
            border: 1,
            borderColor: "rgba(215, 220, 223, 1)",
            borderRadius: "8px",
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(64, 188, 163, 1)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(64, 188, 163, 1)",
            },
            "&:focus .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(64, 188, 163, 1)",
            },
            ".MuiOutlinedInput-root": {
              borderColor: "rgba(64, 188, 163, 1)",
            },
          }}
        />
        {isError && (
          <span style={{ color: "red", width: "100%", marginTop: "4px" }}>
            Error text
          </span>
        )}
      </Box>
      <ButtonComponent
        title="Continue"
        disabled={title.length === 0 || isError}
        onClick={onClickContinue}
      />
    </Box>
  );
};
