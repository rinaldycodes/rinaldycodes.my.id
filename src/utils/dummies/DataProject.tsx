import { MyImages } from "../constants/MyImages";

export const DataProject = [
    {
        id: '1',
        title: 'Maya Puspitaria',
        description: 'A personal portfolio website for Maya Puspitaria featuring her interior design work, expertise, education, and contact information. Built with elegant UI showcasing her design projects.',
        technologies: ['Bootstrap', 'JavaScript', 'Swiper'],
        features: [
            'Personal Profile',
            'Portfolio Gallery',
            'Skills Section',
            'Education & Experience',
            'Testimonials',
            'Contact Form',
            'Responsive Design'
        ],
        repoLink: 'https://github.com/rinaldycodes/maya-puspitaria',
        liveDemoLink: 'https://rinaldycodes.github.io/maya-puspitaria/',
        // imageUrl: MyImages.logo_kcg,
        imageUrl: MyImages.maya_portofolio,
    },
    {
        id: '2',
        title: '📊 KPI Tracker',
        description:
            'KPI Tracker app for recording and monitoring daily KPI achievements in a simple way using React Native.',
        technologies: ['React Native', 'TypeScript', 'AsyncStorage', 'CSV Export'],
        features: [
            'Add, edit, and delete KPIs',
            'Daily KPI counter (+ / -)',
            'Save daily KPI data to local storage',
            'Display daily KPI history',
            'Export KPI data to CSV format',
            'Lightweight and user-friendly UI',
        ],
        repoLink: 'https://github.com/rinaldycodes/kpi-tracker',
        liveDemoLink: 'https://rinaldycodes.github.io/kpi-tracker/',
        imageUrl: MyImages.logo_kcg, // Replace with your actual image import
    },
];
