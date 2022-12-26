import {
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";

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
    <Card sx={{ minWidth: 400, textAlign: "center", padding: 3 }}>
      <CardContent sx={{ minWidth: 400, textAlign: "center" }}>
        <div className="content">
          <Typography
            sx={{ fontSize: 18, textAlign: "center" }}
            color="text.secondary"
            gutterBottom
          >
            {data.question}
          </Typography>
          <div className="control" ref={radiosWrapper}>
            {data.choices.map((choice: any, i: number) => (
              <label className="radio has-background-light" key={i}>
                <input type="radio" name="answer" value={choice} onChange={changeHandler} />
                {choice}
              </label>
            ))}
          </div>
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
          <Button variant="contained" onClick={nextClickHandler}>
            Go Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Question;
