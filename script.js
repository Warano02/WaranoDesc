'use strict'
const allLanguage = {
    nav: {
        en: ["Home", "About", "Services", "Contact", "Contact Me"],
        fr: ["Acceuil","A propos de moi", "Services", "Contacts", "Contactez moi"],
        es: ["Inicio", "Acerca de", "Servicios", "Contacto", "Contáctame"],
        ar: ["الرئيسية", "معلومات عنا", "الخدمات", "اتصل", "اتصل بي"]
    },
    home: {
        h1: {
            en: "Hello, I'm Warano",
            fr: "Hey👋, je suis Warano",
            es: "Hola👋, soy Warano",
            ar: "مرحبًا، أنا ورانو."
        },
        h3: {
            span: {
                en: "Web Developer",
                fr: "Développeur web",
                es: "Desarrollador web",
                ar: "مطور ويب"
            },
            rest: {
                en: "base in Ngaoundéré",
                fr: " à Ngaoundéré",
                es: "en Ngaoundéré",
                ar: "مطور ويب في نغوندير"
            }
        },
        p: {
            en: `Welcome to my portfolio! I am Warano, a passionate full-stack
          developer specializing in the development of dynamic web applications.
          I have strong expertise in backend development with Node.js and
          frontend development with React.js, HTML, and CSS. My goal is to
          create innovative and functional solutions that meet user needs while
          providing an exceptional experience.`,
            fr: `Bienvenue sur mon portfolio ! Je suis Warano, un développeur full-stack passionné, spécialisé dans le développement d'applications web dynamiques. J'ai une solide expertise en développement backend avec Node.js et en développement frontend avec React.js, HTML et CSS. Mon objectif est de créer des solutions innovantes et fonctionnelles qui répondent aux besoins des utilisateurs tout en offrant une expérience exceptionnelle.`,
            es: `¡Bienvenido a mi portafolio! Soy Warano, un desarrollador full-stack apasionado, especializado en el desarrollo de aplicaciones web dinámicas. Tengo una sólida experiencia en desarrollo backend con Node.js y desarrollo frontend con React.js, HTML y CSS. Mi objetivo es crear soluciones innovadoras y funcionales que satisfagan las necesidades de los usuarios mientras ofrezco una experiencia excepcional.`,
            ar: `مرحبًا بكم في محفظتي! أنا وارانو، مطور كامل متحمس متخصص في تطوير تطبيقات الويب الديناميكية. لدي خبرة قوية في تطوير الخادم باستخدام Node.js وتطوير الواجهة الأمامية باستخدام React.js وHTML وCSS. هدفي هو إنشاء حلول مبتكرة وعملية تلبي احتياجات المستخدمين مع توفير تجربة استثنائية.`
        }
    },
    about: {
        h1: {
            en: "About Me",
            fr: "À propos de moi",
            es: "Acerca de mí",
            ar: "حولي"
        },
        p: {
            en: ` I am a developer passionate about technology and innovation. After
            earning my degree in GCE ADVANCED LEVEL, I decided to pursue web
            development to combine my creativity with my problem-solving
            passion.<br />
            I firmly believe that technology can improve people’s lives, and I
            strive to create applications that provide real value. When I’m not
            coding, you can find me to playstation 😍`,
            fr: `Je suis un développeur passionné par la technologie et l'innovation. Après avoir obtenu mon diplôme de Baccalaureat, j'ai décidé de me lancer dans le développement web afin de combiner ma créativité avec ma passion pour la résolution de problèmes.
                Je crois fermement que la technologie peut améliorer la vie des gens, et je m'efforce de créer des applications qui apportent une véritable valeur ajoutée. Quand je ne code pas, vous pouvez me trouver en train de jouer à la PlayStation 😍.`,
            es: `Soy un desarrollador apasionado por la tecnología y la innovación. Después de obtener mi título en el nivel GCE ADVANCED, decidí dedicarme al desarrollo web para combinar mi creatividad con mi pasión por la resolución de problemas. Creo firmemente que la tecnología puede mejorar la vida de las personas, y me esfuerzo por crear aplicaciones que brinden un valor real. Cuando no estoy programando, puedes encontrarme jugando en PlayStation 😍.`,
            ar: `أنا مطور متحمس للتكنولوجيا والابتكار. بعد حصولي على شهادتي في مستوى GCE ADVANCED، قررت التوجه إلى تطوير الويب لدمج إبداعي مع شغفي لحل المشكلات.
أؤمن إيمانا راسخا بأن التكنولوجيا يمكن أن تحسن حياة الناس، وأسعى لخلق تطبيقات تقدم قيمة حقيقية. عندما لا أبرمج، يمكنك أن تجدني ألعب بلاي ستيشن 😍.`
        },
        h2: {
            en: "Skills",
            fr: "Compétences",
            es: "Habilidad",
            ar: "مهارة"
        }
    },
    Services: {
        d1: {
            h1: {
                en: "Backend Development",
                fr: "Développement Backend",
                es: "Desarrollo Backend",
                ar: "تطوير الواجهة الخلفية"
            },
            p: {
                en: `  I provide robust backend development services tailored to create
            scalable applications that meet the unique needs of your business.
            Utilizing Node.js and Express, I develop high-performance RESTful
            APIs that ensure seamless communication between client and server.
            My expertise in MongoDB allows me to offer flexible data storage
            solutions that can handle large volumes of data efficiently. Whether
            you need a new API for a web application or integration with
            existing systems, I deliver solutions that are well-structured,
            maintainable, and optimized for performance.`,
                fr: `Je fournis des services de développement backend robustes, adaptés à la création d'applications évolutives répondant aux besoins uniques de votre entreprise. En utilisant Node.js et Express, je développe des API RESTful haute performance qui assurent une communication fluide entre le client et le serveur.<br>
                Mon expertise en MongoDB me permet d'offrir des solutions de stockage de données flexibles capables de gérer efficacement de grands volumes de données. Que vous ayez besoin d'une nouvelle API pour une application web ou d'une intégration avec des systèmes existants, je délivre des solutions bien structurées, maintenables et optimisées pour la performance.`,
                es: `Ofrezco servicios de desarrollo backend robustos, diseñados para crear aplicaciones escalables que satisfacen las necesidades únicas de su negocio. Utilizando Node.js y Express, desarrollo APIs RESTful de alto rendimiento que garantizan una comunicación fluida entre el cliente y el servidor.<br><br>
                    Mi experiencia en MongoDB me permite ofrecer soluciones de almacenamiento de datos flexibles capaces de manejar grandes volúmenes de datos de manera eficiente. Ya sea que necesite una nueva API para una aplicación web o una integración con sistemas existentes, ofrezco soluciones bien estructuradas, mantenibles y optimizadas para el rendimiento.`,
                ar: `
أقدم خدمات تطوير الواجهة الخلفية القوية، المصممة لإنشاء تطبيقات قابلة للتطوير تلبي الاحتياجات الفريدة لشركتك. باستخدام Node.js و Express، أطور APIs RESTful عالية الأداء تضمن تواصل سلس بين العميل والخادم.<br>
تتيح لي خبرتي في MongoDB تقديم حلول تخزين بيانات مرنة قادرة على التعامل بكفاءة مع كميات كبيرة من البيانات. سواء كنت بحاجة إلى واجهة برمجة تطبيقات جديدة لتطبيق ويب أو تكامل مع الأنظمة القائمة، أقدم حلولًا منظمة بشكل جيد وقابلة للصيانة ومحسّنة من حيث الأداء.`
            }
        },
        d2: {
            h1: {
                en: "Frontend Development",
                fr: "Frontend Devellopement",
                es: "Desarrollo Frontend",
                ar: "خدمات تطوير الواجهة الأمامية"
            },
            p: {
                en: ` In addition to backend solutions, I specialize in frontend
            development that emphasizes engaging and responsive user interfaces.
            Using HTML, CSS, and frameworks like Bootstrap, I craft
            aesthetically pleasing and accessible web pages. My skills in
            JavaScript enable me to implement dynamic interactions, while
            proficiency in React.js allows me to build reusable components that
            enhance user experience. My frontend services ensure that your
            website or application not only looks great but also performs
            seamlessly across all devices.`,
                fr: `En plus des solutions backend, je me spécialise dans le développement frontend qui met l'accent sur des interfaces utilisateur engageantes et réactives. En utilisant HTML, CSS et des frameworks comme Bootstrap, je crée des pages web esthétiques et accessibles. Mes compétences en JavaScript me permettent de mettre en œuvre des interactions dynamiques, tandis que ma maîtrise de React.js me permet de construire des composants réutilisables qui améliorent l'expérience utilisateur. Mes services frontend garantissent que votre site web ou application non seulement a une belle apparence, mais fonctionne également parfaitement sur tous les appareils.`,
                es: `Además de las soluciones de backend, me especializo en el desarrollo frontend que enfatiza interfaces de usuario atractivas y responsivas. Usando HTML, CSS y frameworks como Bootstrap, creo páginas web estéticamente agradables y accesibles. Mis habilidades en JavaScript me permiten implementar interacciones dinámicas, mientras que mi dominio de React.js me permite construir componentes reutilizables que mejoran la experiencia del usuario. Mis servicios de frontend aseguran que su sitio web o aplicación no solo luzca bien, sino que también funcione sin problemas en todos los dispositivos`,
                ar: `
بالإضافة إلى الحلول الخلفية، أختص في تطوير الواجهة الأمامية الذي يركز على واجهات مستخدم جذابة واستجابة. باستخدام HTML وCSS وأطر العمل مثل Bootstrap، أعمل على إنشاء صفحات ويب جذابة بصريًا وقابلة للوصول. تمكنني مهاراتي في JavaScript من تنفيذ تفاعلات ديناميكية، بينما يسمح لي إتقاني لـ React.js ببناء مكونات قابلة لإعادة الاستخدام تعزز تجربة المستخدم. تضمن خدماتي في الواجهة الأمامية أن يبدو موقعك أو تطبيقك رائعًا ويعمل بسلاسة عبر جميع الأجهزة.`
            }
        },
        d3: {
            h1: {
                en: "Comprehensive Tool and Technology Support",
                fr: "Support Outils et Technologies Complet",
                es: "Soporte Integral de Herramientas y Tecnologías",
                ar: "دعم شامل للأدوات والتقنيات"
            },
            p: {
                en: ` I leverage a variety of tools and technologies to optimize the
            development process and enhance project management. Git is employed
            for version control, facilitating smooth collaboration and code
            management. With Docker, I create isolated environments to ensure
            consistent deployments, reducing the risk of unexpected issues
            across various platforms. Additionally, I utilize Postman,Insomnia
            for thorough API testing, allowing for efficient validation and
            debugging of services before deployment.`,
                fr: `J'utilise une variété d'outils et de technologies pour optimiser le processus de développement et améliorer la gestion de projet. Git est utilisé pour le contrôle de version, facilitant une collaboration fluide et la gestion du code. Avec Docker, je crée des environnements isolés pour garantir des déploiements cohérents, réduisant ainsi le risque de problèmes inattendus sur différentes plateformes. De plus, j'utilise Postman et Insomnia pour des tests approfondis des API, permettant une validation et un débogage efficaces des services avant le déploiement.`,
                es: `Aprovecho una variedad de herramientas y tecnologías para optimizar el proceso de desarrollo y mejorar la gestión de proyectos. Se utiliza Git para el control de versiones, facilitando una colaboración fluida y la gestión del código. Con Docker, creo entornos aislados para garantizar despliegues consistentes, reduciendo el riesgo de problemas inesperados en varias plataformas. Además, utilizo Postman e Insomnia para pruebas exhaustivas de API, lo que permite una validación y depuración eficientes de los servicios antes del despliegue.`,
                ar: `أستفيد من مجموعة متنوعة من الأدوات والتقنيات لتحسين عملية التطوير وتعزيز إدارة المشاريع. يتم استخدام Git للتحكم في الإصدارات، مما يسهل التعاون السلس وإدارة الشفرة. باستخدام Docker، أخلق بيئات معزولة لضمان عمليات نشر متسقة، مما يقلل من خطر حدوث مشكلات غير متوقعة عبر مختلف المنصات. بالإضافة إلى ذلك، أستخدم Postman و Insomnia لاختبار واجهة برمجة التطبيقات بشكل شامل، مما يسمح بالتحقق من صحة الخدمات وتصحيح الأخطاء بشكل فعال قبل النشر.`
            }
        }
    },
    Contact: {
        en: ["Full Name", "Enter Your Full Name", "Your Email", "Enter Your Email", "Your Message", "Enter Your Message", "Submit"],
        fr: ["Nom Complet", "Entrez Votre Nom Complet", "Votre Email", "Entrez Votre Email", "Votre Message", "Entrez Votre Message", "Soumettre"],
        es: ["Nombre Completo", "Ingrese Su Nombre Completo", "Su Correo Electrónico", "Ingrese Su Correo Electrónico", "Su Mensaje", "Ingrese Su Mensaje", "Enviar"],
        ar: ["الاسم الكامل", "أدخل اسمك الكامل", "بريدك الإلكتروني", "أدخل بريدك الإلكتروني", "رسالتك", "أدخل رسالتك", "إرسال"]
    },
    footter: {
        en: ["About My services", `  I would love to hear from you! If you have any questions,
          collaboration proposals, or just want to chat, please feel free to
          reach out to me.`],
        fr: ["À propos de mes services", "J'aimerais avoir de vos nouvelles ! Si vous avez des questions, des propositions de collaboration ou si vous souhaitez simplement discuter, n'hésitez pas à me contacter."],
        es: ["Acerca de mis servicios", "¡Me encantaría saber de ti! Si tienes alguna pregunta, propuestas de colaboración o simplemente quieres charlar, no dudes en contactarme."],
        ar: ["عن خدماتي", "سأكون سعيدًا بسماع أخبارك! إذا كان لديك أي أسئلة، أو اقتراحات للتعاون، أو إذا كنت تريد فقط الدردشة، فلا تتردد في التواصل معي."]
    }
}

function changeContent(lan) {
    let result
    switch (lan) {
        case "fr":
            result = ` <nav>
    <a href="" class="logo"><span>Felix</span></a>
    <ul class="links">
      <a href="#home">${allLanguage.nav.fr[0]}</a>
      <a href="#about">${allLanguage.nav.fr[1]}</a>
      <a href="#services">${allLanguage.nav.fr[2]}</a>
      <a href="#contact">${allLanguage.nav.fr[3]}</a>
     
    </ul>
     <select id="lang">
      <option value="fr">&#x1F1EB;&#x1F1F7;</option>
        <option value="en">&#x1F1FA;&#x1F1F8;</option>
        <option value="es">&#x1F1EA;&#x1F1F8;</option>
        <option value="ar">&#x1F1F8;&#x1F1E6;</option>
      </select>
    <a href="#contact" class="btn">${allLanguage.nav.fr[4]}</a>
      <i class="bx bx-menu-alt-right" id="menu"></i>

    </nav>

  <section id="home">
    <img src="PXL_20240411_183958244.PORTRAIT.jpg" alt="" />

    <div class="info-box">
      <h1><span>${allLanguage.home.h1.fr}</span></h1>
      <h3><span>${allLanguage.home.h3.span.fr}</span> ${allLanguage.home.h3.rest.fr}</h3>
      <p>${allLanguage.home.p.fr}</p>
    </div>
    <div class="btn-box">
      <div class="btn">Hiro</div>
      <div class="btn">${allLanguage.nav.fr[4]}</div>
    </div>
  </section>
  <section id="about">
    <div class="about-box">
      <div class="about-info">
        <h1><span>${allLanguage.about.h1.fr}</span></h1>
        <p>${allLanguage.about.p.fr}</p>
      </div>

      <h2><span>${allLanguage.about.h2.fr}</span></h2>
      <div class="skills">
        <ul>
          <li>
            <span><i class="bx bxs-chevron-right"></i> HTML</span>
          </li>
          <li>
            <span><i class="bx bxs-chevron-right"></i> CSS</span>
          </li>
          <li>
            <span><i class="bx bxs-chevron-right"></i> JavaScript</span>
          </li>
        </ul>
        <ul>
          <li>
            <span><i class="bx bxs-chevron-right"></i> React</span>
          </li>
          <li>
            <span><i class="bx bxs-chevron-right"></i> Node</span>
          </li>
          <li>
            <span><i class="bx bxs-chevron-right"></i> MySQL</span>
          </li>
        </ul>
      </div>
    </div>
    <img src="i.png" alt="" />
  </section>

  <section id="services">
    <h1 class="header"><span>${allLanguage.nav.fr[2]}</span></h1>

    <div class="services-container">
      <div class="box">
        <h1><span>${allLanguage.Services.d1.h1.fr}</span></h1>
        <p>
         ${allLanguage.Services.d1.p.fr}
        </p>
        <img src="web-design.jpg" alt="" />
      </div>
      <div class="box">
        <h1><span>${allLanguage.Services.d2.h1.fr}</span></h1>
        <p>
          ${allLanguage.Services.d2.p.fr}
        </p>
        <img src="web-dev.jpg" alt="" />
      </div>
      <div class="box">
        <h1><span>${allLanguage.Services.d3.h1.fr}</span></h1>
        <p>
      ${allLanguage.Services.d3.p.fr}
        </p>
        <img src="graphic.jpg" alt="" />
      </div>
    </div>
  </section>

  <section id="contact">
    <h1 class="header"><span>Contact</span></h1>
    <form action="https://formspree.io/f/mzzpvkbn" method="POST">
      <div class="input-box">
        <span>${allLanguage.Contact.fr[0]}</span>
        <input type="text" name="Nom" placeholder="${allLanguage.Contact.fr[1]}" required/>
      </div>
      <div class="input-box">
        <span>${allLanguage.Contact.fr[2]} </span>
        <input type="email" name="Email" placeholder="${allLanguage.Contact.fr[3]}" required />
      </div>
      <div class="input-box">
        <span>${allLanguage.Contact.fr[4]}</span>
        <input type="text" name="Message" placeholder="${allLanguage.Contact.fr[5]}" required/>
      </div>
      <button class="btn" type="submit">${allLanguage.Contact.fr[6]}</button>
    </form>
  </section>

  <footer>
    <div class="col-left">
      <div class="col-box">
        <span><i class="bx bxs-location-plus"></i></span>
        <span>A10,Gloria city,Dang,Ngaoundéré Cameroon</span>
      </div>
      <div class="col-box">
        <span><i class="bx bxs-phone"></i></span>
        <span>+237621092130</span>
      </div>
      <div class="col-box">
        <span><i class="bx bx-envelope"></i></span>
        <span>Carineteoi@gmai.com</span>
      </div>
    </div>
    <div class="col-right">
      <span>${allLanguage.footter.fr[0]}</span>
      <p>
      ${allLanguage.footter.fr[1]}
      </p>
      <div class="social-icons">
        <span><i class="bx bxl-instagram"></i></span>
        <span> <i class="bx bxl-instagram"></i></span>
        <span> <i class="bx bxl-linkedin"></i></span>
        <span> <i class="bx bxl-github"></i></span>
      </div>
    </div>
  </footer>
`
return result
            break;
        case "es":
            result = `<div id="container"> <nav>
            <a href="" class="logo"><span>Felix</span></a>
            <ul class="links">
              <a href="#home">${allLanguage.nav.es[0]}</a>
              <a href="#about">${allLanguage.nav.es[1]}</a>
              <a href="#services">${allLanguage.nav.es[2]}</a>
              <a href="#contact">${allLanguage.nav.es[3]}</a>
            
            </ul>
              <select id="lang">
              <option value="es">&#x1F1EA;&#x1F1F8;</option>
                <option value="en">&#x1F1FA;&#x1F1F8;</option>
                <option value="fr">&#x1F1EB;&#x1F1F7;</option>
                
                <option value="ar">&#x1F1F8;&#x1F1E6;</option>
              </select>
            <a href="#contact" class="btn">${allLanguage.nav.es[4]}</a>
                      <i class="bx bx-menu-alt-right" id="menu"></i>

            </nav>
        
          <section id="home">
            <img src="PXL_20240411_183958244.PORTRAIT.jpg" alt="" />
        
            <div class="info-box">
              <h1><span>${allLanguage.home.h1.es}</span></h1>
              <h3><span>${allLanguage.home.h3.span.es}</span> ${allLanguage.home.h3.rest.es}</h3>
              <p>${allLanguage.home.p.es}</p>
            </div>
            <div class="btn-box">
              <div class="btn">Hiro</div>
              <div class="btn">${allLanguage.nav.es[4]}</div>
            </div>
          </section>
          <section id="about">
            <div class="about-box">
              <div class="about-info">
                <h1><span>${allLanguage.about.h1.es}</span></h1>
                <p>${allLanguage.about.p.es}</p>
              </div>
        
              <h2><span>${allLanguage.about.h2.es}</span></h2>
              <div class="skills">
                <ul>
                  <li>
                    <span><i class="bx bxs-chevron-right"></i> HTML</span>
                  </li>
                  <li>
                    <span><i class="bx bxs-chevron-right"></i> CSS</span>
                  </li>
                  <li>
                    <span><i class="bx bxs-chevron-right"></i> JavaScript</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span><i class="bx bxs-chevron-right"></i> React</span>
                  </li>
                  <li>
                    <span><i class="bx bxs-chevron-right"></i> Node</span>
                  </li>
                  <li>
                    <span><i class="bx bxs-chevron-right"></i> MySQL</span>
                  </li>
                </ul>
              </div>
            </div>
            <img src="i.png" alt="" />
          </section>
        
          <section id="services">
            <h1 class="header"><span>${allLanguage.nav.es[2]}</span></h1>
        
            <div class="services-container">
              <div class="box">
                <h1><span>${allLanguage.Services.d1.h1.es}</span></h1>
                <p>
                 ${allLanguage.Services.d1.p.es}
                </p>
                <img src="web-design.jpg" alt="" />
              </div>
              <div class="box">
                <h1><span>${allLanguage.Services.d2.h1.es}</span></h1>
                <p>
                  ${allLanguage.Services.d2.p.es}
                </p>
                <img src="web-dev.jpg" alt="" />
              </div>
              <div class="box">
                <h1><span>${allLanguage.Services.d3.h1.es}</span></h1>
                <p>
              ${allLanguage.Services.d3.p.es}
                </p>
                <img src="graphic.jpg" alt="" />
              </div>
            </div>
          </section>
        
          <section id="contact">
            <h1 class="header"><span>Contact</span></h1>
            <form action="#">
              <div class="input-box">
                <span>${allLanguage.Contact.es[0]}</span>
                <input type="text" placeholder="${allLanguage.Contact.es[1]}" />
              </div>
              <div class="input-box">
                <span>${allLanguage.Contact.es[2]} </span>
                <input type="email" placeholder="${allLanguage.Contact.es[3]}" />
              </div>
              <div class="input-box">
                <span>${allLanguage.Contact.es[4]}</span>
                <input type="text" placeholder="${allLanguage.Contact.es[5]}" />
              </div>
              <div class="btn">${allLanguage.Contact.es[6]}</div>
            </form>
          </section>
        
          <footer>
            <div class="col-left">
              <div class="col-box">
                <span><i class="bx bxs-location-plus"></i></span>
                <span>A10,Gloria city,Dang,Ngaoundéré Cameroon</span>
              </div>
              <div class="col-box">
                <span><i class="bx bxs-phone"></i></span>
                <span>+237621092130</span>
              </div>
              <div class="col-box">
                <span><i class="bx bx-envelope"></i></span>
                <span>Carineteoi@gmai.com</span>
              </div>
            </div>
            <div class="col-right">
              <span>${allLanguage.footter.es[0]}</span>
              <p>
              ${allLanguage.footter.es[1]}
              </p>
              <div class="social-icons">
                <span><i class="bx bxl-instagram"></i></span>
                <span> <i class="bx bxl-instagram"></i></span>
                <span> <i class="bx bxl-linkedin"></i></span>
                <span> <i class="bx bxl-github"></i></span>
              </div>
            </div>
          </footer>
        </div>`
        return result
            break;
        case "ar":
            result = `<div id="container"> <nav>
            <a href="" class="logo"><span>Felix</span></a>
            <ul class="links">
              <a href="#home">${allLanguage.nav.ar[0]}</a>
              <a href="#about">${allLanguage.nav.ar[1]}</a>
              <a href="#services">${allLanguage.nav.ar[2]}</a>
              <a href="#contact">${allLanguage.nav.ar[3]}</a>
          
            </ul>
                <select id="lang">
              <option value="ar">&#x1F1F8;&#x1F1E6;</option>
                <option value="en">&#x1F1FA;&#x1F1F8;</option>
                <option value="fr">&#x1F1EB;&#x1F1F7;</option>
                <option value="es">&#x1F1EA;&#x1F1F8;</option>
                
              </select>
            <a href="#contact" class="btn">${allLanguage.nav.ar[4]}</a>
                      <i class="bx bx-menu-alt-right" id="menu"></i>

            </nav>
        
          <section id="home">
            <img src="PXL_20240411_183958244.PORTRAIT.jpg" alt="" />
        
            <div class="info-box">
              <h1><span>${allLanguage.home.h1.ar}</span></h1>
              <h3><span>${allLanguage.home.h3.span.ar}</span> ${allLanguage.home.h3.rest.ar}</h3>
              <p>${allLanguage.home.p.ar}</p>
            </div>
            <div class="btn-box">
              <div class="btn">Hiro</div>
              <div class="btn">${allLanguage.nav.ar[4]}</div>
            </div>
          </section>
          <section id="about">
            <div class="about-box">
              <div class="about-info">
                <h1><span>${allLanguage.about.h1.ar}</span></h1>
                <p>${allLanguage.about.p.ar}</p>
              </div>
        
              <h2><span>${allLanguage.about.h2.ar}</span></h2>
              <div class="skills">
                <ul>
                  <li>
                    <span><i class="bx bxs-chevron-right"></i> HTML</span>
                  </li>
                  <li>
                    <span><i class="bx bxs-chevron-right"></i> CSS</span>
                  </li>
                  <li>
                    <span><i class="bx bxs-chevron-right"></i> JavaScript</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span><i class="bx bxs-chevron-right"></i> React</span>
                  </li>
                  <li>
                    <span><i class="bx bxs-chevron-right"></i> Node</span>
                  </li>
                  <li>
                    <span><i class="bx bxs-chevron-right"></i> MySQL</span>
                  </li>
                </ul>
              </div>
            </div>
            <img src="i.png" alt="" />
          </section>
        
          <section id="services">
            <h1 class="header"><span>${allLanguage.nav.ar[2]}</span></h1>
        
            <div class="services-container">
              <div class="box">
                <h1><span>${allLanguage.Services.d1.h1.ar}</span></h1>
                <p>
                 ${allLanguage.Services.d1.p.ar}
                </p>
                <img src="web-design.jpg" alt="" />
              </div>
              <div class="box">
                <h1><span>${allLanguage.Services.d2.h1.ar}</span></h1>
                <p>
                  ${allLanguage.Services.d2.p.ar}
                </p>
                <img src="web-dev.jpg" alt="" />
              </div>
              <div class="box">
                <h1><span>${allLanguage.Services.d3.h1.ar}</span></h1>
                <p>
              ${allLanguage.Services.d3.p.ar}
                </p>
                <img src="graphic.jpg" alt="" />
              </div>
            </div>
          </section>
        
          <section id="contact">
            <h1 class="header"><span>Contact</span></h1>
            <form action="https://formspree.io/f/mzzpvkbn" method="POST">
              <div class="input-box">
                <span>${allLanguage.Contact.ar[0]}</span>
                <input type="text" name="Nom" placeholder="${allLanguage.Contact.ar[1]}" required/>
              </div>
              <div class="input-box">
                <span>${allLanguage.Contact.ar[2]} </span>
                <input type="email" name="Email" placeholder="${allLanguage.Contact.ar[3]}" required />
              </div>
              <div class="input-box">
                <span>${allLanguage.Contact.ar[4]}</span>
                <input type="text" name="Message" placeholder="${allLanguage.Contact.ar[5]}" required/>
              </div>
              <button class="btn" type="submit">${allLanguage.Contact.ar[6]}</button>
            </form>
          </section>
        
          <footer>
            <div class="col-left">
              <div class="col-box">
                <span><i class="bx bxs-location-plus"></i></span>
                <span>A10,Gloria city,Dang,Ngaoundéré Cameroon</span>
              </div>
              <div class="col-box">
                <span><i class="bx bxs-phone"></i></span>
                <span>+237621092130</span>
              </div>
              <div class="col-box">
                <span><i class="bx bx-envelope"></i></span>
                <span>Carineteoi@gmai.com</span>
              </div>
            </div>
            <div class="col-right">
              <span>${allLanguage.footter.ar[0]}</span>
              <p>
              ${allLanguage.footter.ar[1]}
              </p>
              <div class="social-icons">
                <span><i class="bx bxl-instagram"></i></span>
                <span> <i class="bx bxl-instagram"></i></span>
                <span> <i class="bx bxl-linkedin"></i></span>
                <span> <i class="bx bxl-github"></i></span>
              </div>
            </div>
          </footer>
        </div>`
        return result
            break;
        default:
            result = ` <div id="container"><nav>
    <a href="" class="logo"><span>Felix</span></a>
    <ul class="links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
     
    </ul>
     <select id="lang">
        <option value="en">&#x1F1FA;&#x1F1F8;</option>
        <option value="fr">&#x1F1EB;&#x1F1F7;</option>
        <option value="es">&#x1F1EA;&#x1F1F8;</option>
        <option value="ar">&#x1F1F8;&#x1F1E6;</option>
      </select>
    <a href="#contact" class="btn">Contact Me</a>
        <i class="bx bx-menu-alt-right" id="menu"></i>

  </nav>

  <section id="home">
    <img src="PXL_20240411_183958244.PORTRAIT.jpg" alt="" />

    <div class="info-box">
      <h1><span>Hello, I'm Warano</span></h1>
      <h3><span>Web Developer</span> base in Ngaoundéré</h3>
      <p>
        Welcome to my portfolio! I am Warano, a passionate full-stack
        developer specializing in the development of dynamic web applications.
        I have strong expertise in backend development with Node.js and
        frontend development with React.js, HTML, and CSS. My goal is to
        create innovative and functional solutions that meet user needs while
        providing an exceptional experience.
      </p>
    </div>
    <div class="btn-box">
      <div class="btn">Hiro</div>
      <div class="btn">Contact Me</div>
    </div>
  </section>
  <section id="about">
    <div class="about-box">
      <div class="about-info">
        <h1><span>About Me</span></h1>
        <p>
          I am a developer passionate about technology and innovation. After
          earning my degree in GCE ADVANCED LEVEL, I decided to pursue web
          development to combine my creativity with my problem-solving
          passion.<br />
          I firmly believe that technology can improve people’s lives, and I
          strive to create applications that provide real value. When I’m not
          coding, you can find me to playstation 😍
        </p>
      </div>

      <h2><span>Skills</span></h2>
      <div class="skills">
        <ul>
          <li>
            <span><i class="bx bxs-chevron-right"></i> HTML</span>
          </li>
          <li>
            <span><i class="bx bxs-chevron-right"></i> CSS</span>
          </li>
          <li>
            <span><i class="bx bxs-chevron-right"></i> JavaScript</span>
          </li>
        </ul>
        <ul>
          <li>
            <span><i class="bx bxs-chevron-right"></i> React</span>
          </li>
          <li>
            <span><i class="bx bxs-chevron-right"></i> Node</span>
          </li>
          <li>
            <span><i class="bx bxs-chevron-right"></i> MySQL</span>
          </li>
        </ul>
      </div>
    </div>
    <img src="i.png" alt="" />
  </section>

  <section id="services">
    <h1 class="header"><span>Services</span></h1>

    <div class="services-container">
      <div class="box">
        <h1><span>Backend Development </span></h1>
        <p>
          I provide robust backend development services tailored to create
          scalable applications that meet the unique needs of your business.
          Utilizing Node.js and Express, I develop high-performance RESTful
          APIs that ensure seamless communication between client and server.
          My expertise in MongoDB allows me to offer flexible data storage
          solutions that can handle large volumes of data efficiently. Whether
          you need a new API for a web application or integration with
          existing systems, I deliver solutions that are well-structured,
          maintainable, and optimized for performance.
        </p>
        <img src="web-design.jpg" alt="" />
      </div>
      <div class="box">
        <h1><span>Frontend Development</span></h1>
        <p>
          In addition to backend solutions, I specialize in frontend
          development that emphasizes engaging and responsive user interfaces.
          Using HTML, CSS, and frameworks like Bootstrap, I craft
          aesthetically pleasing and accessible web pages. My skills in
          JavaScript enable me to implement dynamic interactions, while
          proficiency in React.js allows me to build reusable components that
          enhance user experience. My frontend services ensure that your
          website or application not only looks great but also performs
          seamlessly across all devices.
        </p>
        <img src="web-dev.jpg" alt="" />
      </div>
      <div class="box">
        <h1><span>Comprehensive Tool and Technology Support</span></h1>
        <p>
          I leverage a variety of tools and technologies to optimize the
          development process and enhance project management. Git is employed
          for version control, facilitating smooth collaboration and code
          management. With Docker, I create isolated environments to ensure
          consistent deployments, reducing the risk of unexpected issues
          across various platforms. Additionally, I utilize Postman,Insomnia
          for thorough API testing, allowing for efficient validation and
          debugging of services before deployment.
        </p>
        <img src="graphic.jpg" alt="" />
      </div>
    </div>
  </section>

  <section id="contact">
    <h1 class="header"><span>Contact</span></h1>
    <form action="https://formspree.io/f/mzzpvkbn" method="POST">
      <div class="input-box">
        <span>Full Name</span>
        <input type="text" name="Nom" placeholder="Enter Your Full Name" required/>
      </div>
      <div class="input-box">
        <span>Your Email </span>
        <input type="email" name="Email" placeholder="Enter Your Email" required/>
      </div>
      <div class="input-box">
        <span>Your Message</span>
        <input type="text" name="Message" placeholder="Enter Your Message" required/>
      </div>
      <button class="btn" type="Submit">Submit</button>
    </form>
  </section>

  <footer>
    <div class="col-left">
      <div class="col-box">
        <span><i class="bx bxs-location-plus"></i></span>
        <span>A10,Gloria city,Dang,Ngaoundéré Cameroon</span>
      </div>
      <div class="col-box">
        <span><i class="bx bxs-phone"></i></span>
        <span>+237621092130</span>
      </div>
      <div class="col-box">
        <span><i class="bx bx-envelope"></i></span>
        <span>Carineteoi@gmai.com</span>
      </div>
    </div>
    <div class="col-right">
      <span>About My services</span>
      <p>
        I would love to hear from you! If you have any questions,
        collaboration proposals, or just want to chat, please feel free to
        reach out to me.
      </p>
      <div class="social-icons">
        <span><i class="bx bxl-instagram"></i></span>
        <span> <i class="bx bxl-instagram"></i></span>
        <span> <i class="bx bxl-linkedin"></i></span>
        <span> <i class="bx bxl-github"></i></span>
      </div>
    </div>
  </footer>
                   
                      </div>`  
                    return result
                    break;
           
    }
}


let container = document.getElementById("container");
let language=localStorage.getItem('ls')||"Warano langue aleatoire🥳😹😹"
 container.insertAdjacentHTML("beforeend",changeContent(language))
 let lang = document.getElementById('lang');

lang.addEventListener('change', () => {
    const valeur = changeContent(lang.value);
    container.innerHTML = valeur;
    localStorage.setItem("ls",lang.value)
    location.reload()
})
const menu=document.querySelector('#menu')
const nav=document.querySelector('.links');
// nav.style.display="flex"

menu.onclick=()=>{
  menu.classList.toggle("bx-x")
 nav.classList.toggle('active')
}