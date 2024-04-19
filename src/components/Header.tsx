import { Box, Button, LinearProgress, Typography } from "@mui/material";
import { ChevronLeftIcon, MenuIcon } from "lucide-react";
import frame from "../assets/frame.svg";

interface HeaderProps {
  percent: number;
  step: number;
  setStep: (step: number) => void;
}

export const Header = ({ percent, step, setStep }: HeaderProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        height: "80px",
        maxWidth: "700px",
        backgroundImage: `url(${frame})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          width: "100%",
          gap: "8px",
          maxWidth: "450px",
          display: "flex",
          flexDirection: "column",
          padding: "14px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            disabled={step === 1}
            onClick={() => {
              if (step === 4) {
                setStep(step - 2)
              } else {
                setStep(step - 1);
              }
            }}
            sx={{
              color: "black",
              height: "20px",
              width: "20px",
              minWidth: "20px",
              padding: 0,
            }}
          >
            <ChevronLeftIcon size={20} />
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <Typography>{`${percent}%`}</Typography>
            <Button
              sx={{
                color: "rgba(33, 33, 33, 1)",
                height: "20px",
                width: "20px",
                minWidth: "20px",
                padding: 0,
              }}
            >
              <MenuIcon size={20} />
            </Button>
          </Box>
        </Box>
        <LinearProgress
          variant="determinate"
          value={percent}
          sx={{
            backgroundColor: "white",
            borderRadius: "2px",
            ".MuiLinearProgress-bar": {
              background:
                "linear-gradient(to bottom, rgba(74, 214, 187, 1), rgba(56, 165, 143, 1))",
            },
          }}
        />
      </Box>
    </Box>
  );
};
