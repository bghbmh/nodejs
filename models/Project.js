// models/Project.js
// JSON 데이터의 구조를 나타내는 클래스 (Mongoose 모델과는 다름)
class Project {
    constructor({ ID, projectNum, order, mainOpenImages = [], mainimage = [], subimage = [], samplePage = [], ...rest }) {
        this.ID = ID;
        this.projectNum = projectNum;
        this.order = order;
        this.mainOpenImages = mainOpenImages;
        this.mainimage = mainimage;
        this.subimage = subimage;
        this.samplePage = samplePage;
        // 나머지 속성들 (title, description 등)
        Object.assign(this, rest);
    }

    // 필요하다면 유효성 검사 또는 데이터 처리 메서드 추가
    isValid() {
        return this.ID && this.projectNum !== undefined;
    }
}

export default Project;