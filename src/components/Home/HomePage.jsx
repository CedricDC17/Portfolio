import * as React from 'react';
import styles from './HomePage.module.scss';
import works from '../../works.json';

import { Link } from 'react-router-dom';
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faBootstrap, faCss3Alt, faJsSquare, faNodeJs, faNode, faGithub, faHtml5, faChrome } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import mongodb from '../../images/mongodb.svg';

import FadeInSection from '../FadeIn/FadeIn';


function HomePage() {
    return (

        <div className={styles.home}>
            <FadeInSection>
                <section className={styles.intro}>
                    <h1>Je suis Cédric DURGETTO-COURANT,</h1>
                    <h2>Bienvenue sur Mon Portfolio!</h2>
                    <h3>Je suis un développeur web Full Stack.</h3>
                </section>
            </FadeInSection>

            <FadeInSection delay={0.5}>
                <section className={styles.presentation}>
                    <div className={styles.alignRight}>
                        <p>
                            J'ai 23 ans et je suis spécialisé dans le frontend mais j'ai aussi des compétences en backend.
                            En ce moment, je suis à la recherche d'un job en tant que développeur junior!
                        </p>
                    </div>
                    <div className={styles.cta}>
                        <Button component={Link} to="/portfolio/contact" variant="contained" className={styles.button}>
                            Contactez-moi
                        </Button>

                        <Button variant="contained" color="primary" component={Link} to="https://github.com/CedricDC17" target="_blank" className={styles.button}>
                            Voici mon GitHub!
                        </Button>
                    </div>
                </section>
            </FadeInSection>

            <FadeInSection delay={1}>
                    <section className={styles.about}>
                        <h2>À propos de moi</h2>
                        <p>
                            Je m'appelle Cédric et je suis passionné par la création de sites web. Cette passion a vraiment pris son envol durant la création du site d'un ami, où j'ai eu l'occasion d'explorer le rôle de développeur web. Initialement engagé dans une licence informatique après un BAC STI2D option Systèmes Informatiques et Numériques, j'ai toujours su que ma vocation était dans le monde informatique.
                        </p>
                        <p>C'est pourquoi j'ai choisi de diriger mon parcours vers le développement web, d'abord en autodidacte, puis en consolidant mes compétences à travers le programme d'Openclassrooms. Cela m'a permis de maîtriser des technologies telles que React et MongoDB.</p>
                        <p>Je cherche actuellement un poste de développeur aussi bien en entreprise qu'en freelance. </p>
                    </section>
            </FadeInSection>

            <FadeInSection>
                <section id={styles.skills}>
                    <p>Voici quelques langages et technologies pour le Développement Web Full-Stack avec lesquels j'ai récemment travaillé:</p>
                    <div className={styles.skills}>
                        <ul>
                            <li><FontAwesomeIcon icon={faReact} /> ReactJS</li>
                            <li><img src={mongodb} alt="logo mongodb" /> MongoDB</li>
                            <li><FontAwesomeIcon icon={faNode} /> Express</li>
                            <li><FontAwesomeIcon icon={faBootstrap} /> Bootstrap</li>
                            <li><FontAwesomeIcon icon={faCss3Alt} /> CSS / SASS</li>
                        </ul>
                        <ul>
                            <li><FontAwesomeIcon icon={faJsSquare} /> Javascript</li>
                            <li><FontAwesomeIcon icon={faNodeJs} /> Node.js</li>
                            <li><FontAwesomeIcon icon={faGithub} /> GitHub</li>
                            <li><FontAwesomeIcon icon={faHtml5} /> HTML</li>
                            <li><FontAwesomeIcon icon={faChrome} /> Chrome DevTools</li>
                        </ul>
                    </div>
                </section>
            </FadeInSection>

            <FadeInSection>
                <section className={styles.portfolio}>
                    <h2>Mes projets</h2>
                    <h3>Voici quelques projets sur lesquels j'ai travaillé récemment:</h3>
                    <div className={styles.projects}>
                        <div>
                            {works.map(work => (
                                <Card className={styles.card} key={work.id} variant="outlined" sx={{ marginBottom: 1 }}>
                                    <div className={styles.background}>

                                        <CardContent sx={{ paddingBottom: 0 }}>
                                            <h2 className={styles.cardTitle} sx={{ fontSize: 28, fontWeight: 600 }} color="text.secondary" >
                                                {work.title}
                                            </h2>
                                            <Link to={`/portfolio/work/${work.id}`}>
                                                <CardMedia
                                                    component="img"
                                                    height="200"
                                                    image={work.cover}
                                                    className={styles.cardImg}
                                                    alt={`Image de ${work.title}`}
                                                />
                                            </Link>
                                            <Typography variant="body2">
                                                {work.description}
                                            </Typography>
                                            <ul className={styles.tags}>
                                                {work.tags.map((tags, index) => (
                                                    <li key={index}>{tags}</li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                        <CardActions className={styles.cardAction}>
                                            <Button className={styles.button} size="small" component={Link} to={`/portfolio/work/${work.id}`}> <FontAwesomeIcon className={styles.buttonIcon} icon={faFile} /> </Button>
                                        </CardActions>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </FadeInSection>

            <FadeInSection>
                <section className={styles.contact}>
                    <h2>Travaillons ensemble!</h2>
                    <p>Vous avez un projet et vous souhaitez travailler avec moi? Contactez-moi, je vous répondrai dans les plus brefs délais!</p>
                    <Button component={Link} to="/portfolio/contact" variant="contained" className={styles.button}>
                        Envoyez moi un message!
                    </Button>
                </section>
            </FadeInSection>

        </div>

    );
}

export default HomePage;
