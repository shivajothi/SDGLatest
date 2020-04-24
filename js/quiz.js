var quiz = quiz || {};

(function (app) {
  var score = 0;
  var currentIndex = 0;
  let startQuiz = document.getElementById("startQuiz");
  let container = document.getElementById("quizForm");
    let actionArea = document.getElementById("actions");
    let checkResult = document.getElementById("checkResult");
    let nextQuestion = document.getElementById("nextQuestion");
  var questions = [
    {
      question: "What is the theme of Sustainable Development Goal no - 11?",
      options: [
        "Sustainable Cities and Communities ",
        "Infrastructure and Devevelopment",
        "Climate Action",
        "Gender Equality",
      ],
    },
    {
      question: "After which war was the UN formed?",
      options: [
        "World War II",
        "World War I",
        "American War of Independence",
        "Cold War",
      ],
    },
    {
      question: "Who is the current Secretary-General of the United Nations?",
      options: [
        "Ban-Ki Moon",
        "John F Kennedy",
        "AntÛnio Guterres ",
        "Raphael Trujillo",
      ],
    },
    {
      question: "Which of these is not a permenant member of the UNO?",
      options: ["USA", "France", "Germany ", "China"],
    },
    {
      question: "In which city was the first headquarters of the UNO?",
      options: ["Moscow", "NYC", "Paris ", "Dublin"],
    },
  ];

  let answers = [1, 1, 3, 3, 2];

  app.init = function () {
    startQuiz.addEventListener("click", drawBoard);
  };

  function drawBoard() {
    console.log("coming");
    startQuiz.removeEventListener("click", drawBoard, true);
    startQuiz.style.display = "none";
    

    let board = getQuestion();
    container.innerHTML = board;
    actionArea.style.display = "block";
    startQuiz.removeEventListener("click", drawBoard, true);
    checkResult.addEventListener("click", checkAnswer);
    nextQuestion.addEventListener("click",updateBoard);
  }


  function updateBoard() {
      let board = getQuestion();
      container.innerHTML = board;

  }
  function checkAnswer() {
    var elements = document.getElementsByName("option");
    for (i = 0; i < elements.length; i++) {
      if (elements[i].checked) {
        console.log(i);
        if (i + 1 == answer) {
          score += 1;
          container.classList.add('correct')
        }
        else {
            container.classList.add('wrong')
        }
      }
      
      
     
      //let board = getQuestion()
      //container.innerHTML = board;
    }
  }

  function getQuestion() {
    container.classList.remove('correct')
    container.classList.remove('wrong')
    currentIndex+=1 
      if(currentIndex < questions.length) {
    let current = questions[currentIndex];
    let question = current["question"],
      options = current["options"];
    answer = answers[currentIndex];

    console.log(question);
    console.log(options);
    console.log(answer);
    options.map((value) => {
      console.log(value);
    });

    let createOptions = () => {
      let optionElement = "";
      options.map((value, index) => {
        optionElement += `<div class="option" data-id='${index}'>
                            <input type="radio"  name="option" value='${index}'>
                            <label for="option"> ${value}</label>
                        </div>`;
      });
      return optionElement;
    };

    let board = `<div data-id='${currentIndex}' class="question">
                                <p>
                                    ${question}
                                </p>
                                <div class="options grid">
                                       ${createOptions()}
                                </div>

                            </div>`;

    return board;
}
else {
    endQuiz();
}
  }

  function endQuiz() {
    checkResult.style.display = "none";
    nextQuestion.style.display = "none";
    return `<div id="scoreBoard>Your score is '${score *10}`;
  }

  console.log(app);
  app.init();
})(quiz);
