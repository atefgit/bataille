// Valeur.ts
export class Valeur {
    private valeur : number;

    constructor(valeur: number) {
        this.valeur = valeur;
    }

    toString(): string {
        const valeursNoms: { [key: number]: string } = {
            11: 'Valet',
            12: 'Dame',
            13: 'Roi',
            14: 'As',
        };
        return valeursNoms[this.valeur] || this.valeur.toString();
    }

    public getNumber():number{
        return this.valeur;
    }

    public static comparer(valeur1: Valeur, valeur2: Valeur): number {
        return valeur1.valeur - valeur2.valeur;
    }
}
