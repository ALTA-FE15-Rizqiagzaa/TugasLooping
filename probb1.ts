function primeX(number: number) : number | undefined{
    if (number <1){
        return undefined;
    }

    const primes: number[] = [];
    let currentNumber = 2;


    while(primes.length < number){
        if (isPrime(currentNumber)){
            primes.push(currentNumber);
        }
            currentNumber++;
        }

        return primes.pop();
    }

    function isPrime(number:number):boolean {
        if (number <2){
            return false;
        }

        for(let i = 2; i<= Math.sqrt(number); i++){
            if(number % i === 0){
                return false;
        }
    }

    return true;
}

console.log(primeX(5))