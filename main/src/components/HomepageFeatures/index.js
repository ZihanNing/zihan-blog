import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'About me',
    img: require('@site/static/img/cat_ukelele.png').default,
    //Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        PhD in Biomedical Engineering (MR Physics) <br />
        Amateur photographer & painter <br />
        Passionate about travelling, knitting, ukulele, and orchids <br />
        Discover the <Link to="/cv">professional me</Link> or the casual me
      </>
    ),
  },
  {
    title: 'My Tutorials & Projects',
    img: require('@site/static/img/cat_dance.png').default,
    description: (
      <>
        Projects about MR imaging (several open-sourced) <br />
        Tutorials about MR physics and image reconstruction (progress while learning) <br />
        And random tech stuff <br />
      </>
    ),
  },
  {
    title: 'Life & Hobbies',
    img: require('@site/static/img/sleep_20min.png').default,
    description: (
      <>
        Sharing the thoughts and experiences <br />
        Knitting, traveling, philosophy and more <br />
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {img && <img src={img} alt={title} className={styles.featureImg} />}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

/*function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}*/

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
