import styles from './index.module.css';

const Services = () => {
  return (
    <>
      <div className={styles.main_container}>
        <h2 className={styles.section_name}>Services</h2>
        <h3 className={styles.section_title}>Reformas y rehabilitación</h3>
        <div className={styles.description}>
          <p>Servicio integral de reformas y rehabilitación</p>
          <p>Servicio de seguimiento de obra</p>
          <p>Servicio de evaluación y propuesta básica de las necesidades del proyecto</p>
        </div>
      </div>
    </>
  );
};

export default Services;
