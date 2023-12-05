
const skills: string[] = ['bash', 'counter', 'healing'];
const numero: number = 95;
interface Character{
    name: string;
    hp: number;
    skills: string[];
    hometown?:string; // el signo de interrogacion es para que sea opcional 

}

export const strider:Character = {
    name : 'Strider',
    hp: 100,
    skills: ['bash', 'counter', 'healing'],
    hometown:undefined,
    
}

console.table(strider);
console.log(numero);

class Ejemplo {
    metodo() {
        console.log("Este es un método de clase");
    }
}
console.log(Ejemplo);

export {}