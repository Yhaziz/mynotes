import { Routes } from '@angular/router';
import { BlankLayoutComponent } from './shared/components/layouts/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './shared/components/layouts/user-layout/user-layout.component';


export const routes: Routes = [




    {
        path : '',
        component : BlankLayoutComponent,
        children :[
            {
                path : '',
                loadChildren :() => import('./views/pages/pages.module').then(m => m.PagesModule)
            }
        ]
    },
    {
        path : 'auth',
        component : AuthLayoutComponent,
        children :[
            {
                path : '',
                loadChildren :() => import('./views/pages/auth/auth.module').then(m => m.AuthModule)
            },
            
        ]
    },
    {
        path : 'admin',
        component : AdminLayoutComponent,
        children :[
            {
                path : 'overview',
                loadChildren :() => import('./views/pages/overview/overview/overview.module').then(m => m.OverviewModule)
            },
            {
                path : 'posts',
                loadChildren :() => import('./views/posts/posts.module').then(m => m.PostsModule)
            },
            {
                path : 'notes',
                loadChildren :() => import('./views/notes/notes.module').then(m => m.NotesModule)
            },
            {
                path : 'setting',
                loadChildren :() => import('./views/setting/setting.module').then(m => m.SettingModule)
            },
           
            
        ]
    },
    {
        path : 'user',
        component :UserLayoutComponent,
        children : [
            {
                path : 'overview',
                loadChildren :() => import('./views/pages/overview/overview/overview.module').then(m => m.OverviewModule)
            },
            {
                path : 'news',
                loadChildren :() => import('./views/news/news.module').then(m => m.NewsModule)
            },
            {
                path : 'notes',
                loadChildren :() => import('./views/notes/notes.module').then(m => m.NotesModule)
            },
            {
                path : 'setting',
                loadChildren :() => import('./views/setting/setting.module').then(m => m.SettingModule)
            },
        ]
    }
];
