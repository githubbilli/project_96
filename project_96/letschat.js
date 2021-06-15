var firebaseConfig = {
    apiKey: "AIzaSyC6raFLUo15lzZFy7pSODWHr0yrhoRBBr8",
    authDomain: "lets-chat-kwitter.firebaseapp.com",
    databaseURL: "https://lets-chat-kwitter-default-rtdb.firebaseio.com",
    projectId: "lets-chat-kwitter",
    storageBucket: "lets-chat-kwitter.appspot.com",
    messagingSenderId: "206586611239",
    appId: "1:206586611239:web:1751188fa477db59bff002"
  };
  firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome "+username+"!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
    });
    window.location = "letschatroom.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
   document.getElementById("output").innerHTML = row;
   //End code
   });});} 
getData();

function redirectToRoomName() {
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "letschatroom.html";
}

function logout() {
    localStorage.removeItem("user_name")
    localStorage.removeItem(username);
    window.location = "letschatlogin.html";
}