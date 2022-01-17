
function movingImage(e, objToMove)
{
    objToMove.style.left = e.clientX - objToMove.width / 2 + "px";
    objToMove.style.top = e.clientY - objToMove.height / 2 + "px";
}

window.onload = function()
{
    var wykrzyknik = document.getElementById("wykrzyknik");
    
    wykrzyknik.onmousedown = function()
    {
        var self = this;
        document.onmousemove = function(e)
        {
            movingImage(e, self);
        };
    };
    
    wykrzyknik.onmouseup = function()
    {
        document.onmousemove = null;
    };
    
    wykrzyknik.ondragstart = function(e)
    {
       e.preventDefault();  
    };
};

