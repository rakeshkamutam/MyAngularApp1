import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { DeleteComponent } from './delete/delete.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { GetComponent } from './get/get.component';
import { UserListComponent } from './usercomponents/user-list/user-list.component';
import { UserDetailComponent } from './usercomponents/user-detail/user-detail.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { TodoformComponent } from './TodoListApp/todoform/todoform.component';
import { TimerComponent } from './timer/timer.component';
import { Testapiview1Component } from './testapiview1/testapiview1.component';
import { ThemeToggleComponent } from './Dark-Light/theme-toggle/theme-toggle.component';
import { ThemedBoxComponent } from './Dark-Light/themed-box/themed-box.component';
import { LifecycleDemoComponent } from './life-cycle-demo/life-cycle-demo.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, // Protect this route
    { path: '', component: LoginComponent },
    { path: 'login',component: LoginComponent},
    //{ path:'', component: HomeComponent },
    { path:'get', component: GetComponent },
    {path:'post', component: PostComponent},
    {path:'delete', component: DeleteComponent},
    { path: 'users', component: UserListComponent },
    { path: 'users/:id', component: UserDetailComponent }, // Route parameter for user ID
    { path: 'todo', component: TodoformComponent},
    {path: 'timer', component: TimerComponent},
    {path: 'test', component: Testapiview1Component},
    {path: 'theme', component: ThemeToggleComponent},
    {path: 'theme1', component: ThemedBoxComponent},
    {path: 'lifecyclehooks', component: LifecycleDemoComponent},
    {path:'**', component: NotfoundComponent}
];

