let textarea = document.getElementById('keylogger');

// listen for keydown events on the document, here the event parameter contains information about the key pressed
document.addEventListener('keydown', function(event) {
    // console.log(event), here event is an object that contains information about the key event
    // if the key pressed is from A to Z
    if(event.key >= 'a' && event.key <= 'z' || event.key >= 'A' && event.key <= 'Z') {

        // event.key is the type of key event, here we get the actual letter pressed as string type
        let letter = event.key;
        // append the letter to the textarea value buy using += operator and the concatanation
            textarea.value += letter;
    // pop up an alert if the key pressed is not from A to Z    
    }else{
        alert("Please press a letter key from A to Z");
    }
    
});



