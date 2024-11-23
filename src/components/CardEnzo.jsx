import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProgressBar from "../components/ProgressBar.jsx";
import SocialMedia from "../components/SocialMedia.jsx";
import twitterIcon from "../assets/icons/twitter-original.svg";
import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import facebookIcon from "../assets/icons/facebook-original.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import useTenorGif from "../hooks/useTenor.jsx";
const CardEnzo = () => {
  const gifUrl = useTenorGif("skeletor laughing hysterically");
  const gifUrlTemp = useTenorGif(
    "Skeletor flip",
  );
  const [showDetails, setShowDetails] = useState(false);
  const [showGif, setShowGif] = useState(false);
  const handleShowDetails = () => {
    setShowGif(true);
    setTimeout(() => {
      setShowGif(false);
      setShowDetails(true);
    }, 1500);
  };
  return (
    <div className="mx-auto mt-5 w-full flex justify-center">
      <Link
        to="/"
        className="absolute top-4 right-4 flex items-center text-blue-400 hover:text-blue-600"
      >
        <i className="fa fa-arrow-left mr-2"></i> {/* Flecha hacia atrás */}
        Volver a la pantalla principal
      </Link>
      {/* Card */}
      <div className="w-full max-w-xl p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-purple-900 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={gifUrl}
            alt="Enzo Dellape"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Enzo Dellape
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-300">
            Estudiante de desarrollo de software
          </span>
          <div>
            <p className="text-sm text-white dark:text-gray-100 text-center pt-2">
              Estudiante de Desarrollo de Software en IFTS Nº29 y desarrollador
              en NorthHouse. Apasionado por la tecnología, el gym y los nuevos
              desafíos.
            </p>
          </div>

          <div className="flex mt-4 md:mt-6">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-pink-700 dark:hover:bg-pink-600  dark:focus:ring-blue-800"
            >
              Contactar
            </a>
            <a
              href="#"
              className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Mensaje
            </a>
          </div>
        </div>

        <span
          onClick={handleShowDetails}
          className="cursor-pointer w-full flex justify-center text-base font-medium dark:text-white text-center border-2  border-yellow-400 hover:border-yellow-600 rounded-lg py-2 my-3"
        >
          Mis Tecnologías
        </span>

        {/*Gif Temporal */}
        {showGif && (
          <div className="flex justify-center my-3">
            <img
              src={gifUrlTemp}
              alt="Celebarcion Skeletor"
              className="w-32 h-32 rounded-full"
            ></img>
          </div>
        )}

        {/*ProgressBars */}

        {showDetails && (
          <>
            {/*ProgressBars*/}
            <div className="mx-auto mt-5 w-full ">
              <ProgressBar
                porcentaje={75}
                icon={"src/assets/icons/javascript-original.svg"}
                name={"JavaScript"}
                color={"bg-yellow-500"}
              />
              <ProgressBar
                porcentaje={45}
                icon={"src/assets/icons/react-original.svg"}
                name={"React"}
                color="bg-blue-700"
              />
              <ProgressBar
                porcentaje={25}
                icon={"src/assets/icons/typescript-original.svg"}
                name={"TypeScript"}
                color="bg-blue-600"
              />
            </div>

            {/*Social*/}
            <span className="w-full flex mt-10 mb-5 justify-center text-base font-medium dark:text-white text-center">
              No Olvides Seguirme!
            </span>
            <div className="mx-auto mt-5 gap-2 w-full flex justify-center">
              <SocialMedia
                name={"Twitter"}
                icon={twitterIcon}
                url={"https://twitter.com"}
              />
              <SocialMedia
                name={"Facebook"}
                icon={facebookIcon}
                url={"https://facebook.com"}
              />
              <SocialMedia
                name={"Instagram"}
                icon={instagramIcon}
                url={"https://instagram.com"}
              />
              <SocialMedia
                name={"Linkedin"}
                icon={linkedinIcon}
                url={"https://linkedin.com"}
              />
              <SocialMedia
                name={"GitHub"}
                icon={githubIcon}
                url={"https://github.com"}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CardEnzo;
