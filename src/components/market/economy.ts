export type Level = 0 | 1 | 2;

export const LEVELS: { id: Level; label: string; count: number }[] = [
  { id: 0, label: "A few", count: 1 },
  { id: 1, label: "Some", count: 3 },
  { id: 2, label: "Lots", count: 6 },
];

/** Middle price is 3. More demand raises it, more supply lowers it. Range 1–5. */
export function marketPrice(supply: Level, demand: Level): number {
  return 3 + demand - supply;
}

export function priceStory(supply: Level, demand: Level): string {
  const price = marketPrice(supply, demand);
  if (demand > supply) {
    return `More kids want apples than there are apples. People will pay more. Today an apple is ${price} coins.`;
  }
  if (supply > demand) {
    return `There are extra apples, and not many kids want them. The price sinks. Today an apple is ${price} coins.`;
  }
  return `Apples and hungry kids match. Nobody is desperate, and nothing is piled up. Today an apple is ${price} coins.`;
}

export type Mood = "picnic" | "tuesday" | "crowded";

export const MOODS: { id: Mood; label: string; hint: string }[] = [
  { id: "picnic", label: "Picnic day", hint: "Lots of people want apples." },
  { id: "tuesday", label: "Quiet Tuesday", hint: "Only some people are hungry." },
  { id: "crowded", label: "Lots of stands", hint: "Apples are everywhere in town." },
];

const PAYS: Record<Mood, number[]> = {
  picnic: [3, 4, 5, 4, 5, 3],
  tuesday: [2, 3, 1, 4, 2, 3],
  crowded: [1, 2, 1, 2, 1, 2],
};

const NAMES = ["Noor", "Sam", "Priya", "Eli", "Jo", "Amina", "Leo", "Maya"];
const HAIRS = ["curls", "braids", "cap", "short"] as const;

export type Customer = {
  id: number;
  name: string;
  pays: number;
  hair: (typeof HAIRS)[number];
};

export function nextCustomer(mood: Mood, n: number): Customer {
  const pays = PAYS[mood][n % PAYS[mood].length];
  return {
    id: n,
    name: NAMES[n % NAMES.length],
    pays,
    hair: HAIRS[n % HAIRS.length],
  };
}
