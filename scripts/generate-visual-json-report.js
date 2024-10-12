import { readdir, writeFile } from 'fs/promises';
import { join, relative, resolve } from 'path';

const lokiDir = resolve(import.meta.dirname, '..', '.loki');
const actualDir = resolve(lokiDir, 'current');
const expectedDir = resolve(lokiDir, 'reference');
const diffDir = resolve(lokiDir, 'difference');

(async () => {
  const diffs = await readdir(diffDir);

  await writeFile(
    join(lokiDir, 'report.json'),
    JSON.stringify({
      newItems: [],
      deletedItems: [],
      passedItems: [],
      failedItems: diffs,
      expectedItems: diffs,
      actualItems: diffs,
      diffItems: diffs,
      actualDir: relative(lokiDir, actualDir),
      expectedDir: relative(lokiDir, expectedDir),
      diffDir: relative(lokiDir, diffDir),
    })
  );
})();
