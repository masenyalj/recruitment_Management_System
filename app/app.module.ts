import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
//import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';
import { DealershiplistComponent } from './dealershiplist/dealershiplist.component';
import { DealershipaddremoveComponent } from './dealershipaddremove/dealershipaddremove.component';
import { DealershipService } from './dealershiplist/dealership.service';


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    ProductComponent,
    MembersComponent,
    DealershiplistComponent,
    DealershipaddremoveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        {
            path: 'member',
            component: MembersComponent
        },
        {
            path: 'product',
            component: ProductComponent
        },
        {
            path: 'dealershiplist',
            component: DealershiplistComponent
        },
        {
            path: 'dealershipaddremove',
            component: DealershipaddremoveComponent
        }
      ])
  ],
  providers: [DealershipService],
  bootstrap: [AppComponent],
  exports:[DealershiplistComponent, DealershipaddremoveComponent]
})
export class AppModule { }

