import React from "react"
import { StyledTitle } from "../Layout/Layout"
import { movieQuiz, QuizFieldInterface } from "./questions"
import { QuizWrapper, FormWrapper, QuizTip, FormGroup } from "./Quiz.styles"
import { Formik, Field, Form } from "formik"
import Button from "../../assets/UI/Button"

// ! THIS COMPONENT IS NOT YET IMPLEMENTED

export default function Quiz() {
  // TODO: make wizard component
  return (
    <QuizWrapper>
      <StyledTitle>Movie Quiz</StyledTitle>
      <QuizForm quiz={movieQuiz} />
      <QuizTip>
        Tip: use {"<--/-->"} keys to navigate, and <code>Enter</code> to submit.
      </QuizTip>
    </QuizWrapper>
  )
}

type FormProps = {
  quiz: QuizFieldInterface[]
}
const QuizForm: React.FC<FormProps> = ({ quiz }) => {
  return (
    <FormWrapper>
      <Formik
        initialValues={{
          franchises: "",
          superheroes: "",
          actors: "",
          heroines: "",
          comedians: "",
        }}
        onSubmit={async (values) => {
          console.log(values)
        }}
      >
        {({ values }) => (
          <Form>
            <ol>
              {movieQuiz.map((question) => (
                <li>
                  <p>{question.question}</p>
                  <FormGroup role="group" aria-labelledby="my-radio-group">
                    {question.options.map((option) => (
                      <label>
                        <Field
                          type="radio"
                          name={question.name}
                          value={option.value}
                        />
                        {option.text}
                      </label>
                    ))}
                  </FormGroup>
                </li>
              ))}
            </ol>
            <Button>Submit</Button>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  )
}
