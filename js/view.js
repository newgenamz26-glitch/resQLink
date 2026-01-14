window.viewCaseDetail = id => {
  const c = allCases.find(x => x.id === id);
  if (!c) return;

  document.getElementById('detail-title').innerText = `ID KES: ${c.id}`;

  document.getElementById('detail-body').innerHTML = `
    <p><b>Responder:</b> ${c.program.responderName}</p>
    <p><b>Program:</b> ${c.program.programName}</p>
    <p><b>Pesakit:</b> ${c.patient.name}</p>
    <p><b>Aduan:</b> ${c.medical.mainComplaint}</p>
    <p><b>BP:</b> ${c.vitals.bp}</p>
    <p><b>Status:</b> ${c.finalStatus}</p>
  `;

  document.getElementById('detail-modal').classList.add('show');
};

window.closeDetail = () => {
  document.getElementById('detail-modal').classList.remove('show');
};
<!--
if (currentView === 'reporter') {
  setTimeout(initSignaturePad, 300);
}
-->
