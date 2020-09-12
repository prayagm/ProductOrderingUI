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
import { GlobalServicesService } from 'src/app/GlobalServices.service';

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
    public globalService: GlobalServicesService,
    // private confirmationService: ConfirmationService,
    public restApi: CategoryService // public globalService: GlobalServiceService, // private messageService: MessageService, // public dialogService: DialogService, // @Inject(SESSION_STORAGE) private storage: WebStorageService
  ) {}

  CategoryList: any = [];

  showProgressSpinner = true;

  category1: Category[];

  category2: Category[];

  selectedCategory1: Category;

  selectedCategory2: Category;

  newCategoryData: Category;
  editCategoryData: Category;

  gridCols: any = [];
  exportColumns: any = [];

  showInsertDialog: boolean = false;
  showEditDialog: boolean = false;

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
      // debugger;
      this.CategoryList = [];

      this.CategoryList = data;

      this.showProgressSpinner = false;
    });
  }

  exportPdf() {
    this.globalService.exportPdf(
      this.exportColumns,
      this.CategoryList,
      'Category.pdf'
    );
  }

  exportExcel() {
    this.globalService.exportExcel(this.CategoryList, 'Category');
  }

  //this function is used to show the modal dialog to insert a new contractor.
  showDialogToAdd() {
    // this.flushData();

    this.newCategoryData = {
      categoryid: 0,
      categoryname: '',
      description: '',
    };

    this.showInsertDialog = true;
    // this.dateValue = new Date();
  }
}
