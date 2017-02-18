/// <reference path="../../typings/globals/jasmine/index.d.ts" />
import { Vector } from '../../src/lib/vector';

describe("Vector Tests", () => {
  describe("Getters and setters", () => {
    describe("get x", () => {
      it("should return x=1", () => {
        let vector = new Vector(1, 2);
        expect(vector.x).toBe(1);
      });
    });
    describe("get y", () => {
      it("should return y=2", () => {
        let vector = new Vector(1, 2);
        expect(vector.y).toBe(2);
      });
    });
    describe("set x", () => {
      it("should return x=3", () => {
        let vector = new Vector(1, 2);
        vector.x = 3;
        expect(vector.x).toBe(3);
      });
    });
    describe("set y", () => {
      it("should return y=4", () => {
        let vector = new Vector(1, 2);
        vector.y = 4;
        expect(vector.y).toBe(4);
      });
    });
  });
  describe("Length methods", () => {
    describe("lengthSquared", () => {
      it("should return 13", () => {
        let vector = new Vector(2, 3);
        let output = vector.lengthSquared;
        expect(output).toBe(13);
      });
    });
    describe("length", () => {
      it("should return 10", () => {
        let vector = new Vector(8, 6);
        let output = vector.length;
        expect(output).toBe(10);
      });
    });
  });
  describe("Operations between vectors", () => {
    describe("add", () => {
      it("should return a new vector with x = 6 and y = 5", () => {
        let vector = new Vector(2, 3);
        let vector2 = new Vector(4, 2)
        let output = vector.add(vector2);
        expect(JSON.stringify(output)).toBe(JSON.stringify(new Vector(6,5)));
      });
    });
    describe("subtract", () => {
      it("should return a new vector with x = -2 and y = 1", () => {
        let vector = new Vector(2, 3);
        let vector2 = new Vector(4, 2)
        let output = vector.subtract(vector2);
        expect(JSON.stringify(output)).toBe(JSON.stringify(new Vector(-2,1)));
      });
    });
  });

});