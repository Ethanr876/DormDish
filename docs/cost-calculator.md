# Cost Calculator (Step 3)

**Owner:** [Name 2]

**What the learner does:** Enters a price for each ingredient in their meal
and sees a running total against the $4 per serving budget.

**How the tool checks it:** Compares the learner's total to the stored
price table (`data/prices.csv`). Pass if within $0.75 of the real total.
If not, show which items were off.

**Where the prices come from:** Rows with `source` filled in use the U.S.
Bureau of Labor Statistics Northeast region average retail prices (Aug 2026).
These are regional averages, not Henrietta shelf prices. Rows with a blank
`price` still need a real price entered by a teammate from the Wegmans, Aldi,
or Tops store in Henrietta. The `note` column holds rough reference prices
from news articles; they are not verified data.

**Open questions:** How do we handle items with no price yet? Do we add a
`date` for each teammate-entered price? How do we handle ingredients not in
the table?
