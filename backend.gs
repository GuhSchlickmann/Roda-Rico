/**
 * BACKEND PARA LANDING PAGE ALLES PARK (VERSÃO ORGANIZADA)
 * 
 * Este script:
 * 1. Organiza a planilha com cabeçalhos automáticos
 * 2. Salva o texto e as fotos (Google Drive)
 */

const FOLDER_ID = ''; // Deixe vazio para salvar na raiz do seu Drive

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getActiveSheet();
    
    // 1. Inicializar Cabeçalhos se a planilha estiver vazia
    if (sheet.getLastRow() === 0) {
      const headers = [
        "Data/Hora", 
        "Nota", 
        "Comentário", 
        "Quando Visitou", 
        "Tempo de Espera", 
        "Recomenda?", 
        "Cliente", 
        "E-mail", 
        "Fotos/Vídeos (Links)", 
        "Dispositivo"
      ];
      sheet.appendRow(headers);
      
      // Formatação Básica do Cabeçalho
      const range = sheet.getRange(1, 1, 1, headers.length);
      range.setFontWeight("bold")
           .setBackground("#2c3e50")
           .setFontColor("#ffffff")
           .setHorizontalAlignment("center");
      
      sheet.setFrozenRows(1); // Congelar primeira linha
    }
    
    // 2. Processar fotos se houver
    let photoUrls = [];
    if (data.photos && data.photos.length > 0) {
      data.photos.forEach((photo, index) => {
        let folder;
        try {
          if (FOLDER_ID && FOLDER_ID.length > 15) {
            folder = DriveApp.getFolderById(FOLDER_ID);
          } else {
            folder = DriveApp.getRootFolder();
          }
        } catch (fError) {
          folder = DriveApp.getRootFolder();
        }

        const contentType = photo.type;
        const decode64 = Utilities.base64Decode(photo.base64);
        const fileName = `feedback_${data.userName}_${index}_${Date.now()}`;
        const blob = Utilities.newBlob(decode64, contentType, fileName);
        const file = folder.createFile(blob);
        photoUrls.push(file.getUrl());
      });
    }

    // 3. Salvar na Planilha
    sheet.appendRow([
      new Date(), // Timestamp
      data.rating,
      data.feedback,
      data.visitTime,
      data.waitTime,
      data.recommendAdvance,
      data.userName,
      data.userEmail,
      photoUrls.join(', '),
      data.userAgent
    ]);
    
    // Ajustar largura automática das colunas
    sheet.autoResizeColumns(1, 10);

    return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    console.error('Erro no processamento:', error);
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
