import { expect } from "@jest/globals";
import { reverse } from "../assignments/assignment_00";

describe("Oppgave 00", () => {
  it("[EKSEMPEL] reverser sifferene i et tall", () => {
    // arrange
    const input = 123456789;

    // act
    const result = reverse(input);

    // assert
    expect(result).toBe(987654321);
  });
});
