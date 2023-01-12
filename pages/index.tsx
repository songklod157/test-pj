import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import StartPage from "../src/component";
import Question from "../src/component/Question";
import End from "../src/component/End";
import Modal from "../src/component/Modal";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const serverSideProps = await fetch("http://localhost:3500/data");
  const data = await serverSideProps.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      QuizData: data,
    },
  };
};

const Home = ({ QuizData }: any) => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [Qlist, setQlist] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3500/data")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setQlist(data);
  //     });
  // }, []);

  const quizStartHandler = () => {
    setStep(2);
  };

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
  };
  return (
    <div className={styles.container}>
      {step === 1 && <StartPage handleStart={quizStartHandler} />}
      {step === 2 && (
        <Question
          data={QuizData[activeQuestion]}
          onAnswerUpdate={setAnswers}
          numberOfQuestions={QuizData.length}
          activeQuestion={activeQuestion}
          onSetActiveQuestion={setActiveQuestion}
          onSetStep={setStep}
        />
      )}
      {step === 3 && (
        <End results={answers} data={QuizData} onReset={resetClickHandler} />
      )}

      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          results={answers}
          data={QuizData}
        />
      )}
    </div>
  );
};
export default Home;
