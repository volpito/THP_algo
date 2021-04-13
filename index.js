//2.1. Valeur factorielle
const computeFactorialIt = (n) => {
    x = 1;
    res = 1;
    while (n >= x){
        res = res * x;
        x++;
    }
    return res;
}

//2.1.2. Méthode récursive
const computeFactorialRec = (n) => {
    if (n == 1 || n == 0){
        res = 1;
    }
    else{
        res = n * (computeFactorialRec(n-1));
    }
    return res;
}

//2.2. Puissance d'un nombre
const computePowerIt = (n, p) => {
    x = 1;
    res = n;
    while (p > 0 && x < p){
        n = n * res;
        x++;
    }
    if(p == 0){
        n = 1;
    }
    return n;
}

//2.2.2. Méthode récursive
const computePowerRec = (n, p) => {
    res = n;
    if (p == 0){
        n = 1;
    }
    else{
        n = res * (computePowerRec(n, p -1));
    }
    return n;
}

//2.3. Racine carrée
const computeSquareRoot = (n) => {
    x = 1;
    while (n != x*x){
        x++;
    }
    return x;
}

//2.4. Nombre premier
const isPrimeNumber = (n) => {
    x = 2;
    if (n == 0){
        return false;
    }
    if (n == 1){
        return false;
    }
    if (n == 2){
        return true;
    }
    while (x < n){
        if (((n % x) && (n / x)) == 0){
            return false;
        }
        x++;
    }
    return true;
}

//2.5. Trouver un nombre premier
const findSupPrime = (n) => {
    if (isPrimeNumber(n)){
        return n;
    }
    return findSupPrime(n + 1);
  }

//2.6. Exercice bonus pour les big boss
const countValidQueens = (n) => {

}
