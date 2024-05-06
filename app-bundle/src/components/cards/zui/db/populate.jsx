import jsonDump from './dump.json';
import {ROOT_ID} from '../constants';

/**
 * Populate the database
 * 
 * This is an async function so it cannot technically use `dexie.on('populate)`.
 * [Documentation](https://dexie.org/docs/Dexie/Dexie.on.populate).
 * 
 * @param {Object} tx A Dexie database transaction instance
 */
export default async function populate(tx) {
  const count = await tx.nodes.count();

  if (count === 0) {
    jsonDump.data.data.forEach(async ({ tableName, rows }) => {
      await tx[tableName].bulkAdd(rows)
    })
    // await tx.nodes.bulkAdd(jsonDump.nodes);
    // await tx.links.bulkAdd(jsonDump.links);
    const {id: rootId} = await tx.nodes.orderBy('id').limit(1).first();

    localStorage.setItem(ROOT_ID, rootId);
  }
}