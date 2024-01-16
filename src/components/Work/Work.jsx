import { useParams, Link } from "react-router-dom";
import styles from "./Work.module.scss";
import { useEffect } from "react";
import { Button } from "@mui/material";
import datas from "../../works.json";
import FadeInSection from '../FadeIn/FadeIn';

function Work() {
    const { id } = useParams();
    const work = datas.find((data) => data.id === id);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    return (
        <div className={styles.workPage}>
            <FadeInSection>
                <h1>{work.title}</h1>
            </FadeInSection>

            <FadeInSection delay={1}>
                <div>
                    <img className={styles.cover} src={work.cover} alt={work.title} />
                </div>
            </FadeInSection>

            <div className={styles.workInfo}>
                <div className={styles.tags}>
                    {work.tags.map((tags, index) => (
                        <li key={index}>{tags}</li>
                    ))}
                </div>

                <div className={styles.links}>
                    <Button className={styles.button} size="small" component={Link} to={work.site}>Voir le site</Button>
                    <Button className={styles.button} size="small" component={Link} to={work.github}>Voir le Code</Button>
                </div>
            </div>

            <FadeInSection>
                <div className={styles.block}>
                    <h2>Contexte</h2>
                    <p>{work.contexte}</p>
                </div>
                <div className={styles.block}>
                    <h3>Problématique/Résolution</h3>
                    <p>{work.problématique}</p>
                </div>
                <div className={styles.block}>
                    <h4>En détails</h4>
                    <p>{work.details}</p>
                </div>
            </FadeInSection>

            <FadeInSection delay={1.5}>
                <Link className={styles.backToPortfolio} to={"/portfolio/"}>
                    <Button className={styles.button}>Retour au portfolio</Button>
                </Link>
            </FadeInSection>
        </div>
    );
}

export default Work;
