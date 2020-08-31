function populate() { 
  if(quiz.isEnded()) { 
      showScores(); 
  } 
  else { 
      // show question 
      var element = document.getElementById("question"); 
      element.innerHTML = quiz.getQuestionIndex().text; 

      // show options 
      var choices = quiz.getQuestionIndex().choices; 
      for(var i = 0; i < choices.length; i++) { 
          var element = document.getElementById("choice" + i); 
          element.innerHTML = choices[i]; 
          guess("btn" + i, choices[i]); 
      } 

      showProgress(); 
  } 
}; 

function guess(id, guess) { 
  var button = document.getElementById(id); 
  button.onclick = function() { 
      quiz.guess(guess); 
      populate(); 
  } 

}; 


function showProgress() { 
  var currentQuestionNumber = quiz.questionIndex + 1; 
  var element = document.getElementById("progress"); 
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length; 
}; 

function showScores() { 
  var gameOverHTML = "<h1>Result</h1>"; 
  gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>"; 
  var element = document.getElementById("quiz"); 
  element.innerHTML = gameOverHTML; 
}; 

// create questions 
var questions = [ 
  new Question("What do you call a poem of fourteen lines?", ["Ballard", "Symphony","Sonnet", "Rhymes"], "Sonnet"), 
  new Question("Lilongwe is the capital of which country?", ["Tanzania", "Malawi", "Congo D R", "Zimbabwe"], "Malawi"), 
  new Question("Which of these is not the work of Cypren Ekwensi.", ["Jagua Nana", "The Drummer Boy","A Man of the people", "Burning Grass"], "A Man of the people"), 
  new Question("How many Senators are elected into the Nigerian senate?", ["210", "300", "101", "109"], "109"), 
  new Question("In What year was Wole Soyinka Born?", ["1930", "1934", "1940", "1937"], "1934"),
  new Question("What is the real name of the Muscian Akon", ["Aliu Tiam", "Manadou Hassan", "Sally Ahmadou", "Ali Boubacry"], "Aliu Tiam"),
  new Question("Which country is not a member of the United Nations?", ["Columbia", "The Vatican", "Syria", "Egypt"], "The Vatican"),
  new Question("Who won the 2009 Wimbledon title", ["Andy Rodrick", "Andy Murray", "Boris Becker", "Roger Federer"], "Roger Federer"),
  new Question("Which football club is Called 'The Troters' ?", ["Aresnal fc", "Wigan Athletic", "Barcelona", "Bolton"], "Bolton"),
  new Question("What is the nick name of the English National Team?", ["Three Lion", "Ten Goliats", "Queens Boys", "Three Hypos"], "Three Lion"),
  new Question("Which of these is the tallest building in the world?", ["Burj-Khalifa(UAE)", "KVLY-TV mast(USA)", "C N Tower(Canada)", "Bren Tower(USA)"], "Burj-Khalifa(UAE)"),
  new Question("What is the Spanish football League Called?", ["Seria A", "Bundusliga", "La liga", "Premiership"], "La liga"),
  new Question("Which football club is called 'The Mapies'?", ["Chelsea fc", "Newcastle United", "Arsenal fc", "Manchester United"], "Newcastle United"),
  new Question("In what year did the ship 'Titannic' sink on it's first Voyage?", ["1917", "1912", "1914", "1920"], "1912"),
  new Question("What was the former name of the country Myanmar?", ["Candalesia", "Burma", "Ceylon", "Prussia"], "Burma"),
  new Question("In which country in Africa do you find the Pygmies", ["Congo D R", "Zambia", "Kenya", "Ethopia"], "Congo D R") 
]; 

// create quiz 
var quiz = new Quiz(questions); 

// display quiz 
populate(); 





