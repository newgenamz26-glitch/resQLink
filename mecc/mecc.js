 
<!-- MECC MODULE 
// code to add in index  
-->
<script src="/resQ_amal/js-next/mecc/meccState.js"></script>
<script src="/resQ_amal/js-next/mecc/meccDashboard.js"></script>
<script src="/resQ_amal/js-next/mecc/meccCharts.js"></script>
  <!-- template MECC  
// code to add in index  
-->
<script type="text/html" id="tpl-mecc">
  <div class="max-w-6xl mx-auto p-6 space-y-6">
    <h2 class="text-2xl font-black uppercase">MECC Dashboard</h2>

    <!-- FILTER -->
    <div class="flex gap-3">
      <input id="mecc-filter-cp" placeholder="Checkpoint (CP01)" class="p-3 rounded-xl bg-slate-100">
      <select id="mecc-filter-status" class="p-3 rounded-xl bg-slate-100">
        <option value="">Semua Status</option>
        <option>Selesai di Lokasi</option>
        <option>Dirujuk Hospital</option>
      </select>
      <button onclick="applyMECCFilter()" class="bg-blue-600 text-white px-6 rounded-xl">
        Tapis
      </button>
    </div>
    <!-- DASHBOARD -->
    <div id="mecc-root"></div>
  </div>
</script>
<script>
  <!-- meccState.js ->
      window.applyMECCFilter = () => {
        meccFilter.checkpoint =
          document.getElementById('mecc-filter-cp').value || null;

          meccFilter.status =
        document.getElementById('mecc-filter-status').value || null;

  renderMECCDashboard();
};

  <!-- views.js ->
     if (currentView === 'mecc') {
  renderMECCDashboard();
}
  </script>
<!-- index.html – DALAM DETAIL MODAL / FORM 
        <div class="mt-6">
              <p class="font-bold text-sm mb-2">Tandatangan Responder</p>
                <canvas id="signature-pad"
                  width="300"
                  height="150"
                  class="border rounded-xl bg-white"></canvas>
        <div class="flex gap-3 mt-3">
              <button onclick="clearSignature()" class="px-4 py-2 bg-slate-200 rounded-lg">
                  Padam
                  </button>
                <button onclick="saveSignature()" class="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Simpan Tandatangan
          </button>
        </div>
      </div>
->
    
