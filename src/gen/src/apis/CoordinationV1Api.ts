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


import * as runtime from '../runtime';
import {
    V1APIResourceList,
    V1APIResourceListFromJSON,
    V1APIResourceListToJSON,
    V1DeleteOptions,
    V1DeleteOptionsFromJSON,
    V1DeleteOptionsToJSON,
    V1Lease,
    V1LeaseFromJSON,
    V1LeaseToJSON,
    V1LeaseList,
    V1LeaseListFromJSON,
    V1LeaseListToJSON,
    V1Status,
    V1StatusFromJSON,
    V1StatusToJSON,
} from '../models';

export interface CoordinationV1ApiCreateNamespacedLeaseRequest {
    namespace: string;
    body: V1Lease;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}

export interface CoordinationV1ApiDeleteCollectionNamespacedLeaseRequest {
    namespace: string;
    pretty?: string;
    _continue?: string;
    dryRun?: string;
    fieldSelector?: string;
    gracePeriodSeconds?: number;
    labelSelector?: string;
    limit?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    timeoutSeconds?: number;
    body?: V1DeleteOptions;
}

export interface CoordinationV1ApiDeleteNamespacedLeaseRequest {
    name: string;
    namespace: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: V1DeleteOptions;
}

export interface CoordinationV1ApiListLeaseForAllNamespacesRequest {
    allowWatchBookmarks?: boolean;
    _continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    timeoutSeconds?: number;
    watch?: boolean;
}

export interface CoordinationV1ApiListNamespacedLeaseRequest {
    namespace: string;
    pretty?: string;
    allowWatchBookmarks?: boolean;
    _continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    timeoutSeconds?: number;
    watch?: boolean;
}

export interface CoordinationV1ApiPatchNamespacedLeaseRequest {
    name: string;
    namespace: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
}

export interface CoordinationV1ApiReadNamespacedLeaseRequest {
    name: string;
    namespace: string;
    pretty?: string;
}

export interface CoordinationV1ApiReplaceNamespacedLeaseRequest {
    name: string;
    namespace: string;
    body: V1Lease;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}

/**
 * 
 */
export class CoordinationV1Api extends runtime.BaseAPI {

    /**
     * create a Lease
     */
    async createNamespacedLeaseRaw(requestParameters: CoordinationV1ApiCreateNamespacedLeaseRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Lease>> {
        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling createNamespacedLease.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createNamespacedLease.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.fieldValidation !== undefined) {
            queryParameters['fieldValidation'] = requestParameters.fieldValidation;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases`.replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1LeaseToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1LeaseFromJSON(jsonValue));
    }

    /**
     * create a Lease
     */
    async createNamespacedLease(requestParameters: CoordinationV1ApiCreateNamespacedLeaseRequest, initOverrides?: RequestInit): Promise<V1Lease> {
        const response = await this.createNamespacedLeaseRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * delete collection of Lease
     */
    async deleteCollectionNamespacedLeaseRaw(requestParameters: CoordinationV1ApiDeleteCollectionNamespacedLeaseRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Status>> {
        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling deleteCollectionNamespacedLease.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters._continue !== undefined) {
            queryParameters['continue'] = requestParameters._continue;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldSelector !== undefined) {
            queryParameters['fieldSelector'] = requestParameters.fieldSelector;
        }

        if (requestParameters.gracePeriodSeconds !== undefined) {
            queryParameters['gracePeriodSeconds'] = requestParameters.gracePeriodSeconds;
        }

        if (requestParameters.labelSelector !== undefined) {
            queryParameters['labelSelector'] = requestParameters.labelSelector;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.orphanDependents !== undefined) {
            queryParameters['orphanDependents'] = requestParameters.orphanDependents;
        }

        if (requestParameters.propagationPolicy !== undefined) {
            queryParameters['propagationPolicy'] = requestParameters.propagationPolicy;
        }

        if (requestParameters.resourceVersion !== undefined) {
            queryParameters['resourceVersion'] = requestParameters.resourceVersion;
        }

        if (requestParameters.resourceVersionMatch !== undefined) {
            queryParameters['resourceVersionMatch'] = requestParameters.resourceVersionMatch;
        }

        if (requestParameters.timeoutSeconds !== undefined) {
            queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases`.replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: V1DeleteOptionsToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1StatusFromJSON(jsonValue));
    }

    /**
     * delete collection of Lease
     */
    async deleteCollectionNamespacedLease(requestParameters: CoordinationV1ApiDeleteCollectionNamespacedLeaseRequest, initOverrides?: RequestInit): Promise<V1Status> {
        const response = await this.deleteCollectionNamespacedLeaseRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * delete a Lease
     */
    async deleteNamespacedLeaseRaw(requestParameters: CoordinationV1ApiDeleteNamespacedLeaseRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Status>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling deleteNamespacedLease.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling deleteNamespacedLease.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.gracePeriodSeconds !== undefined) {
            queryParameters['gracePeriodSeconds'] = requestParameters.gracePeriodSeconds;
        }

        if (requestParameters.orphanDependents !== undefined) {
            queryParameters['orphanDependents'] = requestParameters.orphanDependents;
        }

        if (requestParameters.propagationPolicy !== undefined) {
            queryParameters['propagationPolicy'] = requestParameters.propagationPolicy;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: V1DeleteOptionsToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1StatusFromJSON(jsonValue));
    }

    /**
     * delete a Lease
     */
    async deleteNamespacedLease(requestParameters: CoordinationV1ApiDeleteNamespacedLeaseRequest, initOverrides?: RequestInit): Promise<V1Status> {
        const response = await this.deleteNamespacedLeaseRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get available resources
     */
    async getAPIResourcesRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1APIResourceList>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/coordination.k8s.io/v1/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1APIResourceListFromJSON(jsonValue));
    }

    /**
     * get available resources
     */
    async getAPIResources(initOverrides?: RequestInit): Promise<V1APIResourceList> {
        const response = await this.getAPIResourcesRaw(initOverrides);
        return await response.value();
    }

    /**
     * list or watch objects of kind Lease
     */
    async listLeaseForAllNamespacesRaw(requestParameters: CoordinationV1ApiListLeaseForAllNamespacesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1LeaseList>> {
        const queryParameters: any = {};

        if (requestParameters.allowWatchBookmarks !== undefined) {
            queryParameters['allowWatchBookmarks'] = requestParameters.allowWatchBookmarks;
        }

        if (requestParameters._continue !== undefined) {
            queryParameters['continue'] = requestParameters._continue;
        }

        if (requestParameters.fieldSelector !== undefined) {
            queryParameters['fieldSelector'] = requestParameters.fieldSelector;
        }

        if (requestParameters.labelSelector !== undefined) {
            queryParameters['labelSelector'] = requestParameters.labelSelector;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.resourceVersion !== undefined) {
            queryParameters['resourceVersion'] = requestParameters.resourceVersion;
        }

        if (requestParameters.resourceVersionMatch !== undefined) {
            queryParameters['resourceVersionMatch'] = requestParameters.resourceVersionMatch;
        }

        if (requestParameters.timeoutSeconds !== undefined) {
            queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds;
        }

        if (requestParameters.watch !== undefined) {
            queryParameters['watch'] = requestParameters.watch;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/coordination.k8s.io/v1/leases`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1LeaseListFromJSON(jsonValue));
    }

    /**
     * list or watch objects of kind Lease
     */
    async listLeaseForAllNamespaces(requestParameters: CoordinationV1ApiListLeaseForAllNamespacesRequest, initOverrides?: RequestInit): Promise<V1LeaseList> {
        const response = await this.listLeaseForAllNamespacesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * list or watch objects of kind Lease
     */
    async listNamespacedLeaseRaw(requestParameters: CoordinationV1ApiListNamespacedLeaseRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1LeaseList>> {
        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling listNamespacedLease.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.allowWatchBookmarks !== undefined) {
            queryParameters['allowWatchBookmarks'] = requestParameters.allowWatchBookmarks;
        }

        if (requestParameters._continue !== undefined) {
            queryParameters['continue'] = requestParameters._continue;
        }

        if (requestParameters.fieldSelector !== undefined) {
            queryParameters['fieldSelector'] = requestParameters.fieldSelector;
        }

        if (requestParameters.labelSelector !== undefined) {
            queryParameters['labelSelector'] = requestParameters.labelSelector;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.resourceVersion !== undefined) {
            queryParameters['resourceVersion'] = requestParameters.resourceVersion;
        }

        if (requestParameters.resourceVersionMatch !== undefined) {
            queryParameters['resourceVersionMatch'] = requestParameters.resourceVersionMatch;
        }

        if (requestParameters.timeoutSeconds !== undefined) {
            queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds;
        }

        if (requestParameters.watch !== undefined) {
            queryParameters['watch'] = requestParameters.watch;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases`.replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1LeaseListFromJSON(jsonValue));
    }

    /**
     * list or watch objects of kind Lease
     */
    async listNamespacedLease(requestParameters: CoordinationV1ApiListNamespacedLeaseRequest, initOverrides?: RequestInit): Promise<V1LeaseList> {
        const response = await this.listNamespacedLeaseRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * partially update the specified Lease
     */
    async patchNamespacedLeaseRaw(requestParameters: CoordinationV1ApiPatchNamespacedLeaseRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Lease>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling patchNamespacedLease.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling patchNamespacedLease.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchNamespacedLease.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.fieldValidation !== undefined) {
            queryParameters['fieldValidation'] = requestParameters.fieldValidation;
        }

        if (requestParameters.force !== undefined) {
            queryParameters['force'] = requestParameters.force;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1LeaseFromJSON(jsonValue));
    }

    /**
     * partially update the specified Lease
     */
    async patchNamespacedLease(requestParameters: CoordinationV1ApiPatchNamespacedLeaseRequest, initOverrides?: RequestInit): Promise<V1Lease> {
        const response = await this.patchNamespacedLeaseRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * read the specified Lease
     */
    async readNamespacedLeaseRaw(requestParameters: CoordinationV1ApiReadNamespacedLeaseRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Lease>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling readNamespacedLease.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling readNamespacedLease.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1LeaseFromJSON(jsonValue));
    }

    /**
     * read the specified Lease
     */
    async readNamespacedLease(requestParameters: CoordinationV1ApiReadNamespacedLeaseRequest, initOverrides?: RequestInit): Promise<V1Lease> {
        const response = await this.readNamespacedLeaseRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * replace the specified Lease
     */
    async replaceNamespacedLeaseRaw(requestParameters: CoordinationV1ApiReplaceNamespacedLeaseRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Lease>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling replaceNamespacedLease.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling replaceNamespacedLease.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling replaceNamespacedLease.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.fieldValidation !== undefined) {
            queryParameters['fieldValidation'] = requestParameters.fieldValidation;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1LeaseToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1LeaseFromJSON(jsonValue));
    }

    /**
     * replace the specified Lease
     */
    async replaceNamespacedLease(requestParameters: CoordinationV1ApiReplaceNamespacedLeaseRequest, initOverrides?: RequestInit): Promise<V1Lease> {
        const response = await this.replaceNamespacedLeaseRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
