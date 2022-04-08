//  client.js

import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "7va0t483",
  dataset: "production",
  apiVersion: "2022-04-07",
  useCdn: true,
});
