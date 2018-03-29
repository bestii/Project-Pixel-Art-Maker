
// Setup the Jquery object for the color, heigth and width
var $color  = $('#colorPicker'), 
    $height = $('#inputHeight'), 
    $width  = $('#inputWidth'),
    $canvas = $("#pixelCanvas");

// Create Grid Function
function makeGrid(evt) {
    // prevents the form from refreshing on submit.
    evt.preventDefault();
    
    // clear the existing grid
    $canvas.children().remove();
    var height = $height.val(),
        width = $width.val(),
        row,
        col;

    // create grid based on the value of height and width
    for(var i=1; i <= height; ++i){
        row ='<tr id="row'+ i +'"></tr>';
        $canvas.append(row);
        for(var j=1; j <= width; ++j){
           col =  '<td id="col'+ i + j +'"></td>';
           $('#row'+i).append(col);
        }
    }
    
}

//setup event handler
$canvas.on('click', 'td' , function(evt){
    // switch color based on value.
    if($(evt.target).css("background-color") === "rgba(0, 0, 0, 0)" ){
        $(evt.target).css("background", $color.val());
    }else{
        $(evt.target).css("background", "rgba(0, 0, 0, 0)");
    }
    
});
