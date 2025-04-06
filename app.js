const { createApp } = Vue;

createApp({
    data() {
        return {
            isMenuOpen: false,
            currentSection: 'home',
            showScrollButton: false,
            isMenuOpen: false,
            activeResearchTab: 0,
            heroTitle: 'Студенческий радиоинтерферометр',
            heroSubtitle: 'Передовые научные исследования для понимания Вселенной',
            currentHeroImage: './src/Images/BG_home.avif',
            mainFeatures: [
                {
                    icon: 'fas fa-satellite',
                    title: 'Космические технологии',
                    content: 'Разработка инновационных инструментов для наблюдения за ближним и дальним космосом.'
                },
                {
                    icon: 'fas fa-chart-line',
                    title: 'Анализ данных',
                    content: 'Обработка и публикация больших объемов данных с интерферометра.'
                },
                {
                    icon: 'fas fa-users',
                    title: 'Сотрудничество с существующими проектами',
                    content: 'Обсуждается сотркдничество с ИСЗФ СО РАН.'
                },
            ],
            researchTabs: [
                {
                    title: 'Солнечные вспышки',
                    content: [
                        '• Идентификация механизмов ускорения электронов, вспышечного нагрева плазмы и процессов переноса энергии в атмосфере',
                        '• Обнаружение и исследование волновых процессов и ударных волн',
                        '• Анализ радиопрозрачности элементов грануляции',
                    ],
                    image: './src/Images/Sun_1.avif',
                    credit: 'Jordi Coy'
                },
                {
                    title: 'Излучение в линии водорода',
                    content: [
                        'Изучение излучения в линии водорода HI 21 см (1420,4 МГц) при различных z',
                        '• Межзвёздные облака водорода на космологических расстояниях в галактиках и протогалактиках, формировавшихся на ранних стадиях эволюции Вселенной',
                        '• Галлактические облака нейтрального водорода',
                    ],
                    image: './src/Images/Centaurus_A.avif',
                    credit: "NASA, ESA, S. Baum and C. O'Dea (RIT), R. Perley and W. Cotton (NRAO/AUI/NSF), and the Hubble Heritage Team (STScI/AURA)"
                },
            ],
            teamMembers: [
                {
                    name: 'Архангельская Ирина Владимировна',
                    position: 'Руководитель проекта',
                    bio: '*Место для регалий*',
                    photo: './src/Images/ArkhangelskayaIV.avif',
                    telegram: '#',
                    email: '#'
                },
                {
                    name: 'Виноградская Анна Валериановна',
                    position: 'Главный теоретик Б23-201',
                    bio: 'Студент 2 курса института ЛаПлаз',
                    photo: './src/Images/VinogradskayaAV.avif',
                    telegram: '#',
                    email: '#'
                },
                {
                    name: 'Зарипов Илья Денисович',
                    position: 'Инженер-программист',
                    bio: 'Студент 2 курса института ЛаПлаз',
                    photo: './src/Images/ZaripovID.avif',
                    telegram: 'https://t.me/izaripov13',
                    email: 'stenypol@gmail.com'
                },
            ],
            publications: [
                {
                    title: 'Создание мобильного радиотелескопа',
                    authors: 'Виноградская А. В., Воскобойников Д. О., Зарипов И. Д., Левченков А. Ф., Басов Я. А.',
                    journal: 'Сборник избранных тезисов работ лауреатов III Зимней научной сессии СНО НИЯУ МИФИ. С.13-14',
                    year: 2023,
                    link: './src/PDFs/Theses_SNO_Winter_session_2023.pdf'
                },
                {
                    title: 'Применение методики радиоинтерферометрии в учебном процессе в НИЯУ МИФИ',
                    authors: 'Архангельская И. В., Виноградская А. В., Зарипов И. Д., Рахангельский А.И., Рудакова Е. А., Маджидов А. И., Часовиков Е. Н., Панькова М. О., Минасян В. В., Плотникова Е. И.',
                    journal: 'XI Международная конференция ЛАПЛАЗ-2025. Сборник научных трудов. С. 372.',
                    year: 2025,
                    link: './src/PDFs/Theses_LapLas_2025.pdf'
                },
            ],
            contactForm: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },
            sectionHeroData: {
                home: {
                    title: 'Студенческий радиоинтерферометр',
                    subtitle: 'Передовые научные исследования для понимания Вселенной',
                    image: './src/Images/BG_home.avif'
                },
                research: {
                    title: 'Наши исследования',
                    subtitle: 'Изучение самых загадочных явлений во Вселенной',
                    image: './src/Images/BG_research.avif'
                },
                team: {
                    title: 'Наша команда',
                    subtitle: 'Талантливые ученые и инженеры, работающие вместе',
                    image: './src/Images/BG_team.avif'
                },
                publications: {
                    title: 'Публикации',
                    subtitle: 'Наши научные работы в ведущих журналах',
                    image: './src/Images/BG_publications.avif'
                },
                contact: {
                    title: 'Свяжитесь с нами',
                    subtitle: 'Мы открыты для сотрудничества',
                    image: './src/Images/BG_contact.avif'
                }
            },
            contactInfo: {
                addres: 'НИЯУ МИФИ. Г. Москва, Каширское ш., 31',
                phone: '+7 (495) 123-45-67',
                email: 'radiotelescopemephi@gmail.com'
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll();
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        changeSection(section) {
            this.currentSection = section;
            this.updateHeroContent(section);
            this.isMenuOpen = false;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        updateHeroContent(section) {
            const data = this.sectionHeroData[section];
            if (data) {
                this.heroTitle = data.title;
                this.heroSubtitle = data.subtitle;
                this.currentHeroImage = data.image;
            }
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
            document.querySelector('.navbar-links').classList.toggle('active');
        },
        scrollToContent() {
            const mainContent = document.querySelector('.main-content');
            window.scrollTo({
                top: mainContent.offsetTop - 70,
                behavior: 'smooth'
            });
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        handleScroll() {
            this.showScrollButton = window.scrollY > 300;
            
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        },
        submitForm() {
            // Здесь должна быть логика отправки формы
            alert(`Спасибо, ${this.contactForm.name}! Ваше сообщение отправлено.`);
            this.contactForm = {
                name: '',
                email: '',
                subject: '',
                message: ''
            };
        }
    }
}).mount('#app');