import { loadScript } from "@paypal/paypal-js";

async function loadVersal(clientId) {
  let versal;
  try {
    versal = await loadScript({ clientId: clientId, sdkBaseUrl: "http://localhost:4100/sdk/client.js", dataNamespace: "Versal" });
  } catch (error) {
    console.error("failed to load the Versal JS SDK script", error);
  }

  return versal;
}

module.exports = loadVersal;