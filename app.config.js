module.exports = ({ config }) => {
    console.log(config.name); // prints 'My App'
    return {
        ...config,
        name: 'Rinaldycodes',
        icon: "https://raw.githubusercontent.com/rinaldycodes/react-native-portofolio/refs/heads/main/assets/images/profile.jpg",
    };
};
