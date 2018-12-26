import { MapControl, CreateControlOptions } from '@nextgis/webmap';
import Control from 'ol/control/Control';

export function createControl(control: MapControl, options: CreateControlOptions = {}): Control {

  const newControl = (function (C) {

    function NewControl() {

      const element = document.createElement('div');
      element.className = (options.addClass ? options.addClass + ' ' : '') +
      'ol-unselectable' +
      (options.bar ? ' ol-control' : '');
      element.appendChild(control.onAdd());

      C.call(this, {
        element,
      });

    }

    if (C) {
      NewControl.__proto__ = C;
    }
    NewControl.prototype = Object.create(Control && Control.prototype);
    NewControl.prototype.constructor = NewControl;

    NewControl.prototype.handleRotateNorth = function handleRotateNorth() {
      this.getMap().getView().setRotation(0);
    };

    return NewControl;
  }(Control));

  return new newControl();
  // return control;
}