// app.js
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { PORT, PUBLIC_PATH } from './config/config.js'; // 설정 임포트

// 라우터 임포트
import projectRoutes from './routes/projectRoutes.js';
import fileRoutes from './routes/fileRoutes.js';
import memberRoutes from './routes/memberRoutes.js';
import memberFileRoutes from './routes/memberFileRoutes.js'; // 새 라우터 임포트


// 파일 경로 설정
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// --- 필수 미들웨어: req.body 파싱 ---
app.use(cors()); // CORS 허용 미들웨어
app.use(express.static(PUBLIC_PATH)); // 정적 파일 서비스
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- 라우터 연결 ---
// 각 라우터 모듈을 가져와서 특정 경로에 연결합니다.
app.use('/projects', projectRoutes); // /projects/upload, /projects/update, /projects/jsonDB
app.use('/files', fileRoutes); // /files/:directoryName/:subdir/:filename
app.use('/memberDB', memberRoutes); // /memberDB/
app.use('/member', memberFileRoutes); // /member/:directoryName/:filename (파일 라우터에 포함되어 있으므로 재사용)


// SPA의 catch-all 라우트 (가장 마지막에 위치)
// 모든 API 라우트와 정적 파일 미들웨어 다음에 와야 합니다.
app.get('*', (req, res) => {
    const indexPath = path.join(PUBLIC_PATH, 'index.html');
    res.sendFile(indexPath, (err) => {
        if (err) {
            console.error('index.html 파일 전송 오류:', err);
            res.status(500).send('Internal Server Error');
        }
    });
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}, serving static files from ${PUBLIC_PATH}`);
});