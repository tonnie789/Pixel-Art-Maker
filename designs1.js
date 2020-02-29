const sizePicker = document.getElementById('sizePicker')
const table = document.getElementById('pixelCanvas')
const width = document.getElementById('inputWidth')
const height = document.getElementById('inputHeight')


//Code that operates the submit function
sizePicker.addEventListener('submit', function (event) {;
  event.preventDefault();
  makeGrid(height.value, width.value);
  changeBackgroundColor()
});

//function that appends rows and cells on grid
function makeGrid(h, w) {
    $('tr').remove();// this removes the table rows once a user clicks submit
    for (let i = 0; i < h; i++) {
      let newRow = table.insertRow(-1)//appends the table rows
    for (let c = 0; c < w; c++) {
      let newCell = newRow.insertCell(0)//appends the table cells
    }};
};

//function that changes the cell background color based on user selection
function changeBackgroundColor(){
  $('td').click(function (event) {
    color = $('#colorPicker').val();
     $(event.target).css('background-color', color)
 });
};
