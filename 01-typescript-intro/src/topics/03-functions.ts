
function addNumbers(a: number, b: number): number {
  return a + b;
}

const addNumbersArrow = (a:number, b:number):number =>{
    return a + b;
}


function multiply (firstNumber:number,base:number, secondNumber?:number):number{
   return firstNumber * base;
}
// la firma de la función se refiere al tipo de datos.
console.log(addNumbers(1,2));
console.log(addNumbersArrow(1,2));

const multiplyResult : number = multiply(2,3);
console.log(multiplyResult);

interface Character {
  name: string;
  hp:number;
  showHp:()=>string;
}

//haz otra función que utilie el objeto strider y que le sume 10 puntos de vida
//y que imprima en consola los puntos de vida que tiene el personaje



const healCharacterArrow = (character: Character, amount: number): void => {
  character.hp += amount;
};

const healCharacter = (character: Character, amount: number): void => {
  character.hp += amount;
};

const strider: Character = {
  name: 'Strider',
  hp: 50,
  showHp() {
    return `Puntos de vida ${this.hp}`;
  }
};

export {};

/*
para convertir dos parámetros a string se puede hacer de dos formas:
1. `${a}${b}`
2. a.toString() + b.toString() 
la más común es la primera

*/