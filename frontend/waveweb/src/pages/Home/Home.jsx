// Home.jsx
import "./Home.css";
import { Card, Grid, useMediaQuery, Button, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper/core";
import { Pagination } from "swiper/modules";
import NavBar from "../../components/NavBar/NavBar";

// Importa tus imágenes para las secciones aquí
import sectionImage1 from "../../assets/home-1.jpg";
import sectionImage2 from "../../assets/home-2.jpg";
// import sectionImage3 from "../../assets/section-image-3.jpg";
import sectionImage4 from "../../assets/home-4.jpg";
import sectionImage5 from "../../assets/home-5.png";

SwiperCore.use([Pagination]);

const sections = [
    {
        title: "Bienvenido a Wave Web",
        description: "Innovación y creatividad a tu alcance",
        imageUrl: sectionImage1, 
    },
    {
        title: "Paso 1: Define tu proyecto",
        description: "Realiza un breve cuestionario y define tus objetivos",
        imageUrl: sectionImage2, 
    },
    {
        title: "Paso 2. Elige el plan perfecto para ti",
        description: "",
        imageUrl: sectionImage1, 
    },
    {
        title: 'Paso 3. Seleccionamos a tu desarrollador',
        description: 'Nuestro equipo ha superando rigurosas pruebas técnicas y entrevistas',
        imageUrl: sectionImage4, 
    },
    {
        title: 'Paso 4. Primer Meeting y posible "match" en 48 horas',
        description: 'Tendrás una primera reunión y a partir de ahí comienza la aventura',
        imageUrl: sectionImage5, 
    }

];

const Home = () => {
    const isDesktop = useMediaQuery('(min-width:769px)');
    return (
        <>
            <NavBar />
            <div className="content-container">
                {isDesktop ? (
                    // Versión de escritorio: secciones en una lista
                    <Grid container justifyContent="center" className="section-container">
                        {sections.map((section, index) => (
                            <Grid item xs={12} key={index} className="section">
                                <Card className="card">
                                    <img src={section.imageUrl} alt={section.title} className="card-image" />
                                    <div className="text-content">
                                        <Typography variant="h5" component="h2">{section.title}</Typography>
                                        <Typography>{section.description}</Typography>
                                    </div>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    // Versión móvil: carrusel con las secciones
                    <>
                        <Swiper
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            className="carousel"
                        >
                            {sections.map((section, index) => (
                                <SwiperSlide key={index}>
                                    <Card className="card">
                                        <img src={section.imageUrl} alt={section.title} className="card-image" />
                                        <div className="text-content">
                                            <Typography variant="h5" component="h2">{section.title}</Typography>
                                            <Typography>{section.description}</Typography>
                                        </div>
                                    </Card>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="auth-buttons-container">
                            <Button variant="contained" href="/signup" className="auth-button">
                                <Typography variant="button">Sign Up</Typography>
                            </Button>
                            <Typography className="auth-text">
                                ¿Ya tienes cuenta? <a href="/login" className="auth-link">Log IN</a>
                            </Typography>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Home;