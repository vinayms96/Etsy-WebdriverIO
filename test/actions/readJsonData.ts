import * as fs from 'fs';
import { UserData } from '../interfaces/readJsonInterface.ts';

class ReadJsonData {

    public getData(path: string): UserData {
        const rawData = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
        const data = JSON.parse(rawData.toString()) as UserData;
        return data;
    }
}

export default new ReadJsonData();