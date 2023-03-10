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
    V1DeploymentSpec,
    V1DeploymentSpecFromJSON,
    V1DeploymentSpecFromJSONTyped,
    V1DeploymentSpecToJSON,
} from './V1DeploymentSpec';
import {
    V1DeploymentStatus,
    V1DeploymentStatusFromJSON,
    V1DeploymentStatusFromJSONTyped,
    V1DeploymentStatusToJSON,
} from './V1DeploymentStatus';
import {
    V1ObjectMeta,
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';

/**
 * Deployment enables declarative updates for Pods and ReplicaSets.
 * @export
 * @interface V1Deployment
 */
export interface V1Deployment {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1Deployment
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1Deployment
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1Deployment
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1DeploymentSpec}
     * @memberof V1Deployment
     */
    spec?: V1DeploymentSpec;
    /**
     * 
     * @type {V1DeploymentStatus}
     * @memberof V1Deployment
     */
    status?: V1DeploymentStatus;
}

export function V1DeploymentFromJSON(json: any): V1Deployment {
    return V1DeploymentFromJSONTyped(json, false);
}

export function V1DeploymentFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Deployment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : V1DeploymentSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1DeploymentStatusFromJSON(json['status']),
    };
}

export function V1DeploymentToJSON(value?: V1Deployment | null): any {
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
        'spec': V1DeploymentSpecToJSON(value.spec),
        'status': V1DeploymentStatusToJSON(value.status),
    };
}

