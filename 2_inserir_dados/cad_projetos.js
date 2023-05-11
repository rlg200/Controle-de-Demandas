
window.onload = (event) => {
  initMultiselect();
};

function initMultiselect() {

  checkboxStatusChange();

  document.addEventListener("click", function(evt) {
    var flyoutElement = document.getElementById('myMultiselect'),
      targetElement = evt.target; // clicked element

    do {
      if (targetElement == flyoutElement) {

        return;
      }
      // Go up the DOM
      targetElement = targetElement.parentNode;

    } while (targetElement);

    // This is a click outside.
    toggleCheckboxArea(true);
    //console.log('click outside');
  });
}

function checkboxStatusChange() {
  var multiselect = document.getElementById("mySelectLabel");
  var multiselectOption = multiselect.getElementsByTagName('option')[0];

  var values = [];
  var checkboxes = document.getElementById("mySelectOptions");
  var checkedCheckboxes = checkboxes.querySelectorAll('input[type=checkbox]:checked');

  for (const item of checkedCheckboxes) {
    var checkboxValue = item.getAttribute('value');
    values.push(checkboxValue);
  }

  var dropdownValue = "";
  if (values.length > 0) {
    dropdownValue = values.join(', ');
  }

  multiselectOption.innerText = dropdownValue;
}

function toggleCheckboxArea(onlyHide = false) {
  var checkboxes = document.getElementById("mySelectOptions");
  var displayValue = checkboxes.style.display;

  if (displayValue != "block") {
    if (onlyHide == false) {
      checkboxes.style.display = "block";
    }
  } else {
    checkboxes.style.display = "none";
  }
}
/*
function funcao_de_pesquisar () {
	let inputElement = document.querySelector("input.search-fruits")
	let listElement = document.querySelector("ul")
	let itemElement = listElement.querySelectorAll("li")

	inputElement.addEventListener("input", (e) => {
	let inputed = e.target.value.toLowerCase()
	itemElement.forEach((li) => {
	let text = li.textContent.toLowerCase()
		if(text.includes(inputed)){
			li.style.display = "block"
		}else{
			li.style.display = "none"
		}
	})
	})
	}
*/
function goback () {
	window.history.back()
}