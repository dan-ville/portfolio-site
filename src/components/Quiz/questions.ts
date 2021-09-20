export type QuestionChoice = {
  value: number;
  text: string;
};

export interface QuizFieldInterface {
  question: string;
  number: number;
  name: string;
  options: QuestionChoice[];
}

export const movieQuiz: QuizFieldInterface[] = [
  {
    question: "What is the best movie franchise?",
    number: 1,
    name: "franchises",
    options: [
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
    number: 2,
    name: "superheroes",
    options: [
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
    number: 3,
    name: "actors",
    options: [
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
    number: 4,
    name: "heroines",
    options: [
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
    number: 5,
    name: "comedians",
    options: [
      {
        value: 1,
        text: "Will Ferrel - Sandra Bullock",
      },
      {
        value: 2,
        text: "Jim Carrey - Amy Poehler",
      },
      {
        value: 3,
        text: "Adam Sandler - Melissa McCarthy",
      },
      {
        value: 4,
        text: "Kevin Hart - Awkwafina",
      },
    ],
  },
];
