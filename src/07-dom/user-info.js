import $ from "jquery";
import fetchUser from "./fetch-user.js";

const simulatedUserEvents = function () {
  $("#button").click(() => {
    console.log("click triggered");
    fetchUser((user) => {
      const loggedText = "Logged " + (user.loggedIn ? "In" : "Out");
      $("#username").text(user.fullName + " - " + loggedText);
    });
  });

  $("#button").hover(() => {
    console.log("Hover triggered");
    fetchUser((user) => {
      $("#username").text("Hover " + user.fullName);
    });
  });
};

export default simulatedUserEvents;
