import "./homeText.scss";
import loveimg from "../../assets/i_love_bike.jpg";
import logolist from "../../assets/logolist.png";

function HomeText() {
  return (
    <section className="hometext">
      <div className="hometext__container">
        <h2>Comment bien choisir son équipement pour le vélo ?</h2>

        <p>
          Lorsque l&apos;on se lance dans le <strong>cyclisme</strong>, il est
          essentiel de s&apos;équiper correctement pour{" "}
          <strong>garantir sa sécurité, son confort et ses performances</strong>
          . Ici on vous guide pour que vous puissiez faire les bons choix
          d&apos;achats pour les équipements les plus utilisés à vélo: le
          casque, les lunettes, les vêtements et les chaussures, grâce à nos{" "}
          <strong>conseils</strong> et nos <strong>avis</strong> professionnels.
        </p>

        <img src={loveimg} alt="I love bike" />
        <h3>Casque de vélo : Votre Bouclier de Protection</h3>

        <p>
          Le <strong>casque</strong> est un élément de sécurité incontournable
          pour tout cycliste. Il offre une protection cruciale contre les
          blessures à la tête en cas de chute. Les chiffres parlent
          d&apos;eux-mêmes : selon le National Highway Traffic Safety
          Administration (NHTSA) aux États-Unis, le simple fait de porter un
          casque de vélo peut réduire le risque de blessures à la tête de 85 %
          et le risque de blessures au cerveau de 88 %. Ces statistiques
          soulignent l&apos;importance vitale de cet équipement.
        </p>

        <p>
          Outre la sécurité, les prix des casques varient en fonction de la
          qualité et des caractéristiques. Pour des casques d&apos;entrée de
          gamme, vous pouvez vous attendre à dépenser environ 30 à 50 euros. Ces
          casques offrent une <strong>protection de base</strong> et sont
          parfaits pour les cyclistes occasionnels.
        </p>

        <p>
          Si vous recherchez un équilibre entre qualité et prix, des casques de
          milieu de gamme se situent généralement entre 50 et 150 euros. Ils
          offrent{" "}
          <strong>
            un meilleur ajustement, une meilleure ventilation et des
            caractéristiques de sécurité améliorées
          </strong>
          , tout en demeurant abordables.
        </p>

        <p>
          Pour les <strong>cyclistes</strong> plus exigeants et prêts à investir
          dans la qualité, les casques haut de gamme peuvent coûter de 150 euros
          et plus. Ils offrent une protection de pointe, un ajustement
          personnalisé, une aérodynamique optimisée et un design léger. Il est
          intéressant de noter que certains modèles de casques haut de gamme
          permettent même l&apos;ajustement de la visière en fonction de la
          lumière ambiante pour une vision optimale, ce qui ajoute une couche de
          sophistication à la sécurité.
        </p>

        <h3>Lunettes de cyclisme : plus qu&apos;un accessoire</h3>

        <p>
          Les <strong>lunettes de cyclisme</strong> jouent un rôle crucial dans
          votre confort et votre protection. Des études montrent que le port de
          lunettes de soleil de qualité pendant le cyclisme peut réduire la
          fatigue oculaire due à l&apos;exposition aux rayons UV, améliorer la
          vision et prévenir les problèmes de vision à long terme.
        </p>

        <p>
          Les tarifs vont varier en fonction de la qualité des verres et des
          fonctionnalités. Pour des lunettes d&apos;entrée de gamme, vous pouvez
          vous attendre à dépenser environ 20 à 50 euros. Ces lunettes offrent
          <strong> une protection de base contre les UV et le vent</strong>,
          mais peuvent manquer de fonctionnalités avancées.
        </p>

        <p>
          Pour un meilleur rapport qualité-prix, des lunettes de milieu de gamme
          se situent généralement entre 50 et 150 euros. Elles offrent une
          meilleure qualité de verres, des options d&apos;ajustement et de
          ventilation, ainsi que des verres interchangeables pour différentes
          conditions.
        </p>

        <p>
          Pour les cyclistes sérieux prêts à investir dans des lunettes haut de
          gamme, les prix peuvent dépasser 150 euros. Ces lunettes offrent des{" "}
          <strong>
            verres de haute qualité, une protection maximale contre les UV, une
            excellente ventilation, une aérodynamique optimisée et des options
            de personnalisation.
          </strong>
        </p>

        <p>
          De plus, certaines marques proposent désormais des lunettes ajustables
          à la vue pour les cyclistes myopes ou hypermétropes, offrant une
          vision claire sans devoir porter des lentilles de contact, et cela
          grâce à une simple ordonnance de votre professionnel de santé.
        </p>

        <h3>Vêtements de cyclisme : confort et performance</h3>

        <p>
          Le choix de vos <strong>vêtements de cyclisme</strong> a un impact
          significatif sur votre expérience sur la route. Avoir les{" "}
          <strong>vêtements appropriés</strong> peuvent aider à réguler la
          température corporelle, évacuer la transpiration ou protéger contre le
          froid, le vent et la pluie, ce qui contribue au confort et à la
          performance du cycliste.
        </p>

        <p>
          Selon la gamme des vêtements, vous pouvez vous attendre à payer
          d&apos;environ 30 à 70 euros pour les équipements premiers prix - Ces
          ensembles offrent des matériaux de base et un ajustement décent pour
          les cyclistes occasionnels - jusqu&apos;à plus de 150 euros pour les
          cyclistes passionnés en quête de qualité supérieure. Fabriqués à
          partir de matériaux réspirants de haute qualité, ces ensembles offrent
          une coupe <strong>aérodynamique</strong>, une gestion avancée de
          l&apos;humidité et des caractéristiques de haute performance.
        </p>

        <h3>Chaussures de cyclisme : puissance et confort</h3>

        <p>
          Les <strong>chaussures de cyclisme</strong> sont essentielles pour
          transférer efficacement la puissance de vos jambes aux pédales. Les
          prix varient en fonction de la qualité des chaussures et de leurs
          caractéristiques. Pour des chaussures d&apos;entrée de gamme, vous
          pouvez vous attendre à dépenser environ 50 à 100 euros. Ces chaussures
          offrent un bon ajustement et des semelles suffisamment rigides pour
          les cyclistes occasionnels.
        </p>

        <p>
          Pour un meilleur{" "}
          <strong>transfert de puissance et un confort amélioré</strong>, des
          chaussures de milieu de gamme se situent généralement entre 100 et 200
          euros. Elles offrent des semelles plus rigides et un meilleur
          ajustement.
        </p>

        <p>
          Pour les cyclistes sérieux recherchant des{" "}
          <strong>performances optimales</strong>, les chaussures haut de gamme
          peuvent coûter 200 euros et plus. Ces chaussures offrent des semelles
          ultrarigides, une aérodynamique avancée, un ajustement sur mesure et
          des fonctionnalités de pointe, y compris le système{" "}
          <strong>Boa</strong> pour un ajustement précis et rapide, en assurant
          un blocage supérieur du talon et en améliorant la connexion à la
          semelle intermédiaire. Autrefois réservé aux professionnels, ce
          système est de plus en plus démocratisé au fil du temps, au point même
          que l&apos;on puisse trouver assez facilement des chaussures doté du
          système Boa, et ce pour un prix de plus en plus abordable.
        </p>

        <p className="hometext__conclu">
          En conclusion, choisir le bon équipement pour le vélo est essentiel
          pour votre sécurité, votre confort et vos performances. Assurez-vous
          de prendre en compte les gammes de prix spécifiques à chaque catégorie
          d&apos;équipement, et adaptez vos choix à votre budget, à votre style
          de cyclisme et à vos besoins. Que vous soyez un débutant ou un
          cycliste expérimenté, investir dans un équipement de qualité vous
          permettra de profiter au maximum de votre passion pour le vélo.
        </p>
      </div>
      <div className="hometext__container brandtext">
        <h2>Quelle marque choisir pour vos équipements ?</h2>
        <p>
          Lorsqu&apos;il s&apos;agit de choisir l&apos;équipement cycliste qui
          vous accompagnera sur la route, la qualité et la réputation de la
          marque sont des facteurs cruciaux à prendre en compte. Parmi les
          marques les plus renommées dans l&apos;industrie du cyclisme, voici un
          aperçu de celles qui se démarquent dans différentes catégories
          d&apos;équipement.
        </p>
        <img src={logolist} alt="Toutes les marques" />
        <h3>Abus</h3>
        <p>
          Fondée en Allemagne,{" "}
          <strong>
            <a href="/casques/casques-abus">Abus</a>
          </strong>{" "}
          est une marque renommée dans l&apos;industrie des casques de cyclisme.
          Leur réputation repose sur la qualité et la durabilité de leurs
          produits, offrant une protection exceptionnelle aux cyclistes de tous
          niveaux.
        </p>
        <h3>Bell</h3>
        <p>
          Avec une histoire qui s&apos;étend sur plusieurs décennies,{" "}
          <strong>
            <a href="/casques/casques-bell">Bell</a>
          </strong>{" "}
          est une marque américaine qui se distingue par sa capacité à créer des
          casques innovants et stylés. Que vous soyez un cycliste débutant ou
          expérimenté, Bell propose des options pour tous les goûts.
        </p>
        <h3>Giro</h3>
        <p>
          <strong>
            <a href="/casques/casques-giro">Giro</a>
          </strong>{" "}
          est une autre marque américaine qui mérite une mention spéciale. Leur
          engagement envers la sécurité, le confort et le design se reflète dans
          chacun de leurs casques. Vous pouvez compter sur Giro pour vous
          protéger avec style.
        </p>
        <h3>Kask</h3>
        <p>
          Les casques{" "}
          <strong>
            <a href="/casques/casques-kask">Kask</a>
          </strong>
          , originaires d&apos;Italie, sont réputés pour leur élégance et leur
          ergonomie. Leur design est soigné, et ils offrent une protection de
          haute qualité pour les cyclistes exigeants.
        </p>
        <h3>Oakley</h3>
        <p>
          <strong>
            <a href="/lunettes/lunettes-oakley">Oakley</a>
          </strong>{" "}
          est synonyme d&apos;innovation en matière de lunettes de cyclisme.
          Leurs produits offrent non seulement une excellente protection contre
          les rayons UV, mais aussi un style distinctif qui les distingue de la
          concurrence.
        </p>
        <h3>Rudy Project</h3>
        <p>
          Une marque italienne renommée,{" "}
          <strong>
            <a href="/casques/casques-rudy-project">Rudy Project</a>
          </strong>{" "}
          excelle dans la fabrication de lunettes de haute performance. Leur
          design élégant est associé à des caractéristiques techniques de
          pointe.
        </p>
        <h3>Smith</h3>
        <p>
          <strong>
            <a href="/lunettes/lunettes-smith">Smith</a>
          </strong>{" "}
          se démarque par ses lunettes élégantes et ses verres de qualité
          optique supérieure. Que vous soyez sur la route ou sur les sentiers,
          ces lunettes offrent une vision claire et protègent vos yeux des
          éléments.
        </p>
        <h3>Castelli</h3>
        <p>
          <strong>
            <a href="/vetements/vetements-castelli">Castelli</a>
          </strong>
          , basée en Italie, est célèbre pour ses vêtements de cyclisme haut de
          gamme. Leur engagement envers le style et la performance en fait un
          choix privilégié pour de nombreux cyclistes.
        </p>
        <h3>Rapha</h3>
        <p>
          La marque britannique{" "}
          <strong>
            <a href="/vetements/vetements-rapha">Rapha</a>
          </strong>{" "}
          se démarque par son design élégant et ses matériaux de haute qualité.
          Leurs vêtements sont à la fois fonctionnels et esthétiques, ce qui les
          rend populaires auprès des cyclistes exigeants.
        </p>
        <h3>Assos</h3>
        <p>
          <strong>
            <a href="/vetements/vetements-assos">Assos</a>
          </strong>
          , une marque suisse, est reconnue pour ses vêtements de cyclisme
          techniques et confortables. Leur expertise dans les matériaux et la
          conception les rend adaptés aux longues sorties à vélo.
        </p>
        <h3>Sidi</h3>
        <p>
          <strong>
            <a href="/chaussures/chaussures-sidi">Sidi</a>
          </strong>
          , une marque italienne bien établie, propose des chaussures de
          cyclisme de haute qualité. Souvent préférées par les cyclistes
          professionnels, les chaussures Sidi offrent un ajustement précis et
          une transmission efficace de la puissance.
        </p>
        <h3>Shimano</h3>
        <p>
          <strong>
            <a href="/chaussures/chaussures-shimano">Shimano</a>
          </strong>
          , le géant de l&apos;industrie japonaise, fabrique aussi des
          chaussures de cyclisme durables pour une variété de styles. Leur
          attention aux détails se reflète dans la qualité de leurs produits.
        </p>
        <h3>Fizik</h3>
        <p>
          Les chaussures{" "}
          <strong>
            <a href="/chaussures/chaussures-fizik">Fizik</a>
          </strong>
          , d&apos;origine italienne, sont appréciées pour leur élégance et leur
          ergonomie. Leur design soigné allie style et performance pour répondre
          aux besoins des cyclistes exigeants.
        </p>
        <p className="hometext__conclu">
          Il est important de noter que le choix de la marque dépendra de vos
          préférences personnelles, de votre style de cyclisme et de votre
          budget. Les marques énumérées ci-dessus sont des leaders dans
          l&apos;industrie, offrant une variété d&apos;options pour répondre à
          vos besoins spécifiques. Prenez le temps de comparer les
          caractéristiques, les prix et les avis pour trouver la marque qui vous
          convient le mieux. Que vous recherchiez un casque de sécurité, des
          lunettes stylées, des vêtements performants ou des chaussures
          confortables, l&apos;équipement cycliste idéal est à portée de main
          grâce à ces marques de renom. Profitez de vos aventures sur deux roues
          avec confiance et style grâce à un équipement de qualité.
        </p>
      </div>
    </section>
  );
}

export default HomeText;
