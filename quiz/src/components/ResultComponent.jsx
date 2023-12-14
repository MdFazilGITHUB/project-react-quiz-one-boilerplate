import React from "react";
import './ResultComponent.css'

export default class ResultComponent extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <>
            <div className="resultPage">
                <h1>R E S U L T</h1>
                <div className="resultContainer">
                    <h3>You need practice.</h3>
                    <h1>Your score is 20%</h1>
                    <div className="inner-container">
                        <div className="flex">
                            <h4 className="text">Total number of questions</h4>
                            <h4 className="score">15</h4>
                        </div>
                        <div className="flex">
                            <h4 className="text">Number of attempted questions</h4>
                            <h4 className="score">9</h4>
                        </div>
                        <div className="flex">
                            <h4 className="text">Number of correct answers</h4>
                            <h4 className="score">3</h4>
                        </div>
                        <div className="flex">
                            <h4 className="text">Number of wrong answers</h4>
                            <h4 className="score">6</h4>
                        </div>
                    </div>

                </div>
                <div className="buttons">
                    <button>Play Again</button>
                    <button>Back to Home</button>
                </div>
            </div>

            </>
        )
    }
}