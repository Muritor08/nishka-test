import { Tab } from '@headlessui/react'
import classNames from "classnames";

//components
import Bajaj_TL from '../../Bajaj_TL';
import Bajaj_FL from '../../Bajaj_FL';
import Bajaj_FHL from '../../Bajaj_FHL';

export default function Tabs() {
  return (


    <Tab.Group>
      <div className="tw-w-full tw-max-w-md tw-mx-auto tw-px-4 tw-py-16 tw-pb-20 sm:tw-px-0">

        <Tab.List className="tw-flex tw-p-1 tw-space-x-1 tw-bg-nishblue-400 tw-rounded-xl">
          <Tab
            className={({ selected }) =>
              classNames(
                'tw-w-full tw-py-2.5 tw-text-sm tw-leading-5 tw-font-medium tw-rounded-lg tw-border-solid tw-border-l-2 tw-border-r-2',
                'tw-focus:outline-none tw-focus:ring-2 tw-ring-offset-2 tw-ring-offset-nishblue-400 tw-ring-white tw-ring-opacity-60',
                selected
                  ? 'tw-bg-white tw-shadow'
                  : 'tw-text-blue-100 tw-bg-nishblue-400 tw-hover:bg-white/[0.12] tw-hover:text-white'
              )
            }
          >
            Term Loan
          </Tab>

          <Tab
            className={({ selected }) =>
              classNames(
                'tw-w-full tw-py-2.5 tw-text-sm tw-leading-5 tw-font-medium tw-rounded-lg tw-border-solid tw-border-l-2 tw-border-r-2',
                'tw-focus:outline-none tw-focus:ring-2 tw-ring-offset-2 tw-ring-offset-nishblue-400 tw-ring-white tw-ring-opacity-60',
                selected
                  ? 'tw-bg-white tw-shadow'
                  : 'tw-text-blue-100 tw-bg-nishblue-400 tw-hover:bg-white/[0.12] tw-hover:text-white'
              )
            }
          >
            Flexi Term Loan
          </Tab>

          <Tab
            className={({ selected }) =>
              classNames(
                'tw-w-full tw-py-2.5 tw-text-sm tw-leading-5 tw-font-medium tw-rounded-lg tw-border-solid tw-border-l-2 tw-border-r-2',
                'tw-focus:outline-none tw-focus:ring-2 tw-ring-offset-2 tw-ring-offset-nishblue-400 tw-ring-white tw-ring-opacity-60',
                selected
                  ? 'tw-bg-white tw-shadow'
                  : 'tw-text-blue-100 tw-bg-nishblue-400 tw-hover:bg-white/[0.12] tw-hover:text-white'
              )
            }
          >
            Flexi Hybrid Loan
          </Tab>

        </Tab.List>
      </div>

      <Tab.Panels className="tw--mt-16">

        <Tab.Panel>
          <Bajaj_TL />
        </Tab.Panel>

        <Tab.Panel>
          <Bajaj_FL />
        </Tab.Panel>

        <Tab.Panel>
          <Bajaj_FHL />
        </Tab.Panel>

      </Tab.Panels>

    </Tab.Group>
  );
}
