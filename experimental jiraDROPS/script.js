const DRAG_AND_DROP = () => {
    const card = document.querySelector(".js--card");
    const cells = document.querySelectorAll(".js--cell");

    // hide card when drag started
    const drag_start = function () {
        setTimeout(() => {
            this.classList.add("hide");
        },0)
    };

    // unhide card when drug end
    const drag_end = function (){
        this.classList.remove("hide");
    };

    const drag_over = function(evt){
        evt.preventDefault();
    };

    const drag_enter = function(evt){
        evt.preventDefault();
        this.classList.add('hovered');

    };

    const drag_leave = function(){
        this.classList.remove('hovered')
    };

    const drag_drop = function(){
        this.append(card);
        this.classList.remove('hovered');
    };

    cells.forEach((cell) => {
        cell.addEventListener('dragover' ,drag_over);
        cell.addEventListener('dragenter' , drag_enter);
        cell.addEventListener('dragleave', drag_leave);
        cell.addEventListener('drop', drag_drop);
    });

    card.addEventListener('dragstart', drag_start);
    card.addEventListener('dragend', drag_end);
};

DRAG_AND_DROP();

