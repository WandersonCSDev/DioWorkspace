(function () {
  let text = "Sou a função autoinvocável";
  return text;
})();

(function (a, b) {
  return a + b;
})(2, 4);

const sum3 = (function (a, b) {
  return a + b;
})(2, 4);

console.log(sum3);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

function showArgs() {
  return arguments;
}

console.log(findMax(1, 2, 3, 6, 90, 100));

console.log(showArgs(1, 2, 3, 6, 90, 100));

const user = {
  id: 2,
  displayName: "jdoe",
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
};

function userId({ id }) {
  return id;
}

function getFullname({ fullName: { firstName: first, lastName: last } }) {
  return `${first} ${last}`;
}

console.log(userId(user));

console.log(getFullname(user));
