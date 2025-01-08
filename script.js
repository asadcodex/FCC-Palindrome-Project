const input = document.getElementById("text-input");
const answer = document.querySelector(".user-input");

function reverseString(str) {
  return str.split("").reverse().join("");
}

function normalizeString(str) {
  return str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}

function check() {
  const value = input.value;

  if (value === "") {
    alert("Please input a value");
    return;
  }

  const normalizedValue = normalizeString(value);
  const reverse = reverseString(normalizedValue);

  if (normalizedValue === reverse) {
    answer.innerHTML = `${value} is a palindrome`;
  } else {
    answer.innerHTML = `${value} is not a palindrome`;
  }

  input.value = "";
}