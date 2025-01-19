import sideLogo from "./images/side-logo.png";
import hp from "./images/hp.png";
import bp from "./images/bp.png";
import io from "./images/io.png";
import "./css/227fa4ef9f2d3379.css";
import "./css/40dd5333bf10774d.css";
import "./css/texture.css";
import texture1 from "./images/textures/texture-1.jpeg";
import texture2 from "./images/textures/texture-2.jpeg";
import texture3 from "./images/textures/texture-3.jpeg";
import texture4 from "./images/textures/texture-4.avif";
import texture5 from "./images/textures/texture-5.avif";
import { useEffect } from "react";
import { toPng } from "html-to-image";
import { useRef } from "react";
import { useCallback } from "react";

const mapfuelStationType = {
  hp: hp,
  bp: bp,
  io: io,
};

const textures = [texture1, texture2, texture3, texture4, texture5];

function getRandom1to5() {
  return Math.floor(Math.random() * 5);
}

const Template = ({
  fuelStation = "bp",
  amount = 2800,
  rate = 94.65,
  date,
  time,
  invoice_no,
}) => {
  useEffect(() => {
    document.querySelector(
      `.invoice${invoice_no}`
    ).style.backgroundImage = `url(${textures[getRandom1to5()]})`;
  }, []);

  return (
    <div className={`displayPreview invoice${invoice_no} relative w-fit`}>
      <div
        className="relative transform origin-top-left lg:origin-top"
        style={{ transform: "scale(1)" }}
      >
        <div id="doc" className="border-slate-200 h-fit w-fit">
          <div className="__className_3757f2 antialiased font-light text-[#000000] text-[9.5px] leading-[1.2] w-[260px] h-full p-[5px] relative">
            <img
              src={sideLogo}
              alt="Bank Logo"
              className="rotate-[270deg] w-[60%] -right-[70px] top-[100px] absolute opacity-35 flex grayscale"
            />
            <img
              src={sideLogo}
              alt="Bank Logo"
              className="rotate-[270deg] w-[60%] -right-[70px] top-[400px] absolute opacity-35 flex grayscale"
            />
            <div className="text-center py-4 grayscale">
              <img
                src={mapfuelStationType[fuelStation]}
                className="w-20"
                alt="Fuel Station logo"
              />
            </div>
            <p className="m-b-[5px] text-center leading-[1.35]">WELCOME!!!</p>
            <p className="m-b-[5px] text-center leading-[1.35]"></p>
            <p className="m-b-[5px] text-center leading-[1.35]"></p>
            <p className="m-1"></p>
            <div className="mb-[30px]">
              <div className="flex justify-between -mb-[5px] px-[5px] mt-0">
                <p className="m-1">Receipt No.: {invoice_no}</p>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex justify-between -mb-[5px] px-[5px] mt-0">
                <p className="m-1">PRODUCT: Petrol</p>
              </div>
              <div className="flex justify-between -mb-[5px] px-[5px] mt-0">
                <p className="m-1">RATE/LTR: ₹ {rate.toFixed(2)}</p>
              </div>
              <div className="flex justify-between -mb-[5px] px-[5px] mt-0">
                <p className="m-1">AMOUNT: ₹ {amount}</p>
              </div>
              <div className="flex justify-between -mb-[5px] px-[5px] mt-0">
                <p className="m-1">
                  VOLUME(LTR.): {(amount / rate).toFixed(2)} lt
                </p>
              </div>
            </div>
            <div className="mb-[30px]">
              <div className="flex justify-between -mb-[5px] px-[5px] mt-0">
                <p className="m-1">VEH TYPE: Petrol</p>
              </div>
              <div className="flex justify-between -mb-[5px] px-[5px] mt-0">
                <p className="m-1">VEH NO:</p>
              </div>
              <div className="flex justify-between -mb-[5px] px-[5px] mt-0">
                <p className="m-1">CUSTOMER NAME:</p>
              </div>
            </div>
            <div className="flex justify-between gap-5 -mb-[5px] px-[5px] mt-0">
              <p className="m-1">Date: {date}</p>
              <p>Time: {time}</p>
            </div>
            <div className="flex justify-between -mb-[5px] px-[5px] mt-0">
              <p className="m-1">MODE: Cash</p>
            </div>
            <div className="flex justify-between -mb-[5px] px-[5px] mt-0"></div>
            <p className="mt-[60px] text-center leading-[1.5] mb-4">
              ****************
              <br />
              Thank You! Visit Again
              <br />
              Save Fuel, Save Money.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DownloadableTemplate = (props) => {
  const ref = useRef();
  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `fuel_${props.date}_${props.invoice_no}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);
  return (
    <div>
      <div ref={ref}>
        <Template {...props} />
      </div>
      <button onClick={onButtonClick}>Download</button>
    </div>
  );
};

export default DownloadableTemplate;
