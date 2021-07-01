function bingoBoard(){
    let BingoNumbers = document.getElementById('bingo')
    
    
    for(let i=1;i<=76;i++){
        numbers = i
        let newDiv = document.createElement('div')
        newDiv.innerHTML = numbers
        newDiv.classList.add('num')
        
        BingoNumbers.appendChild(newDiv)
    }
   
    
}
window.onload = function(){
    bingoBoard()
}