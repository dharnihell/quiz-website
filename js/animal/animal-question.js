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
  gameOverHTML += "<h2 id='score'> Your score is: " + quiz.score + " out " + " of " + quiz.questions.length + " Questions </h2><br> <h3>We'll Get Back To You</h3> "; 
  var element = document.getElementById("quiz"); 
  element.innerHTML = gameOverHTML; 
}; 

// create questions 
var questions = [ 
  
  new Question("What type animal is a seahorse?", ["Crustacean", "Arachnnid", "Fish", "Shell"], "Crustacean"),
  new Question("Which is the world's leading egg-producing country?", ["China", "India", "Japan", "Malaysia"], "China"),
  new Question("What is the most important part of an egg?", ["Shell membrane", "Yolk", "White", "Germ"], "Germ"),
  new Question("Which living bird lays the world's smallest egg?", ["Hornbill", "Bird", "Gulls", "Woodpecker"], "Bird"),
  new Question("Which living bird lays the world's largest egg?", ["Vulture", "Owl", "Ostrich", "Eagle"], "Ostrich"),
  new Question("What are egg laying animals known as?", ["Oviparous", "Herbivorous", "Carnivorous", "Reptiles"], "Oviparous"),
  new Question("What is the study of bird eggs called?", ["Zoology", "Ornithology", "Oology", "Ichthyology"], "Oology"),
  new Question("Which of these animals walks like a camel?", ["Cat", "Dog", "Elephant", "Giraffe"], "Cat"),
  new Question("What is the gestation period of an African elephant?", ["1 year", "12 months", "6 months", "9 months"], "12 months"),
  new Question("Which bird's eye are larger than it's brain?", ["Eagle", "Owl", "Ostrich", "Parrot"], "Ostrich"),
  new Question("Which animal can look ways at the same time?", ["Chameleon", "Lizard", "Snake", "Tortoise"], "Chameleon"),
  new Question("Which of the following dogs is the smallest?", ["Dachshund", "Poodle", "Pomeranian", "Chihuahua"], "Chihuahua"),
  new Question("What colour are zebras?", ["white with black stripes", "black with white stripes", "both", "None of the above"], "black with white stripes"),
  new Question("What existing bird has the largest wingspan?", ["Stork", "Swan", "Condor", "Albatross"], "Albatross"),
  new Question("What is the biggest animal that has ever lived?", ["Blue whale", "African elephant", "Apatosaurus", "Spinosaurus"], "Blue whale"),
  new Question("What pet do more families own?", ["Birds", "Cats", "Dogs", "Horses"], "Cats"),
  new Question("What animal lives the longest?", ["Clam", "Urchin", "Tortois", "Rockfish"], "Clam"),
  new Question("What are female elephants called?", ["Mares", "Sows", "Cows", "Dams"], "Cows"),
  new Question("Which of the following animals sleep standing up?", ["Gorillas", "Flamingos", "Camels", "Ravens"], "Flamingos"),
  new Question("What is the fastest water animal?", ["Porpoise", "Sailfish", "Flying fish", "Tuna"], "Sailfish"),
    
 
]; 

// create quiz 
var quiz = new Quiz(questions); 

// display quiz 
populate(); 





