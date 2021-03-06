exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("questions").insert([
    //Main Q's
    {
      quiz_id: 1,
      category: "Math",
      type: "1",
      Q_content: "What is the square route of 256?",
      A: "12",
      B: "16",
      C: "14",
      D: "15",
      correct_answer: "16",
      points: "2"
    },
    {
      quiz_id: 1,
      category: "Science",
      type: "1",
      Q_content: "What is the chemical formula for water?",
      A: "H3O",
      B: "HO2",
      C: "H2O2",
      D: "H2O",
      correct_answer: "H2O",
      points: "2"
    },
    {
      quiz_id: 1,
      category: "English",
      type: "1",
      Q_content: "Which of these is a correlative conjunction function?",
      A: "Although",
      B: "Since",
      C: "Neither/nor",
      D: "After",
      correct_answer: "Neither/nor",
      points: "2"
    },
    {
      quiz_id: 1,
      category: "History",
      type: "1",
      Q_content: "What was the immediate trigger for the start of WWI?",
      A: "Assassination of Archduke Franz Ferdinand",
      B: "Assassination of Adolf Hitler",
      C: "Assassination of Benito Mussolini",
      D: "Assassination of Joseph Stalin",
      correct_answer: "Assassination of Archduke Franz Ferdinand",
      points: "2"
    },
    {
      quiz_id: 1,
      category: "Math",
      type: "1",
      Q_content: "Which of these is a non-real number?",
      A: "-2",
      B: "2990",
      C: "2i",
      D: "1",
      correct_answer: "2i",
      points: "2"
    },
    {
      quiz_id: 1,
      category: "Science",
      type: "1",
      Q_content:
        "Brass gets discolored in air because of the presence of which of the following gases in air?",
      A: "Hydrogen Sulphide",
      B: "Oxygen",
      D: "Nitrogen",
      C: "Carbon Dioxide",
      correct_answer: "Hydrogen Sulphide",
      points: "2"
    },
    {
      quiz_id: 1,
      category: "English",
      type: "1",
      Q_content:
        "Define the meaning of the idiom used in this question: He passed himself off as a noble man?",
      A: "Was regarded as",
      B: "Was thought to be",
      C: "Pretending to be",
      D: "Was looked upon",
      correct_answer: "Pretending to be",
      points: "2"
    },
    {
      quiz_id: 1,
      category: "History",
      type: "1",
      Q_content:
        "What country gained its independence from the U.S. on July 4, 1946?",
      A: "Guam",
      B: "Cuba",
      C: "Estonia",
      D: "Philippines",
      correct_answer: "Philippines",
      points: "2"
    },
    {
      quiz_id: 1,
      category: "Math",
      type: "1",
      Q_content: "What is the value of x + x(x^x) when x = 2?",
      A: "18",
      B: "10",
      C: "16",
      D: "36",
      correct_answer: "10",
      points: "2"
    },
    {
      quiz_id: 1,
      category: "Science",
      type: "1",
      Q_content:
        "Which of the following is a non metal that remains liquid at room temperature?",
      A: "Bromine",
      B: "Chlorine",
      C: "Helium",
      D: "Phosphorous",
      correct_answer: "Bromine",
      points: "2"
    },
    {
      quiz_id: 1,
      category: "English",
      type: "1",
      Q_content: "Which of the following is an adverb?",
      A: "Easy",
      B: "Very Easy",
      C: "Easily",
      D: "Easier",
      correct_answer: "Easily",
      points: "2"
    },
    {
      quiz_id: 1,
      category: "History",
      type: "1",
      Q_content: "When did Joseph Stalin align himself with the Allied Powers?",
      A: "August 23, 1939",
      B: "December 8, 1941",
      C: "June 22, 1941",
      D: "January 1, 1942",
      correct_answer: "June 22, 1941",
      points: "2"
    },
    //Remediation Q's
    {
      quiz_id: 1,
      category: "Math",
      type: "2",
      Q_content: "In ∆XYZ, ∠X = 55° and ∠Y = 75°. Find ∠Z?",
      A: "∠Z = 50°",
      B: "∠Z = 150°",
      C: "∠Z = 25°",
      D: "∠Z = 75°",
      correct_answer: "∠Z = 50°"
    },
    {
      quiz_id: 1,
      category: "Science",
      type: "2",
      Q_content: "Which of the following is used in pencils?",
      A: "Charcoal",
      B: "Graphite",
      C: "Phosphorous",
      D: "Lead",
      correct_answer: "Graphite"
    },
    {
      quiz_id: 1,
      category: "English",
      type: "2",
      Q_content: "Analogies: Odometer is to mileage as compass is to?",
      A: "Needle",
      B: "Speed",
      C: "Direction",
      D: "Hiking",
      correct_answer: "Direction"
    },
    {
      quiz_id: 1,
      category: "History",
      type: "2",
      Q_content:
        "In 1927, who became the first man to fly solo and non-stop across the Atlantic?",
      A: "Charles Lindbergh",
      B: "Chuck Yeager",
      C: "Yuri Gagarin",
      D: "Neil Armstrong",
      correct_answer: "Charles Lindbergh"
    },
    {
      quiz_id: 1,
      category: "Math",
      type: "2",
      Q_content: " If 10^2y = 25, then 10^-y equals?",
      A: "1/625",
      B: "1/25",
      C: "1/5",
      D: "-1/5",
      correct_answer: "1/5"
    },
    {
      quiz_id: 1,
      category: "Science",
      type: "2",
      Q_content:
        "Which of the following metals forms an amalgam with other metals?",
      A: "Mercury",
      B: "Zinc",
      C: "Lead",
      D: "Tin",
      correct_answer: "Mercury"
    },
    {
      quiz_id: 1,
      category: "English",
      type: "2",
      Q_content: "Analogies: BINDING : BOOK?",
      A: "Display : museum",
      B: "Artist : carpenter",
      C: "Nail : hammer",
      D: "Frame : picture",
      correct_answer: "Frame : picture"
    },
    {
      quiz_id: 1,
      category: "History",
      type: "2",
      Q_content:
        "What was the family name of the Russian rulers from the 17th century until the 1917 revolution?",
      A: "Godunov",
      B: "Romanov",
      C: "Vasa",
      D: "Rurikids",
      correct_answer: "Romanov"
    },
    {
      quiz_id: 1,
      category: "Math",
      type: "2",
      Q_content: "Solve 2x^2 - 5x + 3 = 0?",
      A: "x = 2, 2/3",
      B: "x = 3/2, 1/3",
      C: "x = 1/2, 3",
      D: "x = 1, 3/2",
      correct_answer: "x = 1, 3/2"
    },
    {
      quiz_id: 1,
      category: "Science",
      type: "2",
      Q_content: "The gas usually filled in the electric bulb is",
      A: "Carbon dioxide",
      B: "Hydrogen",
      C: "Oxygen",
      D: "Nitrogen",
      correct_answer: "Nitrogen"
    },
    {
      quiz_id: 1,
      category: "English",
      type: "2",
      Q_content: "Which of the following is a preposition for time and place?",
      A: "With",
      B: "By",
      C: "At",
      D: "Beside",
      correct_answer: "At"
    },
    {
      quiz_id: 1,
      category: "History",
      type: "2",
      Q_content: "Who was responsible for the death of Alexander Hamilton?",
      A: "Thomas Jefferson",
      B: "Aaron Burr",
      C: "James Callender",
      D: "John Adams",
      correct_answer: "Aaron Burr"
    }
  ]);
};
