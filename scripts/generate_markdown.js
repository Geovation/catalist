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

function formatLinks(input) {
    // Trim whitespace from the input string
    const trimmedInput = input.trim();
    
    // Split the string into an array at spaces
    const elements = trimmedInput.split(/\s+/);
    
    // Handle different cases based on the number of elements
    if (elements.length === 1) {
        return `[Data link](${elements[0]})`;
    } else if (elements.length === 2) {
        return `[Data link 1](${elements[0]}), [Data link 2](${elements[1]})`;
    } else {
        return 'Invalid input: More than two elements are not supported.';
    }
};

  // Generate the markdown table
  const table = markdownTable([
    ["Name", "Licensing", "Data link", "Docs link"],
    ...rows.map((row) => [
      // From the dataset name link to a subheader later down the page
      `[${row["Dataset Name"]}](#${row["Dataset Name"]
        .replace(/ /g, "-")
        .toLowerCase()})`,
      row["Licensing"],
      formatLinks(row["Data Link"]),
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
- **Data link:** ${formatLinks(row["Data Link"])}
- **Docs link:** [Docs link](${row["Docs Link"].trim()})
`;
    })
    .join("\n");

  const markdown = `${markdownheader}${table}${markdowndescriptionsections}`;
  // write the markdown file
  fs.writeFileSync(`./markdown/${category}.md`, markdown);
}
