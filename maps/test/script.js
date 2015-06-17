function randomText() {
    var items = new Array(
                "Ow",
                "Stop poking me",
                "Stop",
                "Leave me alone",
                "Don't you have anything better to do?",
                "You're hurting me",
                "Go away"
    );
   
    // Generates a random integer within the array index
    var i = Math.floor(Math.random() * items.length);
   
    return items[i];
   
}