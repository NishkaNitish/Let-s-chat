
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDbg8faX5yrU_ykHNE2fKO-34RjaQwjITk",
      authDomain: "kwitter-2e646.firebaseapp.com",
      databaseURL: "https://kwitter-2e646-default-rtdb.firebaseio.com",
      projectId: "kwitter-2e646",
      storageBucket: "kwitter-2e646.appspot.com",
      messagingSenderId: "1063099248029",
      appId: "1:1063099248029:web:c30c47ee26b7791df29374",
      measurementId: "G-CC8PMY8XHC"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name;


// Initialize Firebase

function addroom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpous: "addingroomname"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "let's chat_page.html";
}
function getData() {
      firebase.database().ref("/").on('value',
            function (snapshot) {
                  document.getElementById("output").innerHTML = "";
                  snapshot.forEach(function (childSnapshot)
                  {
                        childKey = childSnapshot.key,
                        Room_names=childKey;

                        //Start code
                        console.log("Room Name - " + Room_names);
                        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                        document.getElementById("output").innerHTML += row;
                        //End code
                        getData();
                  });
            });
      }
      getData();
      function redirectToRoomName(Name){console.log(Name);
      localStorage.setItem("room_name",Name);
window.location="let's chat_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}