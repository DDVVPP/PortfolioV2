import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { format as formatDate } from 'date-fns';
import Image from 'next/image';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { RepoPR } from '@/lib/types';
import LinkWithIcon from './shared/LinkWithIcon';

const PullRequestsAccordion = ({
  pullRequests,
}: {
  pullRequests: RepoPR[];
}) => {
  return (
    <Accordion type="single" collapsible className="accordion-custom">
      <AccordionItem value="pull-requests">
        <AccordionTrigger>
          {pullRequests.length > 1
            ? 'Recent GitHub Pull Requests'
            : 'Recent GitHub Pull Request'}
        </AccordionTrigger>

        {pullRequests.map((pullRequest) => {
          return (
            <AccordionContent
              key={pullRequest.title}
              className="accordion-content-custom"
            >
              <section className="mb-1">
                <p className="text-highlight-font-semibold max-sm:text-[13px]">
                  {' '}
                  {pullRequest.title}
                </p>
                <em className="max-sm:text-[13px]">
                  {pullRequest.mergedAt
                    ? `Merged on ${formatDate(new Date(pullRequest.mergedAt), 'MMMM dd, yyyy')}`
                    : 'In Progress'}
                </em>
              </section>

              <LinkWithIcon label="PR Link" href={pullRequest.url} />

              <section className="mt-1 max-sm:text-[13px]">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h3: ({ node, ...props }) => (
                      <h3 className="mt-1 font-semibold" {...props} />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul className="ml-5 mt-0 list-disc" {...props} />
                    ),
                    img: ({ node, ...props }) => (
                      <div className="mt-2 w-full">
                        {props.src && (
                          <Image
                            {...props}
                            src={props.src}
                            alt="pr-image"
                            width={800}
                            height={600}
                            className="h-auto w-full rounded-md"
                            placeholder="empty"
                          />
                        )}
                      </div>
                    ),
                  }}
                >
                  {pullRequest.body}
                </ReactMarkdown>
              </section>
            </AccordionContent>
          );
        })}
      </AccordionItem>
    </Accordion>
  );
};

export default PullRequestsAccordion;
