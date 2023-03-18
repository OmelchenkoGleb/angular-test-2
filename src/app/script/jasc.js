$(document).ready(function(){
  $("#Input1").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#Table1 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
