import React from 'react';
import './PropertyDetails.css';  // Ensure this CSS file is linked

const PropertyDetails = () => {
    return (
        <>
        <div className="property-details-container">
                            <div className="image-gallery">
                                {/* Placeholder for images; in practice, these would be <img> tags or a carousel component */}
                                <button className="photo-button">Voir les photos</button>
                            </div>
                            <div className="characteristics">
                                <h2>Caractéristiques</h2>
                                <div className="stats">
                                    <div className="stat">
                                        <h3>Surface carrez</h3>
                                        <p>57m²</p>
                                    </div>
                                    <div className="stat">
                                        <h3>Capacité d'accueil</h3>
                                        <p>6</p>
                                    </div>
                                    <div className="stat">
                                        <h3>Chambres</h3>
                                        <p>2</p>
                                    </div>
                                    <div className="stat">
                                        <h3>Salle de bain</h3>
                                        <p>1</p>
                                    </div>
                                </div>
                                <p className="description">
                                    Au coeur de la ville culturelle et gastronomique de Dijon, cet appartement de trois pièces est idéalement situé pour accueillir les voyageurs désireux d'explorer le riche patrimoine historique ...
                                    <button className="more-button">Voir plus</button>
                                </p>
                            </div>
                        </div>

                        <div className="project-details-container">
            <div className="timeline-container">
                <h2>Calendrier</h2>
                <div className="timeline">
                    {/* Each timeline event could be a component on its own */}
                    <div className="timeline-event">
                        <div className="event-date">18/03/2024</div>
                        <div className="event-description">Offre acceptée par le vendeur</div>
                    </div>
                    <div className="timeline-event">
                        <div className="event-date">11/04/2024</div>
                        <div className="event-description">Signature promesse de vente</div>
                    </div>
                    {/* Additional timeline events */}
                </div>
            </div>
            <div className="documents-container">
                <h2>Documents</h2>
                <div className="document-cards">
                    <div className="document-card">
                        <div className="document-title">FRAGMENTS SA - DIS - OPTF3 Dijon (version longue).pdf</div>
                    </div>
                    <div className="document-card">
                        <div className="document-title">FRAGMENTS SA - DIS - OPTF3 Dijon (version courte).pdf</div>
                    </div>
                    {/* More documents if necessary */}
                </div>
            </div>
        </div>
        </>
    );
};

export default PropertyDetails;
