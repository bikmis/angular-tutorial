import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryDataService } from './in-memory-data-service/in-memory-data.service';

import { AuthorizationInterceptor } from './interceptor/authorization.interceptor';
import { CustomInterceptor } from './interceptor/custom.interceptor';

import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
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
import { AngularMenuComponent } from './menu/angular-menu/angular-menu.component';
import { ShellComponent } from './shell/shell.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { ForbiddenValidatorDirective } from './forms/directives/forbidden-validator.directive';
import { TemplateDrivenFormsComponent } from './forms/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { DynamicFormsComponent } from './forms/dynamic-forms/dynamic-forms.component';
import { ChangePasswordValidatorDirective } from './forms/directives/change-password-validator.directive';
import { PreflightRequestComponent } from './preflight-request/preflight-request.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { CssFunctionComponent } from './css/css-function/css-function.component';
import { CssHomeComponent } from './css/css-home/css-home.component';
import { CssVariableComponent } from './css/css-variable/css-variable.component';
import { CssMenuComponent } from './menu/css-menu/css-menu.component';
import { Log4netHomeComponent } from './log4net-home/log4net-home.component';
import { Log4netMenuComponent } from './menu/log4net-menu/log4net-menu.component';
import { SassMenuComponent } from './menu/sass-menu/sass-menu.component';
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
import { JsMenuComponent } from './menu/js-menu/js-menu.component';
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




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AssetComponent,
    StylingComponent,
    CliComponent,
    DirectiveComponent,
    FragmentComponent,
    DummyTextComponent,
    DataBindingComponent,
    RoutingComponent,
    ContactListComponent,
    ContactDetailComponent,
    ChildComponent,
    ParentComponent,
    MovieComponent,
    UserComponent,
    ConfigComponent,
    FontAwesomeComponent,
    HttpServiceComponent,
    JsonpComponent,
    JwtComponent,
    LoginComponent,
    PageNotFoundComponent,
    HeroComponent,
    PerformanceOptimizationComponent,
    SpreadSyntaxComponent,
    MapMethodComponent,
    RxjsLibraryComponent,
    AsyncPipeComponent,
    SearchComponent,
    BuildDeploymentComponent,
    NpmCommandComponent,
    TypeScriptComponent,
    RegularExpressionComponent,
    Html5ValidationComponent,
    AngularMenuComponent,
    ShellComponent,
    HeroEditComponent,
    ForbiddenValidatorDirective,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    DynamicFormsComponent,
    ChangePasswordValidatorDirective,
    PreflightRequestComponent,
    NodejsComponent,
    CssFunctionComponent,
    CssHomeComponent,
    CssVariableComponent,
    CssMenuComponent,
    Log4netHomeComponent,
    Log4netMenuComponent,
    SassMenuComponent,
    SassHomeComponent,
    SassCompilationComponent,
    SassFunctionComponent,
    SassInheritanceComponent,
    SassInstallationComponent,
    SassSourceMapComponent,
    SassNestingComponent,
    SassModuleComponent,
    SassListComponent,
    SassMapComponent,
    SassMixinComponent,
    JsHomeComponent,
    JsMenuComponent,
    JsLocationComponent,
    JsCommentComponent,
    JsVariableComponent,
    JsFunctionComponent,
    JsWindowComponent,
    JsDataTypeComponent,
    JsJsonpComponent,
    AngularMaterialComponent,
    ExpressjsComponent,
    NodeApiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true, delay: 0 }),
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule,
    MatTabsModule,
    FlexLayoutModule
  ],
  providers: [/*
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor,
      multi: true
    } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
