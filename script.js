const passkeyBtn = document.getElementById("passkey");
if (passkeyBtn) {
  passkeyBtn.addEventListener("click", async (e) => {
    e.preventDefault();
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
}

/* import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
}) */


const qrContainer = document.getElementById("qrcode");
if (qrContainer) {
  new QRCode(qrContainer, {
    text: "https://www.example.com",
    width: 160,
    height: 160,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}