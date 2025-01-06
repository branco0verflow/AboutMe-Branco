import React, { useState } from 'react';
import '../PrincipalPage/PrincipalPage.css';
import VideoPlayer from '../Video/VideoCreando';
import GetGitProyect from '../GetGitProyect/GetGitProyect';
import Form from 'react-bootstrap/Form';
import BotonSubir from './BotonSubir';

import imagenPerfil from '../../images/saa.jpg';
import logo1 from '../../images/Logos/css.png';
import logo2 from '../../images/Logos/html.png';
import logo3 from '../../images/Logos/js.png';
import logo4 from '../../images/Logos/boots.png';
import logo5 from '../../images/Logos/sharp.png';
import logo6 from '../../images/Logos/sql.png';
import logo7 from '../../images/Logos/react.png';
import logo8 from '../../images/Logos/mui.png';
import logo9 from '../../images/Logos/git.png';
import logo10 from '../../images/Logos/visual.png';
import logo11 from '../../images/Logos/vsc.png';
import Consultas from '../Consultas/Consultas';
import VideoPlayerPrincipal from '../Video/VideoPlayerPrincipal';



const PaginaPrincipal = () => {

  const [isEnglish, setIsEnglish] = useState(false);

  return (

    <>

<div className="sectionWithBackground">
        <div className='paginacion'>
          {isEnglish ? <a href="#sobre-mi"><h5 className='big-shoulders'>About me</h5></a> : <a href="#sobre-mi"><h5 className='big-shoulders'>Sobre mi</h5></a>}
          {isEnglish ? <a href="#mis-proyectos"><h5 className='big-shoulders'>My proyects</h5></a> : <a href="#mis-proyectos"><h5 className='big-shoulders'>Mis proyectos</h5></a>}
          {isEnglish ? <a href="#contacto"><h5 className='big-shoulders'>Contact</h5></a> : <a href="#contacto"><h5 className='big-shoulders'>Contacto</h5></a>}
          <Form>
            <Form.Check
              className='big-shoulderss'
              type="switch"
              id="custom-switch"
              label={isEnglish ? "Cambiar a Español" : "Change to English"}
              checked={isEnglish}
              onChange={() => setIsEnglish(!isEnglish)}
            />
          </Form>
        </div>
        <div className="container">
          <h1 className='tilt-warpy'>Branco</h1>
          <h2 className='shadows-into'>Nehuen Beltran</h2>
        </div>

  <div className='skills-part'>
    {isEnglish ? <h6 className='skills-partH6'>Proactivity</h6> : <h6 className='skills-partH6'>Proactividad</h6>}
    {isEnglish ? <h6 className='skills-partH6'>Creativity</h6> : <h6 className='skills-partH6'>Creatividad</h6>}
    {isEnglish ? <h6 className='skills-partH6'>Team collaboration</h6> : <h6 className='skills-partH6'>Colaboración en equipo</h6>}
    {isEnglish ? <h6 className='skills-partH6'>Adaptability & Flexibility</h6> : <h6 className='skills-partH6'>Adaptabilidad y Flexibilidad</h6>}
  </div>

</div>


      <div id='sobre-mi' className="secondSection">
        <div className="videoContainer">
          <VideoPlayer />
        </div>
        <div className="textContainer">
          {isEnglish ? <h3 className='tilt-warp2' style={styles.titulo}>About Me</h3> : <h3 className='tilt-warp2' style={styles.titulo}>Sobre Mi</h3>}
          {isEnglish ? <p className='tilt-warp'>Hello! I'm <strong>Branco</strong>, a passionate programmer in training with a focus on developing innovative solutions. Currently, I'm pursuing a degree in Programmer Analyst. I'm committed to constant learning and professional improvement.</p> : <p className='tilt-warp'>¡Hola! Soy <strong>Branco</strong>, un apasionado programador en formación con un enfoque en el desarrollo de soluciones innovadoras. Actualmente estoy cursando la carrera de Analísta Programador. Estoy comprometido con el aprendizaje constante y la mejora profesional.</p>}
          {isEnglish ? <p className='tilt-warp'>My goal is to contribute to the development of meaningful technological solutions that benefit people. I look forward to the opportunity to work together in the future!</p> : <p className='tilt-warp'>Mi objetivo es contribuir al desarrollo de soluciones tecnológicas significativas que beneficien a las personas. ¡Espero tener la oportunidad de trabajar juntos en el futuro!</p>}
        </div>
        <div className='logoSection'>
          <img src={logo1} alt="Imagen 1" className="logoImage" />
          <img src={logo2} alt="Imagen 2" className="logoImage" />
          <img src={logo3} alt="Imagen 3" className="logoImage" />
          <img src={logo4} alt="Imagen 4" className="logoImage" />
          <img src={logo5} alt="Imagen 5" className="logoImage" />
          <img src={logo6} alt="Imagen 6" className="logoImage" />
          <img src={logo7} alt="Imagen 7" className="logoImage" />
          <img src={logo8} alt="Imagen 8" className="logoImage" />
          <img src={logo9} alt="Imagen 9" className="logoImage" />
          <img src={logo10} alt="Imagen 10" className="logoImage" />
          <img src={logo11} alt="Imagen 11" className="logoImage" />
        </div>
      </div>


      <div id='mis-proyectos' className="tercerSection">

        <div className="projectsContainer">
          {<GetGitProyect isEnglish={isEnglish} />}
        </div>

      </div>



      <div id='contacto' className='last-section'>
        <div className='textoLast'>
          {isEnglish ? <h3 className='tilt-warpLast' >Get In Touch</h3> : <h3 className='tilt-warpLast' >Hazme saber tus necesidades</h3>}
          {isEnglish ? <h5>Thank you for visiting my portfolio! If you have any questions or inquiries, feel free to contact me. I'll be happy to respond to your message as soon as possible. Looking forward to hearing from you soon!</h5> : <h5>¡Gracias por visitar mi portafolio! Si tienes alguna pregunta o consulta, no dudes en contactarme. Estaré encantado de responder tu mensaje.</h5>}
        </div>
        <div className='Imagen-Perfil'>
          <img src={imagenPerfil} alt='Imagen de perfil' />
        </div>
      </div>

      <BotonSubir isEnglish={isEnglish} />

      <div>
          <Consultas isEnglish={isEnglish} />
        </div>
    </>





  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginLeft: '29px',
  },
  nombre: {
    fontSize: '10em', // Tamaño de la fuente del nombre
    marginBottom: '-60px', // Espacio entre el nombre y el apellido
  },
  apellido: {
    fontSize: '5em', // Tamaño de la fuente del apellido
    marginBottom: '2px',
    marginTop: '-15px', // Espacio entre el apellido y la foto
  },

  titulo: {
    fontSize: '4em',
  }
};

export default PaginaPrincipal;
