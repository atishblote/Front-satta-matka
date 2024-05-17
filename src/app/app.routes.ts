import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JodiComponent } from './pages/jodi/jodi.component';
import { PannelComponent } from './pages/pannel/pannel.component';
import { TextTableComponent } from './pages/text-table/text-table.component';
import { StarlineJodiComponent } from './components/starline-jodi/starline-jodi.component';
import { KingJodiComponent } from './components/king-jodi/king-jodi.component';

export const routes: Routes = [
    {
        path: "", title:"Prabhat | Best Satta Matka site", component: HomeComponent
    },
    {
        path: "jodi/:id", title: "Jodi | Best Satta Matka site",  component: JodiComponent
    },
    {
        path: "pannel/:id", title: "Pannel | Best Satta Matka site" , component: PannelComponent
    },
    {
        path: "starline/:id", title: "Starline | Best Satta Matka site" , component: StarlineJodiComponent
    },
    {
        path: "king/:id", title: "Starline | Best Satta Matka site" , component: KingJodiComponent
    },
    {
        path: "test", component: TextTableComponent
    }
];
