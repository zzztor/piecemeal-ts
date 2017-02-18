export class Vector {

    private _x: number;
    private _y: number;
    
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get x() { return this._x; }
    set x(value:number) { this._x = value; }
    
    get y() { return this._y; }
    set y(value:number) { this._y = value; }

    get lengthSquared(): number{ return this.x * this.x + this.y * this.y };
    get length(): number{ return Math.sqrt(this.lengthSquared) };

    public add(offset: Vector): Vector{
        return new Vector(this._x + offset.x, this._y + offset.y);
    }
    public subtract(offset: Vector): Vector{
        return new Vector(this._x - offset.x, this._y - offset.y);
    }

}