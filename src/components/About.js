import React from 'react';
import Icone from './icone';



export default function About(props) {

    if (props.data) {
        var name = props.data.name;
        var profilepic = 'images/' + props.data.image;
        //var bio = props.data.bio;
        var street = props.data.address.street;
        var city = props.data.address.city;
        var state = props.data.address.state;
        var phone = props.data.phone;
        var email = props.data.email;
        var resumeDownload = props.data.resumedownload;
    }

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src={profilepic} alt="Hermione Granger Profile Picture" />
                </div>
                <div className="nine columns main-col">
                    <h2>Sobre mim</h2>

                    <p>
                        <Icone />
                    </p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Detalhes do contato</h2>
                            <p className="address">
                                <span>{name}</span><br />
                                <span>{street}<br />
                                    {city} {state}
                                </span><br />
                                <span>{phone}</span><br />
                                <span>{email}</span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download currículo</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

