'use client'
import { useState } from "react";
import Image from "next/image";
import image from "../../public/remorquage.jpg";
import image1 from "../../public/remorquage.jpg";
import image2 from "../../public/logo-republique-francaise.png";
import image3 from "../../public/remorquage.jpg";
import image5 from "../../public/iledefrance.gif";
import { FaArrowRightLong } from "react-icons/fa6";
import image4 from "../../public/eco.png";
import { RiStarSFill } from "react-icons/ri";
import { IoSend } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { GiTowTruck } from "react-icons/gi";
import { FaBuilding } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "Les enlèvements par un professionnel agréé sont-ils gratuits ? ",
      answer: "Tout enlèvement dans notre périmètre d’intervention est totalement gratuit.",
    },
    {
      question: "Quelle condition pour bénéficier gratuitement du service d’un épaviste agrée ?",
      answer: "La seule et l’unique condition est d’être propriétaire du véhicule à enlever.",
    },
    {
      question: "Carte grise égarée.. pouvez-vous tout de même enlever gratuitement mon véhicule ?",
      answer: "Nous pouvons intervenir pour enlever votre véhicule. Il vous suffit de faire une déclaration de perte auprès de l’autorité compétente. N’hésitez pas à nous joindre par téléphone, nous nous ferons un plaisir de vous renseigner.",
    },
    {
      question: "Mon véhicule provient d’une succession, pouvez-vous l’enlever gratuitement ?",
      answer: "Nous pouvons intervenir pour enlever votre véhicule. Il vous suffit de nous fournir l’ancienne carte grise et l’attestation dévolutive du notaire. N’hésitez pas à nous joindre par téléphone, nous nous ferons un plaisir de vous renseigner.",
    },


    {
      question: "Je n’ai pas fait le changement de carte grise, pouvez-vous enlever mon véhicule gratuitement ?",
      answer: "Nous pouvons intervenir pour enlever votre véhicule. Il vous suffit de nous fournir le certificat de cession de l’ancien propriétaire signé.",
    },

    {
      question: "Un justificatif d’enlèvement est-il fourni ?",
      answer: "Absolument, un justificatif est fourni le jour même de l’enlèvement de votre véhicule.",
    },

    {
      question: "Quels types de véhicule sont concernés ?",
      answer: "Tout type de véhicule.  Qu’il soit roulant, non roulant, en panne, accidenté, brûlé et autres. N’hésitez pas à nous joindre par téléphone, nous nous ferons un plaisir de vous renseigner.",
    },



    {
      question: "Le véhicule doit-il rouler ? ",
      answer: "Pas forcément, notre équipe composée de professionnels agréés et expérimentés est disposée à intervenir dans des conditions parfois très complexes.",
    },

    {
      question: "Assurez-vous l’enlèvement dans des lieux difficilement accessible ?",
      answer: "Notre matériel adapté et notre expérience nous permettent d’intervenir dans toutes circonstances.",
    },

  ];


  return (
    <div className="">
      <div
        className="flex h-[79vh] bg-cover bg-center relative flex items-center p-4 gap-[8vh]"
        style={{ backgroundImage: `url(${image3.src})` }}
      >
        {/*  className="w-full h-[500px] bg-cover bg-center flex p-8 flex items-center" */}

        <div className="absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.7)] text-white flex flex-col sm:flex-row  items-center justify-center gap-4 z-[1] sm:px-8 px-2">
          <div className="text-white z-[1] flex flex-col sm:gap-8 gap-5 sm:w-[50%]">
            <div className="sm:text-5xl font-bold text-3xl">ALLO DEPANNAGE</div>
            <p className="sm:text-md sm:font-bold italic text-md">
              Notre équipe, composée d’une vingtaine d’experts, est apte à
              intervenir dans toute l’Ile de France gratuitement afin de vous
              débarrasser de votre épave dans les meilleures conditions et
              participer ainsi à la réduction de l’empreinte environnementale
            </p>
            <button className="bg-[#03a776] px-8 py-3 font-bold sm:max-w-max ">
              <p>Appel Gratuit -24h/24 </p>
              <p>09 90 77 99 10</p>
            </button>
          </div>

          <div className="sm:w-[50%] flex items-center justify-center gap-8">
            <Image
              className="h-full"
              width={150}
              height={300}
              src={image2.src}
            />

            <Image
              className="h-full"
              width={150}
              height={300}
              src={image4.src}
            />
          </div>
        </div>
      </div>

      {/* statistique
       */}
      <div className="w-full min-h-[200px] flex gap-[7vh] justify-center sm:justify-around items-center flex-col sm:flex-row  p-8">
        <div className="flex flex-col gap-2 items-center">
          <div>
            <RiStarSFill className="text-6xl text-[#03a776]" />
          </div>
          <div className="text-5xl font-bold ">10</div>
          <div>Ans dexpériense</div>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <div>
            <FaBuilding className="text-6xl text-[#03a776]" />
          </div>
          <div className="text-5xl font-bold ">7</div>
          <div>Départements IDF</div>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <div>
            <GiTowTruck className="text-6xl text-[#03a776]" />
          </div>
          <div className="text-5xl font-bold ">3251</div>
          <div>Epaves remorquées</div>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <div>
            <HiMiniUserGroup className="text-6xl text-[#03a776]" />
          </div>
          <div className="text-5xl font-bold ">5</div>
          <div>Remorqueurs</div>
        </div>
      </div>

      {/* section 1 */}
      <div className="flex p-8 sm:h-[90vh] flex-col sm:flex-row gap-6">
        <div className="sm:w-[50%]  flex flex-col gap-4 items-center justify-center">
          <div className="sm:w-[70%] flex flex-col gap-4">
            <div className="font-bold text-2xl uppercase">
              Qui sommes-nous ?
            </div>
            <div className="text-md">
              ALLO RECYCLAGE VHU agrée est une équipe de professionnels
              confirmés, spécialisée dans l’enlèvement d’épave et le recyclage
              de tous types de véhicules à Paris et sa banlieue depuis plus de
              15 ans. <br /> Nous disposons d’une expérience significative dans
              le recyclage des métaux, ainsi que le dépannage et l’assistance de
              voitures. <br />
              Les maîtres-mots de la satisfaction des clients.
            </div>
            <div className="font-bold flex gap-2 items-center">
              FIND OUT MORE{" "}
              <FaArrowRightLong className="text-[#03a776] text-md" />
            </div>
          </div>
        </div>
        <div className="sm:w-[50%] h-full flex items-center sm:justify-center">
          <Image
            width={1000}
            height={1000}
            style={{ width: "100%", height: "auto" }}
            src={image1.src}
            alt=""
            srcset=""
          />
        </div>
      </div>

      {/* band image */}
      {/* <img className="w-full h-[50vh]" src={image3.src} alt="" srcset="" /> */}
      <div
        className="w-full min-h-[500px] bg-cover bg-center flex p-8 flex items-center"
        style={{ backgroundImage: `url(${image3.src})` }}
      >
        <div className="min-h-full sm:w-[50%] w-full bg-white sm:px-[10vh] p-8 flex flex-col justify-center gap-8 border-t border-t-[15px] border-t-[#03a776] ">
          <div className="font-bold text-3xl uppercase ">
            L’écologie du recyclage :
          </div>
          <div className="text-md">
            Enjeu crucial du moment, la protection de l’environnement est
            désormais une priorité collective et sociale face à l’urgence
            climatique. Le recyclage des métaux réduit considérablement les
            émissions de gaz à effet de serre en diminuant les nouvelles
            demandes de matières premières et prévient la pollution associée aux
            activités minières intensives. Il permet également la protection des
            sols et des nappes phréatiques des substances nocives contenues dans
            les métaux usagers.
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="flex sm:flex-row-reverse p-8 sm:h-[90vh] flex-col sm:flex-row gap-6">
        <div className="sm:w-[50%]  flex flex-col gap-4 items-center justify-center">
          <div className="sm:w-[70%] flex flex-col gap-4">
            <div className="font-bold text-2xl">
              WHY <span className="text-orange-500">ALLO DEPANNAGE</span> !
            </div>
            <div className="text-xl">
              Epaviste Gratuit IDF est là pour s’occuper de vos besoins
              d’enlèvement d’épave gratuit à Paris à tout moment, n’importe quel
              jour. Nous prenons en charge toutes les tâches liées à ce
              processus difficile.
            </div>
            <div className="font-bold flex gap-2 items-center">
              FIND OUT MORE{" "}
              <FaArrowRightLong className="text-[#03a776] text-md" />
            </div>
          </div>
        </div>
        <div className="sm:w-[50%] h-full flex items-center sm:justify-center">
          <Image
            width={1000}
            height={1000}
            style={{ width: "100%", height: "auto" }}
            src={image.src}
            alt=""
            srcset=""
          />
        </div>
      </div>

      {/* region d'intervention 1 */}
      <div id="ile" className="flex p-8  flex-col sm:flex-row gap-6 items-center">
        <div className="sm:w-[50%]  flex flex-col gap-4 items-center justify-center bg-[#03a776] text-white p-8">
          <div className=" flex flex-col  items-center">
            <div className="font-bold text-2xl uppercase mb-1">
              Ile de France
            </div>
            <div className="mb-5 font-bold">BESOIN D’AIDE EN URGENCE ?</div>
            <div className="text-md">
              Recycle-Epave.fr vous proposent leurs services d’elevement d’épave
              à Paris et dans toute la région Parisienne (75, 91, 92, 932, 94,
              95, 77, 78). Nous sommes présents dans toute la région parisienne
              ainsi que dans les départements limitrophes. Si vous envisagez de
              récupérer votre moto ou votre véhicule, n’hésitez pas à faire
              appel à nos services (60, 27, 28, 45, 89, 02…).
            </div>
          </div>
        </div>

        <div className="sm:w-[50%] h-full flex items-center justify-center p-4">
          <Image
            width={200}
            height={200}
            className="sm:w-[60%] h-auto w-full"
            src={image5.src}
            alt=""
            srcset=""
          />
        </div>
      </div>

      {/* Q&F */}
      <div className="max-w-4xl mx-auto p-4">
      <div className="font-bold text-2xl uppercase mb-4 ">Questions Fréquentes</div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left "
            >
              <span className="text-md font-medium w-[80%] ">{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-[10%] transform transition-transform ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-600 text-md">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>

      {/* contact us  */}
      <div id="contact" className="flex sm:p-8 p-3 flex-col sm:flex-row  items-center sm:h-[90vh] border ">
        <div className="sm:w-[50%] w-full h-full  flex flex-col gap-6 items-center justify-center  sm:p-8 ">
          <div className=" flex flex-col gap-4  items-center w-full">
            <div className="font-bold text-2xl uppercase mb-1 ">
              contactez nous
            </div>
            <div className="w-full flex flex-col gap-5">
              <input
                placeholder="Nom et Prenom"
                className="border px-4 outline-none py-2 w-full "
                type="text"
              />
              <input
                placeholder="Modele de voiture"
                className="border px-4 outline-none py-2 w-full "
                type="text"
              />
              <input
                placeholder="Telephone"
                className="border px-4 outline-none py-2 w-full "
                type="text"
              />
              <input
                placeholder="E-mail"
                className="border px-4 outline-none py-2 w-full "
                type="text"
              />
              <input
                placeholder="code Postal"
                className="border px-4 outline-none py-2 w-full "
                type="text"
              />
              <input
                placeholder="commentaire"
                className="border px-4 outline-none py-2 w-full "
                type="text"
              />

              <div className="px-6 py-3 bg-[#03a776] font-bold flex items-center justify-center text-white gap-2">
                <IoSend  className="text-xl" /> SEND NOW{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="sm:w-[50%] h-full sm:flex hidden items-center justify-center  bg-center bg-cover" style={{ backgroundImage: `url(${image3.src})` }}>
         
        </div>
      </div>

      {/* band */}
      <div
        className="w-full h-[200px] bg-cover bg-center flex p-8 flex items-center relative z-[1]"
        style={{ backgroundImage: `url(${image.src})` }}
      >
        <div className="absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.7)] text-white flex flex-col items-center justify-center gap-4 z-[1]">
          <div className="font-bold text-3xl">CONTACT US NOW</div>
          <div className="px-6 py-3 bg-[#03a776] font-bold flex items-center gap-2">
            <FaPhone className="text-xl" /> Call now{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
