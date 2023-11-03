let regForm = document.getElementById("regform");
regForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let userName = document.getElementById("username");
  let email = document.getElementById("email");
  let pwd = document.getElementById("pwd");

  if (userName.value == "") {
    alert("Name cant be empty");
  } else {
    // perform operation with form input
    alert("Registration is successfully done!");
    console.log(
      `Name = ${userName.value} \n Email=${email.value} 
    \n password = ${pwd.value}`
    );

    userName.value = "";
    email.value = "";
    pwd.value = "";
  }
});
