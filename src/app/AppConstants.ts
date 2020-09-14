"use strict";

export const BaseServiceURL = "http://127.0.0.1:5000";
export const CustomersRoute = "/customers";
export const HomePageRoute = "/home";
export const CategoriesRoute = "/category";
export const ProductsRoute = "/products";
export const GridPageSize = 2;

//Customers APIs
export const GetAllCustomers = "/api/Customers/GetAllCustomers";
export const GetCustomerDataById = "/api/Customers/GetCustomerDataById";
export const InsertNewCustomer = "/api/Customers/InsertNewCustomer";
export const UpdateCustomer = "/api/Customers/UpdateCustomer";
export const DeleteCustomer = "/api/Customers/DeleteCustomer";

//Category APIs
export const GetCategoryData ="/api/Category/categories";