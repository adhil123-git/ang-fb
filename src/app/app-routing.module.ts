import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component'; 
import { HomeComponent } from './folder/home/home.component';
import { FriendlistComponent } from './folder/friendlist/friendlist.component';
import { MessageComponent } from './folder/message/message.component';
import { PostsComponent } from './folder/posts/posts.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'homepage',component: HomepageComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, 
      { path: 'home', component: HomeComponent },
      { path: 'friendlist', component: FriendlistComponent },
      { path: 'message', component: MessageComponent },
      { path: 'posts', component: PostsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }