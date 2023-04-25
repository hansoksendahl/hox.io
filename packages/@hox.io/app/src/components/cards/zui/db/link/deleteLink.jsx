export default async function(db, from, to) {
  return await db.links.where('from').equals(from).and(({to}) => to === to).delete();
}