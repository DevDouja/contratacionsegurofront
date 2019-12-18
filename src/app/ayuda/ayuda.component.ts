import {Component} from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

/**
 * @title Ayuda
 */
@Component({
  selector: 'ayuda',
  templateUrl: 'ayuda.component.html',
  styleUrls: ['ayuda.component.css'],
})
export class AyudaComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(AyudaSheetComponent);
  }
}

@Component({
  selector: 'ayuda-sheet',
  templateUrl: 'ayuda-sheet.component.html',
})
export class AyudaSheetComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<AyudaSheetComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
