interface Figure {
    height: number;
    width: number;
    area?: number;
    print(figure: Figure): void;
}

function area(figure: Figure): number {
    return figure.height * figure.width;
}

function setArea(figure: Figure): Figure {
    figure.area = figure.height * figure.width;
    return figure;
}

let square: Figure = {
    height: 12,
    width: 12,
    print: (figure: Figure) => console.log(figure),
}

square.print(square);


class Triangle implements Figure {

    height: number;
    width: number;
    area?: number | undefined;

    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    print(figure: Figure): void {
        console.log(figure);
    }

}

let triangle: Triangle = new Triangle(12, 12);


interface Area {
    (x: number, y: number): number
}

let getArea: Area = (x: number, y: number) => x * y;

getArea(12,12);