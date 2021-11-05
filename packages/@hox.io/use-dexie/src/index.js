import Dexie from 'dexie';
import {useState, useEffect} from 'react';

/**
 * @typedef {Object} Version
 * @property {number} versionNumber The version number of the database
 * @property {Object} stores A Dexie store description object
 * @property {Function} upgrade An upgrade function for this version.
 */


 /**
  * A function which will return a useDexie version object.
  * 
  * @param {number} versionNumber
  * @param {Object} stores
  * @param {Function} upgrade
  * @return {Version}
  */
export function version(
  versionNumber,
  stores,
  upgrade = null,
) {
  return {
    versionNumber,
    stores,
    upgrade,
  }
}

/**
 * 
 * @param {string} dbName The database name
 * @param {Version[]} versions An array of database Version objects
 * @param {Function} populate A function to populate the database
 * @param {Function} ready A function to run when the database is ready
 * @return Dexie
 */
export default function useDexie(
  dbName,
  versions,
  populate = null,
  ready = null,
) {
  const [db, setDb] = useState(null);

  useEffect(
    () => {
      const connection = new Dexie(dbName);

      for (const versionDescription of versions) {
        const {versionNumber, stores, upgrade} = versionDescription;
        const version = connection.version(versionNumber)
        version.stores(stores);
        
        if (upgrade) version.upgrade(upgrade);
      }

      if (populate) {
        connection.on('populate', populate);
      }

      connection.on('ready', tx => {
        setDb(connection);

        if (ready) ready(connection);
      });

      connection.open();

      return () => {
        connection.close();
      }
    },
    [dbName, versions],
  );

  return db;
}