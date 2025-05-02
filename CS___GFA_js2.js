let contacts = [];

    function updateDisplay() {
      const list = document.getElementById("contactList");
      list.innerHTML = ""; 
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
        contacts.shift();
      }

      contacts.push(name); 
      input.value = ""; 
      updateDisplay();
    }

    function removeContact() {
      contacts.pop(); 
      updateDisplay();
    }
  
