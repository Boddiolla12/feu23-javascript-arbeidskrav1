import { expect } from "@jest/globals";
import getAllParticipantsOlderThan18 from "../assignments/assignment_06";

describe("Oppgave 06", () => {
  it("Finn alle personer som er over 18 år", () => {
    // arrange
    const participants = [
      { name: "Mette", age: 32 },
      { name: "Henrik", age: 17 },
      { name: "Vilde", age: 5 },
      { name: "Anders", age: 35 },
      { name: "Roger", age: 12 },
      { name: "Pia", age: 19 },
      { name: "Oliver", age: 18 },
      { name: "Janne", age: 15 },
    ];

    const expected = ["Mette", "Anders", "Pia", "Oliver"];

    // act
    const result = getAllParticipantsOlderThan18(participants);

    // assert
    expect(result).toEqual(expected);
  });
});
