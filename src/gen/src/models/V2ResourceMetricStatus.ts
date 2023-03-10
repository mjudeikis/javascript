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
    V2MetricValueStatus,
    V2MetricValueStatusFromJSON,
    V2MetricValueStatusFromJSONTyped,
    V2MetricValueStatusToJSON,
} from './V2MetricValueStatus';

/**
 * ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 * @export
 * @interface V2ResourceMetricStatus
 */
export interface V2ResourceMetricStatus {
    /**
     * 
     * @type {V2MetricValueStatus}
     * @memberof V2ResourceMetricStatus
     */
    current: V2MetricValueStatus;
    /**
     * Name is the name of the resource in question.
     * @type {string}
     * @memberof V2ResourceMetricStatus
     */
    name: string;
}

export function V2ResourceMetricStatusFromJSON(json: any): V2ResourceMetricStatus {
    return V2ResourceMetricStatusFromJSONTyped(json, false);
}

export function V2ResourceMetricStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2ResourceMetricStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'current': V2MetricValueStatusFromJSON(json['current']),
        'name': json['name'],
    };
}

export function V2ResourceMetricStatusToJSON(value?: V2ResourceMetricStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'current': V2MetricValueStatusToJSON(value.current),
        'name': value.name,
    };
}

