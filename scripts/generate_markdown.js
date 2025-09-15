import fs from "fs";
import Papa from "papaparse";

import { markdownTable } from "markdown-table";

const filePath = "./data/catalist.csv";

const csvdata = await fs.readFileSync(filePath, "utf8");

const parsedData = Papa.parse(csvdata, {
  header: true,
  skipEmptyLines: true,
});

parsedData.data.sort((a, b) => {
  const providerA = (a["Provider"] || "").toLowerCase();
  const providerB = (b["Provider"] || "").toLowerCase();
  return providerA.localeCompare(providerB);
});

// get combined list of all unique categories and secondary categories (the same list)
const categories = new Set();
for (const row of parsedData.data) {
  if (row["Category"] && row["Category"] !== "") {
    row.category = row["Category"].trim();
    categories.add(row.category);
  }
}

// Order the set alphabetically
const orderedCategories = Array.from(categories).sort((a, b) =>
  a.localeCompare(b)
);

// for each category get all the rows that belong to it
for (const category of orderedCategories) {
  const rows = parsedData.data.filter(
    (row) =>
      row["Category"] === category || row["Secondary Category"] === category
  );

  const markdownheader = `---
title: ${category}
has_children: false
parent: Catalist
nav_order: ${orderedCategories.indexOf(category) + 1}
---

# ${category}

`;

  // Generate the markdown table
  const table = markdownTable([
    ["Name", "Provider", "Licensing", "Data link 1", "Data link 2", "Docs link"],
    ...rows.map((row) => [
      `[${row["Dataset Name"]}](#${row["Dataset Name"]
        .replace(/ /g, "-")
        .toLowerCase()})`,
      row["Provider"],
      row["Licensing"],
      `[Data link 1](${row["Data Link 1"].trim()})`,
      row["Data Link 2"] && row["Data Link 2"].trim()
        ? `[Data link 2](${row["Data Link 2"].trim()})`
        : "",
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
- **Provider:** ${row["Provider"]}
- **Licensing:** ${row["Licensing"]}
- **Data link 1:** [Data link 1](${row["Data Link 1"].trim()})
- **Data link 2:** ${row["Data Link 2"] && row["Data Link 2"].trim()
  ? `[Data link 2](${row["Data Link 2"].trim()})`
  : ""}
- **Docs link:** ${row["Docs Link"] && row["Docs Link"].trim()
  ? `[Docs link](${row["Docs Link"].trim()})`
  : ""}
`;
    })
    .join("\n");

  const markdown = `${markdownheader}${table}${markdowndescriptionsections}`;
  // write the markdown file
  fs.writeFileSync(`./markdown/${category}.md`, markdown);
}
