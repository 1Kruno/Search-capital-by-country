/*
*******************************************************************
Script 1: Browser Plugin Detection (browserdetection.html)
this function detects the user browser
******************************************************************
*/
function browserDetection() { 
	if(navigator.userAgent.indexOf("Chrome") != -1 ){
		document.write('Chrome');
    }
    else if(navigator.userAgent.indexOf("Opera") != -1 ){
		document.write('Opera');
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ){
        document.write('Firefox');
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){
      document.write('IE'); 
    }  
    else{
       document.write('unknown');
    }
}// end function browserDetection

/*
******************************************************************
Script 2a: Status Bar Message (statusbar.html)
this function shows a message on the status bar
******************************************************************
*/
function writeToStatus(input){
    window.status=input;
    return true;
}// end function writeoStatus

/*
/*****************************************************************
Script2b : Vertical Scrolling Text( scroll.html)
this function is used for Vertical Scrolling Text
****************************************************************
*/
var pos=100;
function scrollText() {
	pos =pos-1;
	if (pos < 0-document.getElementById("text").offsetHeight+130){
		return;
    }
    document.getElementById("text").style.top=pos;
    window.setTimeout("scrollText()",30);
}// end function scrollText

/*
/*****************************************************************
Script 3a: Image Rollover (imagerollover.html)
this function is used for an image rollover
****************************************************************
*/
function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "images/bulboff.gif";
    } else {
        image.src = "images/bulbon.gif";
    }
}// end function changeImage

/*
/*****************************************************************
Script 3b: Text Rollover (textrollover.html)
this function is used for a text rollover
****************************************************************
*/
function mouseOver() {
    document.getElementById("text").style.color = "red";
}// end function

function mouseOut() {
    document.getElementById("text").style.color = "black";
}// end function

/*
*******************************************************************
Script 4a: Cycling Animations (cyclinganimations.html)
Using Canvas
******************************************************************
*/
//declare variables
var img = new Image();
img.src = 'images/animation.jpg';
var CanvasXSize = 1000;
var CanvasYSize = 200;
var speed = 30; //lower is faster
var scale = 1.05;
var y = -4.5; //vertical offset

// Main program
var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.onload = function() {
    imgW = img.width*scale;
    imgH = img.height*scale;
    if (imgW > CanvasXSize) { 
		x = CanvasXSize-imgW; 
    } // image larger than canvas
    if (imgW > CanvasXSize) { 
		clearX = imgW; 
	} // image larger than canvas
    else { 
		clearX = CanvasXSize; 
	}
    if (imgH > CanvasYSize) { 
		clearY = imgH; 
	} // image larger than canvas
    else {
		clearY = CanvasYSize; 
	}
    //Get Canvas Element
    ctx = document.getElementById('canvas').getContext('2d');
    //Set Refresh Rate
    return setInterval(draw, speed);
}

function draw() {
	//Clear Canvas
    ctx.clearRect(0,0,clearX,clearY);
    //If image is <= Canvas Size
    if (imgW <= CanvasXSize) {
        //reset, start from beginning
        if (x > (CanvasXSize)) {
			x = 0; 
		}
        //draw aditional image
        if (x > (CanvasXSize-imgW)) {
			ctx.drawImage(img,x-CanvasXSize+1,y,imgW,imgH); 
		}
    }
    //If image is > Canvas Size
    else {
        //reset, start from beginning
        if (x > (CanvasXSize)) { 
			x = CanvasXSize-imgW; 
		}
        //draw aditional image
        if (x > (CanvasXSize-imgW)) { 
			ctx.drawImage(img,x-imgW+1,y,imgW,imgH);			
	    }
    }
    //draw image
    ctx.drawImage(img,x,y,imgW,imgH);
    //amount to move
    x += dx;
}// end function draw
 /*
*******************************************************
Script 4c:Image Slide Show (slideshow2.html)

***********************************************************
*/
window.onload = function() {
	var imgs = document.getElementById('World Map').children;
	interval = 2000;
	currentPic = 0;
	imgs[currentPic].style.webkitAnimation = 'fadey '+interval+'ms';
	imgs[currentPic].style.animation = 'fadey '+interval+'ms';
	var infiniteLoop = setInterval(function(){
		imgs[currentPic].removeAttribute('style');
		if ( currentPic == imgs.length - 1) {
			currentPic = 0;
		} else {
			currentPic++;
		}
	imgs[currentPic].style.webkitAnimation = 'fadey '+interval+'ms';
	imgs[currentPic].style.animation = 'fadey '+interval+'ms';
}, interval);
}// end function 
 
/*
*******************************************************
Script 5:Dynamic Frame Update(dynamicframesupdate.html)
this function changes the content of an iframe
***********************************************************
*/
function dynamicFrame() {
    var frames = window.frames;
    frames[1].location = "http://www.w3schools.com";
}// end dynamicFrame

/*
/*****************************************************************
Script 6a: Email Verification(emailverification.html and emailthanks.html)
this function is used for email verification
****************************************************************
*/
function emailVerification(myForm) {
	re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	if (re.test(myForm.emailAddr.value)) {
		return true
	}
	alert("Invalid email address")
	myForm.emailAddr.focus()
	myForm.emailAddr.select()
	return false
}//end function emailVerification 

/*
/*****************************************************************
Script 6b: Form Verification (login.html and logincorrect.html)
this function is used for user verification
****************************************************************
*/
function pasuser(form) {
    if (form.id.value=="roisin") { 
        if (form.pass.value=="1234") {              
            location="logincorrect.html" 
        } else {
            alert("Invalid Password")
        }
    } else {  
	     alert("Invalid UserID")
    }
}// end function

/*
/*****************************************************************
Script 7: New Window  (newwindow.html)

****************************************************************
*/
function newWindow() {
    window.open("http://www.w3schools.com");
}//end newWindow

/*
/*****************************************************************
Script 8: Set Cookie and Return Cookie (cookie.html)
these two functions setting and returning a cookie
****************************************************************
*/
function writeCookie(){
    if( document.myform.customer.value == "" ){
	    alert("Enter some value!");
        return;
    }
    cookievalue= escape(document.myform.customer.value) + ";";
    document.cookie="name=" + cookievalue;
    alert ("Setting Cookies : " + "name=" + cookievalue );
}
function readCookie(){
	document.write ("name=" + cookievalue );
}

 function newWindow() {
    window.open("http://www.w3schools.com");
}//end cookie

/*
*******************************************************
Script 9:Dynamic Web Page Update(Time)(dynamicwebpageupdate.html)
this function prints the time
***********************************************************
*/
function timeDigtal(){
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
    document.write("<b>" + hours + ":" + minutes + " " + "</b>");
	document.write("<b>:" + seconds + "</b>");
}//end function timeDigtal


function myFunction() {
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


function autocomplete(inp, arr) {
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
  inp.addEventListener("keydown", function(e) {
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
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
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
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
} 




var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola",
	 "Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba",
	 "Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh",
	 "Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan",
	 "Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil",
	 "British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi",
	 "Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands",
	 "Central Arfrican Republic","Chad","Chile","China","Colombia","Congo",
	 "Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao",
	 "Cyprus","Czech Republic","Denmark","Djibouti","Dominica",
	 "Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea",
	 "Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji",
	 "Finland","France","French Polynesia","French West Indies","Gabon",
	 "Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland",
	 "Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana",
	 "Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia",
	 "Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan",
	 "Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait",
	 "Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya",
	 "Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar",
	 "Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands",
	 "Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco",
	 "Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar",
	 "Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles",
	 "New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea",
	 "Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea",
	 "Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar",
	 "Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon",
	 "Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal",
	 "Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia",
	 "Solomon Islands","Somalia","South Africa","South Korea","South Sudan",
	 "Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent",
	 "Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan",
	 "Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga",
	 "Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu",
	 "Uganda","Ukraine","United Arab Emirates","United Kingdom",
	 "United States of America","Uruguay","Uzbekistan","Vanuatu",
	 "Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen",
	 "Zambia","Zimbabwe"];
	 
	autocomplete(document.getElementById("myInput"), countries); 


