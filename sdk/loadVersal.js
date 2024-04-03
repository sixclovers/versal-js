export async function loadVersal() {
  await loadScript("https://sandbox.versal.money/sdk/client.js");

  return window.Versal;
}

function loadScript(url) {
  if (typeof url !== "string" || url.length === 0) {
    throw new Error("Invalid url.");
  }

  return new Promise((resolve, reject) => {
    insertScriptElement(url, () => resolve(), () => {
      const defaultError = new Error(
          `The script "${url}" failed to load.`
      );

      return reject(defaultError);
  },)
  })
}

function insertScriptElement(url, onSuccess, onError) {
  const scriptElement = document.createElement("script");
  scriptElement.src = url;
  scriptElement.onerror = onError;
  scriptElement.onload = onSuccess;

  document.head.appendChild(scriptElement);
}