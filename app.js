const { createApp } = Vue;

createApp({
    data() {
        return {
            currentSection: 'home',
            showScrollButton: false,
            isMenuOpen: false,
            activeResearchTab: 0,
            heroTitle: 'Исследование космоса',
            heroSubtitle: 'Передовые научные исследования для понимания Вселенной',
            currentHeroImage: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            timelineItems: [
                {
                    year: '2018',
                    title: 'Основание проекта',
                    description: 'Создание исследовательской группы и начало работы над проектом.'
                },
                {
                    year: '2019',
                    title: 'Первые результаты',
                    description: 'Получение первых значимых данных и публикация предварительных результатов.'
                },
                {
                    year: '2020',
                    title: 'Международное признание',
                    description: 'Сотрудничество с ведущими мировыми научными центрами.'
                },
                {
                    year: '2021',
                    title: 'Прорыв в исследованиях',
                    description: 'Открытие новых экзопланет и публикация в Nature.'
                },
                {
                    year: '2022',
                    title: 'Расширение команды',
                    description: 'Привлечение новых специалистов и увеличение финансирования.'
                }
            ],
            researchTabs: [
                {
                    title: 'Экзопланеты',
                    content: 'Исследование планет за пределами Солнечной системы.'
                },
                {
                    title: 'Галактическая эволюция',
                    content: 'Изучение формирования и развития галактик.'
                },
                {
                    title: 'Космология',
                    content: 'Исследование структуры и эволюции Вселенной.'
                }
            ],
            teamMembers: [
                {
                    name: 'Дмитрий Иванов',
                    position: 'Руководитель проекта',
                    bio: 'Доктор физико-математических наук, специалист в области астрофизики.',
                    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
                    linkedin: '#',
                    twitter: '#',
                    email: 'mailto:d.ivanov@space-research.ru'
                },
                {
                    name: 'Елена Петрова',
                    position: 'Ведущий исследователь',
                    bio: 'Кандидат физико-математических наук, эксперт в области спектроскопии.',
                    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
                    linkedin: '#',
                    twitter: '#',
                    email: 'mailto:e.petrova@space-research.ru'
                },
                {
                    name: 'Алексей Смирнов',
                    position: 'Инженер-программист',
                    bio: 'Специалист по обработке больших данных и машинному обучению.',
                    photo: 'https://randomuser.me/api/portraits/men/22.jpg',
                    linkedin: '#',
                    twitter: '#',
                    email: 'mailto:a.smirnov@space-research.ru'
                },
                {
                    name: 'Ольга Кузнецова',
                    position: 'Научный сотрудник',
                    bio: 'Специалист в области теоретической космологии.',
                    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
                    linkedin: '#',
                    twitter: '#',
                    email: 'mailto:o.kuznetsova@space-research.ru'
                }
            ],
            publications: [
                {
                    title: 'Новый метод обнаружения экзопланет в системах красных карликов',
                    authors: 'Иванов Д.А., Петрова Е.С., Смирнов А.В.',
                    journal: 'Nature Astronomy',
                    year: 2022,
                    link: '#'
                },
                {
                    title: 'Эволюция спиральных галактик в ранней Вселенной',
                    authors: 'Кузнецова О.Н., Иванов Д.А., Соколов В.П.',
                    journal: 'The Astrophysical Journal',
                    year: 2021,
                    link: '#'
                },
                {
                    title: 'Анализ данных телескопа Хаббл с использованием методов машинного обучения',
                    authors: 'Смирнов А.В., Петрова Е.С., Кузнецова О.Н.',
                    journal: 'Monthly Notices of the Royal Astronomical Society',
                    year: 2020,
                    link: '#'
                }
            ],
            contactForm: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },
            sectionHeroData: {
                home: {
                    title: 'Исследование космоса',
                    subtitle: 'Передовые научные исследования для понимания Вселенной',
                    image: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                },
                mission: {
                    title: 'Наша миссия',
                    subtitle: 'Раскрытие тайн Вселенной через инновационные исследования',
                    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                },
                research: {
                    title: 'Наши исследования',
                    subtitle: 'Изучение самых загадочных явлений во Вселенной',
                    image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                },
                team: {
                    title: 'Наша команда',
                    subtitle: 'Талантливые ученые и инженеры, работающие вместе',
                    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                },
                publications: {
                    title: 'Публикации',
                    subtitle: 'Наши научные работы в ведущих журналах',
                    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                },
                contact: {
                    title: 'Свяжитесь с нами',
                    subtitle: 'Мы открыты для сотрудничества и ответим на все ваши вопросы',
                    image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                }
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