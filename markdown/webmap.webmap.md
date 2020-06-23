<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@nextgis/webmap](./webmap.md) &gt; [WebMap](./webmap.webmap.md)

## WebMap class

The core component for managing map adapters. It contains methods for adding and manipulation with map layers and controls.

<b>Signature:</b>

```typescript
export declare class WebMap<M = any, L = any, C = any, E extends WebMapEvents = WebMapEvents> extends WebMapLayers<M, L, C, E> 
```

## Example


```js
import WebMap from '@nextgis/webmap';
import MapAdapter from '@nextgis/ol-map-adapter';

const webMap = new WebMap({
  mapAdapter: new MapAdapter(),
  mapOptions: { target: 'map' },
});

```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [controls](./webmap.webmap.controls.md) | <code>static</code> | { \[name: string\]: (webMap: [WebMap](./webmap.webmap.md)<!-- -->, options?: any) =&gt; any; } |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [\_addLayerProviders()](./webmap.webmap._addlayerproviders.md) |  |  |
|  [\_onLoadSync()](./webmap.webmap._onloadsync.md) |  |  |
|  [addControl(controlDef, position, options)](./webmap.webmap.addcontrol.md) |  |  |
|  [createButtonControl(options)](./webmap.webmap.createbuttoncontrol.md) |  |  |
|  [createControl(control, options)](./webmap.webmap.createcontrol.md) |  | Creating a universal map layout control element. Can be used with any map adapter. |
|  [createToggleControl(options)](./webmap.webmap.createtogglecontrol.md) |  |  |
|  [getControl(control, options)](./webmap.webmap.getcontrol.md) |  |  |
|  [removeControl(control)](./webmap.webmap.removecontrol.md) |  |  |
