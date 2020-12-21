var canvas = document.getElementById("draw");

var ctx = canvas.getContext("2d");
resize();

// resize canvas when window is resized
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}
//clear function
function clear(){
const context = canvas.getContext('2d');
context.clearRect(0, 0, canvas.width, canvas.height);
}
// initialize position as 0,0
var pos = { x: 0, y: 0 };

// new position from mouse events
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}
function draw(e) {
  if (e.buttons !== 1) return; // if mouse is not clicked, do not go further
  var thickness = document.getElementById("thickness").value;
  var color = document.getElementById("hex").value;

  ctx.beginPath(); // begin the drawing path

  ctx.lineWidth = thickness; // width of line
  ctx.lineCap = "round"; // rounded end cap
  ctx.strokeStyle = color; // hex color of line

  ctx.moveTo(pos.x, pos.y); // from position
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to position
  ctx.stroke(); // draw it!
}


// add window event listener to trigger when window is resized
window.addEventListener("resize", resize);

// add event listeners to trigger on different mouse events
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);
xs.addStyle(".orange",'background-color','orange')
xs.addStyle(".orange",'width','20px')
xs.addStyle(".yellow",'background-color','yellow')
xs.addStyle(".yellow",'width','20px')
xs.addStyle(".red",'background-color','red')
xs.addStyle(".red",'width','20px')
xs.addStyle(".green",'background-color','green')
xs.addStyle(".green",'width','20px')
xs.addStyle("body",'overflow','hidden')
xs.addStyle(".drawspace",'font-size','20')
xs.addStyle(".fc00c4",'background-color','#fc00c4')
xs.addStyle(".fc00c4",'width','20px')
xs.addStyle(".blue",'background-color','blue')
xs.addStyle(".blue",'width','20px')
xs.addStyle(".indigo",'background-color','indigo')
xs.addStyle(".indigo",'width','20px')
xs.addStyle(".violet",'background-color','violet')
xs.addStyle(".violet",'width','20px')
xs.addStyle(".darkviolet",'background-color','rgba(131,58,180,1)')
xs.addStyle(".darkviolet",'width','20px')
xs.addStyle(".lightgreen",'background-color','lightgreen')
xs.addStyle(".lightgreen",'width','20px')
xs.addStyle(".lightblue",'background-color','lightblue')
xs.addStyle(".lightblue",'width','20px')
xs.addStyle(".FD01BA",'background-color','#FD01BA')
xs.addStyle(".FD01BA",'width','20px')
function red(){
		var hexinput = document.getElementById("hex");
		hexinput.value = "red";
}
function orange(){
	var hexinput = document.getElementById("hex");
		hexinput.value = "orange";
}
function yellow(){
	var hexinput = document.getElementById("hex");
		hexinput.value = "yellow";
}
function green(){
		var hexinput = document.getElementById("hex");
		hexinput.value = "green";
}
function fc00c4(){
		var hexinput = document.getElementById("hex");
		hexinput.value = "#fc00c4";
}
function blue(){
		var hexinput = document.getElementById("hex");
		hexinput.value = "blue";
}
function indigo(){
		var hexinput = document.getElementById("hex");
		hexinput.value = "indigo";
}
function violet(){
		var hexinput = document.getElementById("hex");
		hexinput.value = "violet";
}
function darkviolet(){
		var hexinput = document.getElementById("hex");
		hexinput.value = "rgba(131,58,180,1)";
}
function printArt(){
	var printconfirm = confirm("Print And Delete Artwork?");
	if (printconfirm == true){
	xs.addStyle(".colorbox",'display','none')
	xs.addStyle("#clearBtn",'display','none')
	xs.addStyle("#printBtn",'display','none')
	xs.addStyle("#Settings",'display','none')
	xs.addStyle("#saveBtn",'display','none')
	print()
	setTimeout(() => afterPrint() , 2000);
	}else{
		alert("Printing Has Canceled.");
	}	
}
function afterPrint(){
	xs.addStyle(".colorbox",'display','')
	xs.addStyle("#clearBtn",'display','')
	xs.addStyle("#printBtn",'display','')
	xs.addStyle("#Settings",'display','')
	xs.addStyle("#saveBtn",'display','')
}
function save(){
    var canvas = document.getElementById("draw");
    var img    = canvas.toDataURL("image/png");
	var btn = document.createElement("a");
	btn.href = img;         
	btn.download = "";
	btn.id = "downloadHref"
	document.body.appendChild(btn); 
	var x0sp = document.getElementById("downloadHref")
	x0sp.click()
	deleteElementById("downloadHref")
}
function viewImg(){
	var canvas = document.getElementById("draw");
    var canvas = document.getElementById("draw");
    var img    = canvas.toDataURL("image/png");
	var btn = document.createElement("a");
	btn.href = img;         
	btn.target = "_blank";
	btn.id = "downloadHref"
	document.body.appendChild(btn); 
	var x0sp = document.getElementById("downloadHref")
	x0sp.click()
	deleteElementById("downloadHref")
}
function showhex(){
	xs.toggleShow('#hex')
}

var btn = document.createElement("a");
	btn.href = "javascript:showhex();";         
	btn.id = "HideHref"
	document.body.appendChild(btn); 
	var x0sp = document.getElementById("HideHref")
	x0sp.click()
	deleteElementById("HideHref")
	function lightgreen(){
		var hexinput = document.getElementById("hex");
		hexinput.value = "lightgreen";
	}
	function lightblue(){
		var hexinput = document.getElementById("hex");
		hexinput.value = "lightblue";
	}
	function FD01BA(){
		var hexinput = document.getElementById("hex");
		hexinput.value = "#FD01BA";
	}
	function erase(){
		var hexinput = document.getElementById("hex");
		hexinput.value = "#FFFFFF";
	}
	var imageLoader = document.getElementById('imageLoader');
    imageLoader.addEventListener('change', handleImage, false);
var canvas = document.getElementById('draw');
var ctx = canvas.getContext('2d');


function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img,0,0);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);     
}
