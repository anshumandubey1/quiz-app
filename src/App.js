import React from 'react';
import StudentForm from './StudentForm';

export default function App() {
  const questions = [
    {
      questionText: 'What is the capital of India',
      answerOptions: [
        { answerText: 'New Delhi' },
        { answerText: 'Uttar Pradesh' },
        { answerText: 'Kolkata' },
        { answerText: 'Maharashtra' },
      ],
      answer: 'New Delhi',
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos' },
        { answerText: 'Elon Musk' },
        { answerText: 'Bill Gates'},
        { answerText: 'Tony Stark' },
      ],
      answer: 'Elon Musk',
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1' },
        { answerText: '4' },
        { answerText: '6' },
        { answerText: '7' },
      ],
      answer: '7'
    },
  ];

  

  return (
    <div >
      <StudentForm questions={questions} />
    </div>
  );
}