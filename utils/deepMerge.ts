type GenericValue =
  | GenericArray
  | GenericObject
  | boolean
  | null
  | number
  | object
  | string
  | undefined;
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface GenericArray extends Array<GenericValue> {}
interface GenericObject {
  [key: string]: GenericValue;
}

function isObject(possibleObject: unknown): possibleObject is GenericObject {
  return !!possibleObject && typeof possibleObject === 'object';
}

export default function deepMerge<T extends GenericValue>(
  target: GenericValue,
  source: T
): T {
  if (Array.isArray(target) && Array.isArray(source)) {
    // @ts-ignore Type is not assignable to type 'T'.
    return target.concat(source);
  }
  if (isObject(target) && isObject(source)) {
    return Object.keys(source).reduce<typeof source>((acc, key) => {
      acc[key] = deepMerge(target[key], source[key]);
      return acc;
      // @ts-ignore Type is not assignable to type 'T'.
    }, {});
  }
  return source;
}
