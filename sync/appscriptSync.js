/**
 * URL Google App Script Web App
 * (DEPLOY → Web App → Anyone)
 */
const APPSCRIPT_URL =
  "https://script.google.com/macros/s/XXXXXX/exec";

/**
 * Hantar satu kes ke server
 */
window.syncCaseToServer = async (caseId) => {
  const c = allCases.find(x => x.id === caseId);
  if (!c) return;

  await fetch(APPSCRIPT_URL, {
    method: 'POST',
    body: JSON.stringify({
      action: 'SAVE_CASE',
      payload: c
    })
  });

  showToast("Kes dihantar ke MECC Server");
};
