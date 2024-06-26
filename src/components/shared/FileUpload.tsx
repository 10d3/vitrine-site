/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useCallback, Dispatch, SetStateAction } from 'react'
// import type { FileWithPath } from '@uploadthing/react/'
import { useDropzone } from '@uploadthing/react/hooks'
import { generateClientDropzoneAccept } from 'uploadthing/client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { convertFileToUrl } from '@/lib/uploadthings/utils'

type FileUploaderProps = {
  onFieldChange: (url: string) => void
  image: string
  setFiles: Dispatch<SetStateAction<File[]>>
}

export function FileUploader({ image, onFieldChange, setFiles }: FileUploaderProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles)
    onFieldChange(convertFileToUrl(acceptedFiles[0]))
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*' ? generateClientDropzoneAccept(['image/*']) : undefined,
  })

  return (
    <div
      {...getRootProps()}
      className="flex-center bg-dark-3 flex h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-gray-50">
      <input {...getInputProps()} className="cursor-pointer" />

      {image ? (
        <div className="flex h-full w-full flex-1 justify-center ">
          <Image
            src={image}
            alt="image"
            width={250}
            height={250}
            className="w-full object-cover object-center"
          />
        </div>
      ) : (
        <div className="flex items-center flex-col py-5 text-grey-500">
          <Image src="/assets/icons/file-upload.svg" width={77} height={77} alt="file upload" />
          <h3 className="mb-2 mt-2">Drag photo here</h3>
          <p className="p-medium-12 mb-4">SVG, PNG, JPG</p>
          <Button type="button" className="rounded-full">
            Select from computer
          </Button>
        </div>
      )}
    </div>
  )
}
