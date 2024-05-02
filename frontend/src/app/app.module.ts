import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"; 
import { AppComponent } from "./app.component";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; 
import { AppRoutes } from "./app.routing"; 
import { MainNavComponent } from "./main-nav/main-nav.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    AppRoutes,
    
    MainNavComponent,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
