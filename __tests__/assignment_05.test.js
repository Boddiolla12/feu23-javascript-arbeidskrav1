import { expect } from "@jest/globals";
import getFullName from "../assignments/assignment_05";

describe("Oppgave 05", () => {
  it("Hent fullt navn for en person", () => {
    // arrange
    const person = { firstName: "Henrik", lastName: "Wergeland" };

    // act
    const result = getFullName(person);

    // assert
    expect(result).toEqual("Henrik Wergeland");
  });
});
