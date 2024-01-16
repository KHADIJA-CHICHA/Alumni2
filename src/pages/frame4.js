import * as React from "react";
import { useCallback } from "react";
import { navigate } from "gatsby";

const Frame4 = () => {
  const onRectangle1Click = useCallback(() => {
    navigate("/contact-us");
  }, []);

  const onGroupContainerClick = useCallback(() => {
    navigate("/frame5");
  }, []);

  const onFaqContainerClick = useCallback(() => {
    navigate("/f-a-q");
  }, []);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, []);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/mis-a-jour-et-annonces");
  }, []);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/aide");
  }, []);

  return (
    <div className="relative bg-white w-full h-[1621px] overflow-hidden text-center text-base text-white font-libre-bodoni">
      <img
        className="absolute top-[156px] left-[-12px] w-[1335px] h-[396px] object-cover"
        alt=""
        src="/image-3@2x.png"
      />
      <img
        className="absolute top-[11px] left-[-5px] rounded-11xl w-[139px] h-[107px] object-cover"
        alt=""
        src="/rectangle-42@2x.png"
      />
      <div className="absolute top-[86px] left-[145px] rounded-xl bg-royalblue-300 w-[149px] h-9" />
      <div
        className="absolute top-[86px] left-[652px] rounded-xl bg-royalblue-300 w-[148px] h-9 cursor-pointer"
        onClick={onRectangle1Click}
      />
      <div className="absolute top-[88px] left-[134px] flex items-center justify-center w-[161px] h-[35px]">
        Home
      </div>
      <div className="absolute top-[126px] left-[159px] rounded-xl bg-cornflowerblue-100 w-[116px] h-[9px]" />
      <div className="absolute top-[543px] left-[23px] text-13xl font-libre-caslon-display text-black text-left flex items-center w-[1264px] h-[189px]">
        Bienvenue sur Alumni ,votre plateforme dédiée à la gestion des lauréats.
        Nous sommes fiers de présenter cet outil complet qui vous permet de
        gérer et de célébrer les accomplissements exceptionnels de nos anciens
        étudiants.
      </div>
      <div className="absolute top-[732px] left-[23px] w-[611px] h-[119px] flex flex-col items-start justify-start gap-[4px] text-left text-dimgray-100 font-poppins">
        <div className="self-stretch relative h-[27px]">
          <div className="absolute top-[0px] left-[0px]">
            Entrez votre filière
          </div>
          <div className="absolute top-[0px] right-[8.9px] w-[73px] h-[27px] hidden text-right text-lg text-dimgray-400">
            <img
              className="absolute top-[3px] right-[49px] w-6 h-6 overflow-hidden"
              alt=""
              src="/icon.svg"
            />
            <div className="absolute top-[0px] right-[0px]">Hide</div>
          </div>
        </div>
        <div className="self-stretch relative rounded-xl box-border h-14 overflow-hidden shrink-0 text-dimgray-300 border-[1px] border-solid border-dimgray-500">
          <div className="absolute top-[15px] left-[24px] hidden flex-row items-center justify-start">
            <div className="relative">Enter your email address</div>
            <div className="relative bg-gray-100 w-px h-6 hidden" />
          </div>
          <img
            className="absolute top-[40px] right-[24px] w-6 h-6 overflow-hidden hidden"
            alt=""
            src="/icons.svg"
          />
        </div>
        <div className="relative text-sm text-crimson hidden">
          Error message
        </div>
      </div>
      <div className="absolute top-[773px] left-[-63px] text-sm font-thin font-inter text-black inline-block w-[318px] h-[26px]">{`entrez votre filière `}</div>
      <div className="absolute top-[848px] left-[51px] text-45xl font-poppins text-slateblue-300 text-left inline-block w-[583px] h-[253px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [filter:blur(4px)]">
        Où la réussite rencontre la reconnaissance
      </div>
      <div className="absolute top-[896px] left-[255px] w-[941px] h-[531px]" />
      <img
        className="absolute top-[744px] left-[708px] rounded-xl w-[563px] h-[380px] object-cover"
        alt=""
        src="/image-6@2x.png"
      />
      <div className="absolute top-[98px] left-[1097px] text-5xl flex items-center justify-center w-[100px] h-[25px]">
        Aide
      </div>
      <div
        className="absolute top-[1237px] left-[267px] w-[722px] h-16 cursor-pointer text-xl font-inter"
        onClick={onGroupContainerClick}
      >
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-royalblue-200 w-[722px] h-[51px]" />
        <div className="absolute top-[15px] left-[217px] font-medium inline-block w-[273px] h-[49px]">
          Ajouter des lauréats
        </div>
      </div>
      <img
        className="absolute top-[1476px] left-[33px] w-[395px] h-[106px] object-cover"
        alt=""
        src="/image-31@2x.png"
      />
      <div
        className="absolute top-[86px] left-[481px] w-[148px] h-9 cursor-pointer"
        onClick={onFaqContainerClick}
      >
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-royalblue-300 w-[148px] h-9" />
        <div className="absolute top-[7px] left-[31px] flex items-center justify-center w-[85px] h-5">
          FAQ
        </div>
      </div>
      <div
        className="absolute top-[93px] left-[676px] flex items-center justify-center w-[99px] h-[18px] cursor-pointer"
        onClick={onContactUsTextClick}
      >
        Contact Us
      </div>
      <div
        className="absolute top-[86px] left-[811px] w-[174px] h-9 cursor-pointer"
        onClick={onGroupContainer1Click}
      >
        <div className="absolute top-[0px] left-[12px] rounded-xl bg-royalblue-300 w-[149px] h-9" />
        <div className="absolute top-[13px] left-[0px] flex items-center justify-center w-[174px] h-3">
          Mises à jour et Annonces
        </div>
      </div>
      <div
        className="absolute top-[86px] left-[313px] w-[149px] h-9 cursor-pointer"
        onClick={onGroupContainer2Click}
      >
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-royalblue-300 w-[149px] h-9" />
        <div className="absolute top-[8px] left-[25px] flex items-center justify-center w-[81px] h-[23px]">
          Aide
        </div>
      </div>
    </div>
  );
};

export default Frame4;
