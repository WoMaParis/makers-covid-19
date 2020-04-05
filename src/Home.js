import React from 'react'
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Segment,
} from 'semantic-ui-react'


const HomepageLayout = () => (
    <React.Fragment>

        <section className={"Hero section"}>
            
            <h1 className={"Hero--Title"}>
                Covid-19 <br/>
                Fabrication solidaire
            </h1>
            <h2 className={"Hero--Subtitle"}>
                Les makers d'ile-de-france se mobilisent pour produire du matériel sanitaire d’urgence.
            </h2>
            <p className={"Hero--Text"}>
                Grâce à l'énerge des differents acteurs d'Ile-de-France, particuliers, PME, associations, nous nous organisons en force de production distribuée pour fournir ceux qui en ont besoins.
            </p>
        </section>

        <section className={"Actions section"}>
            <div
                className={"Actions--Action Action"}
                textAlign='center'>
                {/* <img className={"Action--Illustration"} src="https://via.placeholder.com/150" /> */}
                <div className={'Action--Text'}>
                    <h3 className={"Action--Title"}>
                        Vous avez des besoins en matériel ?
                    </h3>
                    <p className={"Action--Description"}>
                    Si vous avez ou connaissez des personnes ayant besoins de <strong> matériel en Ile-de-France, visières, masques</strong> ? Le matériel est fourni <strong>gratuitement et bénévolement</strong>, mais ne remplace pas un équipement médical certifié, c'est une solution d'urgence pour palier au manque ! 
                    </p>

                    <Button as='a' className="ui icon left labeled button FCblue" href="https://docs.google.com/forms/d/e/1FAIpQLSedKR3azd_ObKBJHwCpZ91FkCRJw6Zmj98BAvR3AHdB5RdvIQ/viewform" target="_blank">
                        <i aria-hidden="true" class="paper plane outline icon"></i>
                        Faire une demande de materiel.
                    </Button>
                </div>
            </div>
                <div
                    className={"Actions--Action Action"}
                    textAlign='center'>
                {/* <img className={"Action--Illustration"} src="https://via.placeholder.com/150" /> */}
                <div className={'Action--Text'}>
                        <h3 className={"Action--Title"}>
                            Vous voulez  aider à fabriquer et à  produire  ? 
                        </h3>
                        <p className={"Action--Description"}>
                            Vous êtes un particulier, uneéntreprises ou une association située en Ile-de-France, et vous êtes équipés de machines de fabrication ? <strong>Découpeuse laser, imprimantes 3D, machines à coudres...</strong>. Vous ne présentez aucun symptômes et n'êtes pas malade. Rejoignez le slack de coordination pour contribuer à la production ! 
                        </p>

                    <Button as='a'  className="ui icon left labeled button FCred" href="https://join.slack.com/t/fabcityparis/shared_invite/zt-d8nqbwf8-4jAaXrZabzZhrll_xD7kNQ" target="_blank">
                        <i aria-hidden="true" class="conversation icon"></i>
                            Rejoindre la coordination !
                        </Button>

                    </div>
                </div>
                <div
                    className={"Actions--Action Action"}
                    textAlign='center'>
                {/* <img className={"Action--Illustration"} src="https://via.placeholder.com/150" /> */}
                <div className={'Action--Text'}>
                    <h3 className={"Action--Title"}>
                        Vous voulez soutenir le collectif ?
                    </h3>
                    <p className={"Action--Description"}>
                        Nous mettons tous cela en oeuvre <strong>gratuitement et bénévolement</strong>, donc si vous voulez contribuer à l'effort, nous avons mis en place une cagnotte sur helloasso. Les sommes récupérées sont/seront utilisées pour rembourser les achats de matières premières et autres dépenses de la communauté. Il n'y <strong>aucun but lucratif à cette démarche !</strong>
                    </p>


                    <Button as='a' className="ui icon left labeled button FCgreen" href="https://www.helloasso.com/associations/fab-city-grand-paris/formulaires/1/widget" target="_blank">                        <i aria-hidden="true" class="money bill alternate outline icon"></i>
                        Faire un don sur Helloasso !
                    </Button>
                </div>
            </div>
        </section>

        <section className={"Collectif section"}>
                        <h2>Le Collectif</h2>
                        <a href="https://woma.fr" target="_blank"><img alt="WoMa" src="https://i1.wp.com/store.fabcity.paris/wp-content/uploads/2018/06/Logo-WoMa@2x.png?ssl=1" /></a>
                        <a href="https://arslonga.fr/" target="_blank"><img alt="Ars Longa" src="https://arslonga.fr/wp-content/themes/arslongav2/assets/img/ars-longa-logo.png" /></a>
                        <a href="https://http://volumesparis.org/" target="_blank"><img alt="Volumes" src="https://hallesciviques.org/wp-content/uploads/2019/11/logo-volumes.png" /></a>
                        <a href="https://www.atelierdesamis.fr/" target="_blank"><img alt="Atelier des Amis" src="https://i.etsystatic.com/isla/3bcf3c/15987980/isla_fullxfull.15987980_6tmp58g7.jpg?version=0" /></a>
                        <a class="people" target="_blank"><img alt="Petru Gangura" src="https://ca.slack-edge.com/T33GH3Q68-UAE040G3B-8a5712044336-512" /></a>
                        <a href="https://www.homemakers.fr" target="_blank"><img alt="Homemakers" src="https://www.homemakers.fr/wp-content/uploads/2017/07/cropped-FOND_HOMEMAKERS_512_512-01.png" /></a>
                        <a href="http://fablab.simplon.co/" target="_blank"><img alt="SimplonLab" src="https://i0.wp.com/fablab.simplon.co/wp-content/uploads/2018/01/cropped-g531.png?fit=196%2C135" /></a>
                        <a href="http://monatelierenville.com/" target="_blank"><img alt="Mon Atelier en Ville" src="https://www.souse.fr/assets/images/solutions/MON-ATELIER-EN-VILLE.jpeg" /></a>
                        <a href="https://www.electrolab.fr/" target="_blank"><img alt="Electrolab" src="https://www.electrolab.fr/images/1Logo.png" /></a>
                        <a href="https://lepetitfablabdeparis.fr/" target="_blank"><img alt="Le Petit Fablab de Paris  / Ici lab" src="https://www.capoupascap.info/wp-content/uploads/2018/03/LePetitFablabdeParis16_38_37.png" /></a>
                        <a href="https://epsaa.fr" target="_blank"><img alt="EPSAA" src="https://lh3.googleusercontent.com/vdbK1Pbs-W3ENyOCOc-VCF1I3HtFTjeXEkRTvY2Q4LHE9OyLexNU09VArtDe8omPVhF7_KwXj6dmtvstV56khJ1QGMVm5wCM8iTdEZ25BSoPj0s" /></a>
                        <a href="http://fablab-laverriere.org/" target="_blank"><img alt="FabLab La Verrière" src="https://fablab-laverriere.org/wp-content/uploads/2019/05/cropped-logo.png" /></a>
                        <a href="https://www.ltdln.com/" target="_blank"><img alt="La Tête dans les Nuages" src="https://static1.squarespace.com/static/5a65d076bff200b621e3bea9/t/5b3b42b0352f53759501f1a7/1585836694137/?format=1500w" /></a>
                        <a class="people" target="_blank"><img alt="Brice Martin" src="https://ca.slack-edge.com/T33GH3Q68-U0118072CS1-4b4c01d012b4-512" /></a>
                        <a href="https://www.latreso.fr/" target="_blank"><img alt="LA TRESO" src="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/1934057/343576_881285.png" /></a>
                        <a href="https://mako.paris/" target="_blank"><img alt="MAKO" src="https://mako.paris//ressources/themes/900K-Theme/dist/images/mako.logo.png" /></a>
                        <a href="https://www.polytechnique.edu/en/fab-lab" target="_blank"><img alt="FabLab Ecole Polytechnique" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/%C3%89cole_polytechnique_signature.svg/1200px-%C3%89cole_polytechnique_signature.svg.png" /></a>
                        <a href="http://www.ressourcerie-la-mine.com/" target="_blank"><img alt="ENSCI - Les Ateliers" src="https://www.ensci.com/typo3conf/ext/ensci_vb/Resources/Public/Img/logo-ensci-les-ateliers-blue.svg" /></a>
                        <a href="https://mako.paris/" target="_blank"><img alt="Fablab - La ressourcerie la mine" src="http://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_300,w_300,f_auto,q_auto/1098398/av9ayu3zjtk6tksuttcw.jpg" /></a>
                        <a href="https://fabcity.paris/" target="_blank"><img alt="Fab City Grand Paris" src="https://i1.wp.com/fabcity.paris/wp-content/uploads/2017/10/Logo_@2x.png?fit=300%2C100&ssl=1" /></a>
        </section>

    </React.Fragment>
)

export default HomepageLayout