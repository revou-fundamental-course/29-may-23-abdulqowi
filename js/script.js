document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById("title").value || "Not provided";
    var date = document.getElementById("date").value || "Not provided";
    var genderElement = document.querySelector('input[name="gender"]:checked');
    var genderValue = genderElement ? genderElement.id : "Not provided";
    var message = document.getElementById("body").value || "Not provided";
  
    // Display form values in the card
    document.getElementById("nameOutput").textContent = "Nama: " + name;
    document.getElementById("dateOutput").textContent = "Tanggal Lahir: " + date;
    document.getElementById("genderOutput").textContent = "Jenis Kelamin: " + (genderValue === "man" ? "Laki-laki" : "Wanita");
    document.getElementById("messageOutput").textContent = "Message: " + message;
    document.getElementById("outputCard").style.display = "block";
  });
  