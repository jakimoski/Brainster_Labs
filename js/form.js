// Custom select
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.setAttribute("tabindex", "0");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.setAttribute("tabindex", "0");
    c.innerHTML = selElmnt.options[j].innerHTML;

    c.addEventListener("click", function (e) {
      /*when an item is clicked, update the original select box,
        and the selected item:*/
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    c.addEventListener("keypress", function (e) {
      /*when an item is clicked with keyboard, update the original select box,
          and the selected item:*/
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
  a.addEventListener("keypress", function (e) {
    /*when the select box is selcted with keyboard, close any other select boxes,
      and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

// Form validation
const form = document.querySelector(".employ-form");
const clientName = document.getElementById("clientname");
const companyName = document.getElementById("company");
const companyEmail = document.getElementById("email");
const companyPhone = document.getElementById("telephone");
const studentsType = document.getElementById("students");
const studentInputDiv = document.querySelector(".select-selected");

document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", function (event) {
    let isValid = true;
    event.preventDefault();

    // Name validation
    const nameValue = clientName.value.trim();
    const namePattern = /^[A-Za-z\s]+$/; // Only allow letters and spaces
    const nameErrorSpan = document.getElementById("clientname-error");
    if (nameValue === "") {
      displayError(nameErrorSpan, "Име и презиме е задолжително поле.");
      clientName.classList.add("invalid");
      isValid = false;
    } else if (!namePattern.test(nameValue)) {
      displayError(nameErrorSpan, "Внесете валидно име и презиме.");
      isValid = false;
    } else {
      clientName.classList.add("valid");
      clearError(nameErrorSpan);
    }

    // Company validation
    const companyValue = companyName.value.trim();
    const companyErrorSpan = document.getElementById("company-error");
    if (companyValue === "") {
      displayError(companyErrorSpan, "Име на компанијата е задолжително поле.");
      companyName.classList.add("invalid");
      isValid = false;
    } else {
      companyName.classList.add("valid");
      clearError(companyErrorSpan);
    }

    // Email validation
    const emailValue = companyEmail.value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const emailErrorSpan = document.getElementById("email-error");
    if (emailValue === "") {
      displayError(emailErrorSpan, "Контакт имејл е задолжително поле.");
      companyEmail.classList.add("invalid");
      isValid = false;
    } else if (!emailPattern.test(emailValue)) {
      displayError(emailErrorSpan, "Внесете валидна контакт имејл адреса.");
      isValid = false;
    } else {
      companyEmail.classList.add("valid");
      clearError(emailErrorSpan);
    }

    // Telephone validation
    const phoneValue = companyPhone.value.trim();
    const phonePattern = /^(\+\d{1,3})?(\d{3}-\d{3}-\d{3}|\d{9})?$/;
    const phoneErrorSpan = document.getElementById("telephone-error");
    if (phoneValue === "") {
      displayError(phoneErrorSpan, "Контакт телефон е задолжително поле.");
      companyPhone.classList.add("invalid");
      isValid = false;
    } else if (!phonePattern.test(phoneValue)) {
      displayError(phoneErrorSpan, "Внесете валиден контакт телефон.");
      isValid = false;
    } else {
      companyPhone.classList.add("valid");
      clearError(phoneErrorSpan);
    }

    // Students validation
    const studentsValue = studentsType.value;
    const studentsErrorSpan = document.getElementById("students-error");
    if (studentsValue === "") {
      displayError(studentsErrorSpan, "Изберете тип на студент.");
      studentInputDiv.classList.add("invalid");
      isValid = false;
    } else {
      studentInputDiv.classList.add("valid");
      clearError(studentsErrorSpan);
    }
    // Check if there are any validation errors
    if (!isValid) {
      event.preventDefault(); // Prevent form submission
    }
  });
});

function displayError(errorElement, errorMessage) {
  errorElement.textContent = errorMessage;
}

function clearError(errorElement) {
  errorElement.textContent = "";
}
