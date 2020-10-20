$(document).ready(function () {
  // Dom variables

  var tonedBtn = $("#tonedTribeClick");
  var tonedTribe = $("#tonedTribe");
  var aboutMe = $("#aboutMe");
  var homeBtn = $("#homeBtn");
  var planner = $("#planner");
  var genPass = $("#genPass");
  var burger = $("#burger");
  var plannerBtn = $("#plannerClick");
  var genPassBtn = $("#genPassClick");
  var burgerBtn = $("#burgerClick");
  var contacts = $("#contacts");
  var contactClick = $("#contactClick");
  var motivational = $("#motivational");
  var motivationalClick = $("#motivationalClick");
  var randomMotivation = $("#randomMotivation");

  // JS variables

  // functions

  // call functions

  // event listeners

  // home button
  homeBtn.on("click", function (event) {
    event.preventDefault();
    aboutMe.removeClass("hide");
    tonedTribe.addClass("hide");
    planner.addClass("hide");
    genPass.addClass("hide");
    contacts.addClass("hide");
    motivational.addClass("hide");
    burger.addClass("hide");
  });
  //planner button
  tonedBtn.on("click", function (event) {
    event.preventDefault();
    aboutMe.addClass("hide");
    tonedTribe.removeClass("hide");
    planner.addClass("hide");
    genPass.addClass("hide");
    contacts.addClass("hide");
    motivational.addClass("hide");
    burger.addClass("hide");
  });
  //planner button
  plannerBtn.on("click", function (event) {
    event.preventDefault();
    aboutMe.addClass("hide");
    planner.removeClass("hide");
    tonedTribe.addClass("hide");
    genPass.addClass("hide");
    contacts.addClass("hide");
    motivational.addClass("hide");
    burger.addClass("hide");
  });
  // GenPass button
  genPassBtn.on("click", function (event) {
    event.preventDefault();
    // console.log("this clicked")
    aboutMe.addClass("hide");
    tonedTribe.addClass("hide");
    planner.addClass("hide");
    genPass.removeClass("hide");
    contacts.addClass("hide");
    motivational.addClass("hide");
    burger.addClass("hide");
  });

  // Burgers Button

  burgerBtn.on("click", function (event) {
    event.preventDefault();
    // console.log("this registered");
    aboutMe.addClass("hide");
    tonedTribe.addClass("hide");
    planner.addClass("hide");
    genPass.addClass("hide");
    contacts.addClass("hide");
    motivational.addClass("hide");
    burger.removeClass("hide");
  });

  // Contact Button
  contactClick.on("click", function (event) {
    event.preventDefault();
    aboutMe.addClass("hide");
    tonedTribe.addClass("hide");
    planner.addClass("hide");
    genPass.addClass("hide");
    contacts.removeClass("hide");
    motivational.addClass("hide");
    burger.addClass("hide");
  });
  // Motivation button
  motivationalClick.on("click", function (event) {
    event.preventDefault();
    aboutMe.addClass("hide");
    tonedTribe.addClass("hide");
    planner.addClass("hide");
    genPass.addClass("hide");
    contacts.addClass("hide");
    motivational.removeClass("hide");
    burger.addClass("hide");
  });

  randomMotivation.on("click", function (event) {
    event.preventDefault();
    $("#random-generator").empty();
    $("#random-generator2").empty();
    $.ajax({
      url: "https://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp",
      },
    }).then(function (response) {
      var quote = response.quoteText;
      var author = response.quoteAuthor;
      var quoteDiv = $("<div>").text(quote);
      var authorDiv = $("<div>").text(author);
      $("#random-generator").append(quoteDiv);
      $("#random-generator2").append(authorDiv);
    });
  });
});
