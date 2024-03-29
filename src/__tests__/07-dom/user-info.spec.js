import $ from "jquery";
jest.mock("../../07-dom/fetch-user");
import fetchUser from "../../07-dom/fetch-user";
import simulatedUserEvents from "../../07-dom/user-info";

// Tell the fetchUser mock function to execute automatically 
fetchUser.default = jest.fn();

it("Displays user after click", () => {
  // Set body
  document.body.innerHTML =
    "<div>" +
    '  <span id="username" />' +
    '  <button id="button" />' +
    "</div>";


  // Assert that  fetchUser was called, and that the
  // #username span's inner text was updated
});

it("displays hover txt after hover", () => {
  // Set up our document body
  document.body.innerHTML =
    "<div>" +
    '  <span id="username" />' +
    '  <button id="button" />' +
    "</div>";

  // Assert that fetchUser was called, and that the
  // Assert #username span's inner text was updated
});
