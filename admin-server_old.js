
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({
	extended: true
}))

const path = require('path');
const publicPath = path.join(__dirname, 'html');
const publicPath22 = path.join(__dirname, 'sample');

const pathDashboard01 = path.join(__dirname, 'sample/dashboard01');

//app.use(express.static(__dirname));
// app.use(express.static('./'));

const myIP = '192.168.35.246'; //   192.168.35.246     210.101.173.162
const port = 1323;
const fs = require('fs')
var cors = require('cors');

// let corsOptions = {
//     origin: 'http://' + myIP +":"+port, 
//    // credentials: true
// }
// app.use(cors(corsOptions));

app.use(cors()); // 모든 Origin, 모든 Method 허용

// const corsOptions = {
//     origin: 'http://192.168.35.246:1113', // 이미지를 요청하는 클라이언트(프론트엔드)의 출처
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // 허용할 HTTP 메서드
//     credentials: true, // 자격 증명 허용 (쿠키 등을 포함한 요청 시 필요)
//     optionsSuccessStatus: 204 // Preflight 요청 성공 시 상태 코드
// };
// app.use(cors(corsOptions));

// 파일 확장자에 따른 MIME 타입 맵 (Node.js 기본 http 모듈과 동일하게 사용 가능)
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.txt': 'text/plain',
    // ... 더 많은 MIME 타입
};


// 2. 특정 API 엔드포인트에서 동적으로 생성되거나 특정 경로의 파일을 스트리밍할 때
// Base64 인코딩된 파일명을 처리할 새로운 라우트





// 정적 파일 제공 (예: /images 폴더에 이미지 파일이 있다고 가정)
// 외부에서 접근할 수 있게
const oldDataPath = path.join(__dirname, 'data');
app.use('/oldData', express.static(oldDataPath));



// const layout = require('./components/layout.js');

const multer = require('multer');
// const upload = multer({
// 	dest: 'data/files/'
// });

const upload = multer({
    storage: multer.diskStorage({
      	filename(req, file, done) {
			//console.log("filename  ~~ ", req.body.directoryName);
			file.originalname = Buffer.from(file.originalname, 'ascii').toString('utf8' );
			done(null, file.originalname);
        },
		destination(req, file, done) {
			//console.log("destination  ~~ ", req.files, file);
			if( file.mimetype.indexOf("image") > -1 ) done(null, path.join(__dirname, "data/files/"));
			else {
				const folderName = 'data/sample/'+req.body.directoryName;

				console.log("folder 폴더이름 - ", req.body.directoryName);
				try {
					if (!fs.existsSync(folderName)) {

						console.log("folder ?????", req.body.directoryName);
						fs.mkdirSync(folderName);
						fs.mkdirSync(folderName+"/html");
					}
				} catch (err) {
					console.error(err);
				}
				done(null, path.join(__dirname, folderName+"/html/"));
			}
	    }
    }),
	fileFilter : (req, file, callback) => {

		callback(null, true);
		// if( !req.body ){
		// 	callback({message: console.log("fileFilter  ~~ ", req.body)}, false)
		// } else {
		// 	callback({message: console.log("fileFilter 222  ~~ ", req.body)}, true);
		// }
	}
});
//const uploadMiddleware = upload.single('image');
//const uploadMiddleware = upload.array('image');
const uploadMiddleware = upload.fields([
	{ name: "mainOpenImages" },
	{ name: "mainimage" },
	{ name: "subimage" },
	{ name: "page" },
	
]);// { name: "myData" }

//app.use(uploadMiddleware);



app.post('/update', uploadMiddleware, (req, res) => {
	const result = req.body;


	const fileData = fs.readFileSync('data/myList.json', 'utf8');

	let originData = JSON.parse(fileData);//.find( t => t.order === Number(req.body.update) );

	// console.log("originData - "  ,originData   ); // tt.find( t => t.order === req.body.update ) 
	let newData = JSON.parse(req.body.myData);

	console.log("=update===update====update===update=====================");
	console.log(req.body.update, newData);
	console.log("=11update===============================");
	let updateData = originData.map( d => {
		if( d.order === Number(req.body.update) ){
			for( let key in newData ){
				//console.log("key 확인 - ",key, d[key]);
				d[key] = newData[key]
			}
			//d.order = Number(req.body.update);
		}
		return d;
	})

	console.log("222update - ", updateData[Number(req.body.update)-1] );
	// JSON.parse(req.body.myData);

	// let afterItem = Object.keys(beforeItem).map(
	// 	(key) => beforeItem[key] = updateItem[key]
	// );

	fs.writeFile('data/myList.json', JSON.stringify(updateData),(err) => {
		if (err) {  console.error(err);  return; };
	});

	res.send("메롱222");
	//res.sendFile(publicPath+'/testUpload2.html')
});

app.post('/upload', uploadMiddleware, (req, res) => {
	const result = req.body;
	console.log("=00===============================");
	console.log( req.body.testID, req.body.myData); 
	console.log("=11===============================");
	//let tt = JSON.parse(req.body.myData);
	//console.log(tt , tt.category );
	// console.log("=22===============================");
	// console.log(req.files);

	// fs.readFile('./data/test.txt', 'utf8', (err, data) => {
	// 	console.log(data);
	// });

	const fileData = fs.readFileSync('data/myList.json', 'utf8');

	console.log("=33===============================");

	let tt;
	let temp = [];
	if( fileData === "" ){
		//console.log("=cc=", JSON.stringify(temp), req.body);
		req.body.id = 1;
		
		tt = JSON.parse(req.body.myData);
		tt.order = 1;
		temp.push(tt);
		fs.writeFile('data/myList.json', JSON.stringify(temp),(err) => {
			if (err) {  console.error(err);  return; };
			console.log("File has been created111111 - ", tt.sampleName );
		});
	} else{
		//console.log("=cc2222=", fileData);
		temp = JSON.parse(fileData);
		
		tt = JSON.parse(req.body.myData);
		tt.order = temp.length + 1;
		temp.push(tt);
		fs.writeFile('data/myList.json', JSON.stringify(temp),(err) => {
			if (err) {  console.error(err);  return; };
			console.log("File has been created 2 222222", tt.sampleName );
		});
	}

	console.log("=33333====");

	res.send("메롱");
	//res.sendFile(publicPath+'/testUpload2.html')
});

app.post('/updateorder', uploadMiddleware, (req, res) => {
	const result = req.body;

	const fileData = fs.readFileSync('data/myList.json', 'utf8');
	let originData = JSON.parse(fileData);

	let updateOrder = JSON.parse(req.body.updateOrder);

	let updateData = originData.map( o => {
		let [ u] = updateOrder.filter( z => Number(z.init) === o.order );
		Number(u.init) !== Number(u.now) ? o.order = Number(u.now) : '';
		return o;
	})

	const sortedCopy = updateData.slice().sort((a, b) => a.order - b.order);

	fs.writeFile('data/myList.json', JSON.stringify(sortedCopy),(err) => {
		if (err) {  console.error(err);  return; };
	});

});





const pageUrl = {
	main : publicPath+'/'+ 'listIndex.html',

	admin : publicPath+'/'+ 'admin.html',
	testAdmin : publicPath+'/'+ 'myAdmin.html',

	sub : publicPath+'/'+ 'index.html',
	uitest : publicPath+'/'+ 'ui-test.html',
	uitest2 : publicPath+'/'+ 'ui-test2.html',
	uiupload : publicPath+'/'+ 'ui-upload.html',
	uifullcalendar : publicPath+'/'+ 'ui-fullcalendar.html',
	dashboard01 : publicPath22+'/'+ 'dashboard01/html/index.html',

	dashboard02 : publicPath22+'/'+ 'dashboard02/html/main.html',

	site01 : publicPath22+'/'+ 'site01/temp/sub-index.html',
	site02 : publicPath22+'/'+ 'site02/blindness.html',
	'scroll-animation-1' : publicPath22+'/'+ 'scroll-animation-1/scroll-animation-1.html',
	swiper : publicPath22+'/'+ 'swiper/index.html',
	timePicker : publicPath22+'/'+ 'timePicker/index.html',

	uploadfiles : publicPath22+'/'+ 'uploadFiles/index.html'
}

app.get("/", (req, res) => res.sendFile( findPageUrl(req.params.id) ) );

// app.get("/:id", (req, res) =>  res.sendFile( findPageUrl(req.params.id))  );
app.get("/:id", (req, res) => { 
	console.log(" 222?// - ", req.params, req.query.sub);

	if( req.params.id === 'dashboard02'){
		if(  req.query.sub  ){
			res.sendFile( publicPath22+'/'+ 'dashboard02/html/'+  req.query.sub + ".html" );
		} else {
			res.sendFile(  findPageUrl(req.params.id));
		}
	} else if( req.params.id === 'testAdmin' ){
		if(  req.query.sub  ){
			res.sendFile(publicPath+'/'+  req.query.sub + ".html" );
		} else {
			res.sendFile(  findPageUrl(req.params.id));
		}
	} else {
		res.sendFile( findPageUrl(req.params.id) )
	}
	
});



function findPageUrl(id){
	if( !id ) id = 'main'; 
	console.log(" get page : ", id)
	return pageUrl[id]

}


// app.get("/admin", (req, res) => {
// 	//html = layout.sub("test_SUB_title", 'subpage test');
// 	//res.send(html);
// 	//return res.send(html);
// 	res.sendFile(publicPath+'/'+ 'admin.html') // testUpload2.html     0_ui확인.html
// });


app.listen(port, () => {
    console.log('server is running at port',port, __dirname, publicPath);
});