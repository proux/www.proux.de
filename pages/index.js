import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faCode, faTasks,
    faMoneyBill, faBullhorn, faBalanceScale,
    faPenSquare, faTag, faHome, faPhone,
    faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faFacebookF, faCodepen,
    faDocker, faJs, faNodeJs, faHtml5, faCss3,
    faGit } from '@fortawesome/free-brands-svg-icons'
import Logo from '@proux/logo/logo.svg'
import Head from 'next/head';
import "../style.css"
import '../static/fonts/fonts.css'

export default () => {
    return <div>
        <Head>
          <title>proux</title>
        </Head>
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <ul className="nav navbar-nav">
                    <li><a href="#service">Service</a></li>
                    <li><a href="#technologie">Technologie</a></li>
                    <li><a href="#kontakt">Kontakt</a></li>
                </ul>
            </div>
        </nav>
        <header>
            <Logo id="prouxLogo"/>
            <p>Web Consulting.</p>
            <p>Web Solutions.</p>
        </header>
        <div id="service">
            <div className="container">
                <div className="row">
                    <h2>UNSERE SERVICES</h2>
                    <hr/>
                    <div className="col-lg-offset-2 col-lg-8">
                        <p>F&uuml;r Web-Systeme beliebiger Gr&ouml;&szlig;e und Art bieten wir einen ganzheitlichen Ansatz mit unseren Angeboten. Wir stehen Ihnen bei dem Spagat zwischen Zeit, Kosten und Umfang bei der Umsetzung eines Web-Projekts stets zur Seite.</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="greywrap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4"><FontAwesomeIcon icon={faComment} size="4x"/>
                        <h2>Consulting</h2>
                        <p>Wir beraten Sie zu jedem Aspekt eines bestehenden oder zuk&uuml;nftigen Web-Systems in beliebiger Komplexit&auml;t.</p>
                    </div>
                    <div className="col-lg-4"><FontAwesomeIcon icon={faCode} size="4x"/>
                        <h2>Development</h2>
                        <p>Wir &uuml;bernehmen oder vermitteln die Entwicklung oder Anpassung n&ouml;tiger Software f&uuml;r Ihr Projekt mit h&ouml;chstem Qualit&auml;tsanspruch.</p>
                    </div>
                    <div className="col-lg-4"><FontAwesomeIcon icon={faTasks} size="4x"/>
                        <h2>Infrastruktur</h2>
                        <p>Die skalierbare und ausfallsichere Infrastruktur und ihr Betrieb bildet das Fundament, ein Web-System erfolgreich zu betreiben.</p>
                    </div>
                </div>
            </div>
        </div>
        <section className="section-divider textdivider divider1">
            <div className="container">
                <div className="row">
                    <h2>&raquo;SOFTWARE IS LIKE SEX:</h2>
                    <h2>IT&apos;S BETTER WHEN IT&apos;S FREE.&laquo;</h2>
                    <p><i>Linus Torvalds</i></p>
                    <hr/>
                    <p>Wir glauben an die Open Source Idee und handeln auch nach dieser.</p>
                </div>
            </div>
        </section>
        <div id="technologie">
            <div className="container">
                <div className="row white">
                    <h2>AKTUELLE TECHNOLOGIEN</h2>
                    <hr/>
                    <div className="col-lg-2">
                        <FontAwesomeIcon size="4x" icon={faNodeJs} className="text-center"/>
                    </div>
                    <div className="col-lg-2">
                        <FontAwesomeIcon size="4x" icon={faGit}/>
                    </div>
                    <div className="col-lg-2">
                        <FontAwesomeIcon size="4x" icon={faDocker} />
                    </div>
                    <div className="col-lg-2">
                        <FontAwesomeIcon size="4x" icon={faHtml5} />
                    </div>
                    <div className="col-lg-2">
                        <FontAwesomeIcon size="4x" icon={faCss3} />
                    </div>
                    <div className="col-lg-2">
                        <FontAwesomeIcon size="4x" icon={faJs} />
                    </div>
                    <div className="col-lg-12">
                        <p>Wir setzen aktuell prim&auml;r node.js als Programmiersprache ein, und um Infrastruktur in beliebiger Gr&ouml;&szlig;e zur Verf&uuml;gung stellen zu k&ouml;nnen, arbeiten wir mit einfachen, modernen L&ouml;sungen wie git und Docker. Bei den sichtbaren Ergebnissen unserer Systeme setzen wir auf die modernsten Standards und haben dennoch stets die entsprechenden Zielgruppen im Blick.</p>
                    </div>
                </div>
            </div>
        </div>
        <section className="section-divider textdivider divider2">
            <div className="container">
                <div className="row">
                    <h2>AUS HAMBURG MIT <FontAwesomeIcon icon={faHeart} />
                    </h2>
                    <hr/>
                    <ul>
                        <li>
                            <a href="https://twitter.com/prouxnet" aria-label="proux twitter account">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/proux" aria-label="proux github account">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        <li>
                            <a href="https://codepen.io/proux" aria-label="proux codepen account">
                                <FontAwesomeIcon icon={faCodepen} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/proux.net" aria-label="proux facebook account">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <div id="kontakt">
            <div className="container">
                <div className="row">
                    <h2>KONTAKT</h2>
                    <hr/>
                    <div className="col-lg-6">
                        <p><FontAwesomeIcon icon={faTag} /> proux<sup>&reg;</sup> ug (haftungsbeschr&auml;nkt)</p>
                        <p><FontAwesomeIcon icon={faHome} /> Sievekingsallee 114a | 20535 HH</p>
                        <p><FontAwesomeIcon icon={faPhone} /> +49 40 2093 3981</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> <a href='mailto:info@proux.net'>info@proux.net</a></p>
                    </div>
                    <div className="col-lg-6">
                        <p><FontAwesomeIcon icon={faPenSquare} /> Gesch&auml;ftsf&uuml;hrer: Nico Lindemann</p>
                        <p><FontAwesomeIcon icon={faMoneyBill} /> USt.-IdNr.: DE305787148</p>
                        <p><FontAwesomeIcon icon={faBullhorn} /> Handesregistereintrag: AG Hamburg HRB 138858</p>
                        <p><FontAwesomeIcon icon={faBalanceScale} /> Wortmarke: Nr. 30 2008 036 348</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="footerwrap">
            <div className="container">
                <div className="row">
                    <h6>&copy; Copyright 2019</h6>
                </div>
            </div>
        </div>
    </div>
}