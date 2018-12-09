
//taken from w3schools
var img = new Image();
img.src = 'animation.jpg';
var CanvasXSize = 1000;
var CanvasYSize = 200;
var speed = 30;
var scale = 1.05;
var y = -4.5;
var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.onload = function() {  //taken from w3schools
    imgW = img.width*scale;
    imgH = img.height*scale;
    if (imgW > CanvasXSize) { 
		x = CanvasXSize-imgW; 
    } 
    if (imgW > CanvasXSize) { 
		clearX = imgW; 
	} 
    else { 
		clearX = CanvasXSize; 
	}
    if (imgH > CanvasYSize) { 
		clearY = imgH; 
	} 
    else {
		clearY = CanvasYSize; 
	}
    ctx = document.getElementById('canvas').getContext('2d');
    return setInterval(draw, speed);
}

function draw() {  //taken from w3schools
    ctx.clearRect(0,0,clearX,clearY);
    if (imgW <= CanvasXSize) {
        if (x > (CanvasXSize)) {
			x = 0; 
		}
        if (x > (CanvasXSize-imgW)) {
			ctx.drawImage(img,x-CanvasXSize+1,y,imgW,imgH); 
		}
    }
    else {
        if (x > (CanvasXSize)) { 
			x = CanvasXSize-imgW; 
		}
        if (x > (CanvasXSize-imgW)) { 
			ctx.drawImage(img,x-imgW+1,y,imgW,imgH);			
	    }
    }
    ctx.drawImage(img,x,y,imgW,imgH);
    x += dx;
}


function dynamicFrame() { //taken from w3schools
    var frames = window.frames;
    frames[1].location = "http://www.w3schools.com";
}


function myFunction() { //taken from w3schools
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


function autocomplete(inp, arr) {  //taken from w3schools
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {  //taken from w3schools
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {  //taken from w3schools
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {  //taken from w3schools
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {  //taken from w3schools
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {  //taken from w3schools
    closeAllLists(e.target);
});
} 

 function testFunction(){ //traversing list of countries and updating capital and map
	 
	 var ab = document.getElementById('myInput').value;
	 for (var ll in cAc) {
		 if(ab == cAc[ll].name){
	if (cAc.hasOwnProperty(ll)) {
		document.getElementById("secondInput").value = cAc[ll].capital;
		document.getElementById("gmap_canvas").src = cAc[ll].source;
		break;
		 }}
}
	 
 }
 
var cAc = [ //list of countries, capitals and map location sources

{"name":"Afghanistan",

                "capital":"Kabul",

                "source":"https://maps.google.com/maps?q=kabul&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Albania",

                "capital":"Tirana",

                "source":"https://maps.google.com/maps?q=tirana&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Algeria",

                "capital":"Algiers",

                "source":"https://maps.google.com/maps?q=algiers&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Andorra",

                "capital":"Andorra la Vella",

                "source":"https://maps.google.com/maps?q=andorra%20la%20vella&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Angola",

                "capital":"Luanda",

                "source":"https://maps.google.com/maps?q=luanda&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Antigua and Barbuda",

                "capital":"Saint John's",

                "source":"https://maps.google.com/maps?q=saint%20john's%20anti&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Argentina",

                "capital":"Buenos Aires",

                "source":"https://maps.google.com/maps?q=buenos&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Armenia",

                "capital":"Yerevan",

                "source":"https://maps.google.com/maps?q=yerevan&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Australia",

                "capital":"Canaberra",

                "source":"https://maps.google.com/maps?q=canaberra&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Austria",

                "capital":"Vienna",

                "source":"https://maps.google.com/maps?q=vienna&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Azerbaijan",

                "capital":"Baku",

                "source":"https://maps.google.com/maps?q=baku&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Bahamas",

                "capital":"Nassau",

                "source":"https://maps.google.com/maps?q=nassau&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Bahrain",

                "capital":"Manama",

                "source":"https://maps.google.com/maps?q=manama&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Bangladesh",

                "capital":"Dhaka",

                "source":"https://maps.google.com/maps?q=dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Barbados",

                "capital":"Bridgetown",

                "source":"https://maps.google.com/maps?q=Bridgetown%20barbd&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Belarus",

                "capital":"Minsk",

                "source":"https://maps.google.com/maps?q=minsk&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Belgium",

                "capital":"Brussels",

                "source":"https://maps.google.com/maps?q=Brussels&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Belize",

                "capital":"Belmopan",

                "source":"https://maps.google.com/maps?q=Belmopan&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Benin",

                "capital":"Porto-Novo",

                "source":"https://maps.google.com/maps?q=Porto-Novo&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Bhutan",

                "capital":"Thimphu",

                "source":"https://maps.google.com/maps?q=Thimphu&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Bolivia",

                "capital":"La Paz",

                "source":"https://maps.google.com/maps?q=La%20Paz&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Bosnia and Herzegovina",

                "capital":"Sarajevo",

                "source":"https://maps.google.com/maps?q=Sarajevo&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Botswana",

                "capital":"Gaborone",

                "source":"https://maps.google.com/maps?q=Gaborone&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Brazil",

                "capital":"Brazilia",

                "source":"https://maps.google.com/maps?q=Brasilia%20brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Brunei",

                "capital":"Bandar Seri Begawan",

                "source":"https://maps.google.com/maps?q=Bandar%20Seri%20Begawan&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Bulgaria",

                "capital":"Sofia",

                "source":"https://maps.google.com/maps?q=Sofia&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Burkina Faso",

                "capital":"Ouagadougou",

                "source":"https://maps.google.com/maps?q=Ouagadougou&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Burundi",

                "capital":"Bujumbura",

                "source":"https://maps.google.com/maps?q=Bujumbura&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Cambodia",

                "capital":"Phnom Penh",

                "source":"https://maps.google.com/maps?q=Phnom%20Penh&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Cameroon",

                "capital":"Yaounde",

                "source":"https://maps.google.com/maps?q=Yaounde&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Canada",

                "capital":"Ottawa",

                "source":"https://maps.google.com/maps?q=Ottawa&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Cape Verde",

                "capital":"Praia",

                "source":"https://maps.google.com/maps?q=Praia&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Central African Republic",

                "capital":"Bangui",

                "source":"https://maps.google.com/maps?q=Bangui&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Chad",

                "capital":"N'Djamena",

                "source":"https://maps.google.com/maps?q=N'Djamena&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Chile",

                "capital":"Santiago",

                "source":"https://maps.google.com/maps?q=Santiago&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "China",

                "capital":"Beijing",

                "source":"https://maps.google.com/maps?q=Beijing&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Colombia",

                "capital":"Bogota",

                "source":"https://maps.google.com/maps?q=Bogota&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Republic of the Congo",

                "capital":"Brazzaville",

                "source":"https://maps.google.com/maps?q=Brazzaville&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "DR Congo",

                "capital":"Kinshasa",

                "source":"https://maps.google.com/maps?q=Kinshasa&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Costa Rica",

                "capital":"San Jose",

                "source":"https://maps.google.com/maps?q=San%20Jose%20costa&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Cote dIvore",

                "capital":"Yamoussoukro",

                "source":"https://maps.google.com/maps?q=Yamoussoukro&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Croatia",

                "capital":"Zagreb",

                "source":"https://maps.google.com/maps?q=Zagreb&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Cuba",

                "capital":"Havana",

                "source":"https://maps.google.com/maps?q=Havana%20cuba&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Cyprus",

                "capital":"Nicosia",

                "source":"https://maps.google.com/maps?q=Nicosia&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Czech Republic",

                "capital":"Prague",

                "source":"https://maps.google.com/maps?q=Prague&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Denmark",

                "capital":"Copenhagen",

                "source":"https://maps.google.com/maps?q=Copenhagen&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Djibouti",

                "capital":"Djibouti",

                "source":"https://maps.google.com/maps?q=Djibouti&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Dominica",

                "capital":"Roseau",

                "source":"https://maps.google.com/maps?q=Roseau&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Dominican Republic",

                "capital":"Santo Domingo",

                "source":"https://maps.google.com/maps?q=Santo%20Domingo&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "East Timor",

                "capital":"Dili",

                "source":"https://maps.google.com/maps?q=Dili&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Ecuador",

                "capital":"Quito",

                "source":"https://maps.google.com/maps?q=Quito&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Egypt",

                "capital":"Cairo",

                "source":"https://maps.google.com/maps?q=Cairo&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Equatorial Guinea",

                "capital":"Malabo",

                "source":"https://maps.google.com/maps?q=Malabo&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Eritrea",

                "capital":"Asmara",

                "source":"https://maps.google.com/maps?q=Asmara&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Estonia",

                "capital":"Tallinn",

                "source":"https://maps.google.com/maps?q=Tallinn&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Ethiopia",

                "capital":"Addis Ababa",

                "source":"https://maps.google.com/maps?q=addis%20Ababa&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Fiji",

                "capital":"Suva",

                "source":"https://maps.google.com/maps?q=Suva&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Finland",

                "capital":"Helsinki",

                "source":"https://maps.google.com/maps?q=Helsinki&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "France",

                "capital":"Paris",

                "source":"https://maps.google.com/maps?q=Paris&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "French Guiana",

                "capital":"Cayenne",

                "source":"https://maps.google.com/maps?q=Cayenne&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Gabon",

                "capital":"Liberville",

                "source":"https://maps.google.com/maps?q=Liberville&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Gambia",

                "capital":"Banjul",

                "source":"https://maps.google.com/maps?q=Banjul&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Georgia",

                "capital":"Tbilisi",

                "source":"https://maps.google.com/maps?q=Tbilisi&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Germany",

                "capital":"Berlin",

                "source":"https://maps.google.com/maps?q=Berlin&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Ghana",

                "capital":"Accra",

                "source":"https://maps.google.com/maps?q=Accra&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Greece",

                "capital":"Athens",

                "source":"https://maps.google.com/maps?q=Athens&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Grenada",

                "capital":"Saint George's",

                "source":"https://maps.google.com/maps?q=Saint%20George's%20grenada&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Guatemala",

                "capital":"Guatemala city",

                "source":"https://maps.google.com/maps?q=Guatemala%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Guinea",

                "capital":"Caonakry",

                "source":"https://maps.google.com/maps?q=Caonakry&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Guinea-Bissau",

                "capital":"Bissau",

                "source":"https://maps.google.com/maps?q=Bissau&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Guyana",

                "capital":"Georgetown",

                "source":"https://maps.google.com/maps?q=Georgetown%20guy&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Haiti",

                "capital":"Port-au-Prince",

                "source":"https://maps.google.com/maps?q=Port-au-Prince&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Vatican City",

                "capital":"Vatican city",

                "source":"https://maps.google.com/maps?q=vatican%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Honduras",

                "capital":"Tegucigalpa",

                "source":"https://maps.google.com/maps?q=Tegucigalpa&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Hong Kong",

                "capital":"Hong Kong",

                "source":"https://maps.google.com/maps?q=Hong%20Kong&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Hungary",

                "capital":"Budapest",

                "source":"https://maps.google.com/maps?q=Budapest&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Iceland",

                "capital":"Reykjavik",

                "source":"https://maps.google.com/maps?q=Reykjavik&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "India",

                "capital":"New Delhi",

                "source":"https://maps.google.com/maps?q=New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Indonesia",

                "capital":"Jakarta",

                "source":"https://maps.google.com/maps?q=Jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Iran",

                "capital":"Tehran",

                "source":"https://maps.google.com/maps?q=Tehran&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Iraq",

                "capital":"Baghdad",

                "source":"https://maps.google.com/maps?q=Baghdad&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Ireland",

                "capital":"Dublin",

                "source":"https://maps.google.com/maps?q=Dublin&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Israel",

                "capital":"Tel Aviv",

                "source":"https://maps.google.com/maps?q=tel%20av&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Italy",

                "capital":"Rome",

                "source":"https://maps.google.com/maps?q=Rome&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Jamaica",

                "capital":"Kingston",

                "source":"https://maps.google.com/maps?q=Kingston%20jama&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Japan",

                "capital":"Tokyo",

                "source":"https://maps.google.com/maps?q=Tokyo&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Jordan",

                "capital":"Amman",

                "source":"https://maps.google.com/maps?q=Amman&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Kazakhstan",

                "capital":"Astana",

                "source":"https://maps.google.com/maps?q=Astana&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Kenya",

                "capital":"Nairobi",

                "source":"https://maps.google.com/maps?q=Nairobi&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Kiribati",

                "capital":"Tarawa Atoll",

                "source":"https://maps.google.com/maps?q=Tarawa%20Atoll&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Kuwait",

                "capital":"Kuwait city",

                "source":"https://maps.google.com/maps?q=Kuwait%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Kyrgyzstan",

                "capital":"Bishkek",

                "source":"https://maps.google.com/maps?q=Bishkek&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Laos",

                "capital":"Vientiane",

                "source":"https://maps.google.com/maps?q=Vientiane&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Latvia",

                "capital":"Riga",

                "source":"https://maps.google.com/maps?q=Riga&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Lebanon",

                "capital":"Beirut",

                "source":"https://maps.google.com/maps?q=Beirut&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Lesotho",

                "capital":"Maseru",

                "source":"https://maps.google.com/maps?q=Maseru&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Liberia",

                "capital":"Monrovia",

                "source":"https://maps.google.com/maps?q=Monrovia&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Libya",

                "capital":"Tripoli",

                "source":"https://maps.google.com/maps?q=Tripoli&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Liechtenstein",

                "capital":"Vaduz",

                "source":"https://maps.google.com/maps?q=Vaduz&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Lithuania",

                "capital":"Vilnius",

                "source":"https://maps.google.com/maps?q=Vilnius&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Luxembourg",

                "capital":"Luxembourg",

                "source":"https://maps.google.com/maps?q=Luxembourg&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Macau",

                "capital":"Macau",

                "source":"https://maps.google.com/maps?q=Macau&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Macedonia",

                "capital":"Skopje",

                "source":"https://maps.google.com/maps?q=Skopje&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Madagascar",

                "capital":"Antananarivo",

                "source":"https://maps.google.com/maps?q=Antananarivo&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Malawi",

                "capital":"Lilongwe",

                "source":"https://maps.google.com/maps?q=Lilongwe&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Malaysia",

                "capital":"Kuala Lumpur",

                "source":"https://maps.google.com/maps?q=Kuala%20Lumpur&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Maldives",

                "capital":"Male",

                "source":"https://maps.google.com/maps?q=Male%20maldi&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Mali",

                "capital":"Bamako",

                "source":"https://maps.google.com/maps?q=Bamako&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Malta",

                "capital":"Valletta",

                "source":"https://maps.google.com/maps?q=Valletta&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Marshall Islands",

                "capital":"Majuro",

                "source":"https://maps.google.com/maps?q=Majuro&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Mauritania",

                "capital":"Nouakchott",

                "source":"https://maps.google.com/maps?q=Nouakchott&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Mauritius",

                "capital":"Port Louis",

                "source":"https://maps.google.com/maps?q=Port%20Louis&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Mexico",

                "capital":"Mexico city",

                "source":"https://maps.google.com/maps?q=Mexico%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Micronesia",

                "capital":"Palikir",

                "source":"https://maps.google.com/maps?q=Palikir&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Moldova",

                "capital":"Chisinau",

                "source":"https://maps.google.com/maps?q=Chisinau&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Monaco",

                "capital":"Monaco",

                "source":"https://maps.google.com/maps?q=Monaco&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Mongolia",

                "capital":"Ulaanbaatar",

                "source":"https://maps.google.com/maps?q=Ulaanbaatar&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Montenegro",

                "capital":"Podgorica",

                "source":"https://maps.google.com/maps?q=Podgorica&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Morocco",

                "capital":"Rabat",

                "source":"https://maps.google.com/maps?q=Rabat&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Mozambique",

                "capital":"Maputo",

                "source":"https://maps.google.com/maps?q=Maputo&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Myanmar",

                "capital":"Rangoon",

                "source":"https://maps.google.com/maps?q=Rangoon&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Namibia",

                "capital":"Windhoek",

                "source":"https://maps.google.com/maps?q=Windhoek&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Nepal",

                "capital":"Kathmandu",

                "source":"https://maps.google.com/maps?q=Kathmandu%20nepal&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Netherlands",

                "capital":"Amsterdam",

                "source":"https://maps.google.com/maps?q=Amsterdam&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "New Zealand",

                "capital":"Wellington",

                "source":"https://maps.google.com/maps?q=Wellington&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Nicaragua",

                "capital":"Managua",

                "source":"https://maps.google.com/maps?q=Managua&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Niger",

                "capital":"Niamey",

                "source":"https://maps.google.com/maps?q=Niamey&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Nigeria",

                "capital":"Abuja",

                "source":"https://maps.google.com/maps?q=Abuja&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "North Korea",

                "capital":"Pyongyang",

                "source":"https://maps.google.com/maps?q=Pyongyang&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Norway",

                "capital":"Oslo",

                "source":"https://maps.google.com/maps?q=Oslo&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Oman",

                "capital":"Muscat",

                "source":"https://maps.google.com/maps?q=Muscat&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Pakistan",

                "capital":"Islamabad",

                "source":"https://maps.google.com/maps?q=Islamabad&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Palestine",

                "capital":"Jerusalem",

                "source":"https://maps.google.com/maps?q=Jerusalem&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Panama",

                "capital":"Panama city",

                "source":"https://maps.google.com/maps?q=Panama%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Papua New Guinea",

                "capital":"Port Moresby",

                "source":"https://maps.google.com/maps?q=Port%20Moresby&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Paraguay",

                "capital":"Asuncion",

                "source":"https://maps.google.com/maps?q=Asuncion&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Peru",

                "capital":"Lima",

                "source":"https://maps.google.com/maps?q=Lima&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Philippines",

                "capital":"Manila",

                "source":"https://maps.google.com/maps?q=Manila&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Poland",

                "capital":"Warsaw",

                "source":"https://maps.google.com/maps?q=Warsaw&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Portugal",

                "capital":"Lisbon",

                "source":"https://maps.google.com/maps?q=Lisbon&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Puerto Rico",

                "capital":"San Juan",

                "source":"https://maps.google.com/maps?q=San%20Juan&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Qatar",

                "capital":"Doha",

                "source":"https://maps.google.com/maps?q=Doha&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Kosovo",

                "capital":"Pristina",

                "source":"https://maps.google.com/maps?q=Pristina&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Romania",

                "capital":"Bucharest",

                "source":"https://maps.google.com/maps?q=Bucharest&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Russia",

                "capital":"Moscow",

                "source":"https://maps.google.com/maps?q=Moscow&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Rwanda",

                "capital":"Kigali",

                "source":"https://maps.google.com/maps?q=Kigali&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "San Marino",

                "capital":"San Marino",

                "source":"https://maps.google.com/maps?q=San%20Marino%20san%20marino&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Saudi Arabia",

                "capital":"Riyadh",

                "source":"https://maps.google.com/maps?q=Riyadh&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Senegal",

                "capital":"Dakar",

                "source":"https://maps.google.com/maps?q=Dakar&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Serbia",

                "capital":"Belgrade",

                "source":"https://maps.google.com/maps?q=Belgrade&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Seychelles",

                "capital":"Victoria",

                "source":"https://maps.google.com/maps?q=seychelles&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Sierra Leone",

                "capital":"Freetown",

                "source":"https://maps.google.com/maps?q=Freetown&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Singapore",

                "capital":"Singapore",

                "source":"https://maps.google.com/maps?q=Singapore%20singapore&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Slovakia",

                "capital":"Bratislava",

                "source":"https://maps.google.com/maps?q=Bratislava&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Slovenia",

                "capital":"Ljubljana",

                "source":"https://maps.google.com/maps?q=Ljubljana&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Solomon Islands",

                "capital":"Honiara",

                "source":"https://maps.google.com/maps?q=Honiara&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Somalia",

                "capital":"Mogadishu",

                "source":"https://maps.google.com/maps?q=Mogadishu&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "South Africa",

                "capital":"Pretoria",

                "source":"https://maps.google.com/maps?q=Pretoria&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "South Korea",

                "capital":"Seoul",

                "source":"https://maps.google.com/maps?q=Seoul&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "South Sudan",

                "capital":"Juba",

                "source":"https://maps.google.com/maps?q=Juba&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Spain",

                "capital":"Madrid",

                "source":"https://maps.google.com/maps?q=Madrid&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Sri Lanka",

                "capital":"Colombo",

                "source":"https://maps.google.com/maps?q=Colombo&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Sudan",

                "capital":"Khartoum",

                "source":"https://maps.google.com/maps?q=Khartoum&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Suriname",

                "capital":"Paramaribo",

                "source":"https://maps.google.com/maps?q=Paramaribo&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Swaziland",

                "capital":"Mbabane",

                "source":"https://maps.google.com/maps?q=Mbabane&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Sweden",

                "capital":"Stockholm",

                "source":"https://maps.google.com/maps?q=Stockholm&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Switzerland",

                "capital":"Bern",

                "source":"https://maps.google.com/maps?q=Bern&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Syria",

                "capital":"Damascus",

                "source":"https://maps.google.com/maps?q=Damascus&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Taiwan",

                "capital":"Taipei",

                "source":"https://maps.google.com/maps?q=Taipei&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Tajikistan",

                "capital":"Dushanbe",

                "source":"https://maps.google.com/maps?q=Dushanbe&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Tanzania",

                "capital":"Dar es Salaam",

                "source":"https://maps.google.com/maps?q=Dar%20es%20Salaam&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Thailand",

                "capital":"Bangkok",

                "source":"https://maps.google.com/maps?q=Bangkok&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Togo",

                "capital":"Lome",

                "source":"https://maps.google.com/maps?q=Lome&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Trinidad and Tobago",

                "capital":"Port-Of-Spain",

                "source":"https://maps.google.com/maps?q=Port-Of-Spain&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Tunisia",

                "capital":"Tunis",

                "source":"https://maps.google.com/maps?q=Tunis&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Turkey",

                "capital":"Ankara",

                "source":"https://maps.google.com/maps?q=Ankara&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Turkmenistan",

                "capital":"Ashgabat",

                "source":"https://maps.google.com/maps?q=Ashgabat&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Uganda",

                "capital":"Kampala",

                "source":"https://maps.google.com/maps?q=Kampala&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Ukraine",

                "capital":"Kyiv",

                "source":"https://maps.google.com/maps?q=Kyiv&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "United Arab Emirates",

                "capital":"Abu Dhabi",

                "source":"https://maps.google.com/maps?q=Abu%20Dhabi&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "United Kingdom",

                "capital":"London",

                "source":"https://maps.google.com/maps?q=London&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "United States",

                "capital":"Washington",

                "source":"https://maps.google.com/maps?q=Washington&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Uruguay",

                "capital":"Montevideo",

                "source":"https://maps.google.com/maps?q=Montevideo&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Uzbekistan",

                "capital":"Tashkent",

                "source":"https://maps.google.com/maps?q=Tashkent&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Venezuela",

                "capital":"Caracas",

                "source":"https://maps.google.com/maps?q=Caracas&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Vietnam",

                "capital":"Hanoi",

                "source":"https://maps.google.com/maps?q=Hanoi&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Yemen",

                "capital":"Sanaa",

                "source":"https://maps.google.com/maps?q=Sanaa&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Zambia",

                "capital":"Lusaka",

                "source":"https://maps.google.com/maps?q=Lusaka&t=&z=13&ie=UTF8&iwloc=&output=embed"},

{"name": "Zimbabwe",

                "capital":"Harare",

                "source":"https://maps.google.com/maps?q=Harare&t=&z=13&ie=UTF8&iwloc=&output=embed"}

                ];

var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola", //list of countries
	 "Argentina","Armenia",
	 "Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh",
	 "Barbados","Belarus","Belgium","Belize","Benin","Bhutan",
	 "Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil",
	 "Brunei","Bulgaria","Burkina Faso","Burundi",
	 "Cambodia","Cameroon","Canada","Cape Verde",
	 "Central African Republic","Chad","Chile","China","Colombia","Congo",
	 "Costa Rica","Cote dIvore","Croatia","Cuba",
	 "Cyprus","Czech Republic","Denmark","Djibouti","Dominica",
	 "Dominican Republic","Ecuador","Egypt","Equatorial Guinea",
	 "Eritrea","Estonia","Ethiopia","Fiji",
	 "Finland","France","Gabon",
	 "Gambia","Georgia","Germany","Ghana","Greece",
	 "Grenada","Guatemala","Guinea","Guyana",
	 "Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia",
	 "Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan",
	 "Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait",
	 "Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya",
	 "Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar",
	 "Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands",
	 "Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco",
	 "Mongolia","Montenegro","Morocco","Mozambique","Myanmar",
	 "Namibia","Nepal","Netherlands",
	 "New Zealand","Nicaragua","Niger","Nigeria","North Korea",
	 "Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea",
	 "Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar",
	 "Romania","Russia","Rwanda","San Marino","Saudi Arabia","Senegal",
	 "Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia",
	 "Solomon Islands","Somalia","South Africa","South Korea","South Sudan",
	 "Spain","Sri Lanka",
	 "Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan",
	 "Tajikistan","Tanzania","Thailand","East Timor","Togo","Tonga",
	 "Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu",
	 "Uganda","Ukraine","United Arab Emirates","United Kingdom",
	 "United States of America","Uruguay","Uzbekistan",
	 "Vatican City","Venezuela","Vietnam","Yemen",
	 "Zambia","Zimbabwe"];
	 
	autocomplete(document.getElementById("myInput"), countries); 


window.addEventListener("load", function(){ //taken from w3schools
    // Add a keyup event listener to our input element
    document.getElementById('name_input').addEventListener("keyup", function(event){hinter(event)});
    // create one global XHR object 
    // so we can abort old requests when a new one is make
    window.hinterXHR = new XMLHttpRequest();
});
 
// Autocomplete for form taken from w3schools
function hinter(event) {
    var input = event.target;
    var huge_list = document.getElementById('huge_list');
    // minimum number of characters before we start to generate suggestions
    var min_characters = 0;
 
    if (!isNaN(input.value) || input.value.length < min_characters ) { 
        return;
    } else { 
        window.hinterXHR.abort();
        window.hinterXHR.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse( this.responseText ); 
                huge_list.innerHTML = "";
 
                response.forEach(function(item) {
                    // Create a new <option> element.
                    var option = document.createElement('option');
                    option.value = item;
                    huge_list.appendChild(option);
                });
            }
        };
        window.hinterXHR.open("GET", "/query.php?query=" + input.value, true);
        window.hinterXHR.send()
    }
}
 
