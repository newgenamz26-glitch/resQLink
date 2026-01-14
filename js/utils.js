window.f = id => document.getElementById(id)?.value || "";

window.showToast = msg => {
  const el = document.createElement('div');
  el.className = 'bg-slate-900 text-white px-4 py-2 rounded mb-2';
  el.innerText = msg;
  document.getElementById('toast-container').appendChild(el);
  setTimeout(()=>el.remove(),3000);
};

window.generateCaseId = (datetime, checkpoint) => {
  const d = new Date(datetime);
  const yy = String(d.getFullYear()).slice(-2);
  const mm = String(d.getMonth()+1).padStart(2,'0');
  const dd = String(d.getDate()).padStart(2,'0');
  const datePart = `${yy}${mm}${dd}`;

  const cp = checkpoint.toUpperCase();

  const count = allCases.filter(c =>
    c.program.checkpoint === cp &&
    c.program.datetime.slice(0,10) === datetime.slice(0,10)
  ).length + 1;

  return `${datePart}-${cp}-${String(count).padStart(3,'0')}`;
};
