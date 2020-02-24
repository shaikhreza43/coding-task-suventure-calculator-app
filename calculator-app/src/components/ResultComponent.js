import React, {Component} from 'react';



class ResultComponent extends Component {


    render() {
        let {result} = this.props;
        return (
            <div className="mt-2 mb-3">
                <p>{result}</p>
            </div>
    )
        ;
    }
}


export default ResultComponent;
