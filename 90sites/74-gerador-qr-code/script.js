let qr;
(function () {
  qr = new QRious({
    element: document.querySelector("#qrCode"),
    size: 400,
    value: "Lucas Robert",
  });
})();

const generateQRCode = () => {
  const qrText = document.querySelector("#qrText").value;
  qr.set({
    value: qrText,
  });
};