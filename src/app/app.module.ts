import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ProgressSpinnerModule } from "primeng/progressspinner";
// import { TableModule } from "primeng/table";

import { HomeComponent } from './ProductOrdering/Home/Home.component';
import { CustomerComponent } from './ProductOrdering/Customer/Customer.component';

import { ProductComponent } from './ProductOrdering/Product/Product.component';
import { CategoryComponent } from './ProductOrdering/Category/Category.component';

import { MenuComponent } from './ProductOrdering/Menu/Menu.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { DropdownModule } from "primeng/dropdown";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ToastModule } from "primeng/toast";
// import { ProgressSpinnerModule } from "primeng/progressspinner";
import { MenubarModule } from "primeng/menubar";
import { DialogModule } from "primeng/dialog";
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { TabViewModule } from "primeng/tabview";
import { FileUploadModule } from "primeng/fileupload";
import { CalendarModule } from "primeng/calendar";
// import { FullCalendarModule } from "primeng/fullcalendar";
import { TooltipModule } from "primeng/tooltip";
import { ChipsModule } from "primeng/chips";
import { ListboxModule } from "primeng/listbox";
import { CheckboxModule } from "primeng/checkbox";
import { RadioButtonModule } from "primeng/radiobutton";
// import { MatIconModule } from "@angular/material/icon";
// import { MatBadgeModule } from "@angular/material/badge";
import { TieredMenuModule } from "primeng/tieredmenu";
import { MenuItem } from "primeng/api";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { AutoCompleteModule } from "primeng/autocomplete";
import { BlockUIModule } from "primeng/blockui";
import { PaginatorModule } from "primeng/paginator";
import { PanelModule } from "primeng/panel";
import { MultiSelectModule } from "primeng/multiselect";
import { PasswordModule } from "primeng/password";
import { ColorPickerModule } from "primeng/colorpicker";
import { FieldsetModule } from "primeng/fieldset";
import { EditorModule } from "primeng/editor";
import { AccordionModule } from "primeng/accordion";

// import { StorageServiceModule } from "angular-webstorage-service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    ProductComponent,
    CategoryComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    AppRoutingModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    ButtonModule,
    TableModule,
    MessagesModule,
    MessageModule,
    ConfirmDialogModule,
    ToastModule,
    ProgressSpinnerModule,
    MenubarModule,
    DialogModule,
    DynamicDialogModule,
    TabViewModule,
    DynamicDialogModule,
    FileUploadModule,
    CalendarModule,
    // StorageServiceModule,
    // FullCalendarModule,
    TooltipModule,
    ChipsModule,
    ListboxModule,
    CheckboxModule,
    RadioButtonModule,
    TieredMenuModule,
    OverlayPanelModule,
    AutoCompleteModule,
    BlockUIModule,
    PaginatorModule,
    PanelModule,
    MultiSelectModule,
    PasswordModule,
    ColorPickerModule,
    FieldsetModule,
    EditorModule,
    AccordionModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
