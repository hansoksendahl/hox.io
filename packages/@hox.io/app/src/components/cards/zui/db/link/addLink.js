export default async function addLink(db, link) {
  db.links.add(link);
}