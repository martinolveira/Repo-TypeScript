// Basic types
let myString: string = 'Hello World' ;
let myNumber: number = 33;
let myBoolean: boolean = true;

myString = "true";
myNumber = 2; 

// Array

let arrNumber : number[] = [1, 2, 3];
//let arrNumber2 : Array<number> = [1, 2, 3];
let arrString : string[] = ["uno", "dos", "tres"];

let arrAny : any[] = ['Hola',33,true];           //resta "autoridad" a typescript

//tuple
let tuplePlayer : [string,number,boolean] = ['Carlos', 2, true];

//tuple array
let players: [number,string][];
players = [
    [1, 'lebron'],
    [1, 'gomez'],
];

//let myVar;
let myVar = "yo";

// unions , puede ser de cualquier tipo asignado
let myVar2: string | number | null;
myVar2 = 2;

let var2: string;
let dos : boolean;
