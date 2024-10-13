import Image from "next/image";
import image from "../../public/remorquage.jpg";
import image1 from "../../public/remorquage.jpg";
import image2 from "../../public/logo-republique-francaise.png";
import image3 from "../../public/remorquage.jpg";
import image5 from "../../public/logo-republique-francaise.png";
import { FaArrowRightLong } from "react-icons/fa6";
import image4 from "../../public/eco.png";

import { FaPhone } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div
        className="flex h-[79vh] bg-cover bg-center relative flex items-center p-4 gap-[8vh]"
        style={{ backgroundImage: `url(${image3.src})` }}
      >
        {/*  className="w-full h-[500px] bg-cover bg-center flex p-8 flex items-center" */}

        <div className="absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.7)] text-white flex flex-col sm:flex-row  items-center justify-center gap-4 z-[1] px-8">
          <div className="text-white z-[1] flex flex-col sm:gap-8 gap-3 sm:w-[50%]">
            <div className="sm:text-5xl font-bold text-2xl">ALLO DEPANNAGE</div>
            <p className="sm:text-md sm:font-bold italic text-xs">
              Enlèvement épave 7/7J en Ile de France. VHU Service gratuit. Paris
              75, Seine et Marne 77, Yvelines 78, Essonne 91, Hauts de Seine 92,
              Seine Saint Denis 93, Val de Marne 94, Val d’Oise 95
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
      <div className="">
        {/* <Image
          src={image1.src}
          width={1000}
          height={1000}
          style={{ width: "100%", height: "auto" }}
        /> */}

        {/* section 1 */}
        <div className="flex p-8 sm:h-[90vh] flex-col sm:flex-row gap-6">
          <div className="sm:w-[50%]  flex flex-col gap-4 items-center justify-center">
            <div className="sm:w-[70%] flex flex-col gap-4">
              <div className="font-bold text-2xl">
                WE ARE <span className="text-orange-500">ALLO DEPANNAGE</span>
              </div>
              <div className="text-xl">
                Epaviste Gratuit IDF est là pour s’occuper de vos besoins
                d’enlèvement d’épave gratuit à Paris à tout moment, n’importe
                quel jour. Nous prenons en charge toutes les tâches liées à ce
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
              src={image1.src}
              alt=""
              srcset=""
            />
          </div>
        </div>

        {/* band image */}
        {/* <img className="w-full h-[50vh]" src={image3.src} alt="" srcset="" /> */}
        <div
          className="w-full h-[500px] bg-cover bg-center flex p-8 flex items-center"
          style={{ backgroundImage: `url(${image3.src})` }}
        >
          <div className="min-h-full sm:w-[50%] w-full bg-white sm:px-[20vh] p-4 flex flex-col justify-center gap-8 border-t border-t-[15px] border-t-[#03a776]">
            <div className="font-bold text-3xl">
              WHY <span className="text-orange-500">ALLO DEPANNAGE</span> !
            </div>
            <div className="text-xl">
              Epaviste Gratuit IDF est là pour s’occuper de vos besoins
              d’enlèvement d’épave gratuit à Paris à tout moment, n’importe quel
              jour. Nous prenons en charge toutes les tâches liées à ce
              processus difficile.
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
                d’enlèvement d’épave gratuit à Paris à tout moment, n’importe
                quel jour. Nous prenons en charge toutes les tâches liées à ce
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
    </div>
  );
}
