import sideLogo from "./images/side-logo.png";
import hp from "./images/hp.png";
import bp from "./images/bp.png";
import io from "./images/io.png";
import io2 from "./images/io2.png";
import "./css/227fa4ef9f2d3379.css";
import "./css/40dd5333bf10774d.css";
import "./css/texture.css";
import texture1 from "./images/textures/texture-1.jpeg";
import texture2 from "./images/textures/texture-2.jpeg";
import texture2_1 from "./images/textures/texture-2.1.jpeg";
import texture2_2 from "./images/textures/texture-2.2.jpeg";
import texture3 from "./images/textures/texture-3.jpeg";
import texture4 from "./images/textures/texture-4.jpeg";
import texture5 from "./images/textures/texture-5.avif";
import texture6 from "./images/textures/texture-6.jpeg";
import texture7 from "./images/textures/texture-7.jpeg";
import { useEffect } from "react";
import { toPng } from "html-to-image";
import { useRef } from "react";
import { useCallback } from "react";

const mapfuelStationType = {
  hp: hp,
  bp: bp,
  io: io,
  io2: io2,
};

const textures = [texture1, texture2, texture2_1, texture2_2, texture3, texture4, texture5, texture6, texture7];

function getRandom1to5() {
  return Math.floor(Math.random() * 5);
}

const Template = ({ pump_no, // Add pump_no to destructured props
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
              className="rotate-[270deg] w-[60%] -right-[70px] top-[100px] absolute opacity-0 flex grayscale"
            />
            <img
              src={sideLogo}
              alt="Bank Logo"
              className="rotate-[270deg] w-[60%] -right-[70px] top-[400px] absolute opacity-0 flex grayscale"
            />
            <div className="text-center py-4 relative">
              <img
              src={mapfuelStationType[fuelStation]}
              className="w-20 mix-blend-multiply filter grayscale opacity-80"
              alt="Fuel Station logo"
              />
            </div>
            
            <p className="opacity-70 m-b-[6px] text-center leading-[1.35] filter grayscale">WELCOMES YOU</p>
            <p className="opacity-70 m-b-[4px] text-left leading-[1.35] filter grayscale"> <br></br></p>
            <p className="opacity-70 mx-3 m-b-[4px] text-left leading-[1.35] filter grayscale">DOLLY MOTORS</p>
            <p className="opacity-70 mx-3 m-b-[4px] text-left leading-[1.35] filter grayscale">A21</p>
            <p className="opacity-70 mx-3 m-b-[4px] text-left leading-[1.35] filter grayscale">NOIDA 201301</p>
            <p className="opacity-70 mx-3 m-b-[4px] text-left leading-[1.35] filter grayscale">Tel. No.: 01202556002</p>

            <p className="m-b-[4px] text-left leading-[1.35]"> <br></br></p>
            <p className="m-1"></p>


            <div className="mb-[30px]">
              <div className="flex justify-between -mb-[5px] px-[5px] mt-0">
                <p className="opacity-70 filter grayscale m-1">Receipt No.: {invoice_no}</p>
              </div>
              <div className="flex justify-between -mb-[5px] px-[5px] mt-0">
                <p className="opacity-70 filter grayscale m-1">FCC ID.: 000000000248156</p>
              </div>
              <div className="flex justify-between -mb-[5px] px-[5px] mt-0">
                <p className="opacity-70 filter grayscale m-1">FIP No.: {`0${pump_no}`}</p>
              </div>
              <div className="flex justify-between -mb-[5px] px-[5px] mt-0">
                <p className="opacity-70 filter grayscale m-1">Nozzel No.: {`0${pump_no}`}</p>
              </div>
              <div className="flex justify-between -mb-[5px] px-[5px] mt-0">
                <p className="opacity-70 filter grayscale m-1">PRODUCT: Petrol</p>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex justify-between -mb-[5px] px-[5px] mt-0">
                <p className="opacity-70 filter grayscale m-1">Preset Type: AMOUNT</p>
              </div>
              <div className="flex justify-between -mb-[5px] px-[5px] mt-0">
                <p className="opacity-70 filter grayscale m-1">RATE/LTR: ₹ {`0${rate.toFixed(2)}`}</p>
              </div>
              <div className="flex justify-between -mb-[5px] px-[5px] mt-0">
                <p className="opacity-70 filter grayscale m-1">
                  VOLUME: {`00${(amount / rate).toFixed(2)}`}
                </p>
              </div>
              <div className="flex justify-between -mb-[5px] px-[5px] mt-0">
                <p className="opacity-70 filter grayscale m-1">AMOUNT: ₹ {`00${amount}`}</p>
              </div>
            </div>
            <div className="mb-[30px]">
              <div className="flex justify-between -mb-[5px] px-[5px] mt-0">
                <p className="opacity-70 filter grayscale m-1">Vehicle No: NOT ENTERED</p>
              </div>
              <div className="flex justify-between -mb-[5px] px-[5px] mt-0">
                <p className="opacity-70 filter grayscale m-1">Mobile No: NOT ENTERED</p>
              </div>
            </div>
            <div className="flex justify-between gap-5 -mb-[5px] px-[5px] mt-0">
              <p className="opacity-70 filter grayscale m-1">Date: {date}</p>
              <p className="opacity-70 filter grayscale m-1">Time: {time}</p>
            </div>
            <div className="flex justify-between -mb-[5px] px-[5px] mt-0">
              <p className="opacity-70 filter grayscale m-1">CST No    : 09AAFFDA763Q1ZR</p>
            </div>
            <div className="flex justify-between -mb-[5px] px-[5px] mt-0">
              <p className="opacity-70 filter grayscale m-1">LST No    : </p>
            </div>
            <div className="flex justify-between -mb-[5px] px-[5px] mt-0">
              <p className="opacity-70 filter grayscale m-1">VAT No    : 0965899474</p>
            </div>
            <div className="flex justify-between -mb-[5px] px-[5px] mt-0">
              <p className="opacity-70 filter grayscale m-1">ATTENDANT ID:</p>
            </div>
            <div className="flex justify-between -mb-[5px] px-[5px] mt-0">
              <p className="opacity-70 filter grayscale m-1">FCC DATE: NOT AVAILABLE</p>
            </div>
            <div className="flex justify-between -mb-[5px] px-[5px] mt-0">
              <p className="opacity-70 filter grayscale m-1">FCC TIME: NOT AVAILABLE</p>
            </div>
            <div className="flex justify-between -mb-[5px] px-[5px] mt-0"></div>
            <p className="opacity-70 mt-[40px] text-center leading-[1.5] text-[8px] mb-4 filter grayscale">
              Thank.You! Please Visit Again..
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
