/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
    this.num = [big, medium, small]
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
    if(this.num[carType-1]==0){
        return false
    }else{
        this.num[carType-1]--
        return true;
    }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 */
let input1 = ["ParkingSystem", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar", "addCar"],
    input2 = [[321, 224, 74], [1], [3], [1], [1], [1], [3], [1], [1], [2], [2], [3], [2], [2], [3], [1], [1], [3], [1], [3], [3], [2], [2], [2], [3], [1], [1], [2], [1], [2], [3], [2], [2], [2], [2], [3], [1], [1], [2], [1], [2], [3], [1], [3], [1], [3], [1], [2], [2], [2], [3], [1], [1], [2], [2], [3], [2], [3], [3], [1], [1], [2], [1], [3], [1], [2], [3], [2], [2], [3], [2], [3], [1], [2], [3], [3], [1], [1], [2], [1], [1], [2], [3], [2], [3], [1], [1], [1], [2], [2], [3], [2], [2], [2], [2], [1], [1], [2], [1], [2], [3], [2], [2], [2], [2], [2], [2], [2], [3], [2], [2], [3], [2], [2], [3], [3], [3], [3], [3], [1], [1], [3], [1], [3], [2], [2], [2], [3], [3], [2], [2], [1], [3], [3], [3], [3], [2], [1], [3], [1], [2], [3], [3], [3], [3], [2], [1], [2], [1], [2], [2], [3], [1], [3], [3], [1], [2], [3], [2], [1], [3], [1], [1], [2], [1], [3], [2], [3], [1], [2], [3], [1], [2], [1], [2], [3], [1], [1], [3], [1], [2], [3], [1], [1], [1], [1], [1], [1], [3], [1], [1], [1], [3], [3], [3], [1], [2], [2], [3], [1], [1], [3], [2], [3], [2], [2], [3], [3], [2], [2], [1], [3], [3], [1], [3], [3], [2], [1], [3], [3], [3], [3], [1], [2], [2], [1], [2], [2], [3], [1], [2], [2], [1], [1], [2], [3], [3], [3], [2], [3], [2], [3], [1], [2], [3], [1], [2], [1], [3], [1], [1], [2], [1], [2], [1], [2], [2], [2], [3], [2], [3], [2], [2], [3], [2], [1], [1], [2], [3], [1], [3], [1], [2], [3], [3], [3], [3], [3], [2], [2], [3], [3], [2], [3], [1], [2], [2], [1], [3], [3], [3], [1], [2], [1], [1], [2], [1], [2], [3], [3], [3], [2], [2], [3], [3], [2], [1], [3], [3], [2], [2], [3], [3], [1], [2], [2], [3], [2], [1], [3], [1], [1], [2], [3], [3], [1], [2], [1], [2], [1], [3], [3], [2], [2], [3], [1], [1], [2], [1], [2], [2], [3], [2], [2], [2]],
    obj;
input1.forEach((i,index) => {
    if(i=='ParkingSystem') obj = new ParkingSystem(...input2[index])
    else console.log(obj.num,input2[index][0],obj[i](...input2[index]))
})