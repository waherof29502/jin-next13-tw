import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import FormLabel from '../components/form-label';
import FormRow from '../components/form-row';
import InputText from '../components/input-text';
function Contact() {
  const [file, setFile] = useState<File | undefined>();
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    const file = new FileReader();

    file.onload = function () {
      setPreview(file.result);
    };

    file.readAsDataURL(acceptedFiles[0]);
  }, []);

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop
  });

  /**
   * handleOnSubmit
   */

  async function handleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (typeof file === 'undefined') return;
    const formData = new FormData();

    formData.append('file', file);
    formData.append('upload_preset', 'test-react-uploads-unsigned');
    formData.append('api_key', import.meta.env.VITE_CLOUDINARY_API_KEY);

    console.log('file', file);
  }

  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };
    setFile(target.files[0]);
    console.log('target', target.files);
  }

  return (
    <div className="mt-10">
      <form className="max-w-md border border-gray-200 rounded p-6 mx-auto" onSubmit={handleOnSubmit}>
        <div className="mb-5 ">
          <div className="text-white">Name</div>
          <input id="name" className="w-full rounded-full" type="text" />
        </div>

        <FormRow className="mb-5">
          <FormLabel className="text-white" htmlFor="email">
            Email
          </FormLabel>
          <InputText id="email" name="email" type="email" />
        </FormRow>

        <FormRow className="mb-5">
          <FormLabel className="text-white" htmlFor="message">
            Message
          </FormLabel>
          <InputText id="message" name="message" type="text" />
        </FormRow>

        <FormRow className="mb-5 text-white">
          <FormLabel htmlFor="image">Image</FormLabel>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? <p>Drop the files here ...</p> : <p>Drag drop some files here, or click to select files</p>}
          </div>
          <input type="file" name="image" onChange={handleOnChange} />
        </FormRow>

        {preview && (
          <p className="mb-5">
            <img src={preview as string} alt="Upload preview" />
          </p>
        )}
      </form>
    </div>
  );
}

export default Contact;
