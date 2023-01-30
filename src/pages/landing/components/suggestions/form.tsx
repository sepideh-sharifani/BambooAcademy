import { useForm} from "react-hook-form";
import Input from "./input";

const emailRegEx =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

interface SuggestionsForm {
  email: string;
  paragraph: string;
}

export default function Form() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SuggestionsForm>({ mode: "onChange" });
  const submit = (data: SuggestionsForm) => {
    console.log("from", data);
    alert("THANK YOU");
  };

  return (
    <div
      className={`h-full  relative grow flex flex-col items-center justify-center w-1/2 max-lg:w-full`}
    >
      <div className="flex flex-col items-center w-3/5 h-full max-lg:w-4/5 justify-evenly">
        <h2
          className={`max-md:text-3xl text-white self-end font-Lalezar text-6xl`}
        >
          پیشنهاد و انتقاد
        </h2>
        <Input
          control={control}
          name={"email"}
          rules={{
            require: true,
            pattern: {
              value: emailRegEx,
              message: "ایمیل وارده صحیح نمی باشد",
            },
          }}
          shouldUnregister={false}
          placeholder="ایمیل خود را وارد کنید ..."
        />
        <Input
          control={control}
          name={"paragraph"}
          rules={{ require: false }}
          shouldUnregister={false}
          placeholder="متن خود را وارد کنید ... "
        />
        <button
          className={`px-9 py-3 text-white bg-[#004458] text-2xl`}
          onClick={handleSubmit(submit)}
        >
          ارسال
        </button>
      </div>
      {errors && (
        <div className="absolute bottom-0 -translate-x-1/2 left-1/2">
          <p className={`text-2xl text-red-500 font-WYekan `}>
            {errors.email?.message}
          </p>
        </div>
      )}
    </div>
  );
}
