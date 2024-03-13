document.getElementById("username").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        document.getElementById("password").focus(); 
    }
});