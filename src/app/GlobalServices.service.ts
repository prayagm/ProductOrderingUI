import { Injectable } from '@angular/core';

declare let jsPDF;

@Injectable({
  providedIn: 'root',
})
export class GlobalServicesService {
  constructor() {}

  onlyNumbers(key) {
    //getting key code of pressed key
    var keycode = key.which ? key.which : key.keyCode;
    //comparing pressed keycodes
    if (keycode > 31 && (keycode < 48 || keycode > 57)) {
      return false;
    } else return true;
  }
  allowNumbersAndDot(key) {
    //getting key code of pressed key
    var keycode = key.which ? key.which : key.keyCode;
    //comparing pressed keycodes
    if (keycode == 46) return true;
    if (keycode > 31 && (keycode < 48 || keycode > 57)) {
      return false;
    } else return true;
  }
  altFind(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
      var match = callback(arr[i]);
      if (match) {
        return arr[i];
        break;
      }
    }
  }
  validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
      return true;
    } else {
      return false;
    }
  }

  exportPdf(colmnvalue, dataSource,fileName) {
    import('jspdf').then((jsPDF) => {
      // import('jspdf-autotable').then((x) => {
        
      //   const doc = new jsPDF.default(0, 0);
      //   doc.autoTable(colmnvalue, dataSource);
      //   doc.save(fileName);
      // });
    });
  }

  exportExcel(dataSource,fileName) {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(dataSource);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, fileName);
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import('file-saver').then((FileSaver) => {
      let EXCEL_TYPE =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE,
      });
      FileSaver.saveAs(
        data,
        fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
      );
    });
  }
}
