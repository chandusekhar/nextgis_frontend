<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@nextgis/ngw-kit](./ngw-kit.md) &gt; [getNgwLayerItem](./ngw-kit.getngwlayeritem.md)

## getNgwLayerItem() function

<b>Signature:</b>

```typescript
export declare function getNgwLayerItem<G extends Geometry | null = Geometry, P extends JsonMap = JsonMap>(options: {
    resourceId: number;
    featureId: number;
    connector: NgwConnector;
} & FilterOptions): CancelablePromise<FeatureItem>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  options | { resourceId: number; featureId: number; connector: NgwConnector; } &amp; [FilterOptions](./webmap.filteroptions.md) |  |

<b>Returns:</b>

CancelablePromise&lt;[FeatureItem](./ngw-connector.featureitem.md)<!-- -->&gt;

