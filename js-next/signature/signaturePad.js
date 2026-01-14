let sigCanvas, sigCtx, drawing = false;

window.initSignaturePad = () => {
  sigCanvas = document.getElementById('signature-pad');
  sigCtx = sigCanvas.getContext('2d');
  sigCtx.lineWidth = 2;
  sigCtx.lineCap = 'round';

  sigCanvas.onmousedown = () => drawing = true;
  sigCanvas.onmouseup = () => drawing = false;
  sigCanvas.onmouseleave = () => drawing = false;

  sigCanvas.onmousemove = e => {
    if (!drawing) return;
    sigCtx.lineTo(e.offsetX, e.offsetY);
    sigCtx.stroke();
    sigCtx.beginPath();
    sigCtx.moveTo(e.offsetX, e.offsetY);
  };
};

window.clearSignature = () => {
  sigCtx.clearRect(0, 0, sigCanvas.width, sigCanvas.height);
};

window.saveSignature = () => {
  const img = sigCanvas.toDataURL("image/png");

  // simpan ke kes semasa
  const lastCase = allCases[0];
  lastCase.signature = img;

  saveAll();
  showToast("Tandatangan disimpan");
};
