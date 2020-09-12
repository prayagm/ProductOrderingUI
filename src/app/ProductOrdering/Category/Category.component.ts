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

@Component({
  selector: 'app-Category',
  templateUrl: './Category.component.html',
  styleUrls: ['./Category.component.css'],
  // providers: [MessageService, ConfirmationService, DialogService],
})
export class CategoryComponent implements OnInit {
  @ViewChild(MenuComponent, { static: true }) menuChild: MenuComponent;

  constructor(
    // private router: Router,
    // private confirmationService: ConfirmationService,
    // public restApi: CategoryService,
    // // public globalService: GlobalServiceService,
    // private messageService: MessageService,
    // public dialogService: DialogService,
    // @Inject(SESSION_STORAGE) private storage: WebStorageService
  ) {}

  CategoryList: any = [];

  showProgressSpinner = true;

  ngOnInit() {
    // debugger;
    this.loadCategoryGridData()

  }

  loadCategoryGridData() {
    this.showProgressSpinner = true;
    
    // this.restApi.getAllCategoryData().subscribe((data: any) => {
    //   // this.flushData();
    //   debugger;
    //   this.CategoryList = [];

    //   this.CategoryList = data;

    //   this.showProgressSpinner = false;
    // });
  }
}
