
// default import
import getSessions, { sessionTemplate } from './sessionRepository.js';
// import sessionTemplate from './template.js';

function render() {
    var list = document.querySelector('#sessions');
    if (!list) return;
    list.innerHTML = sessionTemplate(data.listItems);
};


var data = {
    listItems: []
};

getSessions()
    .then((sessions) => {
        console.log('promises!')
        data.listItems = sessions;
        render();
    });
