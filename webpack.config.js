function getEntry(projectName) {
    let entry = {};
    for (let name of projectName) {
        entry[`${name}/main`] = `./src/${name}/main.js`
    }
    return entry
}

// 将projectName修改为自己的项目名称
const projectName = [
    'helloWorld'
];

const config = {
    entry: getEntry(projectName)
};

module.exports = config