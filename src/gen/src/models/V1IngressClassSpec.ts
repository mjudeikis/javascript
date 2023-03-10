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
    V1IngressClassParametersReference,
    V1IngressClassParametersReferenceFromJSON,
    V1IngressClassParametersReferenceFromJSONTyped,
    V1IngressClassParametersReferenceToJSON,
} from './V1IngressClassParametersReference';

/**
 * IngressClassSpec provides information about the class of an Ingress.
 * @export
 * @interface V1IngressClassSpec
 */
export interface V1IngressClassSpec {
    /**
     * Controller refers to the name of the controller that should handle this class. This allows for different "flavors" that are controlled by the same controller. For example, you may have different Parameters for the same implementing controller. This should be specified as a domain-prefixed path no more than 250 characters in length, e.g. "acme.io/ingress-controller". This field is immutable.
     * @type {string}
     * @memberof V1IngressClassSpec
     */
    controller?: string;
    /**
     * 
     * @type {V1IngressClassParametersReference}
     * @memberof V1IngressClassSpec
     */
    parameters?: V1IngressClassParametersReference;
}

export function V1IngressClassSpecFromJSON(json: any): V1IngressClassSpec {
    return V1IngressClassSpecFromJSONTyped(json, false);
}

export function V1IngressClassSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1IngressClassSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'controller': !exists(json, 'controller') ? undefined : json['controller'],
        'parameters': !exists(json, 'parameters') ? undefined : V1IngressClassParametersReferenceFromJSON(json['parameters']),
    };
}

export function V1IngressClassSpecToJSON(value?: V1IngressClassSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'controller': value.controller,
        'parameters': V1IngressClassParametersReferenceToJSON(value.parameters),
    };
}

