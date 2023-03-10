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
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 * @export
 * @interface V1ReplicaSetCondition
 */
export interface V1ReplicaSetCondition {
    /**
     * The last time the condition transitioned from one status to another.
     * @type {Date}
     * @memberof V1ReplicaSetCondition
     */
    lastTransitionTime?: Date;
    /**
     * A human readable message indicating details about the transition.
     * @type {string}
     * @memberof V1ReplicaSetCondition
     */
    message?: string;
    /**
     * The reason for the condition's last transition.
     * @type {string}
     * @memberof V1ReplicaSetCondition
     */
    reason?: string;
    /**
     * Status of the condition, one of True, False, Unknown.
     * @type {string}
     * @memberof V1ReplicaSetCondition
     */
    status: string;
    /**
     * Type of replica set condition.
     * @type {string}
     * @memberof V1ReplicaSetCondition
     */
    type: string;
}

export function V1ReplicaSetConditionFromJSON(json: any): V1ReplicaSetCondition {
    return V1ReplicaSetConditionFromJSONTyped(json, false);
}

export function V1ReplicaSetConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ReplicaSetCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastTransitionTime': !exists(json, 'lastTransitionTime') ? undefined : (new Date(json['lastTransitionTime'])),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'status': json['status'],
        'type': json['type'],
    };
}

export function V1ReplicaSetConditionToJSON(value?: V1ReplicaSetCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lastTransitionTime': value.lastTransitionTime === undefined ? undefined : (value.lastTransitionTime.toISOString()),
        'message': value.message,
        'reason': value.reason,
        'status': value.status,
        'type': value.type,
    };
}

