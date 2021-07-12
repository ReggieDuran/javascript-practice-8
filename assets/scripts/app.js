class Tooltip {}

class ProjectItem {}

class ProjectList {
    constructor(type) {
        const prjItem = document.querySelectorAll(`#${type}-projects li`);
        console.log(prjItem);
    }
}

class App {
    static init() {
        const activeProjectList = new ProjectList('active');
        const finishedProjectList = new ProjectList('finished');
    }
}

App.init();