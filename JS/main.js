// 1.display in the console the numbers from 1 to 20

function printNumbers(){
    for (var i=1; i<=20; i++){
    console.log(i);
}
}
var print=printNumbers();

// 2.display in the console the odd numbers from 1 to 20

function printOddNumbers(){
    for (var i = 1; i <= 20; i++) {
        if (i % 2 !=1) {
            console.log(i)
        }
    }

}

var oddNumber=printOddNumbers();

// 3.compute the sum of the elements of an array and display it in the console

function sumOfElements(A){
    var sum=0;
    for (var i=0; i<A.length; i++ ){
        sum=sum+A[i];
    }
    return sum;
}

console.log(sumOfElements([1,2,3]));

// 4. compute the maximum of the elements of an array and display it in the console 
function maxOfArray(array) {
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

console.log(maxOfArray([2, 4, 1, 3]));

// 5. compute how many times a certain element appears in an array

function CountElementApparence(array, element) {
    var c = 0;
    for (var i = 0; i < array.length; i++) {
        if (element === array[i]) {
            c = c + 1;
        }
    }
    return c;
}

console.log(CountElementApparence([1,0,1,0,1,0], 1));


// 6. Using nested for generate the following pattern
//            0 1 0 1

//            1 0 1 0

//            0 1 0 1

//            1 0 1 0

// a. Display on page

function pattern(n){
    for (var i =1; i<=n; i++) {
        for (var j =1; j<=n; j++){
            if ((i+j)%2===0){ document.write(0);}
            else {document.write(1);}
        }
        
        document.write("<br/>");
    }
}

pattern(4);

// b. Display on console  

// function pattern(n){
//     var line=[];
//     for (var i =1; i<=n; i++) {
//         for (var j =1; j<=n; j++){
//             if ((i+j)%2===0){line=line+["0"];}
//             else { line=line+["1"];}
//         }
//         console.log(line);
//         line=[];
//     }
// }
// pattern(5);