   function validateForm() {
			const name = document.getElementById("name").value.trim();
   const email = document.getElementById("emailid").value.trim();
   const message = document.getElementById("msgContent").value.trim();
   const errorMessage = document.getElementById("error-message");
   errorMessage.style.display = "none";

   if (name.length < 2) {
      errorMessage.textContent = "Name must be at least 2 characters long.";
   errorMessage.style.display = "block";
   return false;
			}

   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailPattern.test(email)) {
      errorMessage.textContent = "Please enter a valid email address.";
   errorMessage.style.display = "block";
   return false;
			}

   if (message.length < 10) {
      errorMessage.textContent = "Message must be at least 10 characters long.";
   errorMessage.style.display = "block";
   return false;
			}

   return true;
		}
