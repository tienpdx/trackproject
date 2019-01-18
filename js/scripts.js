$(document).ready(function() {
  $(".partTime").hide();
  $(".frontCss").hide();
  $(".backRuby").hide();
  $(".backJava").hide();

  $("#trackForm").submit(function(event) {
    event.preventDefault();

    var fpAvail = $("input:radio[name=partFull]:checked").val();
    var fbFocus = $("#fbFocus").val();
    var awType = $("#awType").val();

      if (fpAvail === "ftime") {
        if (fbFocus === "Back End") {
          if(awType === "andr") {
            $(".backJava").show();
          } else {
              $(".backRuby").show();
              $(".backJava").hide();

          }
        // else  {}
          }
        }
      })
  })
