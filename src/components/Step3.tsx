import { Box, Typography } from "@mui/material";
import { Movie } from "../App";
import { ButtonComponent } from "./ButtonComponent";

interface Step3Props {
  movie: Movie;
  onClickContinue: () => void;
}

export const Step3 = ({ movie, onClickContinue }: Step3Props) => {
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
          gap: "40px",
        }}
      >
        <img
          style={{
            borderRadius: "16px",
            height: "353px",
          }}
          src={movie.Poster}
          alt="poster"
        ></img>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "24px", lg: "32px" },
              fontWeight: 900,
            }}
          >
            {movie.Title}
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 400,
            }}
          >
            {movie.Year}
          </Typography>
        </Box>
      </Box>
      <ButtonComponent title="Complete" onClick={onClickContinue} />
    </Box>
  );
};
