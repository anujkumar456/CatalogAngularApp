import { Component, OnInit } from '@angular/core';

import { ReadJsonFile } from '../../services/readJsonData.service';

@Component({
    selector: 'productDetail',
    templateUrl: './productDetail.component.html',
    styleUrls: ['./productDetail.component.css']
})
export class ProductDetaileComponent implements OnInit {

    //variable declaretion
    private product: Array<any>[];
    categoryName: any;    

    constructor(private _readJsonFile: ReadJsonFile) { }

    //Page load
    ngOnInit() {

        //Getting session value
        var categoryId = localStorage.getItem("CategoryId");
        var productId = localStorage.getItem("ProductId");
        this.categoryName = localStorage.getItem("CategoryName");

        //Getting individual product details base on product id
        this._readJsonFile.getJSONData()
            .subscribe(data => {

                //Get category based on categoryId
                var category = data.filter((a: any) => a.Id == categoryId);
                //Get All Products from category
                var lstProducts = category[0].Products;
                //Get Product details based on ProductId
                this.product = lstProducts.filter((a: any) => a.Id == productId);
            });
    } 
}
