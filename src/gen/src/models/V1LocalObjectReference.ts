/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.26.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
 * @export
 * @interface V1LocalObjectReference
 */
export interface V1LocalObjectReference {
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * @type {string}
     * @memberof V1LocalObjectReference
     */
    name?: string;
}

export function V1LocalObjectReferenceFromJSON(json: any): V1LocalObjectReference {
    return V1LocalObjectReferenceFromJSONTyped(json, false);
}

export function V1LocalObjectReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1LocalObjectReference {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function V1LocalObjectReferenceToJSON(value?: V1LocalObjectReference | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

