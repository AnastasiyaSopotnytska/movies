import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import { SetStateAction, useState } from "react";
import drama from "../assets/drama.png";
import comedy from "../assets/comedy.png";
import action from "../assets/action.png";
import thriller from "../assets/thriller.png";
import science from "../assets/science.png";
import { ButtonComponent } from "./ButtonComponent";
import { CircleCheckIcon } from "lucide-react";

interface Step1Props {
  selectedGenre: string;
  handleChange: (event: { target: { value: SetStateAction<string> } }) => void;
  onClickContinue: () => void;
}

export const Step1 = ({
  selectedGenre,
  handleChange,
  onClickContinue,
}: Step1Props) => {
  const genre = [
    {
      name: "Drama",
      icon: drama,
    },
    {
      name: "Comedy",
      icon: comedy,
    },
    {
      name: "Action",
      icon: action,
    },
    {
      name: "Thriller",
      icon: thriller,
    },
    {
      name: "Science Fiction",
      icon: science,
    },
  ];
  return (
    <Box
      sx={{
        width: { xs: "90%", md: "450px" },
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        maxWidth: "450px",
        alignItems: "center",
        padding: "14px",
        height: "80vh",
      }}
    >
      <Box
        sx={{
          width: "100%",
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
          Your favorite movie genre?
        </Typography>
        <FormControl
          component="fieldset"
          sx={{
            width: "100%",
          }}
        >
          <RadioGroup
            name="movie-genre"
            value={selectedGenre}
            onChange={handleChange}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              width: "100%",
            }}
          >
            {genre.map((item) => (
              <Box
                key={item.name}
                sx={{
                  display: "flex",
                  border: 2,
                  borderColor:
                    selectedGenre === item.name
                      ? "rgba(64, 188, 163, 1)"
                      : "rgba(215, 220, 223, 1)",
                  borderRadius: "8px",
                  paddingX: "20px",
                  paddingY: "16px",
                }}
              >
                <FormControlLabel
                  value={item.name}
                  labelPlacement="start"
                  control={
                    <Radio
                      sx={{
                        color: selectedGenre === item.name ? "#40bca3" : "rgba(33, 33, 33, 1)",
                        opacity: selectedGenre === item.name ? "100%" : "60%",
                      }}
                      checkedIcon={<CircleCheckIcon stroke="white" fill="#40bca3" size="26" />}
                    />
                  }
                  label={
                    <Box
                      sx={{
                        display: "flex",
                        gap: "8px",
                      }}
                    >
                      <img
                        style={{
                          height: "24px",
                        }}
                        src={item.icon}
                        alt="emodji"
                      ></img>
                      {item.name}
                    </Box>
                  }
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                />
              </Box>
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
      <ButtonComponent
        title="Continue"
        disabled={selectedGenre.length === 0}
        onClick={onClickContinue}
      />
    </Box>
  );
};
