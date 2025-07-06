//설정 파일 config/config.js
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const MY_SERVER_IP = process.env.MY_SERVER_IP || 'localhost'; // 환경 변수 사용
export const PORT = 1113;
export const PUBLIC_PATH = path.join(__dirname, '..', 'public');
export const DATA_FOLDER_PATH = path.join(__dirname, '..', 'data');
export const DATABASE_PATH = path.join(DATA_FOLDER_PATH, 'testDB.json'); //myJsonDB 
export const MEMBER_DB_PATH = path.join(DATA_FOLDER_PATH, 'profile', 'info.json');
export const DB_ROOT_DIR = path.join(__dirname, '..', 'data');
// const OLD_SERVER_URL = `http://${MY_SERVER_IP}:1323/oldData`; // 필요하다면 여기에 정의