import camelcaseKeys, { type ObjectLike } from "camelcase-keys";

export function camecalize<T extends ObjectLike | ObjectLike[]>(apiResult: T): T {
    return camelcaseKeys(apiResult, { deep: true }) as T;
}