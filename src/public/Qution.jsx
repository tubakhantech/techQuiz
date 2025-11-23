import React, { useRef, useState, useEffect } from "react";
import "./Qution.css";
import { useParams } from "react-router-dom";
import data from "./data";
import MyImage from "../assets/logo1.png";

const Qution = () => {
  const { topic } = useParams();
  const questions = data[topic];

  const [index, setIndex] = useState(0);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [startTime, setStartTime] = useState(Date.now());
  const [timeElapsed, setTimeElapsed] = useState(0);
  const timerRef = useRef(null);

  // Add this line here:
  const level = localStorage.getItem("level") || "Beginner";

  const question = questions?.[index];

  const options1 = useRef(null);
  const options2 = useRef(null);
  const options3 = useRef(null);
  const options4 = useRef(null);
  const options_array = [options1, options2, options3, options4];

  useEffect(() => {
    if (!result) {
      if (timerRef.current) clearInterval(timerRef.current);

      timerRef.current = setInterval(() => {
        setTimeElapsed(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [result, startTime]);

  const checkAnswer = (e, answer) => {
    if (!lock) {
      if (question.answer === answer) {
        e.target.classList.add("correct");
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        options_array[question.answer - 1]?.current?.classList.add("correct");
      }
      setLock(true);
    }
  };

  const next = () => {
    if (lock) {
      if (index === questions.length - 1) {
        if (!result) {
          setResult(true);
          clearInterval(timerRef.current);
          saveQuizResult(); // 🎯 Save result + trigger popup
        }
        return;
      }
      setIndex((prev) => prev + 1);
      setLock(false);
      options_array.forEach((option) => {
        option.current?.classList.remove("correct");
        option.current?.classList.remove("wrong");
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setScore(0);
    setLock(false);
    setResult(false);
    setTimeElapsed(0);
    setStartTime(Date.now());

    options_array.forEach((option) => {
      option.current?.classList.remove("correct");
      option.current?.classList.remove("wrong");
    });
  };

  const saveQuizResult = () => {
    const percentage = ((score / questions.length) * 100).toFixed(2);
    const pointsEarned = score * 10;

    const email = localStorage.getItem("email");
    const userList = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = userList.map((user) => {
      if (user.email === email) {
        const previousPoints = user.totalPoints || 0;
        const updatedPoints = previousPoints + pointsEarned;

        let updatedLevel = "Beginner";
        if (updatedPoints >= 100) updatedLevel = "Expert";
        else if (updatedPoints >= 50) updatedLevel = "Intermediate";

        // 🧠 Milestone check
        let lastRewardPoint = user.lastRewardPoint || 0;
        let milestone = Math.floor(updatedPoints / 100) * 100;

        if (milestone > lastRewardPoint && milestone <= 8000) {
          lastRewardPoint = milestone; 

          // 🔔 Trigger Header to show Mystery Box
          setTimeout(() => {
            window.dispatchEvent(new Event("checkMilestone"));
          }, 200);
        }

        return {
          ...user,
          totalPoints: updatedPoints,
          lastScore: percentage,
          recentQuiz: topic,
          level: updatedLevel,
          lastRewardPoint: lastRewardPoint,
        };
      }
      return user;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem(
      "level",
      updatedUsers.find((u) => u.email === email)?.level || "Beginner"
    );
  };

  if (!questions || !question) {
    return <p>⚠️ Invalid topic or questions not found!</p>;
  }

  return (
    <>
      <div className="Quiz-header-container">
        <img src={MyImage} alt="logo" className="Quiz-header-container-logo" />
        <div className="header-title-time-box">
          <div className="Quiz-header-container-title">{level}</div>
          <div className="quiz-timer">Time Taken: {timeElapsed}s</div>
        </div>
      </div>

      <div className="container-body">
        <div className="qution-container">
          <h1 className="qution-header">Quiz: {topic}</h1>
          <hr className="container-line" />

          {!result ? (
            <>
              <h2 className="qution-qution">
                {index + 1}. {question.question}
              </h2>
              <ul className="qution-option">
                <li key="1" ref={options1} onClick={(e) => checkAnswer(e, 1)}>
                  {question.options1}
                </li>
                <li key="2" ref={options2} onClick={(e) => checkAnswer(e, 2)}>
                  {question.options2}
                </li>
                <li key="3" ref={options3} onClick={(e) => checkAnswer(e, 3)}>
                  {question.options3}
                </li>
                <li key="4" ref={options4} onClick={(e) => checkAnswer(e, 4)}>
                  {question.options4}
                </li>
              </ul>
              <button onClick={next} className="qution-button">
                Next
              </button>
              <div className="intex-number">
                {index + 1} of {questions.length}
              </div>
            </>
          ) : (
            <>
              <h2>🎉 Quiz Completed!</h2>
              <div className="result-metrics">
                <p>
                  ✅ Correct Answers: {score} / {questions.length}
                </p>
                <p>
                  🎯 Score Percentage:{" "}
                  {((score / questions.length) * 100).toFixed(2)}%
                </p>
                <p>💡 Points Earned: {score * 10}</p>
                <p>⏱️ Time Taken: {timeElapsed}s</p>
              </div>
              <button onClick={reset} className="qution-button">
                Reset
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Qution;
