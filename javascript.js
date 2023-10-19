//0
function allowDrop0(a0) {
     a0.preventDefault();
}  
function drag0(a0) {
     a0.dataTransfer.setData("txt0", a0.target.id);
}  
function drop0(a0) {
     a0.preventDefault();
     var data = a0.dataTransfer.getData("txt0");
     a0.target.appendChild(document.getElementById(data));
}
//1
function allowDrop1(a1) {
     a1.preventDefault();
}  
function drag1(a1) {
     a1.dataTransfer.setData("txt1", a1.target.id);
}  
function drop1(a1) {
     a1.preventDefault();
     var data = a1.dataTransfer.getData("txt1");
     a1.target.appendChild(document.getElementById(data));
}
//2
function allowDrop2(a2) {
     a2.preventDefault();
}  
function drag2(a2) {
     a2.dataTransfer.setData("txt2", a2.target.id);
}   
function drop2(a2) {
     a2.preventDefault();
     var data = a2.dataTransfer.getData("txt2");
     a2.target.appendChild(document.getElementById(data));
}
//3
function allowDrop3(a3) {
     a3.preventDefault();
}
function drag3(a3) {
     a3.dataTransfer.setData("txt3", a3.target.id);
} 
function drop3(a3) {
     a3.preventDefault();
     var data = a3.dataTransfer.getData("txt3");
     a3.target.appendChild(document.getElementById(data));
}
//
function allowDrop4(a4) {
     a4.preventDefault();
} 
function drag4(a4) {
     a4.dataTransfer.setData("txt4", a4.target.id);
}  
function drop4(a4) {
     a4.preventDefault();
     var data = a4.dataTransfer.getData("txt4");
     a4.target.appendChild(document.getElementById(data));
}
