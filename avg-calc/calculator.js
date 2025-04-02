const { WINDOW_SIZE } =require('./config');
class NumberWindow {
    constructor(size) {
        this.size=size;
        this.numbers=[];
    }
    update(newNumbers){
        this.numbers=[...this.numbers,...newNumbers].slice(-this.size);
    }
    getAverage(){
        if(this.numbers.length===0)return 0;
        return this.numbers.reduce((sum,num)=>sum+num,0)/this.numbers.length;
    }
    getState() {
        return {
            windowPrevState:this.numbers.slice(0, -1),
            windowCurrState:this.numbers,
            numbers:this.numbers,
            avg:this.getAverage()
        };
    }
}
module.exports=NumberWindow;
