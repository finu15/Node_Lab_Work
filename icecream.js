//key value pair


function icecream(makeicecream, flavour, flavours) {
    // setInterval(() => { makeicecream(flavour); }, flavours.kiwi) 
    setTimeout(() => { makeicecream(flavour); }, flavours.kiwi) 
} 
    const flavours = { "orange": 2000, "apple": 5000, } 
    icecream(function (flavour, flavours) { 
        console.log(`${flavour} flavoured icecream`) 
    }, "pineapple", flavours)

