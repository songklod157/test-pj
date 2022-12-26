import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, {useState } from "react";
import styles from "../styles/Home.module.css";
import StartPage from "../src/component";
import QuizData from "../src/data/quiz.json";
import Question from "../src/component/Question";
import End from "../src/component/End";
import Modal from "../src/component/Modal";

export default function Home() {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const quizStartHandler = () => {
    setStep(2);
  }

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
  }
  return (
    <div className={styles.container}>
      {step === 1 && <StartPage handleStart={quizStartHandler} />}
      {step === 2 && (
        <Question
          data={QuizData.data[activeQuestion]}
          onAnswerUpdate={setAnswers}
          numberOfQuestions={QuizData.data.length}
          activeQuestion={activeQuestion}
          onSetActiveQuestion={setActiveQuestion}
          onSetStep={setStep}
        />
      )}
      {step === 3 && (
        <End
          results={answers}
          data={QuizData.data}
          onReset={resetClickHandler}
        />
      )}

      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          results={answers}
          data={QuizData.data}
        />
      )}
    </div>
  );
}
