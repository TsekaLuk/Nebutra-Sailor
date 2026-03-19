import { source } from "./src/lib/source";

async function main() {
  const page = source.getPage(["index"]);
  console.log(JSON.stringify(page, null, 2));
}

main();
