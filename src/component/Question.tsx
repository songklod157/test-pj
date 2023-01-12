import {
  Box,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";

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

interface Props {
  data: any;
  onAnswerUpdate: any;
  numberOfQuestions: any;
  activeQuestion: any;
  onSetActiveQuestion: any;
  onSetStep: any;
}

const Question: React.FC<Props> = ({
  data,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
}) => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const radiosWrapper = useRef(null);

  useEffect(() => {
    // if (!radiosWrapper.current) return;
    // const findCheckedInput = radiosWrapper.current.selectQuery("input:checked");
    // if (findCheckedInput) {
    //   findCheckedInput.checked = false;
    // }
    // const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
    // if(findCheckedInput) {
    //   findCheckedInput.checked = false;
    // }
  }, [data]);

  const changeHandler = (e: any) => {
    setSelected(e.target.value);
    if (error) {
      setError("");
    }
  };

  const nextClickHandler = (e: any) => {
    if (selected === "") {
      return setError("Please select one option!");
    }
    onAnswerUpdate((prevState: any) => [
      ...prevState,
      { q: data.question, a: selected },
    ]);
    setSelected("");
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };

  return (
    <StyledCard sx={{ minWidth: 400, padding: 3 }}>
      <CardContent sx={{ minWidth: 400 }}>
        <div className="content">
          <Typography sx={{ fontSize: 26 }} color="white" gutterBottom>
            {data.question}
          </Typography>
          <Box>
            <div ref={radiosWrapper}>
              {data.choices.map((choice: any, i: number) => (
                <Stack direction="row" sx={{ justifyContent:"flex-start"}}>
                  <label className="radio has-background-light" key={i}>
                    <input
                      className="checkmark"
                      type="radio"
                      name="answer"
                      value={choice}
                      onChange={changeHandler}
                    />
                    &nbsp;&nbsp;{choice}
                  </label>
                </Stack>
              ))}
            </div>
          </Box>
          {error && (
            <Typography
              sx={{
                fontSize: 12,
                textAlign: "center",
                color: "red",
                padding: 2,
              }}
            >
              {error}
            </Typography>
          )}
          <ButtonStyle variant="contained" onClick={nextClickHandler}>
            Go Next
          </ButtonStyle>
        </div>
      </CardContent>
    </StyledCard>
  );
};

export default Question;
