// Contols the hamburger menu displaying and responsive navbar
function myFunction() {
  if ($("nav").attr("class") === "") {
    $("nav").attr("class", "responsive");
  } else {
    $("nav").attr("class", "");
  }
}

// controls the displaying of sub-text of each skill
function skills(id) {
  if ($("#" + id).css("display") === "none") {
    $("#" + id).css("display", "block");
    $(".skills-cont").css("margin", "30px");
  } else if ($("#" + id).css("display") === "block") {
    $("#" + id).css("display", "none");
    $(".skills-cont").css("margin", "20px");
  }
}
