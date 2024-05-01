import { readdir } from 'fs/promises';

const getDirs = async (path: string) => {
  const entries = await readdir(path, { withFileTypes: true })

  return entries.filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
}

export default getDirs