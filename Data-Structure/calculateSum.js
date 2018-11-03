//calculate the sum of all numbers from 1 upto some number n


function calculateNum(input){

    if (input===0 || input===1){
        return input
    }
    var total=0
    for (var i=1;i<=input;i++){
        total+=i
        
    }
    return total
}