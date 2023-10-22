
//START button
document.addEventListener("DOMContentLoaded", function () {
     const dragbox = document.getElementById("dragbox");
     const divs = dragbox.querySelectorAll(".drag-item");
     const startButton = document.getElementById("startButton");
 
     startButton.addEventListener("click", function () {
         // Convert the NodeList to an array for easier manipulation
         const divArray = Array.from(divs);
 
         // Shuffle the array
         for (let i = divArray.length - 1; i > 0; i--) {
             const j = Math.floor(Math.random() * (i + 1));
             [divArray[i], divArray[j]] = [divArray[j], divArray[i]];
         }
 
         // Empty the container
         dragbox.innerHTML = '';
 
         // Append the shuffled divs back to the container
         divArray.forEach(div => dragbox.appendChild(div));
     });
 });

//drag and drop
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
//4
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

//score
document.addEventListener('DOMContentLoaded', function () {
     let score = 0;
   
     const correctMappings = {
       //drop1
       'red1': 'drop1',
       'red2': 'drop1',
       'red3': 'drop1',
       'red4': 'drop1',
       'red5': 'drop1',
       'red6': 'drop1',
       'red7': 'drop1',
       'red8': 'drop1',
       // drop2
       'blue1': 'drop2',
       'blue2': 'drop2',
       'blue3': 'drop2',
       'blue4': 'drop2',
       'blue5': 'drop2',
       'blue6': 'drop2',
       'blue7': 'drop2',
       'blue8': 'drop2',
       // drop3
       'green1': 'drop3',
       'green2': 'drop3',
       'green3': 'drop3',
       'green4': 'drop3',
       'green5': 'drop3',
       'green6': 'drop3',
       'green7': 'drop3',
       'green8': 'drop3',
       // drop4
       'violet1': 'drop4',
       'violet2': 'drop4',
       'violet3': 'drop4',
       'violet4': 'drop4',
       'violet5': 'drop4',
       'violet6': 'drop4',
       'violet7': 'drop4',
       'violet8': 'drop4',
     };
   
     const dropZones = document.querySelectorAll('.drop-zone');
     const dragItems = document.querySelectorAll('.drag-item');
   
     dragItems.forEach((item) => {
       item.addEventListener('dragstart', (event) => {
         event.dataTransfer.setData('text/plain', event.target.id);
       });
     });
   
     dropZones.forEach((zone) => {
       zone.addEventListener('dragover', (event) => {
         event.preventDefault();
       });
   
       zone.addEventListener('drop', (event) => {
         event.preventDefault();
         const draggedItemId = event.dataTransfer.getData('text/plain');
         const targetZoneId = event.target.id;
   
         if (correctMappings[draggedItemId] === targetZoneId) {
           score += 10;
           document.getElementById('score').textContent = 'MY SCORE: '+ score + '  / 1160';
   
           event.target.appendChild(document.getElementById(draggedItemId));
         }
       });
     });
   
     dragItems.forEach((item) => {
       item.addEventListener('dragover', (event) => {
         event.preventDefault();
       });
   
       item.addEventListener('drop', (event) => {
         event.preventDefault();
         const droppedItemId = event.dataTransfer.getData('text/plain');
         const draggedItem = document.getElementById(droppedItemId);
         
         // Check if the dragged item is placed above another draggable item
         if (draggedItem.classList.contains('drag-item')) {
           score += 10;
           document.getElementById('score').textContent = 'MY SCORE: '+ score + '  / 1160';
           
           // Swap the positions of the two items to visually show the overlap
           const parent = draggedItem.parentElement;
           const sibling = draggedItem.nextElementSibling;
           if (sibling) {
             parent.insertBefore(draggedItem, sibling);
           } else {
             parent.appendChild(draggedItem);
           }
         }
       });
     });

// Reset score with the start button
  const resetButton = document.getElementById('startButton');
  resetButton.addEventListener('click', function () {
    score = 0;
    document.getElementById('score').textContent = 'MY SCORE: ' + '  0 / 1160';
  });
});

