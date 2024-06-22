function upDate(previewPic) {
    // Check if the event is triggering
    console.log("Event triggered");
    
    // Log some information about the previewPic variable
    console.log("Alt text: " + previewPic.alt);
    console.log("Image source: " + previewPic.src);
    
    // Change the text of the element with the id of image
    const imageDiv = document.getElementById("image");
    imageDiv.textContent = previewPic.alt;

    // Change the background image of the element with the id of image
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

    // Check your work with console log
    console.log("Background image set to: " + imageDiv.style.backgroundImage);
}

function unDo() {
    // Update the background image of the div with the id of image back to the original value
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";

    // Update the text of the div with the id of image back to the original text
    imageDiv.textContent = "Con Meo Cam";

    // Check your work with console log
    console.log("Background image reset to: " + imageDiv.style.backgroundImage);
    console.log("Text reset to: " + imageDiv.textContent);
}
