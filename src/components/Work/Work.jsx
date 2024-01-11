import { useParams, Link } from "react-router-dom";
import styles from "./Work.module.scss";
import { useEffect } from "react";

import datas from "../../works.json";
import FadeInSection from '../FadeIn/FadeIn';
import SlideInFromSideSection from '../FadeIn/SlideInFromSideSection';

function Work() {
    const { id } = useParams();
    const work = datas.find((data) => data.id === id);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    return (
        <div className={styles.workPage}>
            <FadeInSection>
                <SlideInFromSideSection>
                    <h1>{work.title}</h1>
                </SlideInFromSideSection>
            </FadeInSection>

            <FadeInSection>
                <SlideInFromSideSection>
                    <div>
                        <img className={styles.cover} src={work.cover} alt={work.title} />
                    </div>
                </SlideInFromSideSection>
            </FadeInSection>
            <ul className={styles.tags}>
                {work.tags.map((tags, index) => (
                    <li key={index}>{tags}</li>
                ))}
            </ul>


            {work.site && (
                <a className={styles.linkWork} href={work.site}>
                    Voir le site
                </a>
            )}
            <FadeInSection>
                <a className={styles.linkWork} href={work.github}>
                    Voir le Github
                </a>
                <h2>Contexte</h2>
                <p>{work.contexte}</p>
                <h3>Problématique/Résolution</h3>
                <p>{work.problématique}</p>
                <h4>En détails</h4>
                <p>{work.details}</p>
            </FadeInSection>

            <FadeInSection>
                <SlideInFromSideSection>
                    <Link className={styles.backToPortfolio} to={"/portfolio/"}>
                        <button>Retour au portfolio</button>
                    </Link>
                </SlideInFromSideSection>
            </FadeInSection>
        </div>
    );
}

export default Work;
