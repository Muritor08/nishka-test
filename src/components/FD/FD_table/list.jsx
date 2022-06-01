import React, { useEffect, useState } from "react";
// import ControlSwitch from "./components/Switch";
import ColorSwitches from "./tableswitch";
// import Switch from '@mui/material/Switch';

const List = () => {
  const userList1 = [
    {
      id: "1",
      name: "ab",
      age: "1"
    },
    {
      id: "2",
      name: "cd",
      age: "2"
    },
    {
      id: "3",
      name: "ef",
      age: "3"
    },
    {
      id: "4",
      name: "gh",
      age: "4"
    },
    {
      id: "5",
      name: "ij",
      age: "5"
    },
    {
      id: "6",
      name: "kl",
      age: "6"
    }
  ];

  const userList2 = [
    {
      id: "1",
      name: "ab",
      age: "3"
    },
    {
      id: "2",
      name: "cd",
      age: "6"
    },
    {
      id: "3",
      name: "ef",
      age: "9"
    },
    {
      id: "4",
      name: "gh",
      age: "13"
    },
    {
      id: "5",
      name: "ij",
      age: "30"
    },
    {
      id: "6",
      name: "kl",
      age: "34"
    }
  ];

  const [initial_names, setNewNames] = useState(userList1);

  useEffect(() => {
    console.log(initial_names);
  }, [initial_names]);

  const handleChange = () => {
    setNewNames((users) =>
      users.map((user, index) => {
        const getUserDataFromList2 = userList2.filter(
          ({ id }) => id == user.id
        );

        return {
          ...user,
          age:
            user.age === userList1[index].age
              ? getUserDataFromList2[0].age
              : userList1[index].age
        };
      })
    );
  };

  return (
    <>
      <div>
        <div>
          <div className="w-full items-center flex flex-row pl-64 flex-start">
            <div className="w-1/6 pl-4">Name</div>
            <div className="w-1/6 pl-2">age</div>
            <ColorSwitches handleChange={handleChange} />
          </div>
        </div>
      </div>

      <div>
        {initial_names.map((rest) => {
          return <Data rest={rest}></Data>;
        })}
      </div>
    </>
  );
};

const Data = (props) => {
  const { name, age } = props.rest;

  return (
    <div className="flex flex-row pl-32 flex-start">
      <div className="w-1/5">{name}</div>
      <div className="w-1/5">{age}</div>
    </div>
  );
};

export default List;