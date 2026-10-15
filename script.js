document.getElementById("passkey").addEventListener("click", async () => {
  try {
    await navigator.credentials.get({
      publicKey: {
        challenge: crypto.getRandomValues(new Uint8Array(32)),
        rpId: location.hostname,
        allowCredentials: [],
        userVerification: "preferred",
        timeout: 60000
      }
    });
  } catch (error) {
    // Dismissal, cancellation, or failure is expected
    console.log("Passkey dialog closed:", error.name);
  }
});