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
    V1ForZone,
    V1ForZoneFromJSON,
    V1ForZoneFromJSONTyped,
    V1ForZoneToJSON,
} from './V1ForZone';

/**
 * EndpointHints provides hints describing how an endpoint should be consumed.
 * @export
 * @interface V1EndpointHints
 */
export interface V1EndpointHints {
    /**
     * forZones indicates the zone(s) this endpoint should be consumed by to enable topology aware routing.
     * @type {Array<V1ForZone>}
     * @memberof V1EndpointHints
     */
    forZones?: Array<V1ForZone>;
}

export function V1EndpointHintsFromJSON(json: any): V1EndpointHints {
    return V1EndpointHintsFromJSONTyped(json, false);
}

export function V1EndpointHintsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EndpointHints {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'forZones': !exists(json, 'forZones') ? undefined : ((json['forZones'] as Array<any>).map(V1ForZoneFromJSON)),
    };
}

export function V1EndpointHintsToJSON(value?: V1EndpointHints | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'forZones': value.forZones === undefined ? undefined : ((value.forZones as Array<any>).map(V1ForZoneToJSON)),
    };
}

