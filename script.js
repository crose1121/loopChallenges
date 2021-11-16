function printOdds() {
    var i = 0;
    while (i < 21) {
        if (i%2 !=0) {
            console.log(i)
        }
        i++;
    }
}

printOdds();

function decreasingMults3() {
    var i = 100;
    while (i >= 0) {
        if (i%3==0) {
            console.log(i);
        }
        i--;
    }
}

decreasingMults3();

function sequence(arr) {
    for (var i = 0; i<arr.length; i++) {
        console.log(arr[i]);
    }
}

myArray = [4, 2.5, 1, -0.5, -2, -3.5];
sequence(myArray);

function sigma() {
    sum = 0;
    for (var i = 1; i<101; i++){
        sum += i;
    }
    console.log(sum);
}

sigma();

function factorial() {
    sum = 1;
    for (var i = 1; i<=12; i++){
        sum = sum*i;
    }
    console.log(sum);
}

factorial();