const TOLERANCE = 0.75;
const BUDGET_PER_SERVING = 4.0;

// Items without a price are skipped and reported in `missing`,
// so the tool never pretends it knows a price it does not have.
function costPerServing(items, servings) {
  const priced = items.filter((item) => typeof item.price === "number");
  const missing = items
    .filter((item) => typeof item.price !== "number")
    .map((item) => item.name);
  const total = priced.reduce((sum, item) => sum + item.price, 0);
  return { perServing: total / servings, missing };
}

function checkEstimate(learnerPerServing, items, servings) {
  const { perServing: actual, missing } = costPerServing(items, servings);
  const diff = learnerPerServing - actual;
  return {
    actual,
    diff,
    missing,
    withinTolerance: Math.abs(diff) <= TOLERANCE,
    underBudget: actual <= BUDGET_PER_SERVING,
  };
}

module.exports = { costPerServing, checkEstimate };
