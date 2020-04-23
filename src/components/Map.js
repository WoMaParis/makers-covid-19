import React, { useState, useEffect } from 'react';
import ReactMap, { Layer, Feature, Popup, ZoomControl } from 'react-mapbox-gl';
import Button from './Button.js'
import './Map.css'
import { IoIosArrowRoundForward } from 'react-icons/io';

const MapBox = ReactMap({ accessToken: process.env.REACT_APP_MAPBOX_TOKEN });

const Map = (props) => {

    const [organisations, setOrganisations] = useState([]);
    const [map, setMap] = useState({
    fitBounds: undefined,
    center: [2.35183, 48.85658],
    zoom: [11],
    });
    const [selection, setSelection] = useState({selection : undefined});
    const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchData = async () => {

        try {
            let organisations = await fetch('/.netlify/functions/getData?organisations=all');
            organisations = await organisations.json(); 
            organisations = organisations.filter((el, i)=>(el.type === 'Manufacture Ouverte' || el.type === 'Manufacture@Maison'))
            setOrganisations(organisations);
            setLoading(false);

        } catch (error) { console.log(error); }
    };

    fetchData();
}, []);

    const close = () => { if (selection) setSelection({ selection: undefined }); };

    const onToggleHover = (cursor, organisation, {type, map}) => {     
    // if (type === 'mouseenter' && map.transform._zoom > 10) setSelection({ selection: organisation })
    
    map.getCanvas().style.cursor = cursor; 
}

const markerClick = (organisation) => {
    
    setSelection({ selection: organisation })
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
                                onMouseEnter={onToggleHover.bind(this, 'pointer', item)}
                                onMouseLeave={onToggleHover.bind(this, '', 'undefined')}
                                onClick={markerClick.bind(this, item)}
                                coordinates={item.coordinates}
                            />
                        )
                    })}
                </Layer>


                {selection.selection && (
                    <Popup
                        coordinates={selection.selection.coordinates}
                        maxWidth={"300px"}
                    >
                    <div className="Section Section--Horizontal Map__Informations">
                            {selection.selection.logoUrl && (
                            <img className={`Illustration ${selection.selection.type === "Manufacture@Maison" ? 'Illustration--Photo' : '' }`} src={selection.selection.logoUrl} alt="illustration" />
                            )}
                        <div className='Section  Section--Simple'>
                                <h3 className='Section__Title'>{selection.selection.name}</h3>
                                <div className='Section__Subtitle'>{selection.selection.type}</div>

                            {selection.selection.adress && (
                                <div className='Section__Text'>
                                    {selection.selection.adress}
                                </div>
                            )}

                            {(selection.selection.lead && selection.selection.type === 'Manufacture Ouverte' ) ?  (
                                <div className='Section__Text'>
                                    <a className={'Simple__Link'} href={`mailto:${selection.selection.mail}`} target="_self" rel='noopener noreferrer' >
                                        @{selection.selection.lead}
                                    </a>
                                </div>
                            ) : ''}
                            </div>
                    </div>
                    <div className="Section Section--Horizontal Section--NoStack">
                        <span className="Tool ToolTip" data-tooltip="Volontaires">{selection.selection.volunteers} <img className="Tool__Icon" src={'/icons/tools_Volunteer.svg'} alt={'Volontaires'} /></span>
                        <span className="Tool ToolTip" data-tooltip="Laser">{selection.selection.laser} <img className="Tool__Icon" src={'/icons/tools_LaserCutter.svg'} alt={'Découpe Laser'}/></span>
                        <span className="Tool ToolTip" data-tooltip="Cutter">{selection.selection.cutter} <img className="Tool__Icon" src={'/icons/tools_VinylCutter.svg'} alt={'Découpe Vinyle'} /> </span>
                        <span className="Tool ToolTip" data-tooltip="Imprimante 3D">{selection.selection.printer} <img className="Tool__Icon" src={'/icons/tools_3dPrinter.svg'} alt={'Imprimante 3D'}/></span>
                        <span className="Tool ToolTip" data-tooltip="Machines à coudre">{selection.selection.sewingMachine} <img className="Tool__Icon" src={'/icons/tools_SewingMachine.svg'} alt={'Machine à coudre'}/></span>
                    </div>
                    {selection.selection.websiteUrl && (
                        <div className={'Section__Action'}>
                            <Button>
                                <a title={'Voir le site'} href={selection.selection.websiteUrl} rel='noopener noreferrer' target='_blank' >Voir le site <IoIosArrowRoundForward /> </a>
                            </Button>
                        </div>
                    )}
                    <div 
                    className="Close__Button" 
                    onClick={close}>

                    </div>

                    </Popup>
                )}

            </MapBox>
 
 
   </section>
)}

export default Map