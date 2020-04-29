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

  fetchUser.mockImplementation((cb) => {
    cb({
      fullName: "Pun",
      loggedIn: true,
    });
  });

  simulatedUserEvents();
  $("#button").trigger("click");

  // Assert that fetchUser was called, and that the
  // #username span's inner text was updated
  expect(fetchUser).toBeCalled();
  expect($("#username").text()).toEqual("Pun - Logged In");
});

it("displays hover txt after hover", () => {
  // Set up our document body
  document.body.innerHTML =
    "<div>" +
    '  <span id="username" />' +
    '  <button id="button" />' +
    "</div>";

  simulatedUserEvents();
  $("#button").trigger("mouseenter");
  // Assert that fetchUser was called, and that the
  // #username span's inner text was updated
  expect(fetchUser).toBeCalled();
  expect($("#username").text()).toEqual("Hover Pun");
});
