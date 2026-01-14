window.getCaseStats = () => {
  return {
    byCheckpoint: allCases.reduce((a,c)=>{
      a[c.program.checkpoint]=(a[c.program.checkpoint]||0)+1;
      return a;
    },{}),

    byStatus: allCases.reduce((a,c)=>{
      a[c.finalStatus]=(a[c.finalStatus]||0)+1;
      return a;
    },{})
  };
};
