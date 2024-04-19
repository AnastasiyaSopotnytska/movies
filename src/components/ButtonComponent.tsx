import { Button, SxProps } from "@mui/material";

interface ButtonComponentProps {
  title: string;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick: () => void;
  isRevert?: boolean;
  sx?: SxProps;
}

export const ButtonComponent = (props: ButtonComponentProps) => {
  const {
    title,
    onClick,
    startIcon,
    endIcon,
    disabled,
    sx,
    isRevert = false,
    ...other
  } = props;
  return (
    <Button
      variant="text"
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      disabled={disabled}
      sx={{
        textTransform: "capitalize",
        letterSpacing: "2px",
        fontSize: "16px",
        fontWeight: "600",
        lineHeight: "30px",
        color: "white",
        height: "56px",
        width: "100%",
        padding: "16px",
        marginY: "16px",
        borderRadius: "8px",
        backgroundColor: "rgba(64, 188, 163, 1)",
        ":hover": {
          opacity: "80%",
          backgroundColor: "rgba(64, 188, 163, 1)",
          color: "white",
        },
        ":disabled": {
          opacity: "50%",
          backgroundColor: "rgba(64, 188, 163, 1)",
          color: "white",
        },
        ...sx,
      }}
      {...other}
    >
      {title}
    </Button>
  );
};
