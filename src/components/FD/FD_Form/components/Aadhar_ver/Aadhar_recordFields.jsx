import React from "react";
import { Link } from "react-router-dom";

//image
import aadhar_id from "../../assets/aadhar_id.png";



const Aadhar_recordFields = () => {

  const [counter, setCounter] = React.useState(15);

  // Third Attempts
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  window.setTimeout(function () {
    window.location.href = '/form/personaldetails';
  }, 15000);

  return (
    <>

      <div className=" tw-w-full tw-h-auto tw-mx-auto tw-ml-2.5 md:tw-m-4 md:tw-ml-14 lg:tw-ml-20 tw-mt-10 lg:tw-mt-20 tw-mb-20 tw-p-2 md:tw-p-8 tw-rounded-lg tw-shadow-lg">
        <div className="tw-w-full tw-gap-4 md:tw-gap-2 tw-flex tw-flex-col md:tw-flex-row">

          <div className="md:tw-w-1/4">
            <img src={aadhar_id} />
          </div>

          <div className="tw-flex tw-flex-col tw-text-left tw-gap-10 md:tw-w-3/4">

            <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between">

              <div className="tw-flex tw-gap-2">
                <h1 className="tw-text-lg tw-font-semibold">Name:</h1>
                <h1 className="tw-text-lg tw-font-semibold">xxxxxxxx xxxxxxxx</h1>
              </div>

              <div className="tw-flex tw-gap-2">
                <h1 className="tw-text-lg tw-font-semibold">DoB:</h1>
                <h1 className="tw-text-lg tw-font-semibold">XXXXXXXX</h1>
              </div>

            </div>


            <div className="tw-flex tw-gap-2">

              <h1 className="tw-text-lg tw-font-semibold">Gender:</h1>
              <h1 className="tw-text-lg tw-font-semibold">M</h1>

            </div>


            <div className="tw-w-full tw-flex tw-flex-col tw-mb-8">

              <h1 className="tw-text-lg tw-font-semibold">Address:</h1>
              <h1 className="tw-text-lg tw-font-semibold">
                XXXXXXXXXXXXXXXXXXXXXXXXXX<br />XXXXXXXXXXXXXXXXXXXXXXXXXX<br />XXXXXXXXXXXXXXXXXXXXXXXXXX
              </h1>

            </div>


            <div className="md:tw-text-right">

              <p className="tw-text-red-400">Page will redirect in {counter} seconds.</p>

              <Link to="/form/personaldetails">

                <button className="tw-border-none tw-bg-transparent tw-font-semibold tw-text-blue-700">Click here for manual redirection.</button>
              </Link>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Aadhar_recordFields;
