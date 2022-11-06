const DATA = {
  os: "Open Source",
  fr: "Free",
  fm: "Freemium",
  pd: "Paid",
  en: "Enterprise",
};

export const getLicense = (license) => {
  return DATA[license];
};

export default { getLicense };
