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
    <Accordion type="single" collapsible className="accordion-custom">
      <AccordionItem value="commits">
        <AccordionTrigger>
          {commits.length > 1
            ? 'Recent GitHub Commits'
            : 'Recent GitHub Commit'}
        </AccordionTrigger>
        <AccordionContent>
          <em className="text-sm font-extralight text-slate-300 max-sm:text-[13px]">
            *Note: The commits listed here are from the main branch. Commits
            tied to open pull requests will appear after merging.
          </em>
        </AccordionContent>

        {commits.map((commit) => {
          return (
            <AccordionContent
              key={commit.url}
              className="accordion-content-custom"
            >
              <section className="mb-1 max-sm:text-[13px]">
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
