document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var name = document.getElementById("title").value.trim();
  var date = document.getElementById("date").value;
  var genderElement = document.querySelector('input[name="gender"]:checked');
  var genderValue = genderElement ? genderElement.id : "";
  var message = document.getElementById("body").value.trim();

  // Validasi form values
  if (name === "" || date === "" || genderValue === "" || message === "") {
    alert("Please fill in all the required fields.");
    return;
  }

  // Display form values in the card
  document.getElementById("nameOutput").textContent = "Nama: " + name;
  document.getElementById("dateOutput").textContent = "Tanggal Lahir: " + date;
  document.getElementById("genderOutput").textContent = "Jenis Kelamin: " + (genderValue === "man" ? "Laki-laki" : "Wanita");
  document.getElementById("messageOutput").textContent = "Message: " + message;

  // Show the output card with animation
  var outputCard = document.getElementById("outputCard");
  outputCard.classList.add("card-transition");
  outputCard.classList.add("card-visible");

  // Hide the form card with animation
  var formCard = document.querySelector(".card.card-body");
  formCard.classList.add("card-transition");
  formCard.style.display = "none";

  // Clear form values
  document.getElementById("title").value = "";
  document.getElementById("date").value = "";
  document.getElementById("man").checked = false;
  document.getElementById("woman").checked = false;
  document.getElementById("body").value = "";
});
