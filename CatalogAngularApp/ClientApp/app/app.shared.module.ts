import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component'; 
import { ProductCatalogComponent } from './components/productCatalog/productCatalog.component';
import { ProductsShortDetailComponent } from './components/productsShortDetail/productsShortDetail.component';
import { ProductDetaileComponent } from './components/productDetail/productDetail.component';


@NgModule({
    declarations: [
        AppComponent,        
        ProductCatalogComponent,
        ProductsShortDetailComponent,
        ProductDetaileComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'productCatalog', pathMatch: 'full' },
            { path: 'productCatalog', component: ProductCatalogComponent },
            { path: 'productsShortDetail', component: ProductsShortDetailComponent },
            { path: 'productDetail', component: ProductDetaileComponent },            
            { path: '**', redirectTo: 'productCatalog' }
        ])
    ]
})
export class AppModuleShared {
}
