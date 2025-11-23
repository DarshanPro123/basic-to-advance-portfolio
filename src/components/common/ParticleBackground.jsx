import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = ({ variant = "default" }) => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    // Different particle configurations for different sections
    const particleConfigs = {
        // Hero section - Interactive particles that follow cursor
        hero: {
            fullScreen: { enable: false },
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "grab",
                        parallax: {
                            enable: true,
                            force: 60,
                            smooth: 10,
                        },
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    grab: {
                        distance: 200,
                        links: {
                            opacity: 0.5,
                        },
                    },
                },
            },
            particles: {
                color: {
                    value: "#8b5cf6",
                },
                links: {
                    color: "#8b5cf6",
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        },

        // Portfolio section - Floating particles
        portfolio: {
            fullScreen: { enable: false },
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: ["#667eea", "#764ba2", "#f093fb"],
                },
                links: {
                    enable: false,
                },
                move: {
                    direction: "top",
                    enable: true,
                    outModes: {
                        default: "out",
                    },
                    random: true,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 40,
                },
                opacity: {
                    value: { min: 0.1, max: 0.5 },
                },
                shape: {
                    type: ["circle", "triangle", "polygon"],
                },
                size: {
                    value: { min: 2, max: 5 },
                },
            },
            detectRetina: true,
        },

        // Services section - Minimal elegant particles
        services: {
            fullScreen: { enable: false },
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "connect",
                    },
                    resize: true,
                },
                modes: {
                    connect: {
                        distance: 120,
                        links: {
                            opacity: 0.3,
                        },
                        radius: 140,
                    },
                },
            },
            particles: {
                color: {
                    value: "#8b5cf6",
                },
                links: {
                    enable: false,
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    outModes: {
                        default: "bounce",
                    },
                },
                number: {
                    value: 30,
                },
                opacity: {
                    value: { min: 0.1, max: 0.3 },
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 2 },
                },
            },
            detectRetina: true,
        },

        // Contact section - Starfield effect
        contact: {
            fullScreen: { enable: false },
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "bubble",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 3,
                    },
                    bubble: {
                        distance: 150,
                        size: 6,
                        duration: 2,
                        opacity: 0.8,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    enable: false,
                },
                move: {
                    enable: true,
                    speed: 0.5,
                    direction: "none",
                    random: true,
                    straight: false,
                    outModes: {
                        default: "out",
                    },
                },
                number: {
                    value: 60,
                },
                opacity: {
                    value: { min: 0.1, max: 0.8 },
                    animation: {
                        enable: true,
                        speed: 1,
                        minimumValue: 0.1,
                    },
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                    animation: {
                        enable: true,
                        speed: 2,
                        minimumValue: 0.5,
                    },
                },
            },
            detectRetina: true,
        },

        // Default - Simple and clean global background
        default: {
            fullScreen: { enable: false },
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 100,
                        links: {
                            opacity: 0.2,
                        },
                    },
                },
            },
            particles: {
                color: {
                    value: "#8b5cf6",
                },
                links: {
                    color: "#8b5cf6",
                    distance: 120,
                    enable: true,
                    opacity: 0.1,
                    width: 0.5,
                },
                move: {
                    enable: true,
                    speed: 0.5,
                    direction: "none",
                    random: true,
                    straight: false,
                    outModes: {
                        default: "bounce",
                    },
                },
                number: {
                    value: 30,
                },
                opacity: {
                    value: 0.15,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 2 },
                },
            },
            detectRetina: true,
        },
    };

    const config = particleConfigs[variant] || particleConfigs.default;

    return (
        <Particles
            id={`tsparticles-${variant}`}
            init={particlesInit}
            options={config}
            className="absolute inset-0 -z-10"
        />
    );
};

export default ParticleBackground;
