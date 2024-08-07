const Tag = ({
  text,
  textColor = 'text-slate-400',
  borderColor = 'border-slate-400',
}: {
  text: string;
  textColor?: string;
  borderColor?: string;
}) => {
  return (
    <p
      className={`text-nowrap rounded-2xl border ${borderColor} px-2 pt-0.5 text-[12px] ${textColor} h-fit duration-300 group-hover:border-red-400 max-sm:text-[10px]`}
    >
      {text}
    </p>
  );
};

export default Tag;
