import Link from 'next/link';
import { ExternalLinkIcon } from 'lucide-react';

const LinkWithIcon = ({ label, href }: { label: string; href: string }) => {
  return (
    <Link
      href={href}
      className="flex w-fit items-center gap-x-1 rounded-md border border-slate-500 px-2 py-1 text-sm font-light  text-slate-300 duration-300 hover:border-red-400 hover:text-slate-300 group-hover:text-slate-200 group-hover:duration-300 max-sm:text-xs"
    >
      <p>{label}</p>
      <ExternalLinkIcon
        size={16}
        className="mb-0.5 flex items-center stroke-slate-200 stroke-1"
      />
    </Link>
  );
};

export default LinkWithIcon;
