import React, { Fragment } from 'react'
import Iframe from 'react-iframe'
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom'


const AskForm = (props) => (

    <Fragment>
        <div className={"Section"}>
            <div className={"Section__Action"}>
                <Link to="/ask" >
                    <IoIosArrowRoundBack /> Retour
                </Link>
            </div>

            <h2 className={"Section__Title"}>
                Vous avez des besoins plus importants
            </h2>
            <h3 className={"Section__Subtitle"}>
                Plus de 50 unités
            </h3>
            <div className={"Section__Text"}>
                Si vos besoins sont supérieurs à 50 unités, nous vous invitons à remplir le formulaire ci-dessous.
            </div>
        </div>


        <div className={"Section Section--Simple Section--Bordered Ask__Form"}>
            <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLSedKR3azd_ObKBJHwCpZ91FkCRJw6Zmj98BAvR3AHdB5RdvIQ/viewform?embedded=true"
                id="Form"
                className="Ask__Form"
                display="initial"
                position="relative" />
        </div>

    </Fragment>
)

export default AskForm