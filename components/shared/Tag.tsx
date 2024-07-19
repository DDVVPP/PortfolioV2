const Tag = ({ text }: { text: string }) => {
  return (
    <p className="text-nowrap rounded-2xl border border-slate-400 px-2 py-0.5 text-[12px] text-slate-400 duration-300 group-hover:border-red-400 max-sm:text-[10px]">
      {text}
    </p>
  );
};

export default Tag;
