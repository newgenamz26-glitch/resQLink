window.renderMECCDashboard = () => {
  const cases = getFilteredCases();

  const total = cases.length;
  const selesai = cases.filter(c => c.finalStatus.includes('Selesai')).length;
  const rujuk = cases.filter(c => c.finalStatus.includes('Hospital')).length;

  document.getElementById('mecc-root').innerHTML = `
    <div class="grid grid-cols-3 gap-4">
      <div class="card">Jumlah Kes<br><b>${total}</b></div>
      <div class="card">Selesai<br><b>${selesai}</b></div>
      <div class="card">Rujuk Hospital<br><b>${rujuk}</b></div>
    </div>

    <table class="mt-6 w-full text-sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>CP</th>
          <th>Pesakit</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${cases.map(c => `
          <tr>
            <td>${c.id}</td>
            <td>${c.program.checkpoint}</td>
            <td>${c.patient.name}</td>
            <td>${c.finalStatus}</td>
            <td>
              <button onclick="viewCaseDetail('${c.id}')">View</button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
};
