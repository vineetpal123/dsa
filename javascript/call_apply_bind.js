/**
 * call 
 * apply
 * bind : return a function which we can call later
 */
// call and apply example

function Car(type, fuelType){
	this.type = type;
	this.fuelType = fuelType;
}

function setBrand(brand){
    let carObj = {}
    Car.call(carObj, "convertible", "petrol");
	//Car.apply(this, ["convertible", "petrol"]);
	carObj.brand = brand;
	console.log(`Car details = `, carObj);
}

//const marutiCar = new setBrand('Maruti');
//const hondaCar = new setBrand('Honda');

function setBrand(brand){
    let carObj = {}
    let carDetail = Car.bind(carObj, "convertible", "petrol");
    carDetail();
	//Car.apply(this, ["convertible", "petrol"]);
	carObj.brand = brand;
	console.log(`Car details = `, carObj);
}
const marutiCar = new setBrand('Maruti');