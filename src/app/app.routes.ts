import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { FaqComponent } from './faq/faq.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
    },
    {
     path: 'about',
     component: AboutComponent,   
    },
    {
        path: "terms",
        component: TermsComponent,
    },
    {
        path: 'faq',
        component: FaqComponent,
    }
];
