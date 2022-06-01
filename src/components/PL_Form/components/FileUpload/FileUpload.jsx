import { React, useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond/dist/filepond.min.css";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

//image
import upload from "../../assets/upload.png";
import step2 from "../../assets/step2nd.png";
// import step1mob from "../../assets/step1mob.png";

registerPlugin(
  FilePondPluginFileValidateType,
  FilePondPluginFileValidateSize,
  FilePondPluginImagePreview
);

const UploadFile = () => {
  const [files, initFiles] = useState([]);
  //   const [selectedFile, setSelectedFile] = useState();
  //   const [isFilePicked, setIsFilePicked] = useState(false);

  //   const changeHandler = (event) => {
  //     setSelectedFile(event.target.files[0]);
  //     setIsFilePicked(true);
  //   };

  //   const handleSubmission = () => {};

  return (
    <>

<div className="tw-hidden md:tw-block tw-w-full tw-px-8 tw-pt-8">
        <img src={step2} className="tw-mx-auto tw-w-full" />
      </div>

      {/* <div className="tw-block md:tw-hidden tw-w-full tw-px-2 tw-pt-8">
        <img src={step1mob} className="tw-mx-auto tw-w-full" />
      </div> */}

      <div className="tw-border-nishblue-100 tw-p-4 md:tw-p-8">
        <div className="tw-h-auto tw-border-solid tw-rounded-2xl tw-border-nishblue-100">
          <h1 className="tw-font-semibold lg:tw-text-5xl tw-text-2xl md:tw-text-3xl tw-m-4 tw-mb-4 md:tw-mb-8 tw-text-left md:tw-ml-10">
            Upload your Document
          </h1>
          <div className="tw-flex tw--mt-8 tw-w-full">
            <div className="lg:tw-w-2/3 tw-w-full tw-pr-6 md:tw-pr-12 lg:tw-pr-0">
              <div className="tw-w-full md:tw-w-4/5 lg:tw-w-5/6 tw-ml-10">
                <p className="tw-text-left tw-text-lg tw-text-gray-500 tw-w-5/6 md:tw-w-full tw-mt-36">
                  Please upload the files in .pdf, .jpg, .jpeg, .zip formats
                  only. The maximum size of the file is 4MB.
                </p>
                <p className="tw-text-left tw-text-lg tw-font-semibold">
                  BANK STATEMENTS OF THE LAST 6 MONTHS{" "}
                  <span className="tw-text-red-600 tw-mt-1.5">*</span>
                </p>
                <p className="tw-text-left tw-text-gray-500 tw-w-5/6 md:tw-w-full ">
                  Note: Please upload bank statements of the last 6 months
                </p>
              </div>
              <div className="tw-w-3/4 md:tw-w-4/5 lg:tw-w-5/6 tw-ml-10">
                <div class="flex justify-center">
                  <div class="mb-3 w-96">
                    <input
                      class="form-control
                        block
                        w-4/5
                        px-2
                        text-sm
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="formFileSm"
                      type="file"
                    />
                  </div>
                </div>

                {/* <div className="tw-container tw-mt-5">
                  <FilePond
                    files={files}
                    allowFileSizeValidation={true}
                    maxFileSize={4}
                    labelMaxFileSizeExceeded={"File is too large"}
                    allowFileTypeValidation={true}
                    acceptedFileTypes={[".jpg", ".jpeg", ".pdf", ".zip"]}
                  />
                </div> */}
              </div>
              <button
                type="submit"
                className="tw-border-nishyellow-400 tw-px-10 tw-bg-nishyellow-400 tw-p-3 tw-rounded-lg tw-font-bold tw-mt-48 tw-mb-10"
              >
                Submit
              </button>
            </div>

            <div className="tw-hidden lg:tw-block tw-w-1/4 tw-mt-32">
              <img
                src={upload}
                className="tw-w-full tw-hidden lg:tw-block tw-m-auto tw-my-auto "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadFile;
