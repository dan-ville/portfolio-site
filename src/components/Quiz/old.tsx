import React, { useEffect, useState } from "react";
import Button from "../../assets/UI/Button";
import { StyledTitle } from "../Layout/Layout";
import { movieQuiz, QuizFieldInterface } from "./questions";
import {
  QuizWrapper,
  FormWrapper,
  QuizTip,
  FormGroup,
  Label,
  FormControls,
} from "./Quiz.styles";

export default function Quiz() {
  // TODO: make wizard component
  return (
    <QuizWrapper>
      <StyledTitle>Movie Quiz</StyledTitle>
      <Form quiz={movieQuiz} />
      <QuizTip>
        Tip: use {"<--/-->"} keys to navigate, and <code>Enter</code> to submit.
      </QuizTip>
    </QuizWrapper>
  );
}

type FormProps = {
  quiz: QuizFieldInterface[];
};
const Form: React.FC<FormProps> = ({ quiz }) => {
  const [index, setIndex] = useState<number>(0);
  const [answers, setAnswers] = useState({});
  console.log(answers);

  const startOfQuiz = index <= 0;
  const endOfQuiz = index === quiz.length - 1;

  const handlePrevious = () => {
    if (startOfQuiz) return;
    setIndex(index - 1);
  };
  const handleNext = () => {
    if (endOfQuiz) return;
    setIndex(index + 1);
  };

  useEffect(() => {
    const ArrowLeft = "ArrowLeft";
    const ArrowRight = "ArrowRight";
    const validKeys = [ArrowLeft, ArrowRight];

    const onKeydown = (event: KeyboardEvent) => {
      if (!validKeys.includes(event.key)) return;

      if (event.key === "ArrowLeft") {
        handlePrevious();
      }
      if (!endOfQuiz && event.key === "ArrowRight") {
        handleNext();
      }
    };

    document.addEventListener("keydown", onKeydown);
    return () => {
      document.removeEventListener("keydown", onKeydown);
    };
  });

  const handleAnswer = (event: React.MouseEvent<HTMLInputElement>) => {
    const { value: answer } = event.currentTarget;
    setAnswers((prevState) => ({
      ...prevState,
      [index + 1]: parseInt(answer),
    }));

    if (!endOfQuiz) setIndex((prev) => prev + 1);
  };

  return (
    <FormWrapper>
      <form>
        <FormGroup>
          <Label>
            {index + 1}. {quiz[index].question}
          </Label>
          {quiz[index].options.map((choice, index) => {
            const id = `${quiz[index].name}-${index}`;

            return (
              <>
                <label>{choice.text}</label>
                <input
                  type="radio"
                  onClick={handleAnswer}
                  key={id}
                  id={id}
                  value={choice.value}
                />
              </>
            );
          })}
        </FormGroup>
        <FormControls>
          {!startOfQuiz ? (
            <Button type="button" onClick={handlePrevious}>
              {"<--"}
            </Button>
          ) : (
            <div></div>
          )}
          {endOfQuiz && <Button type="submit">Submit</Button>}
          {!endOfQuiz ? (
            <Button type="button" onClick={handleNext}>
              {"-->"}
            </Button>
          ) : null}
        </FormControls>
      </form>
    </FormWrapper>
  );
};

