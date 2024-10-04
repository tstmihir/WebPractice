document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  // console.log(text);
  const rows = text.split("\n");

  for (const [i, row] of rows.entries()) {
    console.log(i, row);
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});
