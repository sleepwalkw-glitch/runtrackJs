let textarea = document.getElementById('keylogger');

// listen for keydown events on the document, here the event parameter contains information about the key pressed
document.addEventListener('keydown', function(event) {
    // console.log(event);
    // if the key pressed is from A to Z
    if(event.key >= 'a' && event.key <= 'z' || event.key >= 'A' && event.key <= 'Z') {
        let letter = event.key;
        // if the focus is on the textarea,allow normal typing
         if (document.activeElement === textarea) {
            textarea.value += letter + letter; 
        }else {
        textarea.value += letter;
        }
    }
    else {
        alert("Please press a letter key (A-Z or a-z)");
    }
});



