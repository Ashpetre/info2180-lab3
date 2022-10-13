
     
window.onload = function() {
        const squares  = document.querySelectorAll("#board > div");
        const newbt =  document.querySelector(".btn");
        // let gameactive = false;
        // let player=X;
    
        
        
        squares.forEach((sq)=> {
            sq.classList.add("square");
            sq.innerHTML = " ";
        });

        squares.forEach((sq)=> {
           sq.addEventListener("click",function(){
            sq.innerHTML=player;
            sq.classList.add(player);

            if( player == "X" ){
                player= "O"
                sq.classList.add(player);
                sq.innerHTML = player;
            }
            else if (player == "O")
            {
                player= "O" 
                sq.classList.add(player);
                sq.innerHTML = player;
            }


           })
        });

        //changes the color of the squares when hovered over 
        squares.forEach(function(elem,index){
            elem.addEventListener("mouseover", function(e){
                e.target.classList.add("hover");
            });
            elem.addEventListener("mouseout", function(e){
                e.target.classList.remove("hover");
            });

        });




}