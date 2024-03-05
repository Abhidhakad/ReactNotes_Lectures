function customRender(createElement,container){
    const newElement = document.createElement(createElement.type);
    newElement.innerHTML = createElement.children;

    for (const prop in createElement.props){
        newElement.setAttribute(prop,createElement.props[prop])
    }

    container.appendChild(newElement);
}
const createElement = {
    type : 'a',
    props : {
        href : 'https:/Linkedin.com',
        target : '_blank'
    },
    children : 'Go To Linkedin: '

}
const container = document.getElementById("root");
customRender(createElement,container);