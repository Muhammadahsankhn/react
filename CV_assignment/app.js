const Cv = React.createElement(
    'div',
    { className: 'cv-container' },
    [
        React.createElement('h1', {}, 'Muhammad Ahsan Khan'),
        React.createElement('p', {}, 'Software Engineer | React Developer'),

        React.createElement('h2', {}, 'Contact'),
        React.createElement('p', {}, 'Email: ahsankhn0987@gmail.com'),
        React.createElement('p', {}, 'Phone: +92 33333333333'),
        React.createElement('p', {}, 'Website: khanAhsan.dev'),
        React.createElement('p', {}, 'LinkedIn: linkedin.com/in/ahsan'),

        React.createElement('h2', {}, 'Experience'),
        React.createElement('ul', {},
            React.createElement('li', {}, 'Frontend Developer - AHS Tech (2024 - Present)'),
            React.createElement('li', {}, 'Web Developer - AHS Solutions (2023 - 2024)'),
            React.createElement('li', {}, 'Intern - AHS Innovations (2022 - 2023)')
        ),

        React.createElement('h2', {}, 'Skills'),
        React.createElement('ul', {},
            React.createElement('li', {}, 'React.js, Redux, JavaScript (ES6+)'),
            React.createElement('li', {}, 'HTML, CSS, Tailwind CSS'),
            React.createElement('li', {}, 'Git, GitHub, CI/CD'),
            React.createElement('li', {}, 'Node.js, Express.js, MongoDB')
        ),

        React.createElement('h2', {}, 'Projects'),
        React.createElement('ul', {},
            React.createElement('li', {}, 'Portfolio Website - React & Tailwind CSS'),
            React.createElement('li', {}, 'E-commerce App - MERN Stack'),
            React.createElement('li', {}, 'Task Manager - React & Firebase')
        ),

        React.createElement('h2', {}, 'Education'),
        React.createElement('p', {}, 'B.Sc. in Computer Science - Sir Syed University(2023 - 2027)'),

        React.createElement('h2', {}, 'Certifications'),
        React.createElement('ul', {},
            React.createElement('li', {}, 'React Developer - Udemy'),
            React.createElement('li', {}, 'Full Stack Web Development - SMIT')
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Cv);
