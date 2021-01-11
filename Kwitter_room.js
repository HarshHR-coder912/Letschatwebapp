var firebaseConfig = {
    apiKey: "AIzaSyCH8Ns8MJzhlYpiiHg18Wk-Us4EXouupmk",
    authDomain: "lets-chat-web-page.firebaseapp.com",
    databaseURL: "https://lets-chat-web-page-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-page",
    storageBucket: "lets-chat-web-page.appspot.com",
    messagingSenderId: "634579216974",
    appId: "1:634579216974:web:f61153af3ac77e3cf9711f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}