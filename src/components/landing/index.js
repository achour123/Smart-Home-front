import React from 'react';
import { Button } from 'react-bootstrap';

const Landing = () => {
    return (
        <div className="container-fluid">
            <div className="row no-gutter">
                <div className="col-md-6 d-none d-md-flex bg-image" 
                    style={{ 
                        backgroundImage: `url("https://previews.123rf.com/images/aimage/aimage1505/aimage150500051/40259822-smart-home-automatisation-vecteur-de-fond-dispositifs-de-maison-intelligente-connect%C3%A9s-comme-le-t%C3%A9l%C3%A9phon.jpg")`, 
                        backgroundSize: 'cover', backgroundPosition: 'center center', minHeight: '100vh'
                         }}>
                </div>
                <div className="col-md-6 bg-light">
                    <div className="forget d-flex align-items-center py-5">
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-10 col-xl-7 mx-auto' style={{margin:'0 auto',textAlign:'center'}}>
                                    <h4 className='display-4' style={{textAlign:'center'}}>Bienvenu sur Smart_Home</h4>
                                    <div style={{marginLeft:'15%',marginTop:'35%'}}>
                                        
                                            <Button className="btn btn-info btn-block text-uppercase mb-2 rounded-pill shadow-sm " href='/signup'>Inscription</Button>
                                            <Button className="btn btn-secondary btn-block text-uppercase mb-2 rounded-pill shadow-sm" href='/login'>Connexion</Button>
                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;
