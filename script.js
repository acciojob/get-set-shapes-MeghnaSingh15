//complete this code
class Rectangle {
	constructor(width,height){
		this._width = width;
		this._height = height;
	}
	get width{
		return this._width;
	
	}
	get height{
		return this._height;
	
	}
getArea(){
	let area = this._height * this._width;
	return area;
}

}

class Square extends Animal {
	getPerimeter(){
		let per = (this._height + this._width)*2;
		return per;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
