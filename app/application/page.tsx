'use client'

import { useState } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import FindAddress from '@/components/address/Address'

const schema = yup.object().shape({
  name: yup.string().required('이름을 입력하세요'),
  address: yup.string().required('집주소를 입력하세요'),
  consentText: yup
    .string()
    .required('개인정보 수집 및 이용에 대한 동의를 입력하세요'),
  consentCheckbox: yup.boolean().oneOf([true], '동의해야 합니다'),
})

interface ApplicationFormData {
  name: string
  phoneNumber: string
  emergencyContact: string
  age: string
  occupation: string
  isFemale: boolean
  isMarried: boolean
  address: string
  petName: string
  shelterName: string
  shelterContact: string
  consentText: string
  consentCheckbox: boolean
}

const ApplicationForm: React.FC = () => {
  const [address, setAddress] = useState()

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: yupResolver(schema) as any,
  })

  const onSubmit: SubmitHandler<ApplicationFormData> = (data) => {}

  return (
    <div className="containerMain">
      <div>
        <img src="/images/formHeader.png" />
      </div>
      <div className="w-2/3 min-w-[700px] imgSection">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">개인정보 입력</h2>
            <div className="flex flex-col mb-4">
              <label className="mb-1">성명</label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className={`border rounded p-2 ${
                      errors?.name ? 'border-red-500' : ''
                    }`}
                    placeholder="성명"
                  />
                )}
              />
              {errors?.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="flex flex-col mb-4">
              <label className="mb-1">집주소(주소찾기)</label>
              <div className="h-[50px] flex align-center text-center gap-2">
                <div>주소:{address}</div>
                <FindAddress setter={setAddress} />
              </div>
              {errors?.address && (
                <p className="text-red-500">{errors.address.message}</p>
              )}
            </div>

            <div className="flex flex-col mb-4">
              <label className="mb-1">개인정보 수집 및 이용에 대한 동의</label>
              <div className="border rounded p-4">
                개인정보처리에대한 안내 블라블라 개인정보처리에대한 안내
                블라블라개인정보처리에대한 안내 블라블라개인정보처리에대한 안내
                블라블라개인정보처리에대한 안내 블라블라개인정보처리에대한 안내
                블라블라
              </div>
            </div>

            <div className="flex items-center mb-4">
              <label className="pr-3">동의하겠습니까?</label>
              <Controller
                name="consentCheckbox"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="checkbox"
                    className="mr-2"
                    value="false"
                    onChange={(e) =>
                      field.onChange(e.target.checked ? 'true' : 'false')
                    }
                  />
                )}
              />
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">입양정보 입력</h2>
            <div className="flex flex-col mb-4">
              <label className="mb-1">희망동물 이름</label>
              <Controller
                name="petName"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="border rounded p-2"
                    placeholder="희망동물 이름"
                  />
                )}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-1">보호소명</label>
              <Controller
                name="shelterName"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="border rounded p-2"
                    placeholder="보호소명"
                  />
                )}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-1">보호소 연락처</label>
              <Controller
                name="shelterContact"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="border rounded p-2"
                    placeholder="보호소 연락처"
                  />
                )}
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white rounded py-2 px-4"
          >
            제출하기
          </button>
        </form>
      </div>
    </div>
  )
}

export default ApplicationForm
