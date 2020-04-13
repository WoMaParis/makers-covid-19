import React, { useState, useEffect } from 'react';
import ReactMap, { Layer, Feature, Popup, ZoomControl } from 'react-mapbox-gl';
import Button from './Button.js'
import './Map.css'

const MapBox = ReactMap({ accessToken: process.env.REACT_APP_MAPBOX_TOKEN });

const Map = (props) => {

    const [organisations, setOrganisations] = useState([]);
    const [map, setMap] = useState({
    fitBounds: undefined,
    center: [2.385181, 48.897016],
    zoom: [11],
    });
    const [organisation, setOrganisation] = useState({
        organisation: undefined,
    });
    const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchData = async () => {

        try {
            let organisations = await fetch('/.netlify/functions/getData?organisations=all');
            organisations = await organisations.json();    
            setOrganisations(organisations);
            setLoading(false);

        } catch (error) { console.log(error); }
    };

    fetchData();
}, []);

const close = () => { if (organisation) setOrganisation({ organisation: undefined }); };

const onToggleHover = (cursor, { map }) => { map.getCanvas().style.cursor = cursor; }

const markerClick = (organisation) => {
    setOrganisation({ organisation: organisation })
    setMap({ center: organisation.coordinates, zoom: [14] });
};

return(
    <section className={`${typeof (props.className) !== 'undefined' ? props.className : ''} Map ${loading ? 'Map--Loading' : ''}`}>

            <MapBox
                // eslint-disable-next-line
                style={'mapbox://styles/essen/cjtsfp7dc00201fmfl8jllc3k'}
                // fitBounds= {map.fitbounds}
                containerStyle={{ height: '100%', width: '100%' }}
                center={map.center}
                onDrag={close.bind(this)}
                zoom={map.zoom}
                flyToOptions={{ speed: 0.8 }}
            >
                <ZoomControl />

            <Layer type="circle" id="organisations" >
                    {organisations.map((item, i) => {
                        return (
                            <Feature
                                key={i}
                                onMouseEnter={onToggleHover.bind(this, 'pointer')}
                                onMouseLeave={onToggleHover.bind(this, '')}
                                onClick={markerClick.bind(this, item)}
                                coordinates={item.coordinates}
                            />
                        )
                    })}
                </Layer>


                {organisation.organisation && (
                    <Popup
                        coordinates={organisation.organisation.coordinates}
                        maxWidth={"300px"}
                    >
                        <div className="Section Map__Informations">
                            {organisation.organisation.logoUrl && (<img src={organisation.organisation.logoUrl} alt="illustration" />)}
                            <div className=''>
                                <h3 className='Section__Title'>{organisation.organisation.name}</h3>
                                <div className='Section__Subtitle'>{organisation.organisation.type}</div>

                            {organisation.organisation.adress && (
                                <div className='Section__Text'>
                                    {organisation.organisation.adress}
                                </div>
                            )}

                            {organisation.organisation.websiteUrl && (
                                <div className='Section__Text'>@
                                    <a className={'Simple__Link'} href={`mailto:${organisation.organisation.mail}`}>
                                        {organisation.organisation.lead}
                                    </a>
                                </div>
                            )}
                            </div>
                        </div>
                    {organisation.organisation.websiteUrl && (
                        <div className={'Section--CTA'}>
                            <Button>
                                <a href={organisation.organisation.websiteUrl} rel='noopener noreferrer' target='_blank' >Voir le site</a>
                            </Button>
                        </div>
                    )}

                    </Popup>
                )}

            </MapBox>
 
 
   </section>
)}

export default Map