import "jquery";

export function fetchUser(callback) {
  return $.ajax({
    success: (user) => callback(toJSON(user)),
    type: "GET",
    url: "http://fake.com/currentUsers",
  });
}

function toJSON(user) {
  return {
    fullName: user.firstName + " " + user.lastName,
  };
}
export default fetchUser;
