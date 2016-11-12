//define variables
var correct = 0;
var wrong = 0;
var unanswered = 0;

//create timer function
window.onload = function(){

(function(){
  var timer = 30;

  setInterval(function() {
    timer--;
    if (timer > 0) {
      span = document.getElementById("timer");
      span.innerHTML = timer;
      //show and hide answer screen
      $(".game").show();
      $(".scorecard").hide();
    }

    else if (timer === 0) {
        //alert("Game Over.");
        clearInterval(timer);
        //show and hide answer screen
        $(".scorecard").show();
        $(".game").hide();
        $("#numCorrect").html(correct);
        $("#numWrong").html(wrong);
        $("#numBlank").html(unanswered);
    }

  }, 1000);

})();

}
//check user selected answer against array of correct answers
$(document).ready (function () {

  $(":input").on("click", function() {

    if($(this).val() == "true"){
      correct++;
      $("#numCorrect").html(correct);
      unanswered = 7 - (correct + wrong);
      $("#numBlank").html(unanswered);

    } else if($(this).val() == "false") {
      wrong++;
      $("#numWrong").html(wrong);
      unanswered = 7 - (correct + wrong);
      $("#numBlank").html(unanswered);
    } 
      console.log(wrong);
      console.log(correct);
      console.log(unanswered);
  });

});
