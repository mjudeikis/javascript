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
 * ServiceReference holds a reference to Service.legacy.k8s.io
 * @export
 * @interface AdmissionregistrationV1ServiceReference
 */
export interface AdmissionregistrationV1ServiceReference {
    /**
     * `name` is the name of the service. Required
     * @type {string}
     * @memberof AdmissionregistrationV1ServiceReference
     */
    name: string;
    /**
     * `namespace` is the namespace of the service. Required
     * @type {string}
     * @memberof AdmissionregistrationV1ServiceReference
     */
    namespace: string;
    /**
     * `path` is an optional URL path which will be sent in any request to this service.
     * @type {string}
     * @memberof AdmissionregistrationV1ServiceReference
     */
    path?: string;
    /**
     * If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).
     * @type {number}
     * @memberof AdmissionregistrationV1ServiceReference
     */
    port?: number;
}

export function AdmissionregistrationV1ServiceReferenceFromJSON(json: any): AdmissionregistrationV1ServiceReference {
    return AdmissionregistrationV1ServiceReferenceFromJSONTyped(json, false);
}

export function AdmissionregistrationV1ServiceReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdmissionregistrationV1ServiceReference {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'namespace': json['namespace'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'port': !exists(json, 'port') ? undefined : json['port'],
    };
}

export function AdmissionregistrationV1ServiceReferenceToJSON(value?: AdmissionregistrationV1ServiceReference | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'namespace': value.namespace,
        'path': value.path,
        'port': value.port,
    };
}

