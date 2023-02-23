import { useController } from "react-hook-form";
export default function Input({ control, rules, shouldUnregister, name, placeholder }: any) {
  const {
    field: { value, ref, onBlur, onChange },
  } = useController({
    control,
    name,
    rules,
    shouldUnregister,
  });

  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      dir="rtl"
      placeholder={placeholder}
      className={`border-0 p-3 bg-[#00775B] border-b-2 font-WYekan border-b-[#0CDBAB]  text-white text-2xl focus:outline-none w-full`}
    />
  );
}