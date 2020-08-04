<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@nextgis/ngw-kit](./ngw-kit.md) &gt; [getNgwLayerFeatures](./ngw-kit.getngwlayerfeatures.md)

## getNgwLayerFeatures() function

<b>Signature:</b>

```typescript
export declare function getNgwLayerFeatures<G extends Geometry | null = Geometry, P extends Record<string, any> = Record<string, any>>(options: {
    resourceId: number;
    connector: NgwConnector;
    filters?: PropertiesFilter;
} & FilterOptions): CancelablePromise<FeatureCollection<G, P>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  options | { resourceId: number; connector: NgwConnector; filters?: [PropertiesFilter](./properties-filter.propertiesfilter.md)<!-- -->; } &amp; [FilterOptions](./webmap.filteroptions.md) |  |

<b>Returns:</b>

CancelablePromise&lt;FeatureCollection&lt;G, P&gt;&gt;
