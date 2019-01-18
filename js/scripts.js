$(document).ready(function() {
  $(".partTime").hide();
  $(".frontCss").hide();
  $(".backRuby").hide();
  $(".backJava").hide();

  $("#trackForm").submit(function(event) {
    event.preventDefault();

    var fpAvail = $("input:radio[name=partFull]:checked").val();
    var fbFocus = $("#fbSelect").val();
    var awType = $(".form-control#awType").val();

    // if (name) {
    //   if fpAvail === ""
  })

})
