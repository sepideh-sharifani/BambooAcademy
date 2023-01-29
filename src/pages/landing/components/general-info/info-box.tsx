interface InfoBoxProps {
  children: React.ReactNode;
  title: string;
  text: string;
}

export default function InfoBox({ children, title, text }: InfoBoxProps) {
  return (
    <article
      className={`w-1/3 bg-black opacity-40 h-[45%] 
         m-[1px] text-black text-4xl flex flex-col justify-evenly items-center max-md:w-full `}
    >
      {children}
      <h3 className="text-5xl text-white opacity-100 max-md:text-4xl font-WYekan" dir="rtl">
        {title}
      </h3>
      <p className="mx-4 overflow-hidden text-xl text-center text-white opacity-100 font-WYekan text-ellipsis h-1/3 max-h-1/3">
        {text}
      </p>
    </article>
  );
}
