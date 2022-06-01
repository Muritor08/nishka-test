import { Tab } from '@headlessui/react'
import classNames from "classnames";

//components
import SDP from './SDP_bajaj';
import Bajaj_finserv from './Bajaj_finserv';
import NRI from './NRI_bajaj';

export default function Tabs() {
  return (


    <Tab.Group>
      <div className="tw-w-full tw-max-w-md tw-mx-auto tw-px-4 tw-py-2 tw-pb-10 sm:tw-px-0">

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
            Bajaj FD
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
            SDP
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
            NRI FD
          </Tab>

        </Tab.List>
      </div>

      <Tab.Panels className="tw--mt-16">

        <Tab.Panel>
          <Bajaj_finserv />
        </Tab.Panel>

        <Tab.Panel>
          <SDP />
        </Tab.Panel>

        <Tab.Panel>
          <NRI />
        </Tab.Panel>


      </Tab.Panels>

    </Tab.Group>
  );
}
