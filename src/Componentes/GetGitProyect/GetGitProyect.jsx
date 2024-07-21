import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProyectCard from '../ProyectCard/ProyectCard';
import VideoProyect from '../Video/VideoProyect';
import './GetGitProyect.css';


const GetGitProyect = (props) => {
    const [repos, setRepos] = useState([]);
    const esIngles = props.isEnglish;

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch('https://api.github.com/users/branco0verflow/repos');
                const data = await response.json();
                setRepos(data);
                console.log('Estos son los resultados:' + repos);
            } catch (error) {
                console.error('Error fetching repos:', error);
            }
        };
    
        fetchRepos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    

    return (
        <>
        <div className='page-container'>

            <div className="textContainer">
                {esIngles ? <h3 className='tilt-warp2' style={styles1.titulo}>My Proyects</h3> : <h3 className='tilt-warp2' style={styles1.titulo}>Mis Proyectos</h3>}
                {esIngles ? <h5>The following projects were developed collaboratively with my classmates as part of the academic requirements of my educational institution. These projects were created in response to midterm exams or as mandatory submissions to meet the evaluation criteria of the curriculum.</h5> : <h5>Los siguientes proyectos fueron desarrollados en colaboración con mis compañeros como parte de los requisitos académicos de mi institución educativa. Estos proyectos fueron creados en respuesta a exámenes parciales o como entregas obligatorias para cumplir con los criterios de evaluación del programa de estudios.</h5>}
            </div>
            <div className="videoContainerProyect">
                <VideoProyect />
            </div>

            </div>

            <div className='espacio-de-cards'>


                {repos.map(repo => (

                    <Link className='link-router' key={repo.id} to={repo.html_url} target="_blank">
                        <ProyectCard
                            name={repo.name}
                            description={repo.description}
                            enlace={repo.html_url}
                            id={repo.id}
                            esIngles={esIngles}
                        />
                    </Link>

                ))}

            </div>
          </>
        
    );
};

const styles1 = {
    titulo: {
      fontSize: '4em',
    }
  };

export default GetGitProyect;
