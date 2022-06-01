// Imports Headless Ui
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const people = [
    { name: 'Maturity' },
    {
        name: 'Monthly',
        value: "1"
    },
    {
        name: 'Quaterly',
        value: "4"
    },
    {
        name: 'Half-Yearly',
        value: "6"
    },
    {
        name: 'Yearly',
        value: "12"
    },
]

export default function Example() {
    const [selected, setSelected] = useState(people[0])

    return (
        <div className="tw-w-68 md:tw-w-72 tw-tw-top-16">
            <Listbox value={selected} onChange={setSelected}>
                <div className="tw-relative tw-mt-4">

                    <Listbox.Button className="tw-relative tw-w-60 md:tw-w-72 tw-py-2 tw-pl-3 tw-pr-10 tw-text-left tw-bg-white tw-rounded-lg tw-shadow-md tw-cursor-default tw-focus:outline-none tw-focus-visible:ring-2 tw-focus-visible:ring-opacity-75 tw-focus-visible:ring-white tw-focus-visible:ring-offset-orange-300 tw-focus-visible:ring-offset-2 tw-focus-visible:border-indigo-500 sm:tw-text-sm">
                        <div className="tw-flex tw-flex-row tw-gap-2 tw-items-center">
                            <span><p className="tw-text-lg tw--mb-0">On</p></span>
                            <span className="tw-block tw-text-lg tw-font-semibold tw-truncate">{selected.name}</span>
                        </div>
                        <span className="tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-2 tw-pointer-events-none">
                            <SelectorIcon
                                className="tw-w-5 tw-h-5 tw-text-nishblue-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="tw-transition tw-ease-in tw-duration-100"
                        leaveFrom="tw-opacity-100"
                        leaveTo="tw-opacity-0"
                    >
                        <Listbox.Options className="tw-list-none tw-absolute tw-w-60 tw-z-10 md:tw-w-full tw-py-1 tw-mt-1 tw-overflow-auto tw-text-base tw-bg-white tw-rounded-md tw-shadow-lg tw-max-h-60 tw-ring-1 tw-ring-black tw-ring-opacity-5 tw-focus:outline-none tw-text-center sm:tw-text-sm">
                            {people.map((person, personIdx) => (
                                <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) =>
                                        `${active ? 'tw-text-amber-900 tw-bg-amber-100' : 'tw-text-gray-900'}
                          tw-cursor-default tw-select-none tw-relative tw-py-2 tw-pl-10 tw-pr-4`
                                    }
                                    value={person}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                                className={`${selected ? 'tw-font-medium' : 'tw-font-normal'
                                                    } tw-block tw-truncate`}
                                            >
                                                {person.name}
                                            </span>
                                            {selected ? (
                                                <span
                                                    className={`${active ? 'tw-text-amber-600' : 'tw-text-amber-600'
                                                        }
                                tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-3`}
                                                >
                                                    <CheckIcon className="tw-w-5 tw-h-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}