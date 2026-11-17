import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowLeft, i as Minus, n as RotateCcw, r as Plus } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-gCDbM_rY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var LEVELS = [
	{
		id: 0,
		label: "A few",
		count: 1
	},
	{
		id: 1,
		label: "Some",
		count: 3
	},
	{
		id: 2,
		label: "Lots",
		count: 6
	}
];
/** Middle price is 3. More demand raises it, more supply lowers it. Range 1–5. */
function marketPrice(supply, demand) {
	return 3 + demand - supply;
}
function priceStory(supply, demand) {
	const price = marketPrice(supply, demand);
	if (demand > supply) return `More kids want apples than there are apples. People will pay more. Today an apple is ${price} coins.`;
	if (supply > demand) return `There are extra apples, and not many kids want them. The price sinks. Today an apple is ${price} coins.`;
	return `Apples and hungry kids match. Nobody is desperate, and nothing is piled up. Today an apple is ${price} coins.`;
}
var MOODS = [
	{
		id: "picnic",
		label: "Picnic day",
		hint: "Lots of people want apples."
	},
	{
		id: "tuesday",
		label: "Quiet Tuesday",
		hint: "Only some people are hungry."
	},
	{
		id: "crowded",
		label: "Lots of stands",
		hint: "Apples are everywhere in town."
	}
];
var PAYS = {
	picnic: [
		3,
		4,
		5,
		4,
		5,
		3
	],
	tuesday: [
		2,
		3,
		1,
		4,
		2,
		3
	],
	crowded: [
		1,
		2,
		1,
		2,
		1,
		2
	]
};
var NAMES = [
	"Noor",
	"Sam",
	"Priya",
	"Eli",
	"Jo",
	"Amina",
	"Leo",
	"Maya"
];
var HAIRS = [
	"curls",
	"braids",
	"cap",
	"short"
];
function nextCustomer(mood, n) {
	const pays = PAYS[mood][n % PAYS[mood].length];
	return {
		id: n,
		name: NAMES[n % NAMES.length],
		pays,
		hair: HAIRS[n % HAIRS.length]
	};
}
var ink = "var(--color-ink)";
var card = "var(--color-card)";
var terra = "var(--color-terra)";
var gold = "var(--color-gold)";
var goldSoft = "var(--color-gold-soft)";
var paper = "var(--color-paper)";
function Apple({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 80",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M42 22c2-8 12-10 16-6",
				fill: "none",
				stroke: ink,
				strokeWidth: "3",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "54",
				cy: "16",
				rx: "8",
				ry: "4.5",
				fill: gold,
				stroke: ink,
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "38",
				cy: "46",
				r: "22",
				fill: terra,
				stroke: ink,
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M30 38c3 2 5 6 5 11",
				fill: "none",
				stroke: paper,
				strokeWidth: "2.5",
				strokeLinecap: "round",
				opacity: "0.85"
			})
		]
	});
}
function Coin({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 80",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "40",
				r: "28",
				fill: gold,
				stroke: ink,
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "40",
				r: "20",
				fill: "none",
				stroke: ink,
				strokeWidth: "2.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "43",
				r: "8",
				fill: terra,
				stroke: ink,
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 33c1-4 5-4 6-2",
				fill: "none",
				stroke: ink,
				strokeWidth: "2",
				strokeLinecap: "round"
			})
		]
	});
}
function Kite({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 110",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "40,6 74,48 40,90 6,48",
				fill: terra,
				stroke: ink,
				strokeWidth: "3",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "40,6 40,90 74,48",
				fill: gold,
				stroke: ink,
				strokeWidth: "3",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 90c8 8 6 16 0 20",
				fill: "none",
				stroke: ink,
				strokeWidth: "3",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "34",
				cy: "108",
				r: "3",
				fill: gold,
				stroke: ink,
				strokeWidth: "2"
			})
		]
	});
}
function Tree({ className, apples = 4 }) {
	const spots = [
		[48, 58],
		[78, 70],
		[108, 56],
		[64, 92],
		[96, 98],
		[80, 40]
	].slice(0, apples);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 160 180",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "70",
				y: "118",
				width: "20",
				height: "52",
				rx: "6",
				fill: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "80",
				cy: "78",
				r: "58",
				fill: goldSoft,
				stroke: ink,
				strokeWidth: "3"
			}),
			spots.map(([x, y]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: x,
				cy: y,
				r: "9",
				fill: terra,
				stroke: ink,
				strokeWidth: "2.5"
			}, `${x}-${y}`))
		]
	});
}
function Sun({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 80",
		className,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "40",
			cy: "40",
			r: "14",
			fill: gold,
			stroke: ink,
			strokeWidth: "3"
		}), Array.from({ length: 8 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: "40",
			y1: "10",
			x2: "40",
			y2: "18",
			stroke: ink,
			strokeWidth: "3",
			strokeLinecap: "round",
			transform: `rotate(${i * 45} 40 40)`
		}, i))]
	});
}
function Stall({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 170 150",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "18",
				y: "58",
				width: "134",
				height: "26",
				rx: "6",
				fill: gold,
				stroke: ink,
				strokeWidth: "3"
			}),
			[
				0,
				1,
				2,
				3,
				4
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: `M${22 + i * 28} 58 q14 -22 26 0`,
				fill: i % 2 === 0 ? terra : gold,
				stroke: ink,
				strokeWidth: "3",
				strokeLinejoin: "round"
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "22",
				y: "84",
				width: "126",
				height: "16",
				rx: "3",
				fill: goldSoft,
				stroke: ink,
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "36",
				y: "100",
				width: "12",
				height: "36",
				rx: "2",
				fill: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "122",
				y: "100",
				width: "12",
				height: "36",
				rx: "2",
				fill: ink
			})
		]
	});
}
function Bicycle({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 140 90",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "36",
				cy: "62",
				r: "20",
				fill: card,
				stroke: ink,
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "104",
				cy: "62",
				r: "20",
				fill: card,
				stroke: ink,
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M36 62 L68 62 L88 34 L58 34 L36 62 M68 62 L88 34 M88 34 L104 34 M104 34 L104 46",
				fill: "none",
				stroke: ink,
				strokeWidth: "3",
				strokeLinejoin: "round",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M52 34 h16",
				stroke: terra,
				strokeWidth: "4",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "104",
				cy: "30",
				r: "4",
				fill: gold,
				stroke: ink,
				strokeWidth: "2"
			})
		]
	});
}
function Candy({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 70",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8 35 L28 22 L28 48 Z",
				fill: gold,
				stroke: ink,
				strokeWidth: "3",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M92 35 L72 22 L72 48 Z",
				fill: gold,
				stroke: ink,
				strokeWidth: "3",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "26",
				y: "16",
				width: "48",
				height: "38",
				rx: "16",
				fill: terra,
				stroke: ink,
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 28c6 4 14 4 20 0",
				fill: "none",
				stroke: paper,
				strokeWidth: "2.5",
				strokeLinecap: "round"
			})
		]
	});
}
function Sandwich({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 90 80",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 36c0-14 66-18 66 2v6H12Z",
				fill: gold,
				stroke: ink,
				strokeWidth: "3",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "14",
				y: "42",
				width: "62",
				height: "12",
				fill: terra,
				stroke: ink,
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 54h66c2 14-64 16-66 0Z",
				fill: goldSoft,
				stroke: ink,
				strokeWidth: "3",
				strokeLinejoin: "round"
			})
		]
	});
}
function Cup({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 90",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M18 22h44l-6 52H24Z",
				fill: card,
				stroke: ink,
				strokeWidth: "3",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "40",
				cy: "24",
				rx: "22",
				ry: "8",
				fill: goldSoft,
				stroke: ink,
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M62 36h8c6 0 8 8 2 14-6 6-10 6-10 0",
				fill: "none",
				stroke: ink,
				strokeWidth: "3",
				strokeLinecap: "round"
			})
		]
	});
}
function Coat({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 90 110",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M45 14c10 8 16 10 22 8l10 18-14 8v48H27V48L13 40l10-18c6 2 12 0 22-8Z",
				fill: terra,
				stroke: ink,
				strokeWidth: "3",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "45",
				cy: "48",
				r: "3",
				fill: gold,
				stroke: ink,
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "45",
				cy: "62",
				r: "3",
				fill: gold,
				stroke: ink,
				strokeWidth: "2"
			})
		]
	});
}
function Piggy({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 140 100",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "70",
				cy: "58",
				rx: "48",
				ry: "32",
				fill: terra,
				stroke: ink,
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "112",
				cy: "62",
				rx: "16",
				ry: "12",
				fill: goldSoft,
				stroke: ink,
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "108",
				cy: "60",
				r: "2",
				fill: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "118",
				cy: "60",
				r: "2",
				fill: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M46 30c8-16 28-14 32 2",
				fill: terra,
				stroke: ink,
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "58",
				y: "34",
				width: "22",
				height: "5",
				rx: "2",
				fill: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "86",
				cy: "52",
				r: "3.5",
				fill: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "40",
				y: "84",
				width: "10",
				height: "12",
				rx: "3",
				fill: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "62",
				y: "84",
				width: "10",
				height: "12",
				rx: "3",
				fill: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "84",
				y: "84",
				width: "10",
				height: "12",
				rx: "3",
				fill: ink
			})
		]
	});
}
function Face({ hair, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		className,
		"aria-hidden": "true",
		children: [
			hair === "curls" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "22",
				r: "14",
				fill: ink
			}),
			hair === "braids" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 30c2-16 30-18 32 0",
				fill: ink
			}),
			hair === "cap" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M14 32c2-16 36-18 38 0",
				fill: gold,
				stroke: ink,
				strokeWidth: "3"
			}),
			hair === "short" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 32c2-14 32-16 34 0",
				fill: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "34",
				r: "18",
				fill: card,
				stroke: ink,
				strokeWidth: "3"
			}),
			hair === "cap" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8",
				y: "28",
				width: "48",
				height: "7",
				rx: "3",
				fill: gold,
				stroke: ink,
				strokeWidth: "3"
			}),
			hair === "braids" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "10",
				y: "30",
				width: "7",
				height: "18",
				rx: "3",
				fill: ink
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "47",
				y: "30",
				width: "7",
				height: "18",
				rx: "3",
				fill: ink
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "25",
				cy: "34",
				r: "2.6",
				fill: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "39",
				cy: "34",
				r: "2.6",
				fill: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M26 42c3 4 9 4 12 0",
				fill: "none",
				stroke: ink,
				strokeWidth: "2.5",
				strokeLinecap: "round"
			})
		]
	});
}
function Kid({ hair, apron = false, className, mood = "smile" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 150",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "36",
				y: "112",
				width: "10",
				height: "28",
				rx: "5",
				fill: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "56",
				y: "112",
				width: "10",
				height: "28",
				rx: "5",
				fill: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "26",
				y: "74",
				width: "48",
				height: "46",
				rx: "18",
				fill: apron ? terra : gold,
				stroke: ink,
				strokeWidth: "3"
			}),
			hair === "curls" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "28",
					cy: "46",
					r: "11",
					fill: ink
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "50",
					cy: "36",
					r: "13",
					fill: ink
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "72",
					cy: "46",
					r: "11",
					fill: ink
				})
			] }),
			hair === "braids" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M24 58c2-28 50-32 54 2",
				fill: ink
			}),
			hair === "cap" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M24 58c2-30 54-32 56 2",
				fill: gold,
				stroke: ink,
				strokeWidth: "3"
			}),
			hair === "short" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M26 56c2-24 48-26 50 2",
				fill: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "62",
				r: "26",
				fill: card,
				stroke: ink,
				strokeWidth: "3"
			}),
			hair === "cap" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "16",
				y: "54",
				width: "70",
				height: "10",
				rx: "4",
				fill: gold,
				stroke: ink,
				strokeWidth: "3"
			}),
			hair === "braids" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "16",
				y: "64",
				width: "10",
				height: "32",
				rx: "5",
				fill: ink
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "74",
				y: "64",
				width: "10",
				height: "32",
				rx: "5",
				fill: ink
			})] }),
			hair === "curls" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "30",
					cy: "48",
					r: "7",
					fill: ink
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "50",
					cy: "42",
					r: "8",
					fill: ink
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "70",
					cy: "48",
					r: "7",
					fill: ink
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "64",
				r: "3",
				fill: ink
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "64",
				r: "3",
				fill: ink
			}),
			mood === "smile" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 76c5 7 15 7 20 0",
				fill: "none",
				stroke: ink,
				strokeWidth: "3",
				strokeLinecap: "round"
			}),
			mood === "no" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 80c6-6 14-6 20 0",
				fill: "none",
				stroke: ink,
				strokeWidth: "3",
				strokeLinecap: "round"
			}),
			mood === "yum" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "50",
				cy: "78",
				rx: "6",
				ry: "4.5",
				fill: terra
			})
		]
	});
}
function Ground({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative flex items-end justify-center", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute bottom-1 left-1/2 h-5 w-[85%] -translate-x-1/2 rounded-full bg-line" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative flex items-end justify-center gap-3",
			children
		})]
	});
}
var STEPS = [
	{
		id: "hello",
		label: "Hello"
	},
	{
		id: "needs",
		label: "Needs"
	},
	{
		id: "make",
		label: "Make"
	},
	{
		id: "barter",
		label: "Trade"
	},
	{
		id: "coins",
		label: "Coins"
	},
	{
		id: "prices",
		label: "Prices"
	},
	{
		id: "choose",
		label: "Save"
	},
	{
		id: "stand",
		label: "Your stand"
	}
];
var SORTS = [
	{
		id: "water",
		title: "A cup of water",
		kind: "need",
		say: "Your body asks for this every day.",
		Glyph: Cup
	},
	{
		id: "coat",
		title: "A warm coat",
		kind: "need",
		say: "Staying warm is a need, like food or a bed.",
		Glyph: Coat
	},
	{
		id: "bread",
		title: "Bread",
		kind: "need",
		say: "If nobody bakes it, there is none to buy.",
		Glyph: Sandwich
	},
	{
		id: "kite",
		title: "A kite",
		kind: "want",
		say: "Wonderful — and you can be okay without it.",
		Glyph: Kite
	},
	{
		id: "candy",
		title: "Candy",
		kind: "want",
		say: "Sweet, and gone in a minute.",
		Glyph: Candy
	},
	{
		id: "bike",
		title: "A bicycle",
		kind: "want",
		say: "A big wish. Wants can be tiny or huge.",
		Glyph: Bicycle
	}
];
var SHOP = [
	{
		id: "sandwich",
		name: "Sandwich",
		cost: 3,
		note: "A need",
		Glyph: Sandwich,
		once: false
	},
	{
		id: "candy",
		name: "Candy",
		cost: 2,
		note: "A small want",
		Glyph: Candy,
		once: false
	},
	{
		id: "kite",
		name: "Kite",
		cost: 6,
		note: "A want",
		Glyph: Kite,
		once: true
	},
	{
		id: "bike",
		name: "Bicycle",
		cost: 12,
		note: "A big want",
		Glyph: Bicycle,
		once: true
	}
];
function CoinTown() {
	const [step, setStep] = (0, import_react.useState)("hello");
	const [furthest, setFurthest] = (0, import_react.useState)(0);
	const [nonce, setNonce] = (0, import_react.useState)(0);
	const index = STEPS.findIndex((s) => s.id === step);
	function go(id) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-dvh max-w-5xl flex-col px-4 py-3 md:px-8 md:py-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "sticky top-0 z-10 -mx-4 mb-4 border-b border-line bg-paper px-4 py-3 md:static md:mx-0 md:border-0 md:bg-transparent md:px-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-bold tracking-tight md:text-3xl",
					children: "Coin Town"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm font-bold text-muted",
					children: [
						"Part ",
						index + 1,
						" of ",
						STEPS.length
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: back,
					disabled: index === 0,
					className: "inline-flex min-h-11 items-center gap-1 rounded-full border-2 border-ink bg-card px-3 text-sm font-extrabold shadow-print transition-transform duration-150 enabled:active:scale-[0.96] disabled:opacity-35 disabled:shadow-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
						className: "size-4",
						"aria-hidden": "true"
					}), "Back"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-1 gap-1",
					"aria-hidden": "true",
					children: STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-2.5 flex-1 rounded-full border border-ink", i <= furthest ? "bg-terra" : "bg-card", i === index && "bg-ink") }, s.id))
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
			step,
			onNext: (id) => go(id),
			onRestart: restart
		}, nonce)]
	});
}
function Play({ step, onNext, onRestart }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid flex-1 items-start gap-5 md:grid-cols-2 md:items-center md:gap-10",
		children: [
			step === "hello" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hello, { onNext: () => onNext("needs") }),
			step === "needs" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Needs, { onNext: () => onNext("make") }),
			step === "make" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Make, { onNext: () => onNext("barter") }),
			step === "barter" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Barter, { onNext: () => onNext("coins") }),
			step === "coins" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { onNext: () => onNext("prices") }),
			step === "prices" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prices, { onNext: () => onNext("choose") }),
			step === "choose" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choose, { onNext: () => onNext("stand") }),
			step === "stand" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stand, { onRestart })
		]
	});
}
function Split({ stage, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "overflow-hidden rounded-3xl border-2 border-ink bg-gold-soft shadow-print",
		"aria-label": title,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative px-4 py-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "absolute top-3 right-3 size-12" }), stage]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl leading-tight font-bold md:text-4xl",
			children: title
		}), children]
	})] });
}
function Press({ children, onClick, disabled, tone = "terra", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		disabled,
		className: cn("inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-ink px-5 py-3 text-center text-lg font-extrabold shadow-print transition-transform duration-150 ease-out enabled:active:scale-[0.96] disabled:opacity-40 disabled:shadow-none", {
			terra: "bg-terra text-on-terra",
			ink: "bg-ink text-card",
			card: "bg-card text-ink",
			gold: "bg-gold text-on-gold"
		}[tone], className),
		children
	});
}
function Hello({ onNext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Split, {
		title: "How a town gets what it needs",
		stage: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Ground, {
			className: "pt-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tree, {
					className: "w-20 sm:w-28 md:w-36",
					apples: 4
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coin, { className: "bob mb-1 size-12 sm:size-14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kid, {
						hair: "curls",
						apron: true,
						className: "w-20 sm:w-24 md:w-28"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stall, { className: "mb-2 w-24 sm:w-28 md:w-36" })
			]
		}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"An ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "economy" }),
				" is a big word for a simple thing: people make stuff, then trade it, so everyone can get what they need — and some of what they want."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-base text-muted",
				children: "Made for about age 8. It is nicer if a grown-up reads along."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
				onClick: onNext,
				children: "Step into the market"
			})
		]
	});
}
function Needs({ onNext }) {
	const [i, setI] = (0, import_react.useState)(0);
	const [note, setNote] = (0, import_react.useState)("Is this a need, or a want?");
	const [locked, setLocked] = (0, import_react.useState)(false);
	const card = SORTS[i];
	const done = i >= SORTS.length;
	function choose(kind) {
		if (done || locked) return;
		if (kind !== card.kind) {
			setNote(kind === "need" ? "Not quite. A need is something you can't really skip." : "Not quite. A want is extra — nice, but you can manage without it.");
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Split, {
		title: "Needs and wants",
		stage: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-3 pt-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glyph, { className: "w-32" }),
				!done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl font-bold",
					children: card.title
				}),
				done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl font-bold",
					children: "Both belong"
				})
			]
		}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"aria-live": "polite",
				children: done ? note : note
			}),
			!done && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
					tone: locked && card.kind === "need" ? "ink" : "card",
					onClick: () => choose("need"),
					disabled: locked,
					children: "Need"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
					tone: locked && card.kind === "want" ? "ink" : "card",
					onClick: () => choose("want"),
					disabled: locked,
					children: "Want"
				})]
			}),
			locked && !done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
				onClick: advance,
				children: i + 1 === SORTS.length ? "See what that means" : "Next thing"
			}),
			done && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Shops, farms, and jobs exist because people need things they don't have yet — and because they wish for things too. That wishing and making is the economy." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
				onClick: onNext,
				children: "Someone has to make it"
			})] })
		]
	});
}
function Make({ onNext }) {
	const [picked, setPicked] = (0, import_react.useState)(0);
	const full = picked >= 4;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Split, {
		title: "Someone has to make it",
		stage: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col items-center pt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setPicked((n) => Math.min(4, n + 1)),
				disabled: full,
				className: "flex flex-col items-center gap-2 rounded-3xl transition-transform duration-150 active:enabled:scale-[0.96]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tree, {
					className: "w-40 md:w-48",
					apples: 2 + picked
				}, picked), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-base font-extrabold",
					children: full ? "Basket full" : "Tap the tree"
				})]
			})
		}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Apples do not walk into town. Somebody plants, waits, and picks. Work is how things enter an economy." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				"aria-live": "polite",
				children: [Array.from({ length: 4 }, (_, n) => n < picked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Apple, { className: "size-12" }, n) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-12 rounded-full border-2 border-dashed border-line" }, n)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "ml-1 font-extrabold",
					children: [picked, " of 4"]
				})]
			}),
			full ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A farmer, a baker, a bus driver — each one makes something other people can use." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
				onClick: onNext,
				children: "Now try to trade"
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
				tone: "gold",
				onClick: () => setPicked((n) => Math.min(4, n + 1)),
				children: "Pick an apple"
			})
		]
	});
}
function Barter({ onNext }) {
	const [phase, setPhase] = (0, import_react.useState)("ask");
	const friend = phase === "ask" || phase === "no" ? "braids" : "cap";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Split, {
		title: "Trading stuff gets stuck",
		stage: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Ground, {
			className: "gap-2 pt-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Apple, { className: "mb-1 size-12" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kid, {
							hair: "curls",
							apron: true,
							className: "w-24"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-extrabold",
							children: "You"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mb-16 font-display text-3xl font-bold",
					children: "?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center",
					children: [
						(phase === "leo" || phase === "done" ? "sandwich" : "kite") === "kite" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kite, { className: "mb-1 w-12" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sandwich, { className: "mb-1 w-14" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kid, {
							hair: friend,
							mood: phase === "no" ? "no" : "smile",
							className: "w-24"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-extrabold",
							children: friend === "braids" ? "Maya" : "Leo"
						})
					]
				})
			]
		}),
		children: [
			phase === "ask" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Maya has the kite you want. You have apples. A trade works only if she wants what you have." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
				onClick: () => setPhase("no"),
				children: "Offer your apples"
			})] }),
			phase === "no" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				"aria-live": "polite",
				children: [
					"Maya says, “No thanks. I don't want apples today.” The trade is stuck. Stuff-for-stuff is called",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "barter" }),
					". It only works when the wants match."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
				onClick: () => setPhase("leo"),
				children: "Ask Leo instead"
			})] }),
			phase === "leo" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"aria-live": "polite",
				children: "Leo will trade a sandwich for your apples. You get lunch. You still do not get the kite."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
				tone: "card",
				onClick: () => setPhase("done"),
				children: "Take the sandwich"
			})] }),
			phase === "done" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "You solved lunch and missed the kite. Barter gets stuck all the time. Towns invented something almost everyone will take." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
				onClick: onNext,
				children: "Show me the something"
			})] })
		]
	});
}
function Coins({ onNext }) {
	const [phase, setPhase] = (0, import_react.useState)("have");
	const coins = phase === "have" ? 0 : phase === "sold" ? 4 : 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Split, {
		title: "A coin everyone will take",
		stage: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-4 pt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-16 items-center gap-2",
				children: [phase === "have" && Array.from({ length: 4 }, (_, n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Apple, { className: "size-14" }, n)), phase !== "have" && Array.from({ length: coins }, (_, n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coin, { className: "size-14" }, n))]
			}), phase === "bought" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kite, { className: "h-20 w-auto" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-extrabold",
					children: "Your kite"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kid, {
				hair: "braids",
				className: "w-24"
			})]
		}),
		children: [
			phase === "have" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"A coin is not food and not a toy. It works because people ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "agree" }),
				" to take it. Sell the apples to the baker. The baker pays coins, not a kite."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
				onClick: () => setPhase("sold"),
				children: "Sell the apples"
			})] }),
			phase === "sold" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"aria-live": "polite",
				children: "Four apples became four coins. Maya still doesn't want apples — but she will take coins."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
				onClick: () => setPhase("bought"),
				children: "Buy the kite for 3 coins"
			})] }),
			phase === "bought" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"aria-live": "polite",
				children: "Two trades, two different people, one coin connecting them. That is the heart of an economy: money lets a trade happen even when stuff doesn't match. One coin is left over."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
				onClick: onNext,
				children: "Why isn't the price always 1?"
			})] })
		]
	});
}
function Prices({ onNext }) {
	const [supply, setSupply] = (0, import_react.useState)(1);
	const [demand, setDemand] = (0, import_react.useState)(1);
	const price = marketPrice(supply, demand);
	const tilt = (demand - supply) * 6;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Split, {
		title: "Why prices move",
		stage: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-2 pt-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-5xl leading-none font-bold",
					children: price
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "-mt-1 text-sm font-extrabold text-muted",
					children: "coins for one apple"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex min-h-12 items-end gap-1",
					children: Array.from({ length: price }, (_, n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coin, { className: "size-10" }, n))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seesaw, {
					supply,
					demand,
					tilt
				})
			]
		}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A price is just how many coins people agree on today. It is not stuck. Tip the market." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LevelPick, {
				legend: "Apples in town",
				value: supply,
				onChange: setSupply
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LevelPick, {
				legend: "Kids who want one",
				value: demand,
				onChange: setDemand
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"aria-live": "polite",
				children: priceStory(supply, demand)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-base text-muted",
				children: [
					"Grown-up words: ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "text-ink",
						children: "supply"
					}),
					" is how much there is.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "text-ink",
						children: "demand"
					}),
					" is how many people want it."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
				onClick: onNext,
				children: "Now or later?"
			})
		]
	});
}
function LevelPick({ legend, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
			className: "text-base font-extrabold",
			children: legend
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-3 gap-2",
			children: LEVELS.map((level) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-pressed": value === level.id,
				onClick: () => onChange(level.id),
				className: cn("min-h-12 rounded-full border-2 border-ink text-base font-extrabold transition-transform duration-150 active:scale-[0.96]", value === level.id ? "bg-ink text-card shadow-print" : "bg-card text-ink"),
				children: level.label
			}, level.id))
		})]
	});
}
function Seesaw({ supply, demand, tilt }) {
	const apples = LEVELS[supply].count;
	const kids = LEVELS[demand].count;
	const hairs = [
		"curls",
		"braids",
		"cap",
		"short",
		"curls",
		"braids"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto h-56 w-full max-w-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 48 28",
			className: "absolute top-44 left-1/2 w-12 -translate-x-1/2",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "0,28 48,28 24,2",
				fill: "var(--color-ink)"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-x-3 top-40 origin-center transition-transform duration-500 ease-out",
			style: { transform: `rotate(${tilt}deg)` },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-4 rounded-full border-2 border-ink bg-gold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-full left-0 mb-1 origin-bottom transition-transform duration-500 ease-out",
					style: { transform: `rotate(${-tilt}deg)` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex w-24 flex-col items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap justify-center gap-0.5",
							children: Array.from({ length: apples }, (_, n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Apple, { className: "size-6" }, n))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-extrabold",
							children: "Apples"
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute right-0 bottom-full mb-1 origin-bottom transition-transform duration-500 ease-out",
					style: { transform: `rotate(${-tilt}deg)` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex w-24 flex-col items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap justify-center gap-0.5",
							children: Array.from({ length: kids }, (_, n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Face, {
								hair: hairs[n],
								className: "size-7"
							}, n))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-extrabold",
							children: "Kids"
						})]
					})
				})]
			})
		})]
	});
}
function Choose({ onNext }) {
	const [coins, setCoins] = (0, import_react.useState)(6);
	const [treats, setTreats] = (0, import_react.useState)(0);
	const [bike, setBike] = (0, import_react.useState)(false);
	const [kept, setKept] = (0, import_react.useState)(false);
	const ready = bike || treats > 0 || kept;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Split, {
		title: "Spend now, or save?",
		stage: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-3 pt-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Piggy, { className: "w-36" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-12 flex-wrap justify-center gap-1",
					children: [Array.from({ length: coins }, (_, n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coin, { className: "size-9" }, n)), coins === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-extrabold",
						children: "Jar empty"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end gap-4",
					children: [treats > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Candy, { className: "w-20" }), bike && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bicycle, { className: "w-28" })]
				})
			]
		}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"Candy costs 2 coins. The bicycle costs 6. You have ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: coins }),
				" in the jar",
				treats > 0 ? ` and ${treats} ${treats === 1 ? "candy" : "candies"} already eaten` : "",
				"."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
						tone: "gold",
						disabled: coins < 2 || bike,
						onClick: () => {
							setCoins((c) => c - 2);
							setTreats((n) => n + 1);
							setKept(false);
						},
						children: "Buy candy for 2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
						disabled: coins < 6 || bike,
						onClick: () => {
							setCoins(0);
							setBike(true);
							setKept(false);
						},
						children: bike ? "The bicycle is yours" : "Save up and buy the bicycle"
					}),
					!bike && coins > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
						tone: "card",
						onClick: () => setKept(true),
						children: "Leave the coins in the jar"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				"aria-live": "polite",
				children: [
					bike && "You used the coins on one big want. Saving is waiting on purpose so a bigger thing can happen. Towns do this too — for a park, a library, a bridge.",
					!bike && treats > 0 && !kept && "Spending uses coins now. The candy is gone in a minute. Saving means keeping some for later.",
					!bike && kept && "The jar is waiting. That is saving: choosing later on purpose, not because you forgot.",
					!bike && treats === 0 && !kept && "Candy is now. The bicycle is later. Both are real choices."
				]
			}),
			ready && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
				onClick: onNext,
				children: "Open your own stand"
			})
		]
	});
}
function Stand({ onRestart }) {
	const [mood, setMood] = (0, import_react.useState)("tuesday");
	const [price, setPrice] = (0, import_react.useState)(3);
	const [apples, setApples] = (0, import_react.useState)(4);
	const [coins, setCoins] = (0, import_react.useState)(0);
	const [n, setN] = (0, import_react.useState)(0);
	const [customer, setCustomer] = (0, import_react.useState)(null);
	const [line, setLine] = (0, import_react.useState)("The square is quiet. Call someone over.");
	const [rejected, setRejected] = (0, import_react.useState)(false);
	const [shelf, setShelf] = (0, import_react.useState)([]);
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
			setLine(`${customer.name} only has ${customer.pays} ${customer.pays === 1 ? "coin" : "coins"}. Your price is ${price}, so they walk on.`);
			setCustomer(null);
			return;
		}
		setApples((a) => a - 1);
		setCoins((c) => c + price);
		setLine(`${customer.name} would pay up to ${customer.pays}. Your price is ${price}, so you get a sale.`);
		setCustomer(null);
	}
	function buy(id) {
		const item = SHOP.find((s) => s.id === id);
		if (!item || coins < item.cost) return;
		if (item.once && shelf.includes(item.name)) return;
		setCoins((c) => c - item.cost);
		setShelf((list) => [...list, item.name]);
		setLine(item.once ? `You spent ${item.cost} on a ${item.name.toLowerCase()}. Spending turns coins into something you keep.` : `You spent ${item.cost} on ${item.name.toLowerCase()}. A need or a small want — coins leave the jar.`);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Split, {
		title: "You run the stand",
		stage: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Ground, {
			className: "pt-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-1 flex gap-0.5",
							children: Array.from({ length: Math.min(apples, 4) }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Apple, { className: "size-7" }, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stall, { className: "w-28" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm font-extrabold",
							children: [apples, " apples"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center",
					children: [customer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kid, {
						hair: customer.hair,
						className: "w-24"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kid, {
						hair: "short",
						mood: "smile",
						className: "w-24 opacity-40"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-extrabold",
						children: customer ? customer.name : "Waiting"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 flex flex-col items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coin, { className: "size-12" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl font-bold",
						children: coins
					})]
				})
			]
		}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "You choose the price. Each kid decides if they can pay it. A whole city is millions of little choices like this." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
				className: "mb-2 text-base font-extrabold",
				children: "What kind of day?"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2",
				children: MOODS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-pressed": mood === m.id,
					onClick: () => {
						setMood(m.id);
						setCustomer(null);
						setLine(m.hint);
					},
					className: cn("min-h-12 rounded-2xl border-2 border-ink px-4 py-2 text-left transition-transform duration-150 active:scale-[0.96]", mood === m.id ? "bg-ink text-card shadow-print" : "bg-card text-ink"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-extrabold",
						children: m.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("block text-sm", mood === m.id ? "text-gold-soft" : "text-muted"),
						children: m.hint
					})]
				}, m.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3 rounded-2xl border-2 border-ink bg-card px-3 py-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Lower the price",
						onClick: () => setPrice((p) => Math.max(1, p - 1)),
						disabled: price <= 1,
						className: "inline-flex size-12 items-center justify-center rounded-full border-2 border-ink bg-paper active:enabled:scale-[0.96] disabled:opacity-40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
							className: "size-5",
							"aria-hidden": "true"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-center font-extrabold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-3xl leading-none",
							children: price
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-sm text-muted",
							children: "coin price"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Raise the price",
						onClick: () => setPrice((p) => Math.min(5, p + 1)),
						disabled: price >= 5,
						className: "inline-flex size-12 items-center justify-center rounded-full border-2 border-ink bg-paper active:enabled:scale-[0.96] disabled:opacity-40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							className: "size-5",
							"aria-hidden": "true"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"aria-live": "polite",
				children: line
			}),
			rejected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-base text-muted",
				children: "If kids keep walking away, try a lower price — or a busier day."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
					tone: "card",
					onClick: call,
					children: customer ? "Someone else" : "Call a customer"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Press, {
					onClick: sell,
					disabled: !customer,
					children: ["Sell for ", price]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Press, {
				tone: "gold",
				onClick: () => {
					setApples((a) => Math.min(8, a + 1));
					setLine("You picked another apple. Making comes before selling.");
				},
				disabled: apples >= 8,
				children: [
					"Pick another apple (",
					apples,
					"/8)"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-2 font-display text-2xl font-bold",
				children: "The shops"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2",
				children: SHOP.map((item) => {
					const owned = item.once && shelf.includes(item.name);
					const broke = coins < item.cost;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						disabled: owned || broke,
						onClick: () => buy(item.id),
						className: "flex min-h-24 flex-col items-start gap-1 rounded-2xl border-2 border-ink bg-card p-3 text-left active:enabled:scale-[0.96] disabled:opacity-45",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.Glyph, { className: "h-10 w-auto" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-extrabold",
								children: item.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted",
								children: owned ? "Yours" : `${item.cost} coins · ${item.note}`
							})
						]
					}, item.id);
				})
			})] }),
			shelf.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-base",
				children: ["You bought: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: shelf.join(", ") })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border-2 border-ink bg-terra-soft p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-extrabold",
					children: "Say it back"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-base",
					children: "An economy is people making things and trading them. Coins connect the trades. Prices rise when many people want something scarce, and fall when there is plenty. You choose what to spend now and what to save."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onRestart,
				className: "inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-full px-2 text-base font-extrabold text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
					className: "size-4",
					"aria-hidden": "true"
				}), "Play the story again"]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoinTown, {});
}
//#endregion
export { Home as component };
