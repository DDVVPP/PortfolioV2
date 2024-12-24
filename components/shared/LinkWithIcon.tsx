import AngledArrow from './AngledArrow';

const LinkWithIcon = ({ label, href }: { label: string; href: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="group/link-with-icon flex w-fit gap-x-1 rounded-md border border-slate-500 px-2 py-1  hover:border-red-400 hover:text-slate-300 hover:duration-300 max-sm:gap-x-0 max-sm:py-0.5  "
    >
      <p className="text-sm font-light text-slate-300 max-sm:text-[13px] 3xl:text-base">
        {label}
      </p>
      <AngledArrow
        alt="arrow-up-right"
        className="mt-px flex size-5 stroke-slate-400 group-hover/link-with-icon:-translate-y-0.5 group-hover/link-with-icon:translate-x-0.5 group-hover/link-with-icon:duration-300 max-sm:mt-[3px] max-sm:size-4 3xl:mt-1"
      />
    </a>
  );
};

export default LinkWithIcon;
