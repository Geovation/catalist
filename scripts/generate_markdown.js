import fs from "fs";
import Papa from "papaparse";

import { markdownTable } from "markdown-table";

const filePath = "./data/catalist.csv";

const csvdata = await fs.readFileSync(filePath, "utf8");

const parsedData = Papa.parse(csvdata, {
  header: true,
  skipEmptyLines: true,
});

// get combined list of all unique categories and secondary categories (the same list)
const categories = new Set();
for (const row of parsedData.data) {
  if (row["Category"] && row["Category"] !== "") {
    row.category = row["Category"].trim();
    categories.add(row.category);
  }
}

// for each category get all the rows that belong to it
for (const category of categories) {
  const rows = parsedData.data.filter(
    (row) =>
      row["Category"] === category || row["Secondary Category"] === category
  );

  const markdownheader = `---
title: ${category}
has_children: false
parent: Catalist
nav_order: 1
---

# ${category}

`;

  // Generate the markdown table
  const table = markdownTable([
    ["Name", "Licensing", "Data link", "Docs link"],
    ...rows.map((row) => [
      // From the dataset name link to a subheader later down the page
      `[${row["Dataset Name"]}](#${row["Dataset Name"]
        .replace(/ /g, "-")
        .toLowerCase()})`,
      row["Licensing"],
      `[Data link](${row["Data Link"].trim()})`,
      `[Docs link](${row["Docs Link"].trim()})`,
    ]),
  ]);

  const markdowndescriptionsections = rows
    .map((row) => {
      return `

## ${row["Dataset Name"]}

${row["Description"]}

- **Category:** ${row["Category"]}
- **Secondary Category:** ${row["Secondary Category"]}
- **Licensing:** ${row["Licensing"]}
- **Data link:** [Data link](${row["Data Link"].trim()})
- **Docs link:** [Docs link](${row["Docs Link"].trim()})
`;
    })
    .join("\n");

  const markdown = `${markdownheader}${table}${markdowndescriptionsections}`;
  // write the markdown file
  fs.writeFileSync(`./data/${category}.md`, markdown);
}
