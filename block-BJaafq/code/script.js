function sum(numA,numB){
    return numA + numB;
}
let result,expected; 

function test(message,callback){
    try{
        callback();
        console.log("✅",message)
    }catch(error){
        console.error(error);
        console.log("❌",message)
    }

}

function testsum(){
    result = sum(10,20);
    expected = 50;
    if(result !== expected){
        throw new Error(`${result} is not a equal to ${expected}`)
    }
}


function Multiply(numA,numB){
    return numA * numB
}

function testproduct(){
    result = Multiply(2,3);
    expected = 5;
    if(result !== expected){
        throw new Error(`${result} is not equal to ${expected}`)
    }
}

