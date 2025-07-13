
    function toggleInfo() {
      const info = document.getElementById("extra-info");
      const button = document.querySelector(".show-btn");

      if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
        button.textContent = "Show Less";
      } else {
        info.style.display = "none";
        button.textContent = "Show More";
      }
    }