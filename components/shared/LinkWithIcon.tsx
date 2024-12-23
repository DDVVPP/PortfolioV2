import AngledArrow from './AngledArrow';

const LinkWithIcon = ({ label, href }: { label: string; href: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="group/link-with-icon flex w-fit gap-x-1 rounded-md border border-slate-500 px-2 py-1 text-sm  font-light text-slate-300 hover:border-red-400 hover:text-slate-300 hover:duration-300 max-sm:gap-x-0 max-sm:py-0.5 max-sm:text-[11px] 3xl:text-base"
    >
      <p>{label}</p>
      <AngledArrow
        alt="arrow-up-right"
        className="mt-px flex size-5 stroke-slate-400 group-hover/link-with-icon:-translate-y-0.5 group-hover/link-with-icon:translate-x-0.5 group-hover/link-with-icon:duration-300 max-sm:mt-[4px] max-sm:size-[14px]"
      />
    </a>
  );
};

export default LinkWithIcon;
