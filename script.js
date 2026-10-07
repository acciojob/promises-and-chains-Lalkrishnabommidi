//your JS code here. If required.
const ageInput = document.getElementById("age");
const nameInput = document.getElementById("name");
const btn = document.getElementById("btn");

btn.addEventListener("click", function (event) {
  event.preventDefault();

  const age = ageInput.value;
  const name = nameInput.value.trim();

  if (age === "" || name === "") {
    alert("Please enter valid details.");
    return;
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(age) > 18) {
        resolve(name);
      } else {
        reject(name);
      }
    }, 4000);
  });

  promise
    .then((name) => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch((name) => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});