import {
  Component,
  OnInit,
  Inject,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { CategoryService } from './Category.service';
// import { GlobalServiceService } from "src/app/GlobalService.service";
// import * as AppConstant from 'src/app/AppConstants';
import * as AppConstant from 'src/app/AppConstants';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/api';
// import { ErgonomicData } from "../ErgonomicSurvey/ErgonomicData";
import { Message } from 'primeng/components/common/api';
// import { EditESDataComponent } from "./editESData/editESData.component";
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
// import { LoggedInUser } from "src/app/HSE/Authentication/LoggedInUser";
import { Router } from '@angular/router';
import { MenuComponent } from 'src/app/ProductOrdering/Menu/Menu.component';

declare var $: any;

export class Category {
  categoryid: number;
  categoryname: string;
  description: string;
}

@Component({
  selector: 'app-Category',
  templateUrl: './Category.component.html',
  styleUrls: ['./Category.component.css'],
  // providers: [MessageService, ConfirmationService, DialogService],
})
export class CategoryComponent implements OnInit {
  @ViewChild(MenuComponent, { static: true }) menuChild: MenuComponent;

  constructor(
    private router: Router,
    // private confirmationService: ConfirmationService,
    public restApi: CategoryService // public globalService: GlobalServiceService, // private messageService: MessageService,
  ) // public dialogService: DialogService,
  // @Inject(SESSION_STORAGE) private storage: WebStorageService
  {}

  CategoryList: any = [];

  showProgressSpinner = true;

  category1: Category[];

  category2: Category[];

  selectedCategory1: Category;

  selectedCategory2: Category;

  gridCols: any = [];
  exportColumns: any = [];

  ngOnInit() {
    this.gridCols = [
      { field: 'categoryname', header: 'Category Name' },
      { field: 'description', header: 'Description' },
    ];

    this.exportColumns = this.gridCols.map((col) => ({
      title: col.header,
      dataKey: col.field,
    }));

    this.loadCategoryGridData();
  }

  loadCategoryGridData() {
    this.showProgressSpinner = true;
    // debugger;
    this.restApi.getAllCategoryData().subscribe((data: Category[]) => {
      // this.flushData();
      debugger;
      this.CategoryList = [];

      this.CategoryList = data;

      this.showProgressSpinner = false;
    });
  }

  // exportPdf() {
  //   import('jspdf').then((jsPDF) => {
  //     import('jspdf-autotable').then((x) => {
  //       const doc = new jsPDF.default(0, 0);
  //       doc.autoTable(this.exportColumns, this.CategoryList);
  //       doc.save('Category.pdf');
  //     });
  //   });
  // }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.CategoryList);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'Category');
    });
  }
  
    saveAsExcelFile(buffer: any, fileName: string): void {
        import("file-saver").then(FileSaver => {
            let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            let EXCEL_EXTENSION = '.xlsx';
            const data: Blob = new Blob([buffer], {
                type: EXCEL_TYPE
            });
            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
        });
    }
}
