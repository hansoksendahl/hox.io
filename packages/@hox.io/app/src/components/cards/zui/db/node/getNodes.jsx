import {ROOT_ID} from '../../constants';

/**
 * Recurse looking up all descendents of a node to a given depth.
 * 
 * @param {Dexie} tx A dexie database transaction instance
 * @param {number} from A node id
 * @param {number} depth The depth to recurse
 */
async function recurseNode(
  tx,
  from,
  depth,
  icon,
) {
  const node = await tx.nodes.get(from);
  if (icon) node.icon = icon;

  if (node && depth > 0) {
    const links = await tx.links.where({from}).sortBy('ordinal');

    if (depth > 1) {
      node.links = links.length > 0
        ? await Promise.all(links.map(async ({to}, i) => (
            recurseNode(
              tx,
              to,
              depth - 1,
              links[i].icon
            )
          )))
        : links.length
    } else {
      node.links = links.length;
    }
  }

  return node;
}

/**
 * Set up a Dexie database transaction then recurse within the transaction.
 * 
 * @param {Dexie} tx A dexie database instance
 * @param {number} from A node id
 * @param {number} depth The depth to recurse
 */
export default async function getNodes(
  tx,
  from = parseInt(localStorage.getItem(ROOT_ID)),
  depth=3
) {
  return await tx.transaction('r', tx.nodes, tx.links, async () => {
    return await recurseNode(
      tx,
      from,
      depth,
    );
  });
};