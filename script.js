//your code here
const draggables = document.querySelectorAll('.draggable');
let draggedItem = null;

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (e) => {
        draggedItem = e.target;
    });

    draggable.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    draggable.addEventListener('drop', (e) => {
        e.preventDefault();
        if (draggedItem !== e.target) {
            // Swap the background images of the dragged item and the target item
            let temp = draggedItem.style.backgroundImage;
            draggedItem.style.backgroundImage = e.target.style.backgroundImage;
            e.target.style.backgroundImage = temp;
        }
    });
});
