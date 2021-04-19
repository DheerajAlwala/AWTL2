// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCgOWeePmX-DbfeHBn7mR7z4jWtk_SqbB8",
    authDomain: "fir-curd-1ed51.firebaseapp.com",
    databaseURL: "https://fir-curd-1ed51-default-rtdb.firebaseio.com",
    projectId: "fir-curd-1ed51",
    storageBucket: "fir-curd-1ed51.appspot.com",
    messagingSenderId: "195021422359",
    appId: "1:195021422359:web:4d7579263007e6a27d8152"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var fbdb=firebase.database().ref().child("students");

  function insertData()
  {
      var rollno=document.getElementById("rollno").value;
      var name=document.getElementById("name").value;
      fbdb.child(rollno).set({
          Name:name,
          Rollno:rollno
      })
  }

  function deleteData(){
      var rollno=document.getElementById("rollno").value;
        fbdb.child(rollno).remove();
  }

  function updateData(){
    var rollno=document.getElementById("rollno").value;
    var name=document.getElementById("name").value;
    fbdb.child(rollno).update({Name:name});
  }
  function readData(){
      var rno=document.getElementById("rollno").value;
    firebase.database().ref().child("students/"+rno).on("value",(snap)=>{
        document.getElementById("name").value=snap.val().Name;
    })
  }