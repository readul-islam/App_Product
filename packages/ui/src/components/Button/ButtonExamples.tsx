import React from 'react';
import { Button } from './Button';

export const ButtonExamples: React.FC = () => {
  // Icon components for reuse
  const AddIcon = () => (
    <svg
      className="w-4 h-4 fill-current opacity-50 shrink-0"
      viewBox="0 0 16 16"
    >
      <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
    </svg>
  );

  const EditIcon = () => (
    <svg
      className="w-4 h-4 fill-current text-slate-500 dark:text-slate-400 shrink-0"
      viewBox="0 0 16 16"
    >
      <path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
    </svg>
  );

  const DeleteIcon = () => (
    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
      <path d="M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z" />
    </svg>
  );

  const CheckIcon = () => (
    <svg
      className="w-4 h-4 fill-current text-indigo-500 shrink-0"
      viewBox="0 0 16 16"
    >
      <path d="M14.3 2.3L5 11.6 1.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z" />
    </svg>
  );

  return (
    <main className="grow">
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">
            Button Component ✨
          </h1>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700">
          {/* Components */}
          <div className="space-y-8 mt-8">
            {/* Appearances */}
            <div>
              <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">
                Appearances
              </h2>
              <div className="flex flex-wrap items-center -m-1.5">
                <div className="m-1.5">
                  <Button variant="primary">Primary</Button>
                </div>
                <div className="m-1.5">
                  <Button variant="secondary">Secondary</Button>
                </div>
                <div className="m-1.5">
                  <Button variant="tertiary">Tertiary</Button>
                </div>
                <div className="m-1.5">
                  <Button variant="danger">Danger</Button>
                </div>
                <div className="m-1.5">
                  <Button variant="dangerOutline">Danger</Button>
                </div>
                <div className="m-1.5">
                  <Button variant="success">Success</Button>
                </div>
                <div className="m-1.5">
                  <Button variant="successOutline">Success</Button>
                </div>
              </div>
            </div>

            {/* States */}
            <div>
              <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">
                States
              </h2>
              <div className="flex flex-wrap items-center -m-1.5">
                <div className="m-1.5">
                  <Button variant="primary" disabled fullWidth>
                    Disabled
                  </Button>
                </div>
                <div className="m-1.5">
                  <Button variant="primary" loading fullWidth>
                    Loading
                  </Button>
                </div>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">
                Sizes
              </h2>
              <div className="flex flex-wrap items-center -m-1.5">
                <div className="m-1.5">
                  <Button variant="primary" size="xs">
                    Button
                  </Button>
                </div>
                <div className="m-1.5">
                  <Button variant="primary" size="sm">
                    Button
                  </Button>
                </div>
                <div className="m-1.5">
                  <Button variant="primary" size="md">
                    Button
                  </Button>
                </div>
                <div className="m-1.5">
                  <Button variant="primary" size="lg">
                    Button
                  </Button>
                </div>
              </div>
            </div>

            {/* Buttons with an Icon */}
            <div>
              <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">
                Buttons with an Icon
              </h2>
              <div className="flex flex-wrap items-center -m-1.5">
                <div className="m-1.5">
                  <Button variant="primary" icon={<AddIcon />}>
                    Add Event
                  </Button>
                </div>
                <div className="m-1.5">
                  <Button variant="secondary" icon={<EditIcon />}>
                    Edit Content
                  </Button>
                </div>
                <div className="m-1.5">
                  <Button variant="dangerOutline" icon={<DeleteIcon />}>
                    Delete
                  </Button>
                </div>
              </div>
            </div>

            {/* Icon Buttons */}
            <div>
              <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">
                Icon Buttons
              </h2>
              <div className="flex flex-wrap items-center -m-1.5">
                <div className="m-1.5">
                  <Button variant="secondary" icon={<EditIcon />} iconOnly />
                </div>
                <div className="m-1.5">
                  <Button
                    variant="dangerOutline"
                    icon={<DeleteIcon />}
                    iconOnly
                  />
                </div>
                <div className="m-1.5">
                  <Button variant="secondary" icon={<CheckIcon />} iconOnly />
                </div>
              </div>
            </div>

            {/* Button Groups */}
            <div>
              <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">
                Button Groups
              </h2>
              <div className="flex flex-wrap items-center -m-1.5">
                <div className="m-1.5">
                  <div className="flex flex-wrap -space-x-px">
                    <Button
                      variant="primary"
                      className="rounded-none border-l-indigo-400 first:rounded-l last:rounded-r first:border-l-transparent"
                    >
                      Weekly
                    </Button>
                    <Button
                      variant="primary"
                      className="rounded-none border-l-indigo-400 first:rounded-l last:rounded-r first:border-r-transparent"
                    >
                      Monthly
                    </Button>
                    <Button
                      variant="primary"
                      className="rounded-none border-l-indigo-400 first:rounded-l last:rounded-r first:border-r-transparent"
                    >
                      Yearly
                    </Button>
                  </div>
                </div>
                <div className="m-1.5">
                  <div className="flex flex-wrap -space-x-px">
                    <Button
                      variant="secondary"
                      className="bg-slate-50 dark:bg-slate-900 hover:bg-slate-50 text-indigo-500 rounded-none first:rounded-l last:rounded-r"
                    >
                      Weekly
                    </Button>
                    <Button
                      variant="secondary"
                      className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300 rounded-none first:rounded-l last:rounded-r"
                    >
                      Monthly
                    </Button>
                    <Button
                      variant="secondary"
                      className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300 rounded-none first:rounded-l last:rounded-r"
                    >
                      Yearly
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
