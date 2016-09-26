# quizzical

# Overview

Your goal is to write a simple single-page quiz creation application.

A quiz consists of a series of questions.
There should be two kinds of questions, true/false and text answer.
In both cases, the questions contains a string prompt.
For true/false questions, the answer should be a boolean,
while for text answer questions, the answer should be a string.

# Specification

The quiz creator should be able to:

- Edit the quiz
  - Add question/answer pairs to a quiz
    (no need to implement removing or editing of existing questions)

- Switch to "student mode", at which point they:
  - are shown quiz questions one by one
    - can use "Next" and "Previous" buttons to move between questions
      (the answers entered by the user should be preserved while moving between questions)
  - on the final question, the user may submit the quiz
  - after submitting, they should see a score (# right / # wrong)
  - return back to the quiz editing view

All data can simply be kept in memory. (So if you reload the page, everything is lost)

We value correctness, readability, testability, and extensability.

Please don't hesitate to reach out if you have any other questions.

# Submission

When you're done, send (zipped or tarred) the folder containing your source code
in an email to jobs@cloudlabs.io.
Please also include instructions for running, if relevant.

Please let us know how long it took, as well.
We expect this challenge to take 2-4 hours in total.

# Dos and don'ts

Please *DO*:
- Use any frameworks and/or build system you're comfortable with (including plain old vanilla javascript).
- Use any resources on the internet, including starter repos
  (e.g. https://github.com/gaearon/react-hot-boilerplate, https://github.com/AngularClass/NG6-starter, etc.)
- Acknowledge any non-trivial piece of code not written by you
- Keep extensibility in mind.  For example, hypothetical future features may include:
  - persisting the quizzes in a database (especially quiz answers)
  - management of multiple quizzes
  - removing and reordering questions when editing the quiz
  - other answer types, e.g. multiple choice
  - different scoring system
  - different quiz presentation, e.g. randomization of question order
  - etc.

Please *DO NOT*:
- Worry about general polish - e.g. small usability issues, how nice the app looks
- Worry about excessive documentation
- Spend a full day working on this.  We value your time!
