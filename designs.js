
// Setup the Jquery object for the color, heigth and width
var $color  = $('#colorPicker'), 
    $height = $('#inputHeight'), 
    $width  = $('#inputWidth');

function makeGrid(evt) {
    // prevents the form from refreshing on submit.
    evt.preventDefault();
    console.log("makeGrid", $color.val(), $height.val(), $width.val());

}
