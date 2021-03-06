<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@nextgis/ngw-orm](./ngw-orm.md) &gt; [Connection](./ngw-orm.connection.md)

## Connection class

Connection is a single NGW connection. You can have multiple connections to multiple NGW in your application.

<b>Signature:</b>

```typescript
export declare class Connection 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(options)](./ngw-orm.connection._constructor_.md) |  | Constructs a new instance of the <code>Connection</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [baseUrl](./ngw-orm.connection.baseurl.md) |  | string | Connection url. |
|  [connections](./ngw-orm.connection.connections.md) | <code>static</code> | [Connection](./ngw-orm.connection.md)<!-- -->\[\] |  |
|  [driver](./ngw-orm.connection.driver.md) |  | NgwConnector | NGW driver used by this connection. |
|  [isConnected](./ngw-orm.connection.isconnected.md) |  | boolean | Indicates if connection is initialized or not. |
|  [options](./ngw-orm.connection.options.md) |  | ConnectionOptions | Connection options. |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [connect()](./ngw-orm.connection.connect.md) |  |  |
|  [connect(options)](./ngw-orm.connection.connect.md) | <code>static</code> |  |
|  [create(options)](./ngw-orm.connection.create.md) | <code>static</code> |  |
|  [createResource(Resource, options)](./ngw-orm.connection.createresource.md) |  |  |
|  [deleteResource(resource)](./ngw-orm.connection.deleteresource.md) |  |  |
|  [getOrCreateResource(Resource, options)](./ngw-orm.connection.getorcreateresource.md) |  |  |
|  [getResource(resource)](./ngw-orm.connection.getresource.md) |  |  |
|  [getResourceItem(resource)](./ngw-orm.connection.getresourceitem.md) |  |  |
|  [getResourceNgwPayload(resource, parent, options)](./ngw-orm.connection.getresourcengwpayload.md) |  |  |
|  [receiveResource(resource)](./ngw-orm.connection.receiveresource.md) |  |  |

