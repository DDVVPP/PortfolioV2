import { format as formatDate } from 'date-fns';

import {
  AccordionContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { RepoCommit } from '@/lib/types';
import LinkWithIcon from './shared/LinkWithIcon';

const CommitsAccordion = ({ commits }: { commits: RepoCommit[] }) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="mb-2 flex flex-col rounded-md bg-dark-800/65 border border-dark-800 hover:border-dark-700 hover:duration-300 p-4"
    >
      <AccordionItem value="commits">
        <AccordionTrigger>
          {commits.length > 1
            ? 'Recent GitHub Commits'
            : 'Recent GitHub Commit'}
        </AccordionTrigger>
        <AccordionContent>
          <em className="text-sm font-extralight text-slate-300">
            *Note: The commits listed here are from the main branch. Commits
            tied to open pull requests will appear after merging.
          </em>
        </AccordionContent>

        {commits.map((commit) => {
          return (
            <AccordionContent key={commit.url} className="pb-0 py-3 px-4">
              <section className="mb-1">
                <em>{formatDate(new Date(commit.date), 'MMMM dd, yyyy')}</em>
                <p>
                  {commit.message[0].toUpperCase() + commit.message.slice(1)}
                </p>
              </section>

              <LinkWithIcon label="Commit Link" href={commit.url} />
            </AccordionContent>
          );
        })}
      </AccordionItem>
    </Accordion>
  );
};

export default CommitsAccordion;
