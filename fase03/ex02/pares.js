function pares(num1, num2){
    var resto1 = num1 % 2;
    var resto2 = num2 % 2;
    var total = resto1 || resto2 ;
    
    if(total === 0){
        return("Os n�meros s�o pares")
    }else {
        return("Os n�meros n�o s�o pares")
    }
}
