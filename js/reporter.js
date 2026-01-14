window.saveCase = () => {
  const datetime = f('f-datetime');
  const checkpoint = f('f-checkpoint');

  if (!datetime || !checkpoint) {
    showToast("Tarikh & checkpoint wajib");
    return;
  }

  const id = generateCaseId(datetime, checkpoint);

  const data = {
    id,
    program: {
      responderName: f('f-responder-name'),
      programName: f('f-program'),
      checkpoint,
      datetime
    },
    patient: {
      name: f('f-patient-name'),
      age: f('f-patient-age'),
      gender: f('f-patient-gender')
    },
    medical: {
      mainComplaint: f('f-main-complaint')
    },
    vitals: {
      bp: f('f-bp'),
      pr: f('f-pr'),
      spo2: f('f-spo2'),
      rr: f('f-rr')
    },
    treatment: {
      caregiver: f('f-caregiver'),
      note: f('f-treatment')
    },
    finalStatus: f('f-status')
  };

  allCases.unshift(data);
  saveAll();
  showToast(`Kes disimpan: ${id}`);
};

window.shareCaseWhatsApp = () => {
  const msg = `
🆘 LAPORAN KES AMAL MEDIK
ID: ${generateCaseId(f('f-datetime'), f('f-checkpoint'))}
Pesakit: ${f('f-patient-name')}
Aduan: ${f('f-main-complaint')}
Status: ${f('f-status')}
`.trim();

  window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`);
};
