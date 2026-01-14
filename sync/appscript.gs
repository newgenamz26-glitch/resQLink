function doPost(e) {
  const data = JSON.parse(e.postData.contents);

  if (data.action === "SAVE_CASE") {
    const sheet = SpreadsheetApp.openById("SHEET_ID")
      .getSheetByName("Cases");

    sheet.appendRow([
      data.payload.id,
      data.payload.program.checkpoint,
      data.payload.patient.name,
      data.payload.finalStatus,
      new Date()
    ]);
  }

  return ContentService.createTextOutput("OK");
}
