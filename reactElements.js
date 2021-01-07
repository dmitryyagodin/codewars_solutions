// Creating Elements with React
// https://www.codewars.com/kata/55aac03755b0264947000138/javascript

let names = ['Anthony','Mark'];

function createElement(content, tag = 'div', props) {
    return React.createElement(tag, {...props}, content);
}
  
  function createUnorderedList(list) { 
    // create a react unordered list with children list items created form the list argument
    return React.createElement('ul', null, list.map((item, i) => React.createElement('li', {key : i}, item)));
}

ReactDOM.render(createElement("Hello World!", 'h1'), document.getElementById('root'));

ReactDOM.render(createUnorderedList(names), document.getElementById("list"));