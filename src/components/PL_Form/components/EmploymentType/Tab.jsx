import { React } from "react";
import { Tab } from "@headlessui/react";
import classNames from "classnames";

//components
import Salaried from "./Salaried";
import Business_owner from "./Business_owner";

export default function Tabs() {
  return (
    <div>
      <Tab.Group>
        <Tab.List className="tw-border-nishyellow-400 tw-w-80 tw-flex md:tw-ml-10 tw-ml-3 md:tw-gap-3 tw-gap-1">
          <Tab
            className={({ selected }) =>
              classNames(
                "md:tw-w-full tw-w-2/5 tw-border-nishyellow-400 tw-border-2 tw-py-1 tw-rounded-3xl tw-text-xs md:tw-text-sm tw-mt-8",
                selected
                  ? "tw-bg-nishyellow-400 tw-text-white"
                  : "tw-text-nishyellow-400 tw-bg-white"
              )
            }
          >
            Salaried
          </Tab>

          <Tab
            className={({ selected }) =>
              classNames(
                "md:tw-w-full tw-w-2/5 tw-border-nishyellow-400 tw-border-2 tw-py-1 tw-rounded-3xl tw-text-xs md:tw-text-sm tw-mt-8",
                selected
                  ? "tw-bg-nishyellow-400 tw-text-white"
                  : "tw-text-nishyellow-400 tw-bg-white"
              )
            }
          >
            Business Owner
          </Tab>
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <Salaried />
          </Tab.Panel>

          <Tab.Panel>
            <Business_owner />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
