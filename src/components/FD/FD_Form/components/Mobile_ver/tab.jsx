import { React } from "react";
import { Tab } from "@headlessui/react";
import classNames from "classnames";

//components
import New_FD from "./new_fd";
import Resume_FD from "./resume_fd";

export default function Tabs() {
  return (
    <div>
      <Tab.Group>
        <Tab.List className="tw-border-nishyellow-400 tw-w-80 tw-flex md:tw-ml-10 tw-ml-3 md:tw-gap-3 tw-gap-1">
          <Tab
            className={({ selected }) =>
              classNames(
                "md:tw-w-full tw-w-2/5 tw-border-nishyellow-400 tw-border-2 tw-py-1 tw-rounded-3xl tw-text-xs md:tw-text-md tw-mt-8",
                selected
                  ? "tw-bg-nishyellow-400 tw-text-white"
                  : "tw-text-nishyellow-400 tw-bg-white"
              )
            }
          >
            Book New FD
          </Tab>

          <Tab
            className={({ selected }) =>
              classNames(
                "md:tw-w-full tw-w-2/5 tw-border-nishyellow-400 tw-border-2 tw-py-1 tw-rounded-3xl tw-text-xs md:tw-text-md tw-mt-8",
                selected
                  ? "tw-bg-nishyellow-400 tw-text-white"
                  : "tw-text-nishyellow-400 tw-bg-white"
              )
            }
          >
            Resume Application
          </Tab>
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <New_FD />
          </Tab.Panel>

          <Tab.Panel>
            <Resume_FD />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
