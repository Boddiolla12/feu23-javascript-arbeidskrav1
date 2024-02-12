export default function getAllParticipantsOlderThan18(participants) {
  return participants
    .filter((participant) => participant.age >= 18)
    .map((participant) => `${participant.name}`);
}
