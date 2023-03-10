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
    IntOrString,
    IntOrStringFromJSON,
    IntOrStringFromJSONTyped,
    IntOrStringToJSON,
} from './IntOrString';
import {
    V1LabelSelector,
    V1LabelSelectorFromJSON,
    V1LabelSelectorFromJSONTyped,
    V1LabelSelectorToJSON,
} from './V1LabelSelector';

/**
 * PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
 * @export
 * @interface V1PodDisruptionBudgetSpec
 */
export interface V1PodDisruptionBudgetSpec {
    /**
     * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
     * @type {IntOrString}
     * @memberof V1PodDisruptionBudgetSpec
     */
    maxUnavailable?: IntOrString;
    /**
     * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
     * @type {IntOrString}
     * @memberof V1PodDisruptionBudgetSpec
     */
    minAvailable?: IntOrString;
    /**
     * 
     * @type {V1LabelSelector}
     * @memberof V1PodDisruptionBudgetSpec
     */
    selector?: V1LabelSelector;
    /**
     * UnhealthyPodEvictionPolicy defines the criteria for when unhealthy pods should be considered for eviction. Current implementation considers healthy pods, as pods that have status.conditions item with type="Ready",status="True".
     * 
     * Valid policies are IfHealthyBudget and AlwaysAllow. If no policy is specified, the default behavior will be used, which corresponds to the IfHealthyBudget policy.
     * 
     * IfHealthyBudget policy means that running pods (status.phase="Running"), but not yet healthy can be evicted only if the guarded application is not disrupted (status.currentHealthy is at least equal to status.desiredHealthy). Healthy pods will be subject to the PDB for eviction.
     * 
     * AlwaysAllow policy means that all running pods (status.phase="Running"), but not yet healthy are considered disrupted and can be evicted regardless of whether the criteria in a PDB is met. This means perspective running pods of a disrupted application might not get a chance to become healthy. Healthy pods will be subject to the PDB for eviction.
     * 
     * Additional policies may be added in the future. Clients making eviction decisions should disallow eviction of unhealthy pods if they encounter an unrecognized policy in this field.
     * 
     * This field is alpha-level. The eviction API uses this field when the feature gate PDBUnhealthyPodEvictionPolicy is enabled (disabled by default).
     * @type {string}
     * @memberof V1PodDisruptionBudgetSpec
     */
    unhealthyPodEvictionPolicy?: string;
}

export function V1PodDisruptionBudgetSpecFromJSON(json: any): V1PodDisruptionBudgetSpec {
    return V1PodDisruptionBudgetSpecFromJSONTyped(json, false);
}

export function V1PodDisruptionBudgetSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PodDisruptionBudgetSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'maxUnavailable': !exists(json, 'maxUnavailable') ? undefined : IntOrStringFromJSON(json['maxUnavailable']),
        'minAvailable': !exists(json, 'minAvailable') ? undefined : IntOrStringFromJSON(json['minAvailable']),
        'selector': !exists(json, 'selector') ? undefined : V1LabelSelectorFromJSON(json['selector']),
        'unhealthyPodEvictionPolicy': !exists(json, 'unhealthyPodEvictionPolicy') ? undefined : json['unhealthyPodEvictionPolicy'],
    };
}

export function V1PodDisruptionBudgetSpecToJSON(value?: V1PodDisruptionBudgetSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'maxUnavailable': IntOrStringToJSON(value.maxUnavailable),
        'minAvailable': IntOrStringToJSON(value.minAvailable),
        'selector': V1LabelSelectorToJSON(value.selector),
        'unhealthyPodEvictionPolicy': value.unhealthyPodEvictionPolicy,
    };
}

