import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AssetComponent } from './asset/asset.component';
import { StylingComponent } from './styling/styling.component';
import { CliComponent } from './cli/cli.component';
import { DirectiveComponent } from './directive/directive.component';
import { FragmentComponent } from './fragment/fragment.component';
import { DummyTextComponent } from './dummy-text/dummy-text.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { RoutingComponent } from './routing/routing.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { MovieComponent } from './movie/movie.component';
import { UserComponent } from './user/user.component';
import { ConfigComponent } from './config/config.component';
import { FontAwesomeComponent } from './font-awesome/font-awesome.component';
import { HttpServiceComponent } from './http-service/http-service.component';
import { JsonpComponent } from './jsonp/jsonp.component';
import { JwtComponent } from './jwt/jwt.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './services/login.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroComponent } from './hero/hero.component';
import { PerformanceOptimizationComponent } from './performance-optimization/performance-optimization.component';
import { SpreadSyntaxComponent } from './js/spread-syntax/spread-syntax.component';
import { MapMethodComponent } from './js/map-method/map-method.component';
import { RxjsLibraryComponent } from './rxjs-library/rxjs-library.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { SearchComponent } from './search/search.component';
import { BuildDeploymentComponent } from './build-deployment/build-deployment.component';
import { NpmCommandComponent } from './npm-command/npm-command.component';
import { TypeScriptComponent } from './type-script/type-script.component';
import { RegularExpressionComponent } from './regular-expression/regular-expression.component';
import { Html5ValidationComponent } from './html5-validation/html5-validation.component';
import { ShellComponent } from './shell/shell.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { HeroEditGuard } from './services/hero-edit.guard';
import { TemplateDrivenFormsComponent } from './forms/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { DynamicFormsComponent } from './forms/dynamic-forms/dynamic-forms.component';
import { PreflightRequestComponent } from './preflight-request/preflight-request.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { CssHomeComponent } from './css/css-home/css-home.component';
import { CssFunctionComponent } from './css/css-function/css-function.component';
import { CssVariableComponent } from './css/css-variable/css-variable.component';
import { Log4netHomeComponent } from './log4net/log4net-home/log4net-home.component';
import { SassHomeComponent } from './sass/sass-home/sass-home.component';
import { SassCompilationComponent } from './sass/sass-compilation/sass-compilation.component';
import { SassFunctionComponent } from './sass/sass-function/sass-function.component';
import { SassInheritanceComponent } from './sass/sass-inheritance/sass-inheritance.component';
import { SassInstallationComponent } from './sass/sass-installation/sass-installation.component';
import { SassSourceMapComponent } from './sass/sass-source-map/sass-source-map.component';
import { SassNestingComponent } from './sass/sass-nesting/sass-nesting.component';
import { SassModuleComponent } from './sass/sass-module/sass-module.component';
import { SassListComponent } from './sass/sass-list/sass-list.component';
import { SassMapComponent } from './sass/sass-map/sass-map.component';
import { SassMixinComponent } from './sass/sass-mixin/sass-mixin.component';
import { JsHomeComponent } from './js/js-home/js-home.component';
import { JsLocationComponent } from './js/js-location/js-location.component';
import { JsCommentComponent } from './js/js-comment/js-comment.component';
import { JsVariableComponent } from './js/js-variable/js-variable.component';
import { JsFunctionComponent } from './js/js-function/js-function.component';
import { JsWindowComponent } from './js/js-window/js-window.component';
import { JsDataTypeComponent } from './js/js-data-type/js-data-type.component';
import { JsJsonpComponent } from './js/js-jsonp/js-jsonp.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { ExpressjsComponent } from './expressjs/expressjs.component';
import { NodeApiComponent } from './node-api/node-api.component';
import { JsShellComponent } from './js/js-shell/js-shell.component';
import { AngularShellComponent } from './angular-shell/angular-shell.component';
import { Log4netShellComponent } from './log4net/log4net-shell/log4net-shell.component';
import { CssShellComponent } from './css/css-shell/css-shell.component';
import { SassShellComponent } from './sass/sass-shell/sass-shell.component';


const ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: ShellComponent,
    canActivate: [LoginGuard],
    children: [      
      {
        path: 'js',
        component: JsShellComponent,
        children: [
          {
            path: 'home',
            component: JsHomeComponent
          },
          {
            path: 'location',
            component: JsLocationComponent
          },
          {
            path: 'comment',
            component: JsCommentComponent
          },
          {
            path: 'variable',
            component: JsVariableComponent
          },
          {
            path: 'function',
            component: JsFunctionComponent
          },
          {
            path: 'window',
            component: JsWindowComponent
          },
          {
            path: 'datatype',
            component: JsDataTypeComponent
          },
          {
            path: 'jsonp',
            component: JsJsonpComponent
          },
          {
            path: 'map-method',
            component: MapMethodComponent
          },
          {
            path: 'spread-syntax',
            component: SpreadSyntaxComponent
          },
          {
            path: '',
            redirectTo: '/js/home',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'sass',
        component: SassShellComponent,
        children: [
          {
            path: 'home',
            component: SassHomeComponent
          },
          {
            path: 'compilation',
            component: SassCompilationComponent
          },
          {
            path: 'function',
            component: SassFunctionComponent
          },
          {
            path: 'inheritance',
            component: SassInheritanceComponent
          },
          {
            path: 'installation',
            component: SassInstallationComponent
          },
          {
            path: 'sourcemap',
            component: SassSourceMapComponent
          },
          {
            path: 'nesting',
            component: SassNestingComponent
          },
          {
            path: 'module',
            component: SassModuleComponent
          },
          {
            path: 'list',
            component: SassListComponent
          },
          {
            path: 'map',
            component: SassMapComponent
          },
          {
            path: 'mixin',
            component: SassMixinComponent
          },
          {
            path: '',
            redirectTo: '/sass/home',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'log4net',
        component: Log4netShellComponent,
        children: [
          {
            path: 'home',
            component: Log4netHomeComponent
          },
          {
            path: '',
            redirectTo: '/log4net/home',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'css',
        component: CssShellComponent,
        children: [
          {
            path: 'home',
            component: CssHomeComponent
          },
          {
            path: 'function',
            component: CssFunctionComponent
          },
          {
            path: 'variable',
            component: CssVariableComponent
          },
          {
            path: '',
            redirectTo: '/css/home',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'angular',
        component: AngularShellComponent,
        children: [
          {
            path: 'home',
            component: HomeComponent
          },
          {
            path: 'styling',
            component: StylingComponent
          },
          {
            path: 'asset',
            component: AssetComponent
          },
          {
            path: 'cli',
            component: CliComponent
          },
          {
            path: 'directive',
            component: DirectiveComponent
          },
          {
            path: 'fragment',
            component: FragmentComponent
          },
          {
            path: 'dummy-text',
            component: DummyTextComponent
          },
          {
            path: 'data-binding',
            component: DataBindingComponent
          },
          {
            path: 'routing',
            component: RoutingComponent
          },
          {
            path: 'contact-list',
            component: ContactListComponent
          },
          {
            path: 'contact-detail/:id',
            component: ContactDetailComponent
          },
          {
            path: 'child',
            component: ChildComponent
          },
          {
            path: 'parent',
            component: ParentComponent
          },
          {
            path: 'movie',
            component: MovieComponent
          },
          {
            path: 'config',
            component: ConfigComponent
          },
          {
            path: 'user',
            component: UserComponent
          },
          {
            path: 'font-awesome',
            component: FontAwesomeComponent
          },
          {
            path: 'http-service',
            component: HttpServiceComponent
          },
          {
            path: 'jsonp',
            component: JsonpComponent
          },
          {
            path: 'jwt',
            component: JwtComponent
          },
          {
            path: 'hero',
            component: HeroComponent
          },
          {
            path: 'performance-optimization',
            component: PerformanceOptimizationComponent
          },
          {
            path: 'rxjs-library',
            component: RxjsLibraryComponent
          },
          {
            path: 'async-pipe',
            component: AsyncPipeComponent
          },
          {
            path: 'search',
            component: SearchComponent
          },
          {
            path: 'build-deployment',
            component: BuildDeploymentComponent
          },
          {
            path: 'npm-command',
            component: NpmCommandComponent
          },
          {
            path: 'reactive-forms',
            component: ReactiveFormsComponent
          },
          {
            path: 'type-script',
            component: TypeScriptComponent
          },
          {
            path: 'regular-expression',
            component: RegularExpressionComponent
          },
          {
            path: 'html5-validation',
            component: Html5ValidationComponent
          },
          {
            path: 'hero-edit',
            component: HeroEditComponent,
            canDeactivate: [HeroEditGuard]
          },
          {
            path: 'template-driven-forms',
            component: TemplateDrivenFormsComponent
          },
          {
            path: 'dynamic-forms',
            component: DynamicFormsComponent
          },
          {
            path: 'preflight-request',
            component: PreflightRequestComponent
          },
          {
            path: 'nodejs',
            component: NodejsComponent
          },
          {
            path: 'angular-material',
            component: AngularMaterialComponent
          },
          {
            path: 'express-js',
            component: ExpressjsComponent
          },
          {
            path: 'node-api',
            component: NodeApiComponent
          },
          {
            path: '', // http://localhost:4200/angular/ 
            redirectTo: '/angular/home',
            pathMatch: 'full'
          },
          {
            path: '**',  //http://localhost:4200/angular/xfdfydf 
            component: PageNotFoundComponent
          }
        ]
      },
      {
        path: '',  //http://localhost:4200/
        redirectTo: '/angular/home',  // absolute redirect as there is a slash(/) before angular/home
        pathMatch: 'full'
      },
      {
        path: '**', //http://localhost:4200/ffdfd
        redirectTo: '/angular/home',  // absolute redirect as there is a slash(/) before angular/home
        pathMatch: 'full'
      }
    ]
  }
];


const extraOptions: ExtraOptions = {
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    //scrollPositionRestoration: 'enabled',
    //scrollOffset: [0, 0]
    relativeLinkResolution: 'legacy'
};

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, extraOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
