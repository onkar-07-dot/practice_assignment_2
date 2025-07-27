 

 function prime(num){

    for(let i=2;i<num;i++){

        if(num%i!=0){

            return true;
        }
        else{

            return false;
        }
    }    

}

console.log(prime(97));