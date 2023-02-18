interface BoxProps {
    buttonText: string;
    logo: string;
    position: string;
    needToContain: boolean;
    onClick: (event: any) => void;
}

export default function Box({
                                buttonText,
                                logo,
                                position,
                                needToContain,
                                onClick,
                            }: BoxProps) {

    return (
        <div
            className={`bg-inherit flex flex-col h-full justify-around items-center`}
        >
            <div className={`w-4/5 grow flex justify-center items-center mt-2 `}>
                <div
                    className={`${logo} w-full h-full grow  ${position} bg-no-repeat max-lg:bg-contain ${
                        needToContain ? "bg-contain" : ""
                    } `}
                />
            </div>
            <button
                className={`px-2 py-4 bg-white m-4 truncate font-WYekan text-xl max-md:text-base`}
                onClick={onClick}
            >{`${buttonText}`}</button>
        </div>
    );
}
