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
import {
    V1ObjectMeta,
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';
import {
    V1alpha1ResourceClaimSpec,
    V1alpha1ResourceClaimSpecFromJSON,
    V1alpha1ResourceClaimSpecFromJSONTyped,
    V1alpha1ResourceClaimSpecToJSON,
} from './V1alpha1ResourceClaimSpec';

/**
 * ResourceClaimTemplateSpec contains the metadata and fields for a ResourceClaim.
 * @export
 * @interface V1alpha1ResourceClaimTemplateSpec
 */
export interface V1alpha1ResourceClaimTemplateSpec {
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1alpha1ResourceClaimTemplateSpec
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1alpha1ResourceClaimSpec}
     * @memberof V1alpha1ResourceClaimTemplateSpec
     */
    spec: V1alpha1ResourceClaimSpec;
}

export function V1alpha1ResourceClaimTemplateSpecFromJSON(json: any): V1alpha1ResourceClaimTemplateSpec {
    return V1alpha1ResourceClaimTemplateSpecFromJSONTyped(json, false);
}

export function V1alpha1ResourceClaimTemplateSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1ResourceClaimTemplateSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': V1alpha1ResourceClaimSpecFromJSON(json['spec']),
    };
}

export function V1alpha1ResourceClaimTemplateSpecToJSON(value?: V1alpha1ResourceClaimTemplateSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'metadata': V1ObjectMetaToJSON(value.metadata),
        'spec': V1alpha1ResourceClaimSpecToJSON(value.spec),
    };
}

