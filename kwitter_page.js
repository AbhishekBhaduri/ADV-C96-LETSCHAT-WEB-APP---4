var firebaseConfig = {
      apiKey: "AIzaSyBQj7aWsWFQiO5izZwX09jnbP0xNuKuuWM",
      authDomain: "kwitter-9169e.firebaseapp.com",
      databaseURL: "https://kwitter-9169e-default-rtdb.firebaseio.com",
      projectId: "kwitter-9169e",
      storageBucket: "kwitter-9169e.appspot.com",
      messagingSenderId: "308080876058",
      appId: "1:308080876058:web:163a93748cc1d9bd640fa3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")

function send()
{
    msg=document.getElementById("msg").value
    firebase.database().ref(room_name).push({

      name:user_name,
      message:msg,
      like:0
    })

}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
