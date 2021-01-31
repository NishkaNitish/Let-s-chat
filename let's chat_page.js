//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("room_name");
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0,
      });
      document.getElementById("msg").value = "";
}
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();
