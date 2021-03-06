import { NgModule, Component, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'login', component: LoginComponent},
{path: 'cursos', component: CursosComponent},
{path: 'cursos/:id', component: CursoDetalheComponent},
];

export const routing: ModuleWithProviders <RouterModule> = RouterModule.forRoot(routes);
