export class OrderNo {
    private id: string;

    constructor(value: string) {
        this.id = value;
    }

    get value(): string {
        return this.id;
    }
}