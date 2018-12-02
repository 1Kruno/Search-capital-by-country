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





