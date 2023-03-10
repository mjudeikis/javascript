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
    V1ObjectMeta,
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';
import {
    V1SelfSubjectAccessReviewSpec,
    V1SelfSubjectAccessReviewSpecFromJSON,
    V1SelfSubjectAccessReviewSpecFromJSONTyped,
    V1SelfSubjectAccessReviewSpecToJSON,
} from './V1SelfSubjectAccessReviewSpec';
import {
    V1SubjectAccessReviewStatus,
    V1SubjectAccessReviewStatusFromJSON,
    V1SubjectAccessReviewStatusFromJSONTyped,
    V1SubjectAccessReviewStatusToJSON,
} from './V1SubjectAccessReviewStatus';

/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 * @export
 * @interface V1SelfSubjectAccessReview
 */
export interface V1SelfSubjectAccessReview {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1SelfSubjectAccessReview
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1SelfSubjectAccessReview
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1SelfSubjectAccessReview
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1SelfSubjectAccessReviewSpec}
     * @memberof V1SelfSubjectAccessReview
     */
    spec: V1SelfSubjectAccessReviewSpec;
    /**
     * 
     * @type {V1SubjectAccessReviewStatus}
     * @memberof V1SelfSubjectAccessReview
     */
    status?: V1SubjectAccessReviewStatus;
}

export function V1SelfSubjectAccessReviewFromJSON(json: any): V1SelfSubjectAccessReview {
    return V1SelfSubjectAccessReviewFromJSONTyped(json, false);
}

export function V1SelfSubjectAccessReviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SelfSubjectAccessReview {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': V1SelfSubjectAccessReviewSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1SubjectAccessReviewStatusFromJSON(json['status']),
    };
}

export function V1SelfSubjectAccessReviewToJSON(value?: V1SelfSubjectAccessReview | null): any {
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
        'spec': V1SelfSubjectAccessReviewSpecToJSON(value.spec),
        'status': V1SubjectAccessReviewStatusToJSON(value.status),
    };
}

