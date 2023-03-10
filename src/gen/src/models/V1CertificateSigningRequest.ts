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
    V1CertificateSigningRequestSpec,
    V1CertificateSigningRequestSpecFromJSON,
    V1CertificateSigningRequestSpecFromJSONTyped,
    V1CertificateSigningRequestSpecToJSON,
} from './V1CertificateSigningRequestSpec';
import {
    V1CertificateSigningRequestStatus,
    V1CertificateSigningRequestStatusFromJSON,
    V1CertificateSigningRequestStatusFromJSONTyped,
    V1CertificateSigningRequestStatusToJSON,
} from './V1CertificateSigningRequestStatus';
import {
    V1ObjectMeta,
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './V1ObjectMeta';

/**
 * CertificateSigningRequest objects provide a mechanism to obtain x509 certificates by submitting a certificate signing request, and having it asynchronously approved and issued.
 * 
 * Kubelets use this API to obtain:
 *  1. client certificates to authenticate to kube-apiserver (with the "kubernetes.io/kube-apiserver-client-kubelet" signerName).
 *  2. serving certificates for TLS endpoints kube-apiserver can connect to securely (with the "kubernetes.io/kubelet-serving" signerName).
 * 
 * This API can be used to request client certificates to authenticate to kube-apiserver (with the "kubernetes.io/kube-apiserver-client" signerName), or to obtain certificates from custom non-Kubernetes signers.
 * @export
 * @interface V1CertificateSigningRequest
 */
export interface V1CertificateSigningRequest {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1CertificateSigningRequest
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1CertificateSigningRequest
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1CertificateSigningRequest
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1CertificateSigningRequestSpec}
     * @memberof V1CertificateSigningRequest
     */
    spec: V1CertificateSigningRequestSpec;
    /**
     * 
     * @type {V1CertificateSigningRequestStatus}
     * @memberof V1CertificateSigningRequest
     */
    status?: V1CertificateSigningRequestStatus;
}

export function V1CertificateSigningRequestFromJSON(json: any): V1CertificateSigningRequest {
    return V1CertificateSigningRequestFromJSONTyped(json, false);
}

export function V1CertificateSigningRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CertificateSigningRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': V1CertificateSigningRequestSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1CertificateSigningRequestStatusFromJSON(json['status']),
    };
}

export function V1CertificateSigningRequestToJSON(value?: V1CertificateSigningRequest | null): any {
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
        'spec': V1CertificateSigningRequestSpecToJSON(value.spec),
        'status': V1CertificateSigningRequestStatusToJSON(value.status),
    };
}

