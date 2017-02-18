import {
    Vector
} from './vector';

export class Cell {
    name: string;
    points: Vector[];
    neighbors: Cell[];

    constructor(name: string, points: Vector[]) {
        this.name = name;
        this.points = points;
    }

    avialableCellsByMoves(moves: number): Cell[] {
        let neighbors: Cell[] = [];

        if (moves > 0) {
            if (moves == 1) {
                neighbors = neighbors.concat(this.neighbors);
            } else {
                neighbors = neighbors.concat(this.neighbors);
                this.neighbors.map((neighbor)=> {
                    neighbors = neighbors.concat(neighbor.avialableCellsByMoves(moves - 1));
                })
            }
        }
        
        neighbors = neighbors.filter((neighbor)=> neighbor.name != this.name);

        return neighbors;
    }

}