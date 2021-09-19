import React from "react";
import { movieQuiz, QuizFieldInterface } from "./questions";
import {
  QuizWrapper,
  FormWrapper,
  FormGroup,
  Label,
  RadioGroup,
  RadioLabel,
} from "./Quiz.styles";

export default function Quiz() {
    // TODO: make wizard component
    return (
    <QuizWrapper>
      <Form quiz={movieQuiz} />
    </QuizWrapper>
  );
}

type FormProps = {
  quiz: QuizFieldInterface[];
};
const Form: React.FC<FormProps> = ({ quiz }) => {
  return (
    <FormWrapper>
      <form>
        {quiz.map((question, index) => (
          <FormGroup key={question.question}>
            <Label>
              {index + 1}. {question.question}
            </Label>
            {question.choices.map((choice, index) => (
              <RadioGroup>
                <input
                  name={question.name}
                  id={`${question.name}-${index}`}
                  type={question.inputType}
                  value={choice.value}
                />
                <RadioLabel htmlFor={`${question.name}-${index}`}>
                  {choice.text}
                </RadioLabel>
              </RadioGroup>
            ))}
          </FormGroup>
        ))}
      </form>
    </FormWrapper>
  );
};
