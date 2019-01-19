$(document).ready(function() {
  $(".greet").hide();
  $(".partTime").hide();
  $(".frontCss").hide();
  $(".backRuby").hide();
  $(".backJava").hide();

  $("#trackForm").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var fpAvail = $("input:radio[name=partFull]:checked").val();
    var fbFocus = $("#fbFocus").val();
    var awType = $("#awType").val();

    if (name) {
      if (fpAvail === "ftime") {
        if (fbFocus === "Back End") {
          if(awType === "andr") {
            $(".backJava").show();

          } else {
              $(".backRuby").show();
              $(".backJava").hide();
          }
        } else  {
          $(".frontCss").show();
        }
      } else {
        $(".partTime").show();
        }
      } else {
        alert("Please enter your name!!")
    }
    $(".greet").show();
    $(".nameInput").text(name);

    });
  $("button#showall").click(function() {
    $(".partTime").show();
    $(".frontCss").show();
    $(".backRuby").show();
    $(".backJava").show();
    });




  });
