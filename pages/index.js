import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart, faComment, faCode, faTasks,
  faMoneyBill, faBullhorn, faBalanceScale,
  faPenSquare, faTag, faHome, faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter, faGithub, faFacebookF, faCodepen,
  faDocker, faJs, faNodeJs, faHtml5, faCss3,
  faGit
} from '@fortawesome/free-brands-svg-icons'
import Logo from '@proux/logo/logo.svg'
import Head from 'next/head'

const techIcon = (icon, i) => (
  <div className='col-lg-2' key={i}>
    <FontAwesomeIcon size='4x' icon={icon} />
  </div>
)

const socialIcons = [
  {
    icon: faTwitter,
    link: 'https://twitter.com/prouxnet',
    label: 'twitter account'
  },
  {
    icon: faGithub,
    link: 'https://github.com/proux',
    label: 'github account'
  },
  {
    icon: faCodepen,
    link: 'https://codepen.io/proux',
    label: 'codepen account'
  },
  {
    icon: faFacebookF,
    link: 'https://www.facebook.com/proux.net',
    label: 'facebook account'
  }
]

const socialIcon = (obj, i) => (
  <li key={i}>
    <a href={obj.link} target='_blank' rel='noopener noreferrer' aria-label={'proux ' + obj.label} style={{ color: '#fff' }}>
      <FontAwesomeIcon size='2x' icon={obj.icon} />
    </a>
  </li>
)

const serviceIcons = [
  {
    icon: faComment,
    title: 'Consulting',
    text: 'Wir beraten Sie zu jedem Aspekt eines bestehenden oder zukünftigen Web-Systems in beliebiger Komplexität.'
  },
  {
    icon: faCode,
    title: 'Development',
    text: 'Wir übernehmen oder vermitteln die Entwicklung oder Anpassung nötiger Software für Ihr Projekt mit höchstem Qualitätsanspruch.'
  },
  {
    icon: faTasks,
    title: 'Infrastruktur',
    text: 'Die skalierbare und ausfallsichere Infrastruktur und ihr Betrieb bildet das Fundament, ein Web-System erfolgreich zu betreiben.'
  }
]

const serviceIcon = (obj, i) => (
  <div className='col-lg-4' key={i}><FontAwesomeIcon icon={obj.icon} size='4x' />
    <h2>{obj.title}</h2>
    <p>{obj.text}</p>
  </div>
)

export default () => {
  return (
    <div>
      <Head>
        <title>proux</title>
        <link href='/static/fonts/lato.css' rel='stylesheet' media='screen' />
        <link href='/static/fonts/roboto.css' rel='stylesheet' media='screen' />
        <link href='/static/style.css' rel='stylesheet' media='screen' />
      </Head>
      <header style={{ backgroundColor: '#1c1f3b', minHeight: '650px', paddingTop: '270px', textAlign: 'center', width: '100%' }}>
        <style>{'.prouxLogo path { fill: #fff }'}</style>
        <Logo className='prouxLogo' role='img' aria-label='proux logo' />
        <h1 className='headerText' style={{ color: '#fff' }}>Web Consulting.<br />Web Solutions.</h1>
      </header>
      <div id='service'>
        <div className='container'>
          <div className='row'>
            <h2 style={{ marginTop: '70px' }}>UNSERE SERVICES</h2>
            <hr />
            <div className='col-lg-offset-2 col-lg-8'>
              <p style={{ marginBottom: '70px' }}>F&uuml;r Web-Systeme beliebiger Gr&ouml;&szlig;e und Art bieten wir einen ganzheitlichen Ansatz mit unseren Angeboten. Wir stehen Ihnen bei dem Spagat zwischen Zeit, Kosten und Umfang bei der Umsetzung eines Web-Projekts stets zur Seite.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='greywrap'>
        <div className='container'>
          <div className='row'>
            {serviceIcons.map(serviceIcon).concat('')}
          </div>
        </div>
      </div>
      <section className='section-divider textdivider divider1 indented' style={{ backgroundColor: '#060708' }}>
        <div className='container'>
          <div className='row'>
            <h3>&raquo;SOFTWARE IS LIKE SEX:</h3>
            <h3>IT&apos;S BETTER WHEN IT&apos;S FREE.&laquo;</h3>
            <h4>Linus Torvalds</h4>
            <hr />
            <p>Wir glauben an die Open Source Idee und handeln auch nach dieser.</p>
          </div>
        </div>
      </section>
      <div style={{ paddingTop: '40px', textAlign: 'center' }} className='indented'>
        <div className='container'>
          <div className='row white'>
            <h2>AKTUELLE TECHNOLOGIEN</h2>
            <hr />
            {[faNodeJs, faGit, faDocker, faHtml5, faCss3, faJs].map(techIcon).concat()}
            <div className='col-lg-12'>
              <p>Wir setzen aktuell prim&auml;r node.js als Programmiersprache ein, und um Infrastruktur in beliebiger Gr&ouml;&szlig;e zur Verf&uuml;gung stellen zu k&ouml;nnen, arbeiten wir mit einfachen, modernen L&ouml;sungen wie git und Docker. Bei den sichtbaren Ergebnissen unserer Systeme setzen wir auf die modernsten Standards und haben dennoch stets die entsprechenden Zielgruppen im Blick.</p>
            </div>
          </div>
        </div>
      </div>
      <section className='section-divider textdivider divider2' style={{ backgroundColor: '#38230c' }}>
        <div className='container'>
          <div className='row'>
            <h3>AUS HAMBURG MIT <FontAwesomeIcon icon={faHeart} /></h3>
            <hr />
            <ul style={{ marginBottom: '25px' }}>
              {socialIcons.map(socialIcon).concat('')}
            </ul>
          </div>
        </div>
      </section>
      <div className='footer' style={{ marginBottom: '75px', paddingTop: '75px', paddingBottom: '25px' }}>
        <div className='container'>
          <div className='row'>
            <h2>KONTAKT</h2>
            <hr />
            <div className='col-lg-6'>
              <p><FontAwesomeIcon icon={faTag} /> proux<sup>&reg;</sup> ug (haftungsbeschr&auml;nkt)</p>
              <p><FontAwesomeIcon icon={faHome} /> Sievekingsallee 114a | 20535 HH</p>
              <p><FontAwesomeIcon icon={faPhone} /> +49 40 2093 3981</p>
              <p><FontAwesomeIcon icon={faEnvelope} /> <a href='mailto:info@proux.net'>info@proux.net</a></p>
            </div>
            <div className='col-lg-6'>
              <p><FontAwesomeIcon icon={faPenSquare} /> Gesch&auml;ftsf&uuml;hrer: Nico Lindemann</p>
              <p><FontAwesomeIcon icon={faMoneyBill} /> USt.-IdNr.: DE305787148</p>
              <p><FontAwesomeIcon icon={faBullhorn} /> Handesregistereintrag: AG Hamburg HRB 138858</p>
              <p><FontAwesomeIcon icon={faBalanceScale} /> Wortmarke: Nr. 30 2008 036 348</p>
            </div>
          </div>
        </div>
      </div>
      <div className='footerwrap'>
        <div className='container'>
          <div className='row'>
            <small>&copy; Copyright 2021</small>
          </div>
        </div>
      </div>
    </div>)
}
