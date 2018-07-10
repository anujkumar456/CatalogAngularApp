import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { ReadJsonFile } from '../../services/readJsonData.service';


@Component({
    providers: [ReadJsonFile],
    selector: 'productCatalog',
    templateUrl: './productCatalog.component.html',
    styleUrls: ['./productCatalog.component.css']
})

export class ProductCatalogComponent implements OnInit {

    //Variable declareation
    private categories: Array<any>[];

    constructor(
        private _readJsonFile: ReadJsonFile,
        private _router: Router) {
    }

    //Page load
    ngOnInit() {
         
        this._readJsonFile.getJSONData()
            .subscribe(data => { 
                this.categories = data;
            });
    }
    //Open products page base on catogery
    productsPage(value: any) {
         
        localStorage.setItem("CategoryId", value.Id);
        this._router.navigateByUrl("/productsShortDetail");
    }
}