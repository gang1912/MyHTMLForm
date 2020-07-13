document.addEventListener("submit", sendData);
      function sendData(e) {
      
        e.preventDefault();
        a = document.querySelector("#ReqName").value;
        b = document.querySelector("#Userid").value;
        c = document.querySelector("#UserDomain").value;
        var obj = { userName: a, userId: b, domain: c };

        fetch("http://localhost:8080/user-details/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(obj),
        })
          .then(res => res.json())
          .then(data => {
            const { result } = data;
            document.querySelector(
              ".result"
            ).innerText = `The sum is: ${result}`;
          })
          .catch(err => console.log(err));

      }