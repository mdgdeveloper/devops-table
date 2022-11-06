const TYPES = {
  source: "Source Control Management",
  release: "Release Orchestration",
  aiops: "AIOps",
  containers: "Containers",
  cloud: "Cloud",
  database: "Database Automation",
  ci: "Continuous Integration",
  testing: "Testing",
  configuration: "Configuration",
  deployment: "Deployment",
  analytics: "Analytics",
  monitoring: "Monitoring",
  security: "Security",
  collaboration: "Collaboration",
};

export const getType = (type) => {
  return TYPES[type];
};

export default { getType };
