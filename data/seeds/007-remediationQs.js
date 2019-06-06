exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('remediation').insert([
    {category: 'Math', type: 'multiple', difficulty: 'medium', question: 'In ∆XYZ, ∠X = 55° and ∠Y = 75°. Find ∠Z?', correct_answer: '∠Z = 50°', incorrect_answers: ['∠Z = 75°', '∠Z = 25°', '∠Z = 150°']},
    {category: 'Science', type: 'multiple', difficulty: 'easy', question: 'Which of the following is used in pencils?', correct_answer: 'Graphite', incorrect_answers: ['Lead', 'Charcoal', 'Phosphorous']},
    {category: 'English', type: 'multiple', difficulty: 'easy', question: 'Analogies: Odometer is to mileage as compass is to?', correct_answer: 'Direction', incorrect_answers: ['Speed', 'Hiking', 'Needle']},
    {category: 'History', type: 'multiple', difficulty: 'medium', question: 'In 1927, who became the first man to fly solo and non-stop across the Atlantic?', correct_answer: 'Charles Lindbergh', incorrect_answers: ['Neil Armstrong', 'Yuri Gagarin', 'Chuck Yeager']},
    {category: 'Math', type: 'multiple', difficulty: 'medium', question: ' If 10^2y = 25, then 10^-y equals?', correct_answer: '1/5', incorrect_answers: ['-1/5', '1/625', '1/25']},
    {category: 'Science', type: 'multiple', difficulty: 'hard', question: 'Which of the following metals forms an amalgam with other metals?', correct_answer: 'Mercury', incorrect_answers: ['Tin', 'Lead', 'Zinc']},
    {category: 'English', type: 'multiple', difficulty: 'easy', question: 'Analogies: BINDING : BOOK?', correct_answer: 'Frame : picture', incorrect_answers: ['Display : museum', 'Artist : carpenter', 'Nail : hammer']},
    {category: 'History', type: 'multiple', difficulty: 'medium', question: 'What was the family name of the Russian rulers from the 17th century until the 1917 revolution?', correct_answer: 'Romanov', incorrect_answers: ['Rurikids', 'Godunov', 'Vasa']},
    {category: 'Math', type: 'multiple', difficulty: 'medium', question: 'Solve 2x^2 - 5x + 3 = 0?', correct_answer: 'x = 1, 3/2', incorrect_answers: ['x = 3/2, 1/3', 'x = 1/2, 3', 'x = 2, 2/3']},
    {category: 'Science', type: 'multiple', difficulty: 'hard', question: 'The gas usually filled in the electric bulb is', correct_answer: 'Nitrogen', incorrect_answers: ['Hydrogen', 'Carbon dioxide', 'Oxygen']},
  ]);
};
