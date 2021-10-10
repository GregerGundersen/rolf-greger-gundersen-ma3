const form = document.querySelector("#logIn");
const message = document.querySelector(".messageContainer");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

const logIn = async (username, password) => {
  const url = "http://localhost:8082/auth/local";

  const data = JSON.stringify({ identifier: username, password: password });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.error) {
      message.innerHTML = "Invalid credentials.";
    } else if (json.user) {
      localStorage.setItem("jwt", json.jwt);
      message.innerHTML = "LogIn successful.";
      location.href = "/success.html";
    }

    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

form.onsubmit = function () {
  event.preventDefault();
  message.innerHTML = "";

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue.length === 0 || passwordValue.length === 0) {
    message.innerHTML = "You must input username and password.";
  } else {
    logIn(usernameValue, passwordValue);
  }
};
