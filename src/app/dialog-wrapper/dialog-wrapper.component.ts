import { Component, Inject, Input } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-wrapper',
  templateUrl: './dialog-wrapper.component.html',
  styleUrls: ['./dialog-wrapper.component.scss']
})
export class DialogWrapperComponent {

  @Input() activated: boolean;

  constructor(
    private dialogRef: MdDialogRef<DialogWrapperComponent>,
    @Inject(MD_DIALOG_DATA) private dialogData: any
  ) { }

  closeDialog(): void {
    console.log(this.activated)
    this.dialogRef.close();
  }


}
