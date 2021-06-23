import {
  icoApp,
  icoWeb,
  icoCMS,
  icoUIUX,
  imgWTS,
  imgRTT,
  imgPAO,
  imgYM,
  imgTAP,
  imgFURAMA,
  imgHBO,
  imgFWD,
  imgKIWI,
} from "./images";

const workCategories = {
  all: "All",
  food: "Food & Beverage",
  media: "Media",
  transport: "Transport & Logistics",
  banking: "Banking & Finance",
  lifestyle: "Lifestyle",
  incube: "Co-incubation",
  health: "Healthcare",
  retail: "Retail & Entertainment",
  telco: "Telco",
  others: "Others",
  startup: "Start-ups",
};

const workLegends = [
  {
    name: "App",
    img: icoApp,
  },
  {
    name: "Web",
    img: icoWeb,
  },
  {
    name: "CMS",
    img: icoCMS,
  },
  {
    name: "UIUX",
    img: icoUIUX,
  },
];

const workFilters = [
  {
    name: "KIWI Auto Marketplace",
    category: "Others, Start-ups",
    ctgIds: ["others", "startup"],
    platforms: [icoApp, icoWeb, icoCMS, icoUIUX],
    img: imgKIWI,
    url: "/work-detail",
    isShow: true,
  },
  {
    name: "Woodlands Transport",
    category: "Transport & Logistics",
    ctgIds: ["transport"],
    platforms: [icoApp, icoWeb, icoCMS, icoUIUX],
    img: imgWTS,
    isShow: true,
  },
  {
    name: "HBO Go",
    category: "Retail & Entertainment",
    ctgIds: ["retail"],
    platforms: [icoApp, icoWeb, icoCMS, icoUIUX],
    img: imgHBO,
    isShow: true,
  },
  {
    name: "Ready to Travel (SATS)",
    category: "Lifestyle, Retail & Entertainment, Start-ups",
    ctgIds: ["lifestyle", "retail", "startup"],
    platforms: [icoApp, icoWeb, icoCMS, icoUIUX],
    img: imgRTT,
    isShow: true,
  },
  {
    name: "OCBC Pay Anyone",
    category: "Transport & Logistics",
    ctgIds: ["transport"],
    platforms: [icoApp, icoCMS],
    img: imgPAO,
    isShow: true,
  },
  {
    name: "Yoga Movement",
    category: "Lifestyle",
    ctgIds: ["lifestyle"],
    platforms: [icoApp, icoWeb, icoCMS, icoUIUX],
    img: imgYM,
    isShow: true,
  },
  {
    name: "TAP Ride Hailing",
    category: "Transport & Logistics",
    ctgIds: ["transport"],
    platforms: [icoApp],
    img: imgTAP,
    isShow: true,
  },
  {
    name: "Furama Hotels",
    category: "Lifestyle",
    ctgIds: ["lifestyle"],
    platforms: [icoApp, icoCMS],
    img: imgFURAMA,
    isShow: true,
  },
  {
    name: "FWD Insurance",
    category: "Lifestyle",
    ctgIds: ["lifestyle"],
    platforms: [icoApp, icoCMS, icoUIUX],
    img: imgFWD,
    isShow: true,
  },
];

export { workCategories, workLegends, workFilters };
