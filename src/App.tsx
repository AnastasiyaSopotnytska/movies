import { Box } from "@mui/system";
import { SetStateAction, useState, useEffect } from "react";
import { getMoviesData } from "./api/api";
import { Header } from "./components/Header";
import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";
import { Step4 } from "./components/Step4";

export interface Movie {
  Poster: string;
  Title: string;
  Year: string;
}

export const App = () => {
  const [percent, setPercent] = useState<number>(0);
  const [step, setStep] = useState<number>(1);
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [movie, setMovie] = useState<Movie>();
  const [isError, setIsError] = useState(false);

  const handleChangeGenre = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedGenre(event.target.value);
    setPercent(10);
    localStorage.setItem("genre", event.target.value as string);
  };

  const handleChangeTitle = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setIsError(/^[^a-zA-Z]*$/.test(event.target.value as string));
    setTitle(event.target.value);
  };

  useEffect(() => {
    const storedGenre = localStorage.getItem("genre");
    const storedTitle = localStorage.getItem("title");
    if (storedGenre) {
      setSelectedGenre(storedGenre);
      setPercent(10);
    }
    if (storedTitle) {
      setTitle(storedTitle);
    }
  }, []);

  const getFilm = () => {
    localStorage.setItem("title", title);
    getMoviesData(title)
      .then((data) => {
        setPercent(100);
        if (data.Response === 'True') {
          setMovie(data.Search[0]);
          setStep(3);
        } else {
          setStep(4)
        }
      })
      .catch((error) => console.error(error));
  };

  const onComplete = () => {
    localStorage.clear();
    setTitle("");
    setSelectedGenre("");
    setStep(1);
  };
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header percent={percent} step={step} setStep={setStep} />
      {step === 1 && (
        <Step1
          selectedGenre={selectedGenre}
          handleChange={handleChangeGenre}
          onClickContinue={() => {
            setPercent(60);
            setStep(2);
          }}
        />
      )}
      {step === 2 && (
        <Step2
          title={title}
          isError={isError}
          handleChange={handleChangeTitle}
          onClickContinue={() => getFilm()}
        />
      )}
      {step === 3 && movie && (
        <Step3 movie={movie} onClickContinue={onComplete} />
      )}
      {step === 4 && movie && (
        <Step4 />
      )}
    </Box>
  );
};
