import * as fs from "fs";
import { fileURLToPath } from 'url';
import * as path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const readCacaoTrybe = async () => {
  const teste = path.join(__dirname, '/data', '/cacaoTrybeFile.json' );
  try {
    const contentFile = await fs.promises.readFile(teste);
    return JSON.parse(contentFile);
  } catch (error) {
    return null
  }
};

export const getAllChocolates = async () => {
  const cacaoTrybe = await readCacaoTrybe()
  return cacaoTrybe.chocolates
}

