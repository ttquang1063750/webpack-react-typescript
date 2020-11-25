import React from 'react';
interface Props {
    name: string;
}

class Hello extends React.Component<Props, any>{
    render() {
        return (
            <React.Fragment>
                <h2>Hello: {this.props.name}</h2>
                {this.props.children}
            </React.Fragment>
        )
    }
}

export default Hello;
