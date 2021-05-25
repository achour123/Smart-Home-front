import React, { Component } from 'react'

export default class camera extends Component {
    constructor(props){
        super(props);
        this.state={show:false}
    }
    handleCamera=()=>{
        this.setState({
            show:!this.state.show
        })
    }
    render() {
        return (
            <div className='camera'>
                <h3 style={{textAlign:'center'}}>Access Camera</h3>
                <p style={{textAlign:'center'}}>veuillez appuillez sur le boutton ci-dessous pour acceder à la camera</p>
                <span className='cam'>
                    <i className='fas fa-plus-circle fa-2x'
                     style={{marginLeft:'50%',marginRight:'50%'}} 
                     onClick={this.handleCamera}></i>
                </span>
                {
                    this.state.show && (
                        <div className='showCamera'>
                            <div className='cameraContent'>
                                <div className='head'>
                                    <h2>Camera porte d'entrée</h2>
                                </div>
                                <p className='text'>
                                    Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius,
                                    dignissim elementum. 
                                    Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                                    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                                    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.

                                </p>
                                <div className='button return' onClick={this.handleCamera}>Retourner sur la page</div>
                            </div>
                        </div>

                    )
                }
            </div>
        )
    }
}

