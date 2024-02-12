import { expect } from "@jest/globals";
import { convertInitialLettersToUpperCase } from "../assignments/assignment_01";

describe("Oppgave 01", () => {
  it("Konverter alle forbokstaver til stor bokstav", () => {
    // arrange
    const input = "Aldri har så mange hatt så få å takke for så mye";

    // act
    const result = convertInitialLettersToUpperCase(input);

    // assert
    expect(result).toBe("Aldri Har Så Mange Hatt Så Få Å Takke For Så Mye");
  });
});
