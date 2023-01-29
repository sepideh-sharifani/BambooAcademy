interface RowProps {
  title: string;
  paragraph: string;
  backgroundImageStyle?:string;
  reverse?: boolean;
  children?: React.ReactNode;
  articleStyle?: string; 
  backgroundPalette?: string
}

export default function Row({
  title,
  paragraph,
  backgroundImageStyle,
  reverse = false,
  children,
  articleStyle,
  backgroundPalette = "bg-[#004458]"
}: RowProps) {
  return (
    <div className={`grow ${backgroundPalette} flex   ${reverse ? "": "flex-row-reverse"} `}>
      <div
        className={` grow w-2/3 h-full relative  max-[1255px]:w-1/2 max-[560px]:w-full 
        flex justify-start  items-center max-[1255px]:justify-center
        bg-mentoring  bg-contain bg-no-repeat max-[1255px]:bg-cover 
        ${backgroundImageStyle}
     `}
      >
        {children}
      </div>
      <article
        className={`flex flex-col justify-center grow max-[1255px]:w-1/2
         ${articleStyle}  `}
      >
        <h3 className={`text-white mb-3 text-5xl px-9 font-Lalezar text-right  max-[900px]:text-3xl `}>{title}</h3>
        <p className={`text-[#D1D1D1] text-3xl px-9  text-right font-WYekan max-[900px]:text-base`}>{paragraph}</p>
      </article>
    </div>
  );
}
