export const getNumberSequence = (from: number, to: number): number[] => {
  const sequence: number[] = [];
  for (let i = from; i <= to; i++) {
    sequence.push(i);
  }

  return sequence;
};
