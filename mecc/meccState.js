window.meccFilter = {
  dateFrom: null,
  dateTo: null,
  checkpoint: null,
  status: null
};

window.getFilteredCases = () => {
  return allCases.filter(c => {
    if (meccFilter.checkpoint && c.program.checkpoint !== meccFilter.checkpoint)
      return false;
    if (meccFilter.status && c.finalStatus !== meccFilter.status)
      return false;
    return true;
  });
};
