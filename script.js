function appendFormToTable(jsonData) {
      if (
        jsonData.firstname &&
        jsonData.age &&
        jsonData.surname &&
        jsonData.level &&
        jsonData.club
      ) {
        var table = document.getElementById("display");
        var tr = document.createElement("tr");
        let btn = document.createElement("button");
        btn.innerHTML = "Delete";
        btn.onclick = function () {
             tr.innerHTML = ""
        };
        tr.innerHTML =
          "<td>" +
          Date.now() +
          "</td>" +
          "<td>" +
          jsonData.firstname +
          "</td>" +
          "<td>" +
          jsonData.surname +
          "</td>" +
          "<td>" +
          jsonData.age +
          "</td>" +
          "<td>" +
          jsonData.level +
          "</td>" +
          "<td>" +
          jsonData.club +
          "</td>";
        tr.appendChild(btn);
        table.appendChild(tr);
      }
    }
    function submitForm(e) {
      const frm = document.getElementsByName("contact-form")[0];
      const firstname = document.getElementById("inputName").value;
      const surname = document.getElementById("inputSurname").value;
      const age = document.getElementById("inputAge").value;
      const level = document.getElementById("inputCurrentLevel").value;
      const club = document.getElementById("inputFavouriteClub").value;
      if (firstname && surname && age && level && club) {
        const formItems = JSON.stringify({
          firstname,
          surname,
          age,
          level,
          club,
        });
        appendFormToTable(JSON.parse(formItems));
        frm.reset()
      } else {
        alert("Some fields are missing");
      }
    }
