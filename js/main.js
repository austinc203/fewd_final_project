$(document).ready(function(){

//let something = $("#plantiff").val();

//console.log("something is ", something);

//$("#newPlace").val(something);

$("#plantiff").val(function(){
  // $("#plantiffArgue").val(something);


$("#plantiffPost").on("click", function (){
  var plantiffInput = $("#plantiff").val();
  $("#plantiffArgue").append("<p class='marker'>"+plantiffInput+"</p>");
  $("#plantiff").val("");
  if( $(".marker").length == 2 ){
    $("#guilty").toggleClass("hide");
    $("#notGuilty").toggleClass("hide");
    $("#verdict").toggleClass("hide");
  }
  });

});

$("#defendant").val(function(){

$("#defendantPost").on("click", function(){
  var defendantInput = $("#defendant").val();
  $("#defendantArgue").append("<p class='marker'>"+defendantInput+"</p>");
  $("#defendant").val("");
  if( $(".marker").length == 2 ){
    $("#guilty").toggleClass("hide");
    $("#notGuilty").toggleClass("hide");
    $("#verdict").toggleClass("hide");
  }
});
});


$("#guilty").on("click", function (){
  console.log($(".agreeImage").length);
  console.log($("#plantiffArgue p").text().length)
  if ($(".agreeImage").length <= 5 && $("#plantiffArgue p").text().length != 0 && $("#defendantArgue p").text().length != 0){
    console.log("worked")
    $("#agree").append("<img class='agreeImage' src='images/gavelle.png'>");
  }else {
    alert("Jury Finds in Favor of the Plantiff");
  }



});


$("#notGuilty").on("click", function (){
  console.log($(".disagreeImage").length);
  if (($(".disagreeImage").length <= 5) && ($("#plantiffArgue").length > 0) &&($ ("#defendantArgue").length > 0)){
    console.log("worked")
    $("#agree").append("<img class='agreeImage' src='images/check.jpeg'>");
  }else {
    alert("Jury Finds in Favor of the Defendant");
  }



});





});




// });
