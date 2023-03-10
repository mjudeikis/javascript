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
    V1ClientIPConfig,
    V1ClientIPConfigFromJSON,
    V1ClientIPConfigFromJSONTyped,
    V1ClientIPConfigToJSON,
} from './V1ClientIPConfig';

/**
 * SessionAffinityConfig represents the configurations of session affinity.
 * @export
 * @interface V1SessionAffinityConfig
 */
export interface V1SessionAffinityConfig {
    /**
     * 
     * @type {V1ClientIPConfig}
     * @memberof V1SessionAffinityConfig
     */
    clientIP?: V1ClientIPConfig;
}

export function V1SessionAffinityConfigFromJSON(json: any): V1SessionAffinityConfig {
    return V1SessionAffinityConfigFromJSONTyped(json, false);
}

export function V1SessionAffinityConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SessionAffinityConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'clientIP': !exists(json, 'clientIP') ? undefined : V1ClientIPConfigFromJSON(json['clientIP']),
    };
}

export function V1SessionAffinityConfigToJSON(value?: V1SessionAffinityConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'clientIP': V1ClientIPConfigToJSON(value.clientIP),
    };
}

