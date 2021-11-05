import addNode from './addNode';

export default async function putNodes(
  db,
  {
    id,
    content,
    links,
  }
) {
  const queries = [
    db.nodes.put({id, content}),
  ];
  const linkIds = [];

  links.forEach(
    async ({
      id: toId,
      icon,
    }) => {
      if (toId !== null) {
        queries.push(
          db.links.where('from').equals(id).and(({to}) => to === toId).modify({icon})
        );
        linkIds.push(toId);
      } else {
        const nodeId = await addNode(db, { content: '' });

        queries.push(
          db.links.add({ from: id, to: nodeId, icon })
        );
      }
    }
  );

  queries.push(
    db.links.where('to').noneOf(linkIds).and(({from}) => from === id).delete()
  );

  return await Promise.all(queries);
}