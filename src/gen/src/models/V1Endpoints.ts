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
    V1EndpointSubset,
    V1EndpointSubsetFromJSON,
    V1EndpointSubsetFromJSONTyped,
    V1EndpointSubsetToJSON,
} from './V1EndpointSubset';
import {
    V1ObjectMeta,
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';

/**
 * Endpoints is a collection of endpoints that implement the actual service. Example:
 * 
 * 	 Name: "mysvc",
 * 	 Subsets: [
 * 	   {
 * 	     Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
 * 	     Ports: [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
 * 	   },
 * 	   {
 * 	     Addresses: [{"ip": "10.10.3.3"}],
 * 	     Ports: [{"name": "a", "port": 93}, {"name": "b", "port": 76}]
 * 	   },
 * 	]
 * @export
 * @interface V1Endpoints
 */
export interface V1Endpoints {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1Endpoints
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1Endpoints
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1Endpoints
     */
    metadata?: V1ObjectMeta;
    /**
     * The set of all endpoints is the union of all subsets. Addresses are placed into subsets according to the IPs they share. A single address with multiple ports, some of which are ready and some of which are not (because they come from different containers) will result in the address being displayed in different subsets for the different ports. No address will appear in both Addresses and NotReadyAddresses in the same subset. Sets of addresses and ports that comprise a service.
     * @type {Array<V1EndpointSubset>}
     * @memberof V1Endpoints
     */
    subsets?: Array<V1EndpointSubset>;
}

export function V1EndpointsFromJSON(json: any): V1Endpoints {
    return V1EndpointsFromJSONTyped(json, false);
}

export function V1EndpointsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Endpoints {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'subsets': !exists(json, 'subsets') ? undefined : ((json['subsets'] as Array<any>).map(V1EndpointSubsetFromJSON)),
    };
}

export function V1EndpointsToJSON(value?: V1Endpoints | null): any {
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
        'subsets': value.subsets === undefined ? undefined : ((value.subsets as Array<any>).map(V1EndpointSubsetToJSON)),
    };
}

