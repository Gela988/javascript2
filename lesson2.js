// 1 დავალება

function test(...args){
    let numbers = 0;
    for(let item of args){
        if(item > 0){
            numbers = numbers + item;
        }
    }
    return numbers;
}
let x = test(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8)
console.log(x);

// // ------------------------------------------------------


// 2 დავალება

function test(...args){
    let numbers = 0;
    for(let item of args){
        numbers = numbers + item;
    }
    console.log(numbers);
}
test(10, 50, 6, 7, 8, 11, 6, 3, 9)

// -----------------------------------


// 3 დავალება

let user = {
    firstname: 'giorgi',
    lastname: ' saakadze',
    age: 32,
    isloggedin: true
}
let username = (x) => {
    if(x.isloggedin) {
        return x.firstname+' '+x.lastname;
    }else{return false;}
}

let x=username(user);
console.log(x);
// ------------------------------

// 4 დავალება

let max = (array) =>{
    let maxnumber = array[0][0];
    for(const x of array){
        for(const y of x){
            if(y>maxnumber){
                maxnumber = y;
            }
        }
    }
    return maxnumber;
}

let a = [[29, -58, 4, 80], [74, 0, 2], [830, 109, -45, 72,]]

let b = max(a);
console.log(b);

// ------------------------------------------------------------