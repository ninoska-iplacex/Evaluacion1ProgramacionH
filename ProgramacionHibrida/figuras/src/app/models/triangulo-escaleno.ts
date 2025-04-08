import { FiguraGeometrica } from "./figura-geometrica";

export class trianguloEscaleno extends FiguraGeometrica {
    constructor(public ladoA: number, public ladoB: number, public ladoC: number) {
        super();
        if(ladoA <=0 || ladoB <= 0 || ladoC <= 0) {
            throw new Error('los lados del triangulo deben ser mayores que 0.');
        }
        if (ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA){
            throw new Error('Los lados proporcionados no forman un triangulo valido.')
        }
    }
calcularPerimetro(): number {
        return this.ladoA + this.ladoB + this.ladoC;
        
    }
}