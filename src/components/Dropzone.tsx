import Image from "next/image";
import React, { useCallback } from "react";
import {
  useDropzone,
  DropzoneRootProps,
  DropzoneInputProps,
} from "react-dropzone";

interface DropzoneProps {
  onFileSelected: (file: File) => void;
}

const Dropzone: React.FC<DropzoneProps> = ({ onFileSelected }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onFileSelected(acceptedFiles[0]);
    },
    [onFileSelected]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles,
  }: {
    getRootProps: (props?: DropzoneRootProps) => DropzoneRootProps;
    getInputProps: (props?: DropzoneInputProps) => DropzoneInputProps;
    acceptedFiles: File[];
    isDragActive: boolean;
  } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`dropzone ${
        isDragActive ? "active" : ""
      } border border-black rounded-3xl md:w-[523px] md:h-[551px] w-full h-[25vh] flex items-center justify-center cursor-pointer`}
    >
      <input {...getInputProps()} />

      {acceptedFiles[0] ? (
        <Image
          src={URL.createObjectURL(acceptedFiles[0])}
          width={100}
          height={100}
          alt="preview"
          className="object-cover w-full h-full rounded-3xl "
        />
      ) : (
        <p>Añadir imagen</p>
      )}
    </div>
  );
};

export default Dropzone;
