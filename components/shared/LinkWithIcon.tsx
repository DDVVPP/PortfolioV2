import { ExternalLinkIcon } from 'lucide-react';

const LinkWithIcon = ({ label, href }: { label: string; href: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="flex w-fit items-center gap-x-1 rounded-md border border-slate-500 px-2 py-1 text-sm font-light  text-slate-300 duration-300 hover:border-red-400 hover:text-slate-300 group-hover:text-slate-200 group-hover:duration-300 max-sm:py-0.5 max-sm:text-[11px]"
    >
      <p>{label}</p>

      <ExternalLinkIcon className="mb-0.5 flex size-4 items-center stroke-slate-200 stroke-1 max-sm:size-3" />
    </a>
  );
};

export default LinkWithIcon;
