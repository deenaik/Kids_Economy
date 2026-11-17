import { useState, type ReactNode } from "react";
import { ArrowLeft, Minus, Plus, RotateCcw } from "lucide-react";
import { cn } from "@/lib/cn";
import {
  LEVELS,
  MOODS,
  marketPrice,
  nextCustomer,
  priceStory,
  type Customer,
  type Level,
  type Mood,
} from "@/components/market/economy";
import {
  Apple,
  Bicycle,
  Candy,
  Coat,
  Coin,
  Cup,
  Face,
  Ground,
  Kid,
  Kite,
  Piggy,
  Sandwich,
  Stall,
  Sun,
  Tree,
  type Hair,
} from "@/components/market/glyphs";

const STEPS = [
  { id: "hello", label: "Hello" },
  { id: "needs", label: "Needs" },
  { id: "make", label: "Make" },
  { id: "barter", label: "Trade" },
  { id: "coins", label: "Coins" },
  { id: "prices", label: "Prices" },
  { id: "choose", label: "Save" },
  { id: "stand", label: "Your stand" },
] as const;

type StepId = (typeof STEPS)[number]["id"];

const SORTS = [
  { id: "water", title: "A cup of water", kind: "need" as const, say: "Your body asks for this every day.", Glyph: Cup },
  { id: "coat", title: "A warm coat", kind: "need" as const, say: "Staying warm is a need, like food or a bed.", Glyph: Coat },
  { id: "bread", title: "Bread", kind: "need" as const, say: "If nobody bakes it, there is none to buy.", Glyph: Sandwich },
  { id: "kite", title: "A kite", kind: "want" as const, say: "Wonderful — and you can be okay without it.", Glyph: Kite },
  { id: "candy", title: "Candy", kind: "want" as const, say: "Sweet, and gone in a minute.", Glyph: Candy },
  { id: "bike", title: "A bicycle", kind: "want" as const, say: "A big wish. Wants can be tiny or huge.", Glyph: Bicycle },
];

const SHOP = [
  { id: "sandwich", name: "Sandwich", cost: 3, note: "A need", Glyph: Sandwich, once: false },
  { id: "candy", name: "Candy", cost: 2, note: "A small want", Glyph: Candy, once: false },
  { id: "kite", name: "Kite", cost: 6, note: "A want", Glyph: Kite, once: true },
  { id: "bike", name: "Bicycle", cost: 12, note: "A big want", Glyph: Bicycle, once: true },
];

export function CoinTown() {
  const [step, setStep] = useState<StepId>("hello");
  const [furthest, setFurthest] = useState(0);
  const [nonce, setNonce] = useState(0);

  const index = STEPS.findIndex((s) => s.id === step);

  function go(id: StepId) {
    const next = STEPS.findIndex((s) => s.id === id);
    setStep(id);
    setFurthest((n) => Math.max(n, next));
  }

  function back() {
    if (index > 0) setStep(STEPS[index - 1].id);
  }

  function restart() {
    setStep("hello");
    setFurthest(0);
    setNonce((n) => n + 1);
  }

  return (
    <main className="mx-auto flex min-h-dvh max-w-5xl flex-col px-4 py-3 md:px-8 md:py-6">
      <header className="sticky top-0 z-10 -mx-4 mb-4 border-b border-line bg-paper px-4 py-3 md:static md:mx-0 md:border-0 md:bg-transparent md:px-0">
        <div className="flex items-center justify-between gap-3">
          <h1 className="font-display text-2xl font-bold tracking-tight md:text-3xl">Coin Town</h1>
          <p className="text-sm font-bold text-muted">
            Part {index + 1} of {STEPS.length}
          </p>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <button
            type="button"
            onClick={back}
            disabled={index === 0}
            className="inline-flex min-h-11 items-center gap-1 rounded-full border-2 border-ink bg-card px-3 text-sm font-extrabold shadow-print transition-transform duration-150 enabled:active:scale-[0.96] disabled:opacity-35 disabled:shadow-none"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back
          </button>
          <div className="flex flex-1 gap-1" aria-hidden="true">
            {STEPS.map((s, i) => (
              <span
                key={s.id}
                className={cn(
                  "h-2.5 flex-1 rounded-full border border-ink",
                  i <= furthest ? "bg-terra" : "bg-card",
                  i === index && "bg-ink",
                )}
              />
            ))}
          </div>
        </div>
      </header>

      <Play key={nonce} step={step} onNext={(id) => go(id)} onRestart={restart} />
    </main>
  );
}

function Play({
  step,
  onNext,
  onRestart,
}: {
  step: StepId;
  onNext: (id: StepId) => void;
  onRestart: () => void;
}) {
  return (
    <div className="grid flex-1 items-start gap-5 md:grid-cols-2 md:items-center md:gap-10">
      {step === "hello" && <Hello onNext={() => onNext("needs")} />}
      {step === "needs" && <Needs onNext={() => onNext("make")} />}
      {step === "make" && <Make onNext={() => onNext("barter")} />}
      {step === "barter" && <Barter onNext={() => onNext("coins")} />}
      {step === "coins" && <Coins onNext={() => onNext("prices")} />}
      {step === "prices" && <Prices onNext={() => onNext("choose")} />}
      {step === "choose" && <Choose onNext={() => onNext("stand")} />}
      {step === "stand" && <Stand onRestart={onRestart} />}
    </div>
  );
}

function Split({
  stage,
  title,
  children,
}: {
  stage: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <section
        className="overflow-hidden rounded-3xl border-2 border-ink bg-gold-soft shadow-print"
        aria-label={title}
      >
        <div className="relative px-4 py-6">
          <Sun className="absolute top-3 right-3 size-12" />
          {stage}
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="font-display text-3xl leading-tight font-bold md:text-4xl">{title}</h2>
        {children}
      </section>
    </>
  );
}

function Press({
  children,
  onClick,
  disabled,
  tone = "terra",
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  tone?: "terra" | "ink" | "card" | "gold";
  className?: string;
}) {
  const tones = {
    terra: "bg-terra text-on-terra",
    ink: "bg-ink text-card",
    card: "bg-card text-ink",
    gold: "bg-gold text-on-gold",
  };
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-ink px-5 py-3 text-center text-lg font-extrabold shadow-print transition-transform duration-150 ease-out enabled:active:scale-[0.96] disabled:opacity-40 disabled:shadow-none",
        tones[tone],
        className,
      )}
    >
      {children}
    </button>
  );
}

function Hello({ onNext }: { onNext: () => void }) {
  return (
    <Split
      title="How a town gets what it needs"
      stage={
        <Ground className="pt-6">
          <Tree className="w-20 sm:w-28 md:w-36" apples={4} />
          <div className="flex flex-col items-center">
            <Coin className="bob mb-1 size-12 sm:size-14" />
            <Kid hair="curls" apron className="w-20 sm:w-24 md:w-28" />
          </div>
          <Stall className="mb-2 w-24 sm:w-28 md:w-36" />
        </Ground>
      }
    >
      <p>
        An <strong>economy</strong> is a big word for a simple thing: people make stuff, then trade it, so
        everyone can get what they need — and some of what they want.
      </p>
      <p className="text-base text-muted">Made for about age 8. It is nicer if a grown-up reads along.</p>
      <Press onClick={onNext}>Step into the market</Press>
    </Split>
  );
}

function Needs({ onNext }: { onNext: () => void }) {
  const [i, setI] = useState(0);
  const [note, setNote] = useState("Is this a need, or a want?");
  const [locked, setLocked] = useState(false);
  const card = SORTS[i];
  const done = i >= SORTS.length;

  function choose(kind: "need" | "want") {
    if (done || locked) return;
    if (kind !== card.kind) {
      setNote(
        kind === "need"
          ? "Not quite. A need is something you can't really skip."
          : "Not quite. A want is extra — nice, but you can manage without it.",
      );
      return;
    }
    setLocked(true);
    setNote(card.say);
  }

  function advance() {
    if (i + 1 >= SORTS.length) {
      setI(SORTS.length);
      setNote("Needs come first. Wants are the extra wishes — kites, songs, bicycles.");
      return;
    }
    setI(i + 1);
    setLocked(false);
    setNote("Is this a need, or a want?");
  }

  const Glyph = done ? Apple : card.Glyph;

  return (
    <Split
      title="Needs and wants"
      stage={
        <div className="flex flex-col items-center gap-3 pt-4">
          <Glyph className="w-32" />
          {!done && <p className="font-display text-2xl font-bold">{card.title}</p>}
          {done && <p className="font-display text-2xl font-bold">Both belong</p>}
        </div>
      }
    >
      <p aria-live="polite">{done ? note : note}</p>
      {!done && (
        <div className="grid grid-cols-2 gap-3">
          <Press tone={locked && card.kind === "need" ? "ink" : "card"} onClick={() => choose("need")} disabled={locked}>
            Need
          </Press>
          <Press tone={locked && card.kind === "want" ? "ink" : "card"} onClick={() => choose("want")} disabled={locked}>
            Want
          </Press>
        </div>
      )}
      {locked && !done && (
        <Press onClick={advance}>{i + 1 === SORTS.length ? "See what that means" : "Next thing"}</Press>
      )}
      {done && (
        <>
          <p>
            Shops, farms, and jobs exist because people need things they don't have yet — and because they
            wish for things too. That wishing and making is the economy.
          </p>
          <Press onClick={onNext}>Someone has to make it</Press>
        </>
      )}
    </Split>
  );
}

function Make({ onNext }: { onNext: () => void }) {
  const [picked, setPicked] = useState(0);
  const full = picked >= 4;
  return (
    <Split
      title="Someone has to make it"
      stage={
        <div className="flex flex-col items-center pt-4">
          <button
            type="button"
            onClick={() => setPicked((n) => Math.min(4, n + 1))}
            disabled={full}
            className="flex flex-col items-center gap-2 rounded-3xl transition-transform duration-150 active:enabled:scale-[0.96]"
          >
            <Tree key={picked} className="w-40 md:w-48" apples={2 + picked} />
            <span className="text-base font-extrabold">{full ? "Basket full" : "Tap the tree"}</span>
          </button>
        </div>
      }
    >
      <p>
        Apples do not walk into town. Somebody plants, waits, and picks. Work is how things enter an economy.
      </p>
      <div className="flex items-center gap-2" aria-live="polite">
        {Array.from({ length: 4 }, (_, n) =>
          n < picked ? (
            <Apple key={n} className="size-12" />
          ) : (
            <span key={n} className="size-12 rounded-full border-2 border-dashed border-line" />
          ),
        )}
        <span className="ml-1 font-extrabold">{picked} of 4</span>
      </div>
      {full ? (
        <>
          <p>A farmer, a baker, a bus driver — each one makes something other people can use.</p>
          <Press onClick={onNext}>Now try to trade</Press>
        </>
      ) : (
        <Press tone="gold" onClick={() => setPicked((n) => Math.min(4, n + 1))}>
          Pick an apple
        </Press>
      )}
    </Split>
  );
}

function Barter({ onNext }: { onNext: () => void }) {
  const [phase, setPhase] = useState<"ask" | "no" | "leo" | "done">("ask");
  const friend = phase === "ask" || phase === "no" ? "braids" : "cap";
  const mood = phase === "no" ? "no" : "smile";
  const held = phase === "leo" || phase === "done" ? "sandwich" : "kite";

  return (
    <Split
      title="Trading stuff gets stuck"
      stage={
        <Ground className="gap-2 pt-6">
          <div className="flex flex-col items-center">
            <Apple className="mb-1 size-12" />
            <Kid hair="curls" apron className="w-24" />
            <span className="text-sm font-extrabold">You</span>
          </div>
          <span className="mb-16 font-display text-3xl font-bold">?</span>
          <div className="flex flex-col items-center">
            {held === "kite" ? <Kite className="mb-1 w-12" /> : <Sandwich className="mb-1 w-14" />}
            <Kid hair={friend as Hair} mood={mood} className="w-24" />
            <span className="text-sm font-extrabold">{friend === "braids" ? "Maya" : "Leo"}</span>
          </div>
        </Ground>
      }
    >
      {phase === "ask" && (
        <>
          <p>Maya has the kite you want. You have apples. A trade works only if she wants what you have.</p>
          <Press onClick={() => setPhase("no")}>Offer your apples</Press>
        </>
      )}
      {phase === "no" && (
        <>
          <p aria-live="polite">
            Maya says, “No thanks. I don't want apples today.” The trade is stuck. Stuff-for-stuff is called{" "}
            <strong>barter</strong>. It only works when the wants match.
          </p>
          <Press onClick={() => setPhase("leo")}>Ask Leo instead</Press>
        </>
      )}
      {phase === "leo" && (
        <>
          <p aria-live="polite">
            Leo will trade a sandwich for your apples. You get lunch. You still do not get the kite.
          </p>
          <Press tone="card" onClick={() => setPhase("done")}>
            Take the sandwich
          </Press>
        </>
      )}
      {phase === "done" && (
        <>
          <p>
            You solved lunch and missed the kite. Barter gets stuck all the time. Towns invented something
            almost everyone will take.
          </p>
          <Press onClick={onNext}>Show me the something</Press>
        </>
      )}
    </Split>
  );
}

function Coins({ onNext }: { onNext: () => void }) {
  const [phase, setPhase] = useState<"have" | "sold" | "bought">("have");
  const coins = phase === "have" ? 0 : phase === "sold" ? 4 : 1;

  return (
    <Split
      title="A coin everyone will take"
      stage={
        <div className="flex flex-col items-center gap-4 pt-6">
          <div className="flex min-h-16 items-center gap-2">
            {phase === "have" &&
              Array.from({ length: 4 }, (_, n) => <Apple key={n} className="size-14" />)}
            {phase !== "have" &&
              Array.from({ length: coins }, (_, n) => <Coin key={n} className="size-14" />)}
          </div>
          {phase === "bought" ? (
            <div className="flex flex-col items-center">
              <Kite className="h-20 w-auto" />
              <p className="font-extrabold">Your kite</p>
            </div>
          ) : (
            <Kid hair="braids" className="w-24" />
          )}
        </div>
      }
    >
      {phase === "have" && (
        <>
          <p>
            A coin is not food and not a toy. It works because people <strong>agree</strong> to take it. Sell
            the apples to the baker. The baker pays coins, not a kite.
          </p>
          <Press onClick={() => setPhase("sold")}>Sell the apples</Press>
        </>
      )}
      {phase === "sold" && (
        <>
          <p aria-live="polite">
            Four apples became four coins. Maya still doesn't want apples — but she will take coins.
          </p>
          <Press onClick={() => setPhase("bought")}>Buy the kite for 3 coins</Press>
        </>
      )}
      {phase === "bought" && (
        <>
          <p aria-live="polite">
            Two trades, two different people, one coin connecting them. That is the heart of an economy: money
            lets a trade happen even when stuff doesn't match. One coin is left over.
          </p>
          <Press onClick={onNext}>Why isn't the price always 1?</Press>
        </>
      )}
    </Split>
  );
}

function Prices({ onNext }: { onNext: () => void }) {
  const [supply, setSupply] = useState<Level>(1);
  const [demand, setDemand] = useState<Level>(1);
  const price = marketPrice(supply, demand);
  const tilt = (demand - supply) * 6;

  return (
    <Split
      title="Why prices move"
      stage={
        <div className="flex flex-col items-center gap-2 pt-2">
          <p className="font-display text-5xl leading-none font-bold">{price}</p>
          <p className="-mt-1 text-sm font-extrabold text-muted">coins for one apple</p>
          <div className="flex min-h-12 items-end gap-1">
            {Array.from({ length: price }, (_, n) => (
              <Coin key={n} className="size-10" />
            ))}
          </div>
          <Seesaw supply={supply} demand={demand} tilt={tilt} />
        </div>
      }
    >
      <p>A price is just how many coins people agree on today. It is not stuck. Tip the market.</p>
      <LevelPick
        legend="Apples in town"
        value={supply}
        onChange={setSupply}
      />
      <LevelPick
        legend="Kids who want one"
        value={demand}
        onChange={setDemand}
      />
      <p aria-live="polite">{priceStory(supply, demand)}</p>
      <p className="text-base text-muted">
        Grown-up words: <strong className="text-ink">supply</strong> is how much there is.{" "}
        <strong className="text-ink">demand</strong> is how many people want it.
      </p>
      <Press onClick={onNext}>Now or later?</Press>
    </Split>
  );
}

function LevelPick({
  legend,
  value,
  onChange,
}: {
  legend: string;
  value: Level;
  onChange: (level: Level) => void;
}) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="text-base font-extrabold">{legend}</legend>
      <div className="grid grid-cols-3 gap-2">
        {LEVELS.map((level) => (
          <button
            key={level.id}
            type="button"
            aria-pressed={value === level.id}
            onClick={() => onChange(level.id)}
            className={cn(
              "min-h-12 rounded-full border-2 border-ink text-base font-extrabold transition-transform duration-150 active:scale-[0.96]",
              value === level.id ? "bg-ink text-card shadow-print" : "bg-card text-ink",
            )}
          >
            {level.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function Seesaw({ supply, demand, tilt }: { supply: Level; demand: Level; tilt: number }) {
  const apples = LEVELS[supply].count;
  const kids = LEVELS[demand].count;
  const hairs: Hair[] = ["curls", "braids", "cap", "short", "curls", "braids"];
  return (
    <div className="relative mx-auto h-56 w-full max-w-sm">
      <svg
        viewBox="0 0 48 28"
        className="absolute top-44 left-1/2 w-12 -translate-x-1/2"
        aria-hidden="true"
      >
        <polygon points="0,28 48,28 24,2" fill="var(--color-ink)" />
      </svg>
      <div
        className="absolute inset-x-3 top-40 origin-center transition-transform duration-500 ease-out"
        style={{ transform: `rotate(${tilt}deg)` }}
      >
        <div className="relative h-4 rounded-full border-2 border-ink bg-gold">
          <div
            className="absolute bottom-full left-0 mb-1 origin-bottom transition-transform duration-500 ease-out"
            style={{ transform: `rotate(${-tilt}deg)` }}
          >
            <div className="flex w-24 flex-col items-center">
              <div className="flex flex-wrap justify-center gap-0.5">
                {Array.from({ length: apples }, (_, n) => (
                  <Apple key={n} className="size-6" />
                ))}
              </div>
              <span className="text-xs font-extrabold">Apples</span>
            </div>
          </div>
          <div
            className="absolute right-0 bottom-full mb-1 origin-bottom transition-transform duration-500 ease-out"
            style={{ transform: `rotate(${-tilt}deg)` }}
          >
            <div className="flex w-24 flex-col items-center">
              <div className="flex flex-wrap justify-center gap-0.5">
                {Array.from({ length: kids }, (_, n) => (
                  <Face key={n} hair={hairs[n]} className="size-7" />
                ))}
              </div>
              <span className="text-xs font-extrabold">Kids</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Choose({ onNext }: { onNext: () => void }) {
  const [coins, setCoins] = useState(6);
  const [treats, setTreats] = useState(0);
  const [bike, setBike] = useState(false);
  const [kept, setKept] = useState(false);
  const ready = bike || treats > 0 || kept;

  return (
    <Split
      title="Spend now, or save?"
      stage={
        <div className="flex flex-col items-center gap-3 pt-4">
          <Piggy className="w-36" />
          <div className="flex min-h-12 flex-wrap justify-center gap-1">
            {Array.from({ length: coins }, (_, n) => (
              <Coin key={n} className="size-9" />
            ))}
            {coins === 0 && <p className="text-sm font-extrabold">Jar empty</p>}
          </div>
          <div className="flex items-end gap-4">
            {treats > 0 && <Candy className="w-20" />}
            {bike && <Bicycle className="w-28" />}
          </div>
        </div>
      }
    >
      <p>
        Candy costs 2 coins. The bicycle costs 6. You have <strong>{coins}</strong> in the jar
        {treats > 0 ? ` and ${treats} ${treats === 1 ? "candy" : "candies"} already eaten` : ""}.
      </p>
      <div className="grid gap-3">
        <Press
          tone="gold"
          disabled={coins < 2 || bike}
          onClick={() => {
            setCoins((c) => c - 2);
            setTreats((n) => n + 1);
            setKept(false);
          }}
        >
          Buy candy for 2
        </Press>
        <Press
          disabled={coins < 6 || bike}
          onClick={() => {
            setCoins(0);
            setBike(true);
            setKept(false);
          }}
        >
          {bike ? "The bicycle is yours" : "Save up and buy the bicycle"}
        </Press>
        {!bike && coins > 0 && (
          <Press
            tone="card"
            onClick={() => setKept(true)}
          >
            Leave the coins in the jar
          </Press>
        )}
      </div>
      <p aria-live="polite">
        {bike &&
          "You used the coins on one big want. Saving is waiting on purpose so a bigger thing can happen. Towns do this too — for a park, a library, a bridge."}
        {!bike && treats > 0 && !kept &&
          "Spending uses coins now. The candy is gone in a minute. Saving means keeping some for later."}
        {!bike && kept &&
          "The jar is waiting. That is saving: choosing later on purpose, not because you forgot."}
        {!bike && treats === 0 && !kept && "Candy is now. The bicycle is later. Both are real choices."}
      </p>
      {ready && <Press onClick={onNext}>Open your own stand</Press>}
    </Split>
  );
}

function Stand({ onRestart }: { onRestart: () => void }) {
  const [mood, setMood] = useState<Mood>("tuesday");
  const [price, setPrice] = useState(3);
  const [apples, setApples] = useState(4);
  const [coins, setCoins] = useState(0);
  const [n, setN] = useState(0);
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [line, setLine] = useState("The square is quiet. Call someone over.");
  const [rejected, setRejected] = useState(false);
  const [shelf, setShelf] = useState<string[]>([]);

  function call() {
    const person = nextCustomer(mood, n);
    setN(n + 1);
    setCustomer(person);
    setLine(`${person.name} walks up. “Got any apples?”`);
  }

  function sell() {
    if (!customer) return;
    if (apples < 1) {
      setLine("The crate is empty. You can't sell what you haven't made.");
      return;
    }
    if (customer.pays < price) {
      setRejected(true);
      setLine(
        `${customer.name} only has ${customer.pays} ${customer.pays === 1 ? "coin" : "coins"}. Your price is ${price}, so they walk on.`,
      );
      setCustomer(null);
      return;
    }
    setApples((a) => a - 1);
    setCoins((c) => c + price);
    setLine(
      `${customer.name} would pay up to ${customer.pays}. Your price is ${price}, so you get a sale.`,
    );
    setCustomer(null);
  }

  function buy(id: string) {
    const item = SHOP.find((s) => s.id === id);
    if (!item || coins < item.cost) return;
    if (item.once && shelf.includes(item.name)) return;
    setCoins((c) => c - item.cost);
    setShelf((list) => [...list, item.name]);
    setLine(
      item.once
        ? `You spent ${item.cost} on a ${item.name.toLowerCase()}. Spending turns coins into something you keep.`
        : `You spent ${item.cost} on ${item.name.toLowerCase()}. A need or a small want — coins leave the jar.`,
    );
  }

  return (
    <Split
      title="You run the stand"
      stage={
        <Ground className="pt-8">
          <div className="flex flex-col items-center">
            <div className="mb-1 flex gap-0.5">
              {Array.from({ length: Math.min(apples, 4) }, (_, i) => (
                <Apple key={i} className="size-7" />
              ))}
            </div>
            <Stall className="w-28" />
            <span className="text-sm font-extrabold">{apples} apples</span>
          </div>
          <div className="flex flex-col items-center">
            {customer ? (
              <Kid hair={customer.hair} className="w-24" />
            ) : (
              <Kid hair="short" mood="smile" className="w-24 opacity-40" />
            )}
            <span className="text-sm font-extrabold">{customer ? customer.name : "Waiting"}</span>
          </div>
          <div className="mb-6 flex flex-col items-center">
            <Coin className="size-12" />
            <span className="font-display text-2xl font-bold">{coins}</span>
          </div>
        </Ground>
      }
    >
      <p>
        You choose the price. Each kid decides if they can pay it. A whole city is millions of little choices
        like this.
      </p>
      <fieldset>
        <legend className="mb-2 text-base font-extrabold">What kind of day?</legend>
        <div className="grid gap-2">
          {MOODS.map((m) => (
            <button
              key={m.id}
              type="button"
              aria-pressed={mood === m.id}
              onClick={() => {
                setMood(m.id);
                setCustomer(null);
                setLine(m.hint);
              }}
              className={cn(
                "min-h-12 rounded-2xl border-2 border-ink px-4 py-2 text-left transition-transform duration-150 active:scale-[0.96]",
                mood === m.id ? "bg-ink text-card shadow-print" : "bg-card text-ink",
              )}
            >
              <span className="block font-extrabold">{m.label}</span>
              <span className={cn("block text-sm", mood === m.id ? "text-gold-soft" : "text-muted")}>
                {m.hint}
              </span>
            </button>
          ))}
        </div>
      </fieldset>
      <div className="flex items-center justify-between gap-3 rounded-2xl border-2 border-ink bg-card px-3 py-2">
        <button
          type="button"
          aria-label="Lower the price"
          onClick={() => setPrice((p) => Math.max(1, p - 1))}
          disabled={price <= 1}
          className="inline-flex size-12 items-center justify-center rounded-full border-2 border-ink bg-paper active:enabled:scale-[0.96] disabled:opacity-40"
        >
          <Minus className="size-5" aria-hidden="true" />
        </button>
        <p className="text-center font-extrabold">
          <span className="font-display text-3xl leading-none">{price}</span>
          <span className="mt-1 block text-sm text-muted">coin price</span>
        </p>
        <button
          type="button"
          aria-label="Raise the price"
          onClick={() => setPrice((p) => Math.min(5, p + 1))}
          disabled={price >= 5}
          className="inline-flex size-12 items-center justify-center rounded-full border-2 border-ink bg-paper active:enabled:scale-[0.96] disabled:opacity-40"
        >
          <Plus className="size-5" aria-hidden="true" />
        </button>
      </div>
      <p aria-live="polite">{line}</p>
      {rejected && (
        <p className="text-base text-muted">If kids keep walking away, try a lower price — or a busier day.</p>
      )}
      <div className="grid gap-2 sm:grid-cols-2">
        <Press tone="card" onClick={call}>
          {customer ? "Someone else" : "Call a customer"}
        </Press>
        <Press onClick={sell} disabled={!customer}>
          Sell for {price}
        </Press>
      </div>
      <Press
        tone="gold"
        onClick={() => {
          setApples((a) => Math.min(8, a + 1));
          setLine("You picked another apple. Making comes before selling.");
        }}
        disabled={apples >= 8}
      >
        Pick another apple ({apples}/8)
      </Press>
      <div>
        <h3 className="mb-2 font-display text-2xl font-bold">The shops</h3>
        <div className="grid grid-cols-2 gap-2">
          {SHOP.map((item) => {
            const owned = item.once && shelf.includes(item.name);
            const broke = coins < item.cost;
            return (
              <button
                key={item.id}
                type="button"
                disabled={owned || broke}
                onClick={() => buy(item.id)}
                className="flex min-h-24 flex-col items-start gap-1 rounded-2xl border-2 border-ink bg-card p-3 text-left active:enabled:scale-[0.96] disabled:opacity-45"
              >
                <item.Glyph className="h-10 w-auto" />
                <span className="font-extrabold">{item.name}</span>
                <span className="text-sm text-muted">
                  {owned ? "Yours" : `${item.cost} coins · ${item.note}`}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      {shelf.length > 0 && (
        <p className="text-base">
          You bought: <strong>{shelf.join(", ")}</strong>
        </p>
      )}
      <div className="rounded-2xl border-2 border-ink bg-terra-soft p-4">
        <p className="font-extrabold">Say it back</p>
        <p className="mt-1 text-base">
          An economy is people making things and trading them. Coins connect the trades. Prices rise when many
          people want something scarce, and fall when there is plenty. You choose what to spend now and what to
          save.
        </p>
      </div>
      <button
        type="button"
        onClick={onRestart}
        className="inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-full px-2 text-base font-extrabold text-muted"
      >
        <RotateCcw className="size-4" aria-hidden="true" />
        Play the story again
      </button>
    </Split>
  );
}
