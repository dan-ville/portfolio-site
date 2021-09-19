type QuestionChoice = {
  value: number;
  text: string;
};

export interface QuizFieldInterface {
  question: string;
  inputType: "radio";
  name: string;
  choices: QuestionChoice[];
}

export const movieQuiz: QuizFieldInterface[] = [
  {
    question: "What is the best movie franchise?",
    inputType: "radio",
    name: "franchises",
    choices: [
      {
        value: 1,
        text: "The Matrix",
      },
      {
        value: 2,
        text: "The Lord of the Rings",
      },
      {
        value: 3,
        text: "Harry Potter",
      },
      {
        value: 4,
        text: "Star Wars",
      },
    ],
  },
  {
    question: "Marvel or DC?",
    inputType: "radio",
    name: "superheroes",
    choices: [
      {
        value: 1,
        text: "MCU",
      },
      {
        value: 2,
        text: "DC",
      },
      {
        value: 3,
        text: "I can't choose",
      },
      {
        value: 4,
        text: "Both are trash.",
      },
    ],
  },
  {
    question: "Best male spy?",
    inputType: "radio",
    name: "actors",
    choices: [
      {
        value: 1,
        text: "Matt Damon as Jason Bourne",
      },
      {
        value: 2,
        text: "Tom Cruise as Ethan Hunt",
      },
      {
        value: 3,
        text: "Daniel Craig as James Bond",
      },
      {
        value: 4,
        text: "Mike Meyers as Austin Powers",
      },
    ],
  },
  {
    question: "Who is your favorite heroine?",
    inputType: "radio",
    name: "heroines",
    choices: [
      {
        value: 1,
        text: "Wonder Woman",
      },
      {
        value: 2,
        text: "Scarlet Witch",
      },
      {
        value: 3,
        text: "Black Widow",
      },
      {
        value: 2,
        text: "Captain Marvel",
      },
    ],
  },
  {
    question: "Which duo would make the funniest comedy?",
    inputType: "radio",
    name: "comedians",
    choices: [
      {
        value: 1,
        text: "Will Ferrel - Sandra Bullock",
      },
      {
        value: 2,
        text: "Jim Carrey - Amy Poehler ",
      },
      {
        value: 3,
        text: "Kevin Hart -  Melissa McCarthy ",
      },
      {
        value: 4,
        text: "Adam Sandler - Awkwafina",
      },
    ],
  },
];
