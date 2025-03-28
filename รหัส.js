function doGet() {
    return HtmlService.createTemplateFromFile('index').evaluate();
  }
  
  function processForm(formObject){  
    var result = "";
    if(formObject.searchtext){
        result = search(formObject.searchtext);
    }
    return result;
  }
  
  function search(searchtext){
    var spreadsheetId = '1_znGLRZ5JJqOQ7Iy1WpIuEvvRzBY9jPrUMa3FcFrJYA';
    var dataRage  = '61!A3:V';
    var data = Sheets.Spreadsheets.Values.get(spreadsheetId, dataRage).values;
    var ar = [];
    
    data.forEach(function(f) {
      if (~f.indexOf(searchtext)) {
        ar.push(f);
      }
    });
    return ar;
  }