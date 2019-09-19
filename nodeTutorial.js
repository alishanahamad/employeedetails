var javaTutor = require('./javaTutorial');
exports.node = function () {
    console.log('node tutoirls called and node function')
    function callJavaTutorial() {
        console.log('callJavaTutorial function get called in node js');
        var JT = javaTutor;
        JT.java();
    }
    callJavaTutorial();
}
