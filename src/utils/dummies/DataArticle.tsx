function generateUUID() {
    // Generate a pseudo-random UUID-like string (not fully UUID standard, but sufficiently unique)
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0; // Random number between 0-15
        const v = c === 'x' ? r : (r & 0x3 | 0x8); // Ensures the 'y' position is between 8-11
        return v.toString(16);
    });
}

function createSlug(text: string) {
    return text
        .toString()                // Pastikan input adalah string
        .toLowerCase()             // Ubah ke huruf kecil
        .trim()                    // Hapus spasi di awal dan akhir
        .replace(/\s+/g, '-')      // Ganti spasi dengan tanda hubung
        .replace(/[^\w\-]+/g, '')  // Hapus karakter non-alfanumerik
        .replace(/\-\-+/g, '-');   // Ganti beberapa tanda hubung berturut-turut dengan satu tanda hubung
}


export const DataArticle = [
    {
        id: generateUUID(),
        date: new Date(),
        slug: createSlug("REACT NATIVE"),
        title: "REACT NATIVE",
        body: `
            <p><strong>React Native</strong> is an open-source framework developed by Facebook that enables developers to build mobile applications for both iOS and Android using a single codebase. Unlike traditional mobile development approaches that require separate codebases for each platform, React Native allows you to write once and deploy on multiple platforms, saving both time and resources.</p>
            
            <p>The framework leverages <strong>JavaScript</strong> and <strong>React</strong> to create interactive user interfaces. React Native makes use of native components, meaning that it renders real native views rather than webviews, which allows for high performance and a native feel. Additionally, React Native provides developers access to a wide range of native APIs and libraries, allowing for deep integration with platform features like the camera, GPS, and more.</p>
            
            <p><strong>Advantages of React Native:</strong></p>
            <ul>
                <li><strong>Cross-Platform Development:</strong> Write once and deploy on both iOS and Android.</li>
                <li><strong>Hot Reloading:</strong> See code changes instantly without rebuilding the entire app.</li>
                <li><strong>Native Performance:</strong> Access native APIs for better performance and integration.</li>
                <li><strong>Active Community:</strong> A large ecosystem of libraries, tools, and resources.</li>
            </ul>
            
            <p>Companies like <strong>Facebook</strong>, <strong>Instagram</strong>, <strong>Airbnb</strong>, and even <strong>Tesla</strong> have successfully used React Native to build production-level apps, demonstrating its reliability and scalability.</p>
        `
    },
    {
        id: generateUUID(),
        date: new Date(),
        slug: createSlug("Flutter"),
        title: "Flutter",
        body: `
            <p><strong>Flutter</strong> is an open-source UI framework developed by <strong>Google</strong> for building natively compiled applications for mobile, web, and desktop from a single codebase. It uses <strong>Dart</strong>, a programming language developed by Google, and provides a fast and expressive way to build user interfaces with a reactive framework.</p>
            
            <p>One of the key features of Flutter is its ability to create high-performance apps. It compiles to native code, which means it provides faster performance than many other cross-platform frameworks that rely on WebViews or JavaScript bridges. Flutter also provides a rich set of pre-built widgets that follow <em>Material Design</em> guidelines (for Android) and <em>Cupertino</em> guidelines (for iOS), making it easy to create apps that look and feel native.</p>
            
            <p><strong>Flutter Architecture:</strong></p>
            <ul>
                <li><strong>Rendering Engine (Skia):</strong> A high-performance engine that renders widgets and controls every pixel on the screen.</li>
                <li><strong>Hot Reload:</strong> Instantly see changes in your app without restarting it, boosting productivity.</li>
                <li><strong>Customizable UI:</strong> Full control over the app’s design and animations, making Flutter ideal for complex UIs.</li>
            </ul>
            
            <p><strong>Popular Apps Built with Flutter:</strong></p>
            <ul>
                <li><strong>Google Ads</strong></li>
                <li><strong>Alibaba</strong></li>
                <li><strong>BMW</strong></li>
            </ul>
            
            <p>Flutter is ideal for developers who want to build high-performance, visually appealing, and highly customized apps across multiple platforms from a single codebase.</p>
        `
    },
    {
        id: generateUUID(),
        date: new Date(),
        slug: createSlug("Ionic"),
        title: "Ionic",
        body: `
            <p><strong>Ionic</strong> is a powerful open-source framework designed for building high-performance mobile, desktop, and progressive web applications with a single codebase. It uses familiar web technologies such as <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> to create beautiful, cross-platform apps that deliver a native-like performance.</p>
            
            <p>With Ionic, developers have access to a vast library of pre-built, customizable UI components that mimic native app designs, making it easy to create apps that feel intuitive and responsive. Ionic integrates seamlessly with popular web frameworks like <strong>Angular</strong>, <strong>React</strong>, and <strong>Vue</strong>, allowing developers to choose the framework that best fits their needs.</p>
            
            <p><strong>Features of Ionic:</strong></p>
            <ul>
                <li><strong>Cross-Platform Support:</strong> Build apps for mobile, web, and desktop with a single codebase.</li>
                <li><strong>Pre-built UI Components:</strong> Customizable components that follow Material and Cupertino design guidelines.</li>
                <li><strong>Capacitor Integration:</strong> Access native device features like GPS, camera, and more.</li>
                <li><strong>Progressive Web Apps (PWAs):</strong> Build apps that work seamlessly even in offline or low-connectivity conditions.</li>
            </ul>
            
            <p>Ionic also supports Progressive Web Apps (PWAs), allowing users to enjoy a native-like experience even in web browsers. With features like offline support, push notifications, and background syncing, PWAs can function just like native apps, even without a network connection.</p>
            
            <p><strong>Community and Ecosystem:</strong> Ionic has a vibrant and active community, constantly improving the framework. Developers can find plenty of tutorials, resources, and libraries to speed up their development process.</p>
            
            <p>Whether you're a startup looking to quickly deploy apps or an enterprise aiming to maintain a unified codebase, Ionic is a versatile and fast solution for cross-platform development.</p>
        `
    },
];
