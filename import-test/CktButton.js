
const domContainer1 = document.querySelector('#ckt');
const root1 = ReactDOM.createRoot(domContainer1);
root1.render(React.createElement(
    'button',
    { 
        onClick: () => alert("test")
    },
    'Ckt button ssss内容'
));
