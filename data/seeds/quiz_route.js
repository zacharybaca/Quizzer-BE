exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('quiz_route').insert([
    {quiz_name: 'Quiz1', quiz_description: 'Quiz Description', quiz_question: 'Quiz Question', quiz_remediation_question: 'Quiz Remediation Question', quiz_total_points: '1'},
    {quiz_name: 'Quiz2', quiz_description: 'Quiz Description2', quiz_question: 'Quiz Question2', quiz_remediation_question: 'Quiz Remediation Question2', quiz_total_points: '2'},
    {quiz_name: 'Quiz3', quiz_description: 'Quiz Description3', quiz_question: 'Quiz Question3', quiz_remediation_question: 'Quiz Remediation Question3', quiz_total_points: '3'}
  ]);
};