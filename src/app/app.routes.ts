import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CalculationPage } from './components/calculation/calculation.page';
import { ExportPage } from './components/export/export.page';
import { ImportPage } from './components/import/import.page';
import { SettingsPage } from './components/settings/settings.page';

const routes: Routes = [
  {
    path: 'calculation',
    component: CalculationPage
  },
  {
    path: 'export',
    component: ExportPage
  },
  {
    path: 'import',
    component: ImportPage
  },
  {
    path: 'settings',
    component: SettingsPage
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
