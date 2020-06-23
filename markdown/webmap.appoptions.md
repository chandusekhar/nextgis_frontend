<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@nextgis/webmap](./webmap.md) &gt; [AppOptions](./webmap.appoptions.md)

## AppOptions interface

<b>Signature:</b>

```typescript
export interface AppOptions 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [create](./webmap.appoptions.create.md) | boolean | Аutomatic creation of a map from the constructor  false |
|  [mapAdapter](./webmap.appoptions.mapadapter.md) | [MapAdapter](./webmap.mapadapter.md) | The main initialization property of WebMap. Determines the way of interaction with the selected GIS framework. Available: \[Leaflet\](leaflet-map-adapter); \[Openlayers\](ol-map-adapter); \[MapboxGL\](mapboxgl-map-adapter) |
|  [mapOptions](./webmap.appoptions.mapoptions.md) | [MapOptions](./webmap.mapoptions.md) | Initial map display settings |
|  [runtimeParams](./webmap.appoptions.runtimeparams.md) | [RuntimeParams](./webmap.runtimeparams.md)<!-- -->\[\] | A way to save the state of a map to external services |
|  [starterKits](./webmap.appoptions.starterkits.md) | [StarterKit](./webmap.starterkit.md)<!-- -->\[\] | One way to extend WebMap functionality with the help of kits. |
