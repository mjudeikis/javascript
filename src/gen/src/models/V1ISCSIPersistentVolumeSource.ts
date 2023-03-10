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
    V1SecretReference,
    V1SecretReferenceFromJSON,
    V1SecretReferenceFromJSONTyped,
    V1SecretReferenceToJSON,
} from './V1SecretReference';

/**
 * ISCSIPersistentVolumeSource represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
 * @export
 * @interface V1ISCSIPersistentVolumeSource
 */
export interface V1ISCSIPersistentVolumeSource {
    /**
     * chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication
     * @type {boolean}
     * @memberof V1ISCSIPersistentVolumeSource
     */
    chapAuthDiscovery?: boolean;
    /**
     * chapAuthSession defines whether support iSCSI Session CHAP authentication
     * @type {boolean}
     * @memberof V1ISCSIPersistentVolumeSource
     */
    chapAuthSession?: boolean;
    /**
     * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi
     * @type {string}
     * @memberof V1ISCSIPersistentVolumeSource
     */
    fsType?: string;
    /**
     * initiatorName is the custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
     * @type {string}
     * @memberof V1ISCSIPersistentVolumeSource
     */
    initiatorName?: string;
    /**
     * iqn is Target iSCSI Qualified Name.
     * @type {string}
     * @memberof V1ISCSIPersistentVolumeSource
     */
    iqn: string;
    /**
     * iscsiInterface is the interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
     * @type {string}
     * @memberof V1ISCSIPersistentVolumeSource
     */
    iscsiInterface?: string;
    /**
     * lun is iSCSI Target Lun number.
     * @type {number}
     * @memberof V1ISCSIPersistentVolumeSource
     */
    lun: number;
    /**
     * portals is the iSCSI Target Portal List. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
     * @type {Array<string>}
     * @memberof V1ISCSIPersistentVolumeSource
     */
    portals?: Array<string>;
    /**
     * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
     * @type {boolean}
     * @memberof V1ISCSIPersistentVolumeSource
     */
    readOnly?: boolean;
    /**
     * 
     * @type {V1SecretReference}
     * @memberof V1ISCSIPersistentVolumeSource
     */
    secretRef?: V1SecretReference;
    /**
     * targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
     * @type {string}
     * @memberof V1ISCSIPersistentVolumeSource
     */
    targetPortal: string;
}

export function V1ISCSIPersistentVolumeSourceFromJSON(json: any): V1ISCSIPersistentVolumeSource {
    return V1ISCSIPersistentVolumeSourceFromJSONTyped(json, false);
}

export function V1ISCSIPersistentVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ISCSIPersistentVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chapAuthDiscovery': !exists(json, 'chapAuthDiscovery') ? undefined : json['chapAuthDiscovery'],
        'chapAuthSession': !exists(json, 'chapAuthSession') ? undefined : json['chapAuthSession'],
        'fsType': !exists(json, 'fsType') ? undefined : json['fsType'],
        'initiatorName': !exists(json, 'initiatorName') ? undefined : json['initiatorName'],
        'iqn': json['iqn'],
        'iscsiInterface': !exists(json, 'iscsiInterface') ? undefined : json['iscsiInterface'],
        'lun': json['lun'],
        'portals': !exists(json, 'portals') ? undefined : json['portals'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
        'secretRef': !exists(json, 'secretRef') ? undefined : V1SecretReferenceFromJSON(json['secretRef']),
        'targetPortal': json['targetPortal'],
    };
}

export function V1ISCSIPersistentVolumeSourceToJSON(value?: V1ISCSIPersistentVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chapAuthDiscovery': value.chapAuthDiscovery,
        'chapAuthSession': value.chapAuthSession,
        'fsType': value.fsType,
        'initiatorName': value.initiatorName,
        'iqn': value.iqn,
        'iscsiInterface': value.iscsiInterface,
        'lun': value.lun,
        'portals': value.portals,
        'readOnly': value.readOnly,
        'secretRef': V1SecretReferenceToJSON(value.secretRef),
        'targetPortal': value.targetPortal,
    };
}

