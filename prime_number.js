 

 function prime(number){

    for(let i=2;i<number;i++){

        if(number%i!=0){

           return true;
        }
        else{

            return false;
        }
    }    

}

console.log(prime(97));
console.log(prime(100));
console.log(prime(7));
console.log(prime(9));
console.log(prime(117));