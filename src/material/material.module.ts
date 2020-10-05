import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
const EXPORT = [MatDialogModule, MatButtonModule];

@NgModule({
  imports: EXPORT,
  exports: EXPORT
})
export class MaterialModule {}
