class CktButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }
    
        return e(
            'button',
            { 
                onClick: () => this.setState({ 
                    liked: true 
                }) 
            },
            'Ckt button 内容'
        );
    }
}

const domContainer1 = document.querySelector('#ckt');
const root1 = ReactDOM.createRoot(domContainer1);
root1.render(React.createElement((CktButton)));
