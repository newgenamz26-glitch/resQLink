/**
 * Generate PDF laporan penuh untuk satu kes
 * @param {String} caseId
 */
window.generateCasePDF = (caseId) => {
  const c = allCases.find(x => x.id === caseId);
  if (!c) return alert("Kes tidak dijumpai");

  const html = `
  <div style="font-family:Arial; padding:20px">
    <h2>LAPORAN KES RESPONDER</h2>
    <hr>

    <h3>ID KES: ${c.id}</h3>
    <p><b>Tarikh:</b> ${c.program.datetime}</p>
    <p><b>Checkpoint:</b> ${c.program.checkpoint}</p>

    <h4>RESPONDER</h4>
    <p>${c.program.responderName}</p>

    <h4>PESAKIT</h4>
    <p>Nama: ${c.patient.name}</p>
    <p>Umur: ${c.patient.age}</p>
    <p>Jantina: ${c.patient.gender}</p>

    <h4>PERUBATAN</h4>
    <p>Aduan: ${c.medical.mainComplaint}</p>
    <p>Vital: BP ${c.vitals.bp}, PR ${c.vitals.pr}</p>

    <h4>RAWATAN</h4>
    <p>${c.treatment.note}</p>

    <h3>Status Akhir: ${c.finalStatus}</h3>
  </div>
  `;

  html2pdf()
    .set({
      filename: `${c.id}.pdf`,
      margin: 10,
      jsPDF: { format: 'a4' }
    })
    .from(html)
    .save();
};
<!--calling code 
  generateCasePDF(caseId);
${c.signature ? `
  <img src="${c.signature}" style="width:200px;margin-top:20px">
` : ''}

-->
