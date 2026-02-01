function check() {

  let pass = document.getElementById("password").value;

  let correct = "100322";   // CHANGE THIS PASSWORD

  if (pass === correct) {

    document.getElementById("passwordPage").classList.add("hidden");

    document.getElementById("mainPage").classList.remove("hidden");

    document.getElementById("bgMusic").play();

  }

  else {

    document.getElementById("message").innerText =
      "Wrong password 😏 Try again, love.";

  }
}


function showYes() {

  hideAll();

  document.getElementById("yesPage").classList.remove("hidden");
}


function showNo() {

  hideAll();

  document.getElementById("noPage").classList.remove("hidden");
}


function goBack() {

  hideAll();

  document.getElementById("mainPage").classList.remove("hidden");
}


function hideAll() {

  document.getElementById("passwordPage").classList.add("hidden");

  document.getElementById("mainPage").classList.add("hidden");

  document.getElementById("yesPage").classList.add("hidden");

  document.getElementById("noPage").classList.add("hidden");
}
