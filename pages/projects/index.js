import styles from './index.module.css';

const Projects = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.gallery}>
        <div>Galería de imágenes</div>
      </div>
      <div className={styles.load_more_container}>
        <div className={styles.vertical_line}></div>
        <button className={styles.load_more_button}>Load more projects</button>
        <div className={styles.vertical_line}></div>
      </div>
    </div>
  );
};

export default Projects;
