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
    V1alpha1StorageVersionStatus,
    V1alpha1StorageVersionStatusFromJSON,
    V1alpha1StorageVersionStatusFromJSONTyped,
    V1alpha1StorageVersionStatusToJSON,
} from './V1alpha1StorageVersionStatus';

/**
 * Storage version of a specific resource.
 * @export
 * @interface V1alpha1StorageVersion
 */
export interface V1alpha1StorageVersion {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1alpha1StorageVersion
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1alpha1StorageVersion
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1alpha1StorageVersion
     */
    metadata?: V1ObjectMeta;
    /**
     * Spec is an empty spec. It is here to comply with Kubernetes API style.
     * @type {object}
     * @memberof V1alpha1StorageVersion
     */
    spec: object;
    /**
     * 
     * @type {V1alpha1StorageVersionStatus}
     * @memberof V1alpha1StorageVersion
     */
    status: V1alpha1StorageVersionStatus;
}

export function V1alpha1StorageVersionFromJSON(json: any): V1alpha1StorageVersion {
    return V1alpha1StorageVersionFromJSONTyped(json, false);
}

export function V1alpha1StorageVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1StorageVersion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': json['spec'],
        'status': V1alpha1StorageVersionStatusFromJSON(json['status']),
    };
}

export function V1alpha1StorageVersionToJSON(value?: V1alpha1StorageVersion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': V1ObjectMetaToJSON(value.metadata),
        'spec': value.spec,
        'status': V1alpha1StorageVersionStatusToJSON(value.status),
    };
}

