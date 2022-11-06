// Get Color function

const COLOR = {
  aiops: "#BB5709",
  ci: "#47B9FF",
  cloud: "#E9BD20",
  configuration: "#005D91",
  containers: "#3D4652",
  database: "#F47B20",
  deployment: "#08C860",
  release: "#06803A",
  source: "#7D175F",
  testing: "#DD5231",
  analytics: "#008887",
  monitoring: "#6A798F",
  security: "#008DDF",
  collaboration: "#AB207D",
};

const COLORBG = {
  aiops: "#BB5709DD",
  ci: "#47B9FFEE",
  cloud: "#E9BD20",
  configuration: "#005D91",
  containers: "#3D4652",
  database: "#F47B20",
  deployment: "#08C860",
  release: "#06803A",
  source: "#a1588c",
  testing: "#DD5231",
};

export const getColor = (type) => {
  return COLOR[type];
};

export const getColorBg = (type) => {
  return COLORBG[type];
};
