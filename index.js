const we = { 
        are : {
            the : {
                best : "koda"
            }
        }
    
}

console.log(we.are.the.best);

// helo
const hello = {
    world : "Hello World"
}
console.log(hello.world)

// obj.str[3][2][1].man[0].tech.academy

const obj = {
    str : [[1,2,3,
        [0,1,{
            man : [{
                tech : {
                    academy : "Tech Academy"
                }
            }]
        }]
    ]]
}
console.log(obj.str[0][3][2].man[0].tech.academy);


//memunculkan string apple ketika akses array my[0].favorite[3].fruit.is
const my = [{
    favourite : 
    ["satu", "dua", "tiga", 
        {
        fruits : {
            is : "Apple"
        }
    }]

}]
console.log(my[0].favourite[3].fruits.is);

//Munculkan number 32 ketika kalkulasi num.first[1]+num.second[2]
const num = {
    first : ['nol', 30],
    second : ['nol','satu', 2]
}
console.log(num.first[1] + num.second[2])
