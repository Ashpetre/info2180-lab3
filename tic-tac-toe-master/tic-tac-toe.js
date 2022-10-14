window.onload = function() {
        const squares  = Array.from(document.querySelectorAll("#board > div "));
        const newbt =  document.querySelector(".btn");
        const winner = document.querySelector("div#status");
        let player="X";
        console.log(squares);
        
        
        //added function to the new game button
        newbt.addEventListener("click", function(){
            window.location.reload();
        })

        // to display on screen
        squares.forEach((sq)=> {
            sq.classList.add("square");
            sq.innerHTML = " ";

        });
        // to show the button changes 
        squares.forEach((sq,a)=> {
           sq.addEventListener("click",function(){
                if( player == "X"  && sq.innerHTML == " "){
                    sq.classList.add(player);
                    sq.innerHTML = player;
                    player = "O";  
                    // winner.textContent = "Congratulations! X is the Winner!";
                    // winner.classList.add("you-won");                 
                }
                else if (player == "O" && sq.innerHTML == " " )
                {
                    sq.classList.add(player);
                    sq.innerHTML = player;
                    player= "X" 
              }
              if (
                squares[0].innerHTML=="X" && squares[1].innerHTML=="X" && squares[2].innerHTML=="X" || 
                squares[3].innerHTML=="X" && squares[4].innerHTML=="X" && squares[5].innerHTML=="X" ||
                squares[6].innerHTML=="X" && squares[7].innerHTML=="X" && squares[8].innerHTML=="X" || 
                squares[0].innerHTML=="X" && squares[3].innerHTML=="X" && squares[6].innerHTML=="X" || 
                squares[1].innerHTML=="X" && squares[4].innerHTML=="X" && squares[7].innerHTML=="X" || 
                squares[2].innerHTML=="X" && squares[5].innerHTML=="X" && squares[8].innerHTML=="X" || 
                squares[2].innerHTML=="X" && squares[4].innerHTML=="X" && squares[6].innerHTML=="X" || 
                squares[0].innerHTML=="X" && squares[4].innerHTML=="X" && squares[8].innerHTML=="X" ){
                winner.innerHTML='Congratulations! X is the Winner!"'
                winner.classList.add('you-won');

            }
            else if(
                squares[0].innerHTML=="O" && squares[1].innerHTML=="O" && squares[2].innerHTML=="O" || 
                squares[3].innerHTML=="O" && squares[4].innerHTML=="O" && squares[5].innerHTML=="O" ||
                squares[6].innerHTML=="O" && squares[7].innerHTML=="O" && squares[8].innerHTML=="O" ||
                squares[0].innerHTML=="O" && squares[3].innerHTML=="O" && squares[6].innerHTML =="O" ||
                squares[1].innerHTML=="O" && squares[4].innerHTML=="O" && squares[7].innerHTML=="O" ||
                squares[2].innerHTML=="O" && squares[5].innerHTML=="O" && squares[8].innerHTML=="O" ||
                squares[2].innerHTML=="O" && squares[4].innerHTML=="O" && squares[6].innerHTML=="O" ||
                squares[0].innerHTML=="O" && squares[4].innerHTML=="O" && squares[8].innerHTML=="O" ){
                winner.innerHTML='Congratulations! O is the Winner!"'
                winner.classList.add('you-won');
                
        
            }
        
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
       
    });

}// end of code 

