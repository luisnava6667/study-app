<<<<<<< HEAD
import React from "react";
import { Agrega } from "../../Agrega/Agrega";

=======
import CalifUniversidades from "../../Calificar/CalifUniversidades";
>>>>>>> 5153a74dd782ef3656b5d1d2749562e1f6706ded
import Footer from "../../Footer/Footer";

import NavBar from "../../onBoarding/components/NavBar/NavBar";
import NivelAcademico from "../../onBoarding/components/NavBar/NivelAcademico";
import RutasUniversidades from "../../onBoarding/components/NavBar/RutasUniversidades";
import Carousel from "../components/Carousel/Carousel";
import HeroHome from "../components/heroHome/HeroHome";
import Nav from "../components/nav/Nav";
import SearchSection from "../components/search/SearchSection";

export const HomeScreen = () => {
  return (
<<<<<<< HEAD
    <div>
      <h1>HomeScreen</h1>
    
      
      <Footer/>
    </div>
=======
    <>
      <Nav />

      <HeroHome />

      <Carousel />

      <SearchSection />

      <div>
        <h1 className="titulo">Las universidades de tu futura carrera segun tu:</h1>
        <NavBar/>
      </div>


  

      
      
      <Footer />
    </>
>>>>>>> 5153a74dd782ef3656b5d1d2749562e1f6706ded
  );
};