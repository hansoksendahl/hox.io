import * as copy from '../data/copy';

export default function getCopy(name) {
  const template = copy[name];

  if (!template) {
    throw new Error('Template ${name} not found!');
  }

  return template.trim().replace(/\n/g, '<br />');
}