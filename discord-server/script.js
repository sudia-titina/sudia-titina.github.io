const serverFeatures = [
    {
        title: 'Komunitas Aktif & Ramah',
        description: 'Bergabunglah dengan ratusan anggota yang aktif setiap hari, siap berdiskusi, bermain, dan bersenang-senang.',
        icon: '👥', // Placeholder icon
    },
    {
        title: 'Acara Rutin & Turnamen',
        description: 'Ikuti acara mingguan, malam permainan, kontes, dan turnamen seru dengan hadiah menarik.',
        icon: '🏆', // Placeholder icon
    },
    {
        title: 'Beragam Channel Topik',
        description: 'Temukan channel untuk hobi favoritmu, mulai dari gaming, anime, musik, seni, hingga teknologi.',
        icon: '🎮', // Placeholder icon
    },
    {
        title: 'Staf yang Membantu',
        description: 'Tim moderator dan admin kami selalu siap membantu dan menjaga suasana server tetap kondusif.',
        icon: '🛡️', // Placeholder icon
    },
    {
        title: 'Bot Kustom & Seru',
        description: 'Nikmati berbagai bot untuk musik, game mini, utilitas, dan banyak lagi untuk menambah keseruan.',
        icon: '🤖', // Placeholder icon
    },
    {
        title: 'Area Diskusi Bebas',
        description: 'Berbagi pendapat, ide, atau sekadar mengobrol santai dengan anggota lain di channel umum kami.',
        icon: '💬', // Placeholder icon
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const featuresContainer = document.getElementById('features-container');
    const yearSpan = document.getElementById('year');

    serverFeatures.forEach(feature => {
        const featureCard = document.createElement('div');
        featureCard.classList.add('feature-card');

        const iconDiv = document.createElement('div');
        iconDiv.classList.add('feature-icon');
        iconDiv.textContent = feature.icon;

        const titleH3 = document.createElement('h3');
        titleH3.classList.add('feature-title');
        titleH3.textContent = feature.title;

        const descriptionP = document.createElement('p');
        descriptionP.classList.add('feature-description');
        descriptionP.textContent = feature.description;

        featureCard.appendChild(iconDiv);
        featureCard.appendChild(titleH3);
        featureCard.appendChild(descriptionP);

        featuresContainer.appendChild(featureCard);
    });

    // Set tahun di footer
    yearSpan.textContent = new Date().getFullYear();
});