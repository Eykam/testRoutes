/**
 * Make sure nextjs site is running locally on port 3000.
 * Find a way to parse all urls from the csv file and store them in urls array.
 * **/

const urls = [""];

const BASE_URL = "http://localhost:3000";

(async () => {
  const statuses = {};
  await Promise.all(
    urls.map(async (url) => {
      try {
        const status = (await fetch(BASE_URL + url)).status;
        if (statuses[status]) {
          statuses[status] = [...statuses[status], url];
        } else {
          statuses[status] = [url];
        }
      } catch (e) {
        console.log(`Error ${url}\n ${e}:`);
        if (statuses["error"]) {
          statuses["error"] = [...statuses["error"], url];
        } else {
          statuses["error"] = [url];
        }
      }
    })
  );

  // console.log("statuses:\n", statuses);
  const working = Object.keys(statuses).filter((status) => status !== "404");
  console.log("working:\n", working);
  // console.log("notFound:\n", statuses["404"]);
  console.log("errors:\n", statuses["error"]);
  //   console.log("redirected:\n", redirected);
})();
