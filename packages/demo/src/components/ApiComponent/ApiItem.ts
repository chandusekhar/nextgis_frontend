export interface Flags {
  isPrivate: boolean;
  isExported: boolean;
  isOptional: boolean;
  isStatic: boolean;
}

export type KindString = 'External module' |
  'Class' |
  'Constructor' |
  'Property' |
  'Method' |
  'Parameter' |
  'Function' |
  'Call signature' |
  'Constructor signature' |
  'Interface' |
  'Type literal' |
  'Index signature' |
  'Variable';

export interface Source {
  fileName: string;
  line: number;
  character: number;
}

export interface Tag {
  tag: string;
}

export interface ExampleTag extends Tag {
  tag: 'example';
  text: string;
}

type Tags = ExampleTag;

export interface ApiComment {
  shortText?: string;
  tags?: Tags[];
}

export interface ApiItem {

  module?: ApiItem;

  id: number;
  name: string;
  kind: number;
  flags: Flags;

  children?: ApiItem[];

  sources?: Source[];
  kindString?: KindString;

  type?: Property;
}

export type Parameter = ParameterItem | VariableItem;

export interface ClassItem extends ApiItem {
  kindString: 'Class';
}

export interface VariableItem extends ApiItem {
  kindString: 'Variable';
  type: Property;
}

export interface CallSignatureItem extends ApiItem {
  kindString: 'Call signature';
  type: Property;
}

export interface InterfaceItem extends ApiItem {
  kindString: 'Interface';
  children: Parameter[];
}

export interface PropertyItem extends ApiItem {
  kindString: 'Property';
  type: Property;
  name: string;
}
export interface ParameterItem extends ApiItem {
  kindString: 'Parameter';
  type: Property;
  comment: ApiComment;
}

export interface ConstructorSignature extends ApiItem {
  kindString: 'Constructor signature';
  parameters: Parameter[];
}

export interface ConstructorItem extends ApiItem {
  kindString: 'Constructor';

  signatures: ConstructorSignature[];
}

export interface FunctionItem extends ApiItem {
  kindString: 'Function';
  implementationOf: ReferencePropertyType;
  signatures: Signatures[];
}

export interface MethodItem extends ApiItem {
  kindString: 'Method';
  implementationOf: ReferencePropertyType;
  signatures: Signatures[];
}

export type Property = IntrinsicPropertyType |
  PropertyUnionType |
  ReferencePropertyType |
  TuplePropertyType |
  ReflectionType;

export interface PropertyType {
  type: string;
}

export interface IntrinsicPropertyType extends PropertyType {
  type: 'intrinsic';
  name: 'undefined' | 'string' | 'number' | 'any';
}

export interface TuplePropertyType extends PropertyType {
  type: 'tuple';
  elements: Property[];
}

export interface ReferencePropertyType extends PropertyType {
  type: 'reference';
  id: number;
  name: string;
  typeArguments: Property[];
}

export interface PropertyUnionType extends PropertyType {
  type: 'union';
  types: Property[];
}

interface IndexSignature extends ApiItem {
  name: '__index';
  kindString: 'Index signature';
  parameters: Parameter[];
  type: Property;
}

interface Declaration extends ApiItem {
  kindString: 'Type literal';
  indexSignature?: IndexSignature[];
  children?: VariableItem[];
  name: '__type';
}

export interface ReflectionType extends PropertyType {
  type: 'reflection';
  declaration: Declaration;
}

export type Signatures = IndexSignature | ConstructorSignature | CallSignatureItem;