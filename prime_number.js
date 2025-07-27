 

 function isprime(number){

    if(number<=1){

        return false;
    }

    for(let i=2;i<number;i++){

        if(number%i!=0){

           return true;
        }
        else{

            return false;
        }
    }    

}

console.log(isprime(97));
console.log(isprime(100));
console.log(isprime(7));
console.log(isprime(1));
console.log(isprime(117));
console.log(isprime(17));
console.log(isprime(27));