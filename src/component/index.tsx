import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
interface Props {
  handleStart: any;
}
const StyledCard = styled(Card)(() => ({
  minWidth: 400,
  minHeight: 250,
  padding: 2,
  textAlign: "center",
  backgroundImage: "linear-gradient(to bottom right, #38A2D7, #1FC5A8)",
  borderRadius: "10px",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
}));
const ButtonStyle = styled(Button)(() => ({
  "&": {
    backgroundColor: "#1FC5A8",
    width: "200px",
    height: "50px",
    borderRadius: "100px",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      backgroundColor: "white",
      color: "black",
    },
    "&:active": {
      transform: "translateY(-1px)",
      boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
    },
    "&::after": {
      content: "''",
      display: "inline-block",
      height: "100%",
      width: "100%",
      position: "absolute",
      borderRadius: "100px",
      top: 0,
      left: 0,
      zIndex: -1,
      transition: "all 0.4s",
    },
  },
}));
const StartPage: React.FC<Props> = ({ handleStart }) => {
  return (
    <StyledCard>
      <CardContent sx={{ marginBottom: 3 }}>
        <Typography sx={{ fontSize: 36 }} color="white" gutterBottom>
          Start Quiz
        </Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ mb: 1.5 }} color="white">
          Good luck !
        </Typography>
      </CardContent>
      <ButtonStyle variant="contained" onClick={handleStart}>
        Start
      </ButtonStyle>
    </StyledCard>
  );
};
export default StartPage;
