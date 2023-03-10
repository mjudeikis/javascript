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
    V1Deployment,
    V1DeploymentFromJSON,
    V1DeploymentFromJSONTyped,
    V1DeploymentToJSON,
} from './V1Deployment';
import {
    V1ListMeta,
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './V1ListMeta';

/**
 * DeploymentList is a list of Deployments.
 * @export
 * @interface V1DeploymentList
 */
export interface V1DeploymentList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1DeploymentList
     */
    apiVersion?: string;
    /**
     * Items is the list of Deployments.
     * @type {Array<V1Deployment>}
     * @memberof V1DeploymentList
     */
    items: Array<V1Deployment>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1DeploymentList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1DeploymentList
     */
    metadata?: V1ListMeta;
}

export function V1DeploymentListFromJSON(json: any): V1DeploymentList {
    return V1DeploymentListFromJSONTyped(json, false);
}

export function V1DeploymentListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DeploymentList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1DeploymentFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1DeploymentListToJSON(value?: V1DeploymentList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(V1DeploymentToJSON)),
        'kind': value.kind,
        'metadata': V1ListMetaToJSON(value.metadata),
    };
}

