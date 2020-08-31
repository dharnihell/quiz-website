

$(document).ready(function(){
  $('ul').click(function(){
    $('ul').toggleClass('active')
    $('body').toggleClass('dark')
  });

   $('.menu-category').click(function(){
      $('.bg-modal').show(600);
    });

    $('.close-modal').click(function(){
      $('.bg-modal').hide(600);
    });

});



var firebaseConfig = {
  apiKey: "AIzaSyCjhrYZ72HKFLG0tamsdL_QoeSddQd3KZU",
  authDomain: "cropkart-40c7b.firebaseapp.com",
  databaseURL: "https://cropkart-40c7b.firebaseio.com",
  projectId: "cropkart-40c7b",
  storageBucket: "cropkart-40c7b.appspot.com",
  messagingSenderId: "290353630438",
  appId: "1:290353630438:web:b4607df440f974456eff27",
  measurementId: "G-RK036G7ZB8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase);

// to send stoies to db

var postRef = firebase.database().ref('stories');
var data = {
  story
}
document.getElementById('myform').addEventListener('submit', submitForm);
postRef.on('value', getStory);

function getStory(data) {
  var postRef = firebase.database().ref('stories');
  postRef.once('value').then(function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var key = childSnapshot.key;
      var childData = childSnapshot.val();

      var story = childSnapshot.val().story;


      console.log(story);

      $('.story').append('<div class= "header" style=" text-align: center;">' + story + '</div>');
    });
  });

}


function submitForm(e) {
  e.preventDefault();

  var story = getInputVal('story');
  

  savePost(story);


  document.getElementById('myform').reset();



}
function getInputVal(id) {
  return document.getElementById(id).value;
}
function savePost(story) {
  var newPostRef = postRef.push();
  newPostRef.set({
    story: story
  });
}
