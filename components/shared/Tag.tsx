const Tag = ({
  text,
  textColor = 'text-slate-400',
  textSize = 'text-[12px] max-sm:text-[10px]',
  borderColor = 'border-slate-400',
  pillWidth,
}: {
  text: string;
  textColor?: string;
  textSize?: string;
  borderColor?: string;
  pillWidth?: string;
}) => {
  return (
    <p
      className={`text-nowrap rounded-2xl border ${borderColor} px-2 py-0.5 ${textColor} h-fit duration-300 group-hover:border-red-400 ${textSize} ${pillWidth}`}
    >
      {text}
    </p>
  );
};

export default Tag;
