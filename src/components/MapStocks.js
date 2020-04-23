import React, { useState, useEffect, Fragment } from 'react';
import ReactMap, { Layer, Feature, Popup, ZoomControl } from 'react-mapbox-gl';
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import './Map.css'

const MapBox = ReactMap({ accessToken: process.env.REACT_APP_MAPBOX_TOKEN });

const MapStocks = (props) => {
    
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
            let organisations = await fetch('/.netlify/functions/getData?stocks=all');
            
            organisations = await organisations.json(); 
            console.log(organisations);
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

    <Fragment>

        <section className={`Ask__Actions Section Section--Simple`}>
            <div className={"Section"}>
                <div className={"Section__Action"}>
                    <Link to="/ask" >
                        <IoIosArrowRoundBack /> Retour
                </Link>
                </div>
                <h1 className={"Section__Title"}>

                    Demande de petites quantités
            </h1>
                <h2 className={"Section__Subtitle"}>
                    Moins de 50 unités
            </h2>
                <div className={"Section__Text"}>
                    Si un lieu à le stock dont vous avez besoin, le plus simple et le plus rapide est que vous contactiez le lieux de production le plus proche de vous. Vérifier les stocks sur la carte et contactez les ensuite par mail pour récuperer le materiel.
            </div>
            </div>
            <div className={`Section Section--Simple Section--Bordered StocksList  ${loading ? 'Section--Loading' : ''}`}>

                {organisations.map((el, i) =>{ 
                    let active = false;
                    if (typeof (selection.selection) !== 'undefined') active = selection.selection.name === el.name;
                    return(
                        
                    <div className={`Section Section--Hoverable Section--Horizontal ${active ? 'Section--Emphasis' : ''}`} key={i} onClick={markerClick.bind(this, el)} >

                    <img className={'Section__Illustration'} alt={'Logo'} src={el.logoUrl} />

                    <div className={"Section Section--Simple StocksInformation"}>
                        <h3 className='Section__Title'>{el.name}</h3>
                        {el.adress && (
                            <div className='Section__Subtitle'>
                                {el.adress}
                            </div>
                        )}
                        {(el.lead && el.type === 'Manufacture Ouverte') ? (
                            <div className='Section__Text'>
                                <a className={'Simple__Link'} href={`mailto:${el.mail}`} target="_self" rel='noopener noreferrer' >
                                    @{el.lead}
                                </a>
                            </div>
                        ) : ''}                   
                    </div>

                            <div className="Section  Section--Simple Section--Horizontal Tools Section--NoStack">
                            <span className="Tool ToolTip" data-tooltip="Visières">{el.shield} <img className="Tool__Icon" src={'/icons/models_Shield.svg'} alt={'Visières'} /></span>
                            <span className="Tool ToolTip" data-tooltip="Masques">{el.mask} <img className="Tool__Icon" src={'/icons/models_Mask.svg'} alt={'Masques'} /></span>
                                <span className="Tool ToolTip" data-tooltip="Blouses">{el.blouse} <img className="Tool__Icon" src={'/icons/models_Blouses.svg'} alt={'Blouses'} /> </span>
                                <span className="Tool ToolTip" data-tooltip="Adaptateur">{el.adaptor} <img className="Tool__Icon" src={'/icons/models_Adaptors.svg'} alt={'Adaptateurs'} /> </span>
                        </div>
                </div>
                )
                })}
        </div>

    </section>


        <section className={`StocksMap Map ${loading ? 'Map--Loading' : ''}`}>

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
                        <span className="Tool ToolTip" data-tooltip="Visières">{selection.selection.shield} <img className="Tool__Icon" src={'/icons/models_Shield.svg'} alt={'Visières'} /></span>
                        <span className="Tool ToolTip" data-tooltip="Masques">{selection.selection.mask} <img className="Tool__Icon" src={'/icons/models_Mask.svg'} alt={'Masques'}/></span>
                            <span className="Tool ToolTip" data-tooltip="Blouses">{selection.selection.blouse} <img className="Tool__Icon" src={'/icons/models_Blouses.svg'} alt={'Blouse'} /> </span>
                            <span className="Tool ToolTip" data-tooltip="Adaptateur">{selection.selection.adaptor} <img className="Tool__Icon" src={'/icons/models_Adaptors.svg'} alt={'Adaptateurs'} /> </span>
                     </div>
                    <div 
                    className="Close__Button" 
                    onClick={close}>

                    </div>

                    </Popup>
                )}

            </MapBox>
 
 
   </section>
   </Fragment>
)}

export default MapStocks