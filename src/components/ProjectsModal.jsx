import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { GrClose } from "react-icons/gr";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function ProjectsModal(props) {
    function projectName(activeindexname) {
        switch (activeindexname) {
            case "tesla":
                return "TeslaFinder";
            case "zombie":
                return "Fred VS ZombieCats";
            case "solaris":
                return "SOLARIS";
            case "paws":
                return "Paws Cause Applause";
            case "portfolio":
                return "Portfolio";
        }
    }

    function projectDescription(activeindexname) {
        switch (activeindexname) {
            case "tesla":
                return (
                    <div className="text-white font-[Montserrat] px-2">
                        <p className="text-sm xxl:text-xl lg:text-base xxl:text-xl">
                            TeslaFinder is a web application designed to monitor Tesla's inventory in real-time, providing users with instant discount alerts and up-to-date pricing insights. Developed by a team of four dedicated developers, including myself, TeslaFinder is a powerful tool for anyone looking to stay informed about Tesla's offerings.
                        </p>

                        <h2 className="text-xl xxl:text-4xl lg:text-2xl font-semibold leading-10 xxl:leading-[4rem] lg:leading-[3rem]">
                            Project Objectives
                        </h2>
                        <ul className="text-sm ps-4 xxl:text-xl lg:text-base list-[circle]">
                            <li className="pt-1">
                                <strong>Real-Time Inventory Tracking:</strong> Monitoring Tesla's inventory on tesla.com in real-time, providing instant notifications about discounts and pricing changes.
                            </li>
                            <li className="pt-1">
                                <strong>Historical Insights:</strong> Offering historical data analysis to help users understand pricing trends and inventory availability over time.
                            </li>
                            <li className="pt-1">
                                <strong>Comprehensive Inventory Information:</strong> Providing in-depth information about Tesla's inventory, including detailed car specifications.
                            </li>
                        </ul>
                        <h2 className="text-xl xxl:text-4xl lg:text-2xl font-semibold leading-10 xxl:leading-[4rem] lg:leading-[3rem]">
                            How TeslaFinder Works
                        </h2>
                        <ul className="text-sm ps-4 xxl:text-xl lg:text-base list-[circle]">
                            <li className="pt-1">
                                <strong>Real-Time Notifications:</strong> Users receive real-time deal notifications, alerting them to discounts and price changes as they happen.
                            </li>
                            <li className="pt-1">
                                <strong>Inventory Insights:</strong> TeslaFinder offers in-depth price analysis and comprehensive inventory information, allowing users to make informed decisions.
                            </li>
                            <li className="pt-1">
                                <strong>Listing Page Redirects:</strong> If a user is directed to the listing page on tesla.com instead of the car details page, it means the car has been sold. This is common, especially for heavily discounted vehicles that sell out quickly. However, users can still view historical inventory details on TeslaFinder.
                            </li>
                        </ul>
                        <h2 className="text-xl xxl:text-4xl lg:text-2xl font-semibold leading-10 xxl:leading-[4rem] lg:leading-[3rem]">
                            How TeslaFinder Works
                        </h2>
                        <ul className="text-sm ps-4 xxl:text-xl lg:text-base list-disc">
                            <li className="pt-1">
                                <strong>Frontend Development:</strong> I played an important role in developing robust frontend solutions for TeslaFinder's international automotive search product.
                            </li>
                            <li className="pt-1">
                                <strong>Data Management:</strong> I collaborated closely with a data scientist to manage complex data via API requests, ensuring secure interactions, encryption, fingerprinting, and notifications.
                            </li>
                            <li className="pt-1">
                                <strong>Token Retrieval:</strong> I implemented a recursive approach to token retrieval with retry logic, efficiently handling unauthorized user errors without entering an infinite loop.
                            </li>
                            <li className="pt-1">
                                <strong>3D Design:</strong> I utilized the Three.js library to incorporate 3D elements into the design, enhancing visual engagement and interactivity.
                            </li>
                            <li className="pt-1">
                                <strong>UI/UX:</strong> I contributed to the development of efficient and adaptive web designs and animations using Tailwind CSS, including individual page layouts and components.
                            </li>
                            <li className="pt-1">
                                <strong>Data Visualization:</strong> I processed diverse data sets to create intuitive charts and graphics, utilizing Nivo and Plotly libraries.
                            </li>
                            <li className="pt-1">
                                <strong>React Development:</strong> I built individual components and pages based on React, adhering to best practices for efficient, modular code.
                            </li>
                            <li className="pt-1">
                                <strong>Version Control:</strong> I collaborated closely with the team using Git for version control, fostering efficient teamwork.
                            </li>
                        </ul>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/posts/peng-zhang-55a653113_team-ai-devops-activity-7084539397760524289-Mezx?utm_source=share&utm_medium=member_desktop"
                            className="p-3 bg-white text-neutral-800 rounded-lg font-semibold mt-4 no-underline w-[250px] xxl:w-[350px] gap-2 flex flex-row hover:text-white text-sm xxl:text-xl lg:text-base justify-center hover:bg-black"
                        >
                            <BsLinkedin className="my-auto h-full" /> LinkedIn post
                        </a>
                    </div>
                );
            case "zombie":
                return (
                    <div className="text-white font-[Montserrat] px-2">
                        <p className="text-sm xxl:text-xl lg:text-base xxl:text-xl">
                            Fred vs. ZombieCats is a thrilling game where you play as Fred,
                            the town's last hope against flesh-eating zombie cats. The game
                            was created by a team of three full-stack developers using React.
                            All the game's images were generated using AI Stable Diffusion.
                        </p>

                        <h2 className="text-xl xxl:text-4xl lg:text-2xl font-semibold leading-10 xxl:leading-[4rem] lg:leading-[3rem]">
                            Team Members
                        </h2>
                        <ul className="text-sm ps-4 xxl:text-xl lg:text-base list-[circle]">
                            <li className="pt-1">
                                Pavel Serebrennikov (
                                <a
                                    className="hover:text-cyan-600 text-cyan-400 no-underline"
                                    href="https://github.com/SerebrennikovP"
                                >
                                    @SerebrennikovP
                                </a>
                                ) - Game, Design, Management{" "}
                            </li>
                            <li className="pt-1">
                                Shlomo Zion (
                                <a
                                    className="hover:text-cyan-600 text-cyan-400 no-underline"
                                    href="https://github.com/shlomozion"
                                >
                                    @shlomozion
                                </a>
                                ) - Homepage
                            </li>
                            <li className="pt-1">
                                Sem (
                                <a
                                    className="hover:text-cyan-600 text-cyan-400 no-underline"
                                    href="https://github.com/Bumbox"
                                >
                                    @Bumbox
                                </a>
                                ) - Backend, Scoreboard, DeathPage
                            </li>
                        </ul>
                        <h2 className="text-xl xxl:text-4xl lg:text-2xl font-semibold leading-10 xxl:leading-[4rem] lg:leading-[3rem]">
                            Music
                        </h2>
                        <p className="text-sm xxl:text-xl lg:text-base">
                            The game features music from the Artlist.io library, providing an
                            immersive audio experience.
                        </p>

                        <h2 className="text-xl xxl:text-4xl lg:text-2xl font-semibold leading-10 xxl:leading-[4rem] lg:leading-[3rem]">
                            Gameplay
                        </h2>
                        <p className="text-sm xxl:text-xl lg:text-base">
                            In Pleasantville, a catastrophic experiment at a local lab
                            unleashed a virus, turning cats into flesh-eating zombies. Fred,
                            an animal lover, becomes the town's last hope armed with enchanted
                            hearts. He captures infected cats, using the hearts to heal them.
                        </p>

                        <h2 className="text-xl xxl:text-4xl lg:text-2xl font-semibold leading-10 xxl:leading-[4rem] lg:leading-[3rem]">
                            How to Play
                        </h2>

                        <ul className="text-sm xxl:text-xl lg:text-base ps-4 list-disc">
                            <li className="pt-1">The game is designed for desktop.</li>
                            <li className="pt-1">
                                Use the "Space" key to shoot hearts and heal infected cats.
                            </li>
                            <li className="pt-1">
                                Use the "ArrowLeft" and "ArrowRight" keys to move Fred to
                                different positions.
                            </li>
                            <li className="pt-1">
                                Aim to heal as many cats as possible while avoiding attacks from
                                the zombie cats.
                            </li>
                            <li className="pt-1">
                                Stay alive and save the town from the zombie cat apocalypse!
                            </li>
                            <li className="pt-1">
                                Enjoy the game and have fun playing Fred vs ZombieCats!
                            </li>
                        </ul>

                        <a
                            target="_blank"
                            href="https://github.com/SerebrennikovP/Fred-vs-ZombieCats"
                            className="p-3 bg-white text-neutral-800 rounded-lg font-semibold mt-4 no-underline w-[150px] xxl:w-[250px] gap-2 flex flex-row hover:text-white text-sm xxl:text-xl lg:text-base justify-center hover:bg-black"
                        >
                            <BsGithub className="my-auto h-full" /> Github link
                        </a>
                    </div>
                );
            case "solaris":
                return (
                    <div className="text-white font-[Montserrat] px-2">
                        <p className="text-sm xxl:text-xl lg:text-base xxl:text-xl">
                            Solaris is a project developed during the ITC Smart Cities June
                            2023 Hackathon, focused on the efficient utilization of solar
                            energy through computer vision and satellite imagery. The project
                            offers practical solutions for both electric companies and
                            individuals, aiming to maximize cost savings and environmental
                            sustainability.
                        </p>

                        <h2 className="text-xl xxl:text-4xl lg:text-2xl font-semibold leading-10 xxl:leading-[4rem] lg:leading-[3rem]">
                            Team Members
                        </h2>
                        <h3 className="text-base xxl:text-2xl lg:text-lg font-semibold leading-8 xxl:leading-10 lg:leading-9">
                            Full-Stack Team:
                        </h3>
                        <ul className="text-sm ps-4 xxl:text-xl lg:text-base list-[circle]">
                            <li className="pt-1">
                                <a
                                    className="hover:text-cyan-600 text-cyan-400 no-underline"
                                    href="https://www.linkedin.com/in/serebrennikovp/"
                                >
                                    Pavel Serebrennikov
                                </a>
                            </li>
                            <li className="pt-1">
                                <a
                                    className="hover:text-cyan-600 text-cyan-400 no-underline"
                                    href="https://www.linkedin.com/in/zoe-barkan-a1aa17252/"
                                >
                                    Zoe Barkan
                                </a>
                            </li>
                            <li className="pt-1">
                                <a
                                    className="hover:text-cyan-600 text-cyan-400 no-underline"
                                    href="https://www.linkedin.com/in/nir-cohen-development/"
                                >
                                    Nir Cohen
                                </a>
                            </li>
                        </ul>
                        <h3 className="text-base xxl:text-2xl lg:text-lg font-semibold leading-8 xxl:leading-10 lg:leading-9">
                            Data Scientists Team:
                        </h3>
                        <ul className="text-sm ps-4 xxl:text-xl lg:text-base list-[circle]">
                            <li className="pt-1">
                                <a
                                    className="hover:text-cyan-600 text-cyan-400 no-underline"
                                    href="https://www.linkedin.com/in/alexzaznobin/"
                                >
                                    Alex Zaznobin
                                </a>
                            </li>
                            <li className="pt-1">
                                <a
                                    className="hover:text-cyan-600 text-cyan-400 no-underline"
                                    href="https://www.linkedin.com/in/claudia-palierne-0188631b9/"
                                >
                                    Claudia Palierne
                                </a>
                            </li>
                            <li className="pt-1">
                                <a
                                    className="hover:text-cyan-600 text-cyan-400 no-underline "
                                    href="https://www.linkedin.com/in/jonathan-schwarz91/"
                                >
                                    Jonathan Schwarz
                                </a>
                            </li>
                        </ul>
                        <h2 className="text-xl xxl:text-4xl lg:text-2xl font-semibold leading-10 xxl:leading-[4rem] lg:leading-[3rem]">
                            Project Objectives
                        </h2>
                        <ul className="text-sm xxl:text-xl lg:text-base ps-4 list-decimal">
                            <li className="pt-1">
                                <strong>Rooftop Area Calculation:</strong> Utilize computer
                                vision techniques and satellite imagery to accurately calculate
                                the area of rooftops, enabling precise solar panel placement.
                            </li>
                            <li className="pt-1">
                                <strong>Solar Panel Estimation:</strong> Estimate the optimal
                                placement of solar panels on rooftops to maximize energy
                                generation potential.
                            </li>
                            <li className="pt-1">
                                <strong>Utility Integration:</strong> Provide electric utility
                                companies with a tool to rapidly assess the solar energy
                                potential of various rooftops, facilitating renewable energy
                                adoption.
                            </li>
                            <li className="pt-1">
                                <strong>Cost Savings for Individuals:</strong> Offer individuals
                                a means to calculate potential electricity cost savings through
                                solar power adoption, promoting sustainable living.
                            </li>
                        </ul>

                        <h2 className="text-xl xxl:text-4xl lg:text-2xl font-semibold leading-10 xxl:leading-[4rem] lg:leading-[3rem]">
                            Project Impact
                        </h2>
                        <p className="text-sm xxl:text-xl lg:text-base">
                            Solaris has the potential to revolutionize urban sustainability by
                            tapping into the vast, untapped potential of rooftops. By
                            harnessing solar energy efficiently, it can significantly reduce
                            electricity costs and contribute to a greener planet.
                        </p>

                        <h2 className="text-xl xxl:text-4xl lg:text-2xl font-semibold leading-10 xxl:leading-[4rem] lg:leading-[3rem]">
                            Hackathon Success
                        </h2>
                        <p className="text-sm xxl:text-xl lg:text-base">
                            Our project was awarded first place at the ITC Smart Cities June
                            2023 Hackathon, underscoring our team's commitment and the
                            innovation behind Solaris.
                        </p>
                        <h2 className="text-xl xxl:text-4xl lg:text-2xl font-semibold leading-10 xxl:leading-[4rem] lg:leading-[3rem]">
                            Watch DEMO
                        </h2>
                        <iframe
                            className="w-full aspect-video ..."
                            src="https://www.youtube.com/embed/hY6wJ45Hi6g"
                        ></iframe>
                        <a
                            target="_blank"
                            href="            https://www.linkedin.com/posts/serebrennikovp_hackathonwinners-solaris-smartcities-activity-7093324565069651968-SBgO?utm_source=share&utm_medium=member_desktop"
                            className="p-3 bg-white text-neutral-800 rounded-lg font-semibold mt-4 no-underline w-[250px] xxl:w-[350px] gap-2 flex flex-row hover:text-white text-sm xxl:text-xl lg:text-base justify-center hover:bg-black"
                        >
                            <BsLinkedin className="my-auto h-full" /> LinkedIn post
                        </a>

                    </div>
                );
            case "paws":
                return (
                    <div className="text-white font-[Montserrat] px-2">
                        <p className="text-sm xxl:text-xl lg:text-base xxl:text-xl">
                            Paws Cause Applause is a comprehensive web application for
                            showcasing and adopting pets.It comprises both frontend and
                            backend components that work seamlessly together to provide users
                            with a delightful pet adoption experience.
                        </p>

                        <h2 className="text-xl xxl:text-4xl lg:text-2xl font-semibold leading-10 xxl:leading-[4rem] lg:leading-[3rem]">
                            Frontend
                        </h2>
                        <p className="text-sm xxl:text-xl lg:text-base">
                            The frontend component serves as the user interface, offering a
                            user - friendly platform for browsing and interacting with the
                            available pets.It is built using a combination of technologies,
                            including React.js, HTML5, CSS3, JavaScript, Axios, React Router,
                            Mui(Material - UI), Bootstrap, dotenv, react - phone - input - 2,
                            react - select, react - toastify, and yup.
                        </p>

                        <h2 className="text-xl xxl:text-4xl lg:text-2xl font-semibold leading-10 xxl:leading-[4rem] lg:leading-[3rem]">
                            Backend
                        </h2>
                        <p className="text-sm xxl:text-xl lg:text-base">
                            The backend component handles essential functionalities such as
                            data storage, user authentication, and serving API endpoints for
                            the frontend.It is developed using Node.js, Express.js, MongoDB,
                            Mongoose, JWT (JSON Web Tokens), Bcrypt.js, Multer, Cloudinary,
                            Cors, Dotenv, Joi, Jsonwebtoken, Multer - storage - cloudinary,
                            MySQL, Nodemon, UUID, and Vercel.
                        </p>

                        <h2 className="text-xl xxl:text-4xl lg:text-2xl font-semibold leading-10 xxl:leading-[4rem] lg:leading-[3rem]">
                            Features
                        </h2>

                        <ul className="text-sm xxl:text-xl lg:text-base ps-4 list-disc">
                            <li className="pt-1">Browse and search available pets</li>
                            <li className="pt-1">View detailed information about a pet</li>
                            <li className="pt-1">Register and login as a user</li>
                            <li className="pt-1">
                                Adopt / Foster a pet and manage your adopted pets
                            </li>
                            <li className="pt-1">Favorite list</li>
                            <li className="pt-1">
                                Update user profile information and password
                            </li>
                            <li className="pt-1">
                                Enjoy the game and have fun playing Fred vs ZombieCats!
                            </li>
                        </ul>

                        <h2 className="text-xl xxl:text-4xl lg:text-2xl font-semibold leading-10 xxl:leading-[4rem] lg:leading-[3rem]">
                            Admin Mode
                        </h2>
                        <p className="text-sm xxl:text-xl lg:text-base">
                            For admin access, please send an email to
                            <a
                                className="hover:text-cyan-600 text-cyan-400 no-underline"
                                href="mailto:serebrennikov.p.d@gmail.com"
                            >
                                {" "}
                                serebrennikov.p.d@gmail.com
                            </a>{" "}
                            with your request. Once approved, you will be granted admin
                            access, which allows you to:
                        </p>
                        <ul className="text-sm xxl:text-xl lg:text-base ps-4 list-disc">
                            <li className="pt-1"> Add a pet</li>
                            <li className="pt-1">View a list of all users in the database</li>
                            <li className="pt-1">
                                View a list of all pets and edit their information
                            </li>
                        </ul>

                        <h2 className="text-xl xxl:text-4xl lg:text-2xl font-semibold leading-10 xxl:leading-[4rem] lg:leading-[3rem]">
                            API Endpoints (Backend)
                        </h2>
                        <ul className="text-sm xxl:text-xl lg:text-base ps-4 list-disc">
                            <li className="pt-1">
                                {" "}
                                <strong>User Endpoints:</strong> Signup, Login, Get user information, Update user
                                information, Get all users, Change user role to admin
                            </li>
                            <li className="pt-1">
                                <strong>Pets Endpoints:</strong> Get information about a specific pet, Search for
                                pets, Get available breeds, Get random pets, Change pet status,
                                Add a pet to favorites, Get user's pets, Get user's favorite
                                pets, Add a new pet, Update pet information, Get all pets
                            </li>
                        </ul>

                        <a
                            target="_blank"
                            href="https://github.com/SerebrennikovP/Paws-Cause-Applause-client"
                            className="p-3 bg-white text-neutral-800 rounded-lg font-semibold mt-4 no-underline w-[250px] xxl:w-[350px] gap-2 flex flex-row hover:text-white text-sm xxl:text-xl lg:text-base justify-center hover:bg-black"
                        >
                            <BsGithub className="my-auto h-full" /> Github link (Frontend)
                        </a>
                        <a
                            target="_blank"
                            href="https://github.com/SerebrennikovP/Paws-Cause-Applause-server"
                            className="p-3 bg-white text-neutral-800 rounded-lg font-semibold mt-4 no-underline w-[250px] xxl:w-[350px] gap-2 flex flex-row hover:text-white text-sm xxl:text-xl lg:text-base justify-center hover:bg-black"
                        >
                            <BsGithub className="my-auto h-full" /> Github link (Backend)
                        </a>
                    </div>
                );

            case "portfolio":
                return (
                    <div className="text-white font-[Montserrat] px-2">
                        <p className="text-sm xxl:text-xl lg:text-base xxl:text-xl">
                            My portfolio website is a testament to my creative journey, showcasing my skills in ideation, design, UX/UI, development, logo creation, and coding. Every element on the site, from concept to execution, is my own work. It's a reflection of my commitment to originality and innovation in web development.
                        </p>

                        <h2 className="text-xl xxl:text-4xl lg:text-2xl font-semibold leading-10 xxl:leading-[4rem] lg:leading-[3rem]">
                            Key Features
                        </h2>
                        <ul className="text-sm xxl:text-xl lg:text-base ps-4 list-disc">
                            <li className="pt-1">
                                <strong>Full Ownership:</strong> This portfolio website is a product of my complete ownership, from concept inception to design, user experience (UX) and user interface (UI) design, and finally, its development.
                            </li>
                            <li className="pt-1">
                                <strong>No Templates:</strong> Unlike many websites, I've not relied on ready-made templates. Every aspect of the site is a bespoke creation.
                            </li>
                            <li className="pt-1">
                                <strong>Artificial Intelligence: </strong> Some of the images on the website were generated using AI Stable Diffusion, adding a touch of cutting-edge technology to the visual experience.
                            </li>
                        </ul>
                        <h2 className="text-xl xxl:text-4xl lg:text-2xl font-semibold leading-10 xxl:leading-[4rem] lg:leading-[3rem]">
                            Device Compatibility
                        </h2>
                        <p className="text-sm xxl:text-xl lg:text-base">
                            The website has been meticulously designed to ensure maximum responsiveness, adapting seamlessly to various screen sizes and devices. However, please be aware that due to the incorporation of cutting-edge technologies, it may not display correctly on older devices. It is recommended to use relatively powerful and modern devices for optimal viewing. For the best experience and access to all features, it is highly recommended to view the desktop version of the website. Please note that some features may not be available on mobile devices.
                        </p>
                        <h2 className="text-xl xxl:text-4xl lg:text-2xl font-semibold leading-10 xxl:leading-[4rem] lg:leading-[3rem]">
                            Utilized Libraries and Technologies:
                        </h2>
                        <ul className="text-sm xxl:text-xl lg:text-base ps-4 list-disc">
                            <li className="pt-1">@nivo/pie</li>
                            <li className="pt-1">@react-three/drei</li>
                            <li className="pt-1">@react-three/fiber</li>
                            <li className="pt-1">Tailwind CSS</li>
                            <li className="pt-1">Bootstrap</li>
                            <li className="pt-1">React Bootstrap</li>
                            <li className="pt-1">React Icons</li>
                            <li className="pt-1">React Router Dom</li>
                            <li className="pt-1">React Text Transition</li>
                            <li className="pt-1">Swiper</li>
                            <li className="pt-1">Web Vitals</li>
                            <li className="pt-1">lodash.debounce</li>
                            <li className="pt-1">@types/three</li>
                            <li className="pt-1">react-helmet</li>
                            <li className="pt-1">react-resize-detector</li>
                            <li className="pt-1">react-swipeable</li>
                            <li className="pt-1">swiper</li>
                            <li className="pt-1">react-text-transition</li>
                            <li className="pt-1">React and React DOM</li>
                            <li className="pt-1">web-vitals</li>
                        </ul>

                        <h2 className="text-xl xxl:text-4xl lg:text-2xl font-semibold leading-10 xxl:leading-[4rem] lg:leading-[3rem]">
                            Project in Progress:
                        </h2>
                        <p className="text-sm xxl:text-xl lg:text-base">
                            It's important to note that the website is a work in progress. I will continue to add new content and features to enhance the user experience and showcase my evolving skills and projects.
                        </p>





                        <a
                            target="_blank"
                            href="https://github.com/SerebrennikovP/portfolio"
                            className="p-3 bg-white text-neutral-800 rounded-lg font-semibold mt-4 no-underline w-[150px] xxl:w-[250px] gap-2 flex flex-row hover:text-white text-sm xxl:text-xl lg:text-base justify-center hover:bg-black"
                        >
                            <BsGithub className="my-auto h-full" /> Github link
                        </a>
                    </div>
                );
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            scrollable
        >
            <Modal.Header className="bg-neutral-800 w-full flex justify-between border-neutral-900 text-white ">
                <Modal.Title
                    id="contained-modal-title-vcenter"
                    className="font-[Montserrat] text-white font-semibold text-3xl xxl:text-5xl xxl:leading-[4rem]"
                >
                    {projectName(props.activeindexname)}
                </Modal.Title>
                <GrClose
                    onClick={props.onHide}
                    className="cursor-pointer text-lg xxl:text-3xl"
                />
            </Modal.Header>
            <Modal.Body className="bg-neutral-800">
                {projectDescription(props.activeindexname)}
            </Modal.Body>
            {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
        </Modal>
    );
}

export default ProjectsModal;
