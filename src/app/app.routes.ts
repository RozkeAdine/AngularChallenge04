import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfilComponent } from './user-profil/user-profil.component';


const ROUTES: Routes = [
   { path: 'menu', component: MenuComponent },
   { path: 'signup', component: SignupComponent },
   { path: 'user-profil', component: UserProfilComponent },
];

export { ROUTES };
