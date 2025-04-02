const { fetchNumbers } = require('./api');
const NumberWindow = require('./calculator');
const numberWindow = new NumberWindow(10);
(async ()=>{
    const types =["even","primes","fibo","rand"];
    let allNumbers =[];
    for(const type of types){
        const numbers =await fetchNumbers(type);
        allNumbers =allNumbers.concat(numbers);
    }
    numberWindow.update(allNumbers);
    console.log("Final Window State:",numberWindow.getState());
})();
