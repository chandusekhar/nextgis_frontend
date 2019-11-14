import {
  MapAdapter as MA,
  FitOptions,
  ControlPositions,
  LocateOptions,
  Locate,
  LocationEvents
} from '../../../packages/webmap/src/interfaces/MapAdapter';

import { LayerAdapter } from '../../../packages/webmap/src/interfaces/LayerAdapter';
import { Type } from '../../../packages/webmap/src/interfaces/BaseTypes';
import { EventEmitter } from 'events';
import {
  MapControls,
  MapControl,
  CreateControlOptions,
  ButtonControlOptions,
  ToggleControlOptions
} from '../../../packages/webmap/src/interfaces/MapControl';
import { MapOptions } from '../../../packages/webmap/src/interfaces/WebMapApp';
import { LngLatArray, LngLatBoundsArray } from '../../../packages/webmap/src/interfaces/BaseTypes';

export class FakeMapAdapter<M = any, L = any, C extends any = any> implements MA {
  // isLoaded?: boolean = true;
  map?: M;
  emitter = new EventEmitter();

  layerAdapters: { [name: string]: Type<LayerAdapter<M, L, any>> } = {};

  controlAdapters: { [name: string]: Type<C> } = {};

  private options: MapOptions = {};

  private _container?: HTMLElement;

  create(options: MapOptions = {}): void {
    this.options = options;
    if (typeof options.target === 'string') {
      const elem = document.getElementById(options.target) as HTMLElement;
      if (elem) {
        this._container = elem;
      }
    } else if (options.target instanceof HTMLElement) {
      this._container = options.target;
    }
    if (this._container) {
      this._container.innerHTML = '<div></div>';
    }

    this.emitter.emit('create');
  }

  destroy(): void {
    this.map = undefined;
  }

  removeLayer(layer: L): any {
    //
  }

  beforeRemove(): void {
    //
  }

  setLayerOpacity(layer: L, opacity: number): void {
    //
  }
  showLayer(layer: L): void {
    //
  }
  hideLayer(layer: L): void {
    //
  }
  setLayerOrder(layer: L, order: number, layers?: { [name: string]: LayerAdapter }): void {
    //
  }

  fit(extent: LngLatBoundsArray, options?: FitOptions): void {
    //
  }

  setView(lngLat: LngLatArray, zoom?: number): void {
    this.options.center = lngLat;
    if (zoom) {
      this.setZoom(zoom);
    }
  }

  getBounds(): LngLatBoundsArray | undefined {
    return this.options.bounds;
  }

  getZoom(): number | undefined {
    return this.options.zoom;
  }

  setZoom(zoom: number): void {
    if (this.options.maxZoom !== undefined) {
      zoom = zoom < this.options.maxZoom ? zoom : this.options.maxZoom;
    }
    this.options.zoom = zoom;
  }

  getCenter(): LngLatArray | undefined {
    return this.options.center;
  }

  setCenter(lngLat: LngLatArray): void {
    this.options.center = lngLat;
  }

  getContainer(): HTMLElement | undefined {
    return this._container;
  }

  setCursor(cursor: string): void {
    //
  }

  createControl(control: MapControl, options?: CreateControlOptions): C {
    return {} as C;
  }

  createButtonControl?(options: ButtonControlOptions): C {
    return {} as C;
  }
  createToggleControl?(options: ToggleControlOptions): C {
    return {} as C;
  }

  addControl<K extends keyof MapControls>(
    controlName: K | any,
    position: ControlPositions,
    options?: MapControls[K]
  ): any {
    //
  }

  removeControl(control: any): void {
    //
  }

  onMapClick(evt: any): void {
    //
  }

  locate(opt: LocateOptions, events?: LocationEvents): Locate {
    return { stop: () => false };
  }
}
