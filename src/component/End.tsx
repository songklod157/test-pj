import { Button, Card, CardContent, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";

interface Props {
  results: any;
  data: any;
  onReset: any;
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

const End: React.FC<Props> = ({ results, data, onReset }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result: any, index: number) => {
      if (result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);

  return (
    <StyledCard>
      <CardContent sx={{ marginBottom: 3 }}>
        <Typography sx={{ fontSize: 36 }} color="white" gutterBottom>
          คะแนน
        </Typography>
        <Typography sx={{ fontSize: 36 }} color="white" gutterBottom>
          ได้ {correctAnswers} จาก {data.length}
        </Typography>
        <ButtonStyle onClick={onReset} variant="contained">
          Try again
        </ButtonStyle>
      </CardContent>
    </StyledCard>
  );
};

export default End;
