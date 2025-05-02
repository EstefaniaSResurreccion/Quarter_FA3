let contacts = [];

    function updateDisplay() {
      const list = document.getElementById("contactList");
      list.innerHTML = ""; // Clear old list
      for (let name of contacts) {
        const li = document.createElement("li");
        li.textContent = name;
        list.appendChild(li);
      }
    }

    function addContact() {
      const input = document.getElementById("nameInput");
      const name = input.value.trim();
      if (name === "") {
        alert("Please enter a name.");
        return;
      }

      if (contacts.length >= 7) {
        contacts.shift(); // Remove the first contact if list is full
      }

      contacts.push(name); // Add new contact at end
      input.value = ""; // Clear input box
      updateDisplay();
    }

    function removeContact() {
      contacts.pop(); // Remove last contact
      updateDisplay();
    }
  