username = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
//Start code
var firebaseConfig = {
apiKey: "AIzaSyAN-MjmQCxVAOlVxHncyl3a3hEpeSfCyFY",
authDomain: "kwitter-1570a.firebaseapp.com",
databaseURL: "https://kwitter-1570a-default-rtdb.firebaseio.com",
projectId: "kwitter-1570a",
storageBucket: "kwitter-1570a.appspot.com",
messagingSenderId: "897160721688",
appId: "1:897160721688:web:e9a252cd6a70abbff19a6d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
msg = document.getElementById("message").value;
firebase.database().ref(room_name).push({
  name:username,
  message:msg,
  like:0
});
document.getElementById("message").innerHTML = "";
}
//End code
} });  }); }
getData();

function logout() {
  localStorage.removeItem("user_name")
  localStorage.removeItem(username);
  window.location = "letschatlogin.html";
}