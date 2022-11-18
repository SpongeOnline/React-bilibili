import fs from './importtest.js'

const e1 = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }
    
        return e1(
            'button',
            { 
                onClick: () => this.setState({ 
                    liked: true 
                }) 
            },
            fs
        );
    }
}

const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);
root.render(e1(LikeButton));
