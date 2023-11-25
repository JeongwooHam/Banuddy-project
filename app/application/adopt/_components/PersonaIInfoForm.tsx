'use client'

import { useState } from 'react'
import { Control, Controller, FieldErrors } from 'react-hook-form'
import FindAddress from '@/components/address/Address'
import '../../style.css'
import { AdoptApplicationFormData } from '../page'

interface AdoptionInfoFormProps {
  control: Control<AdoptApplicationFormData>
  errors: FieldErrors<AdoptApplicationFormData>
}

const PersonalInfoForm: React.FC<AdoptionInfoFormProps> = ({
  control,
  errors,
}) => {
  const [address, setAddress] = useState('')

  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2 pb-[20px] pt-[30px]">
        개인정보 입력
      </h2>
      <div className="flex flex mb-4">
        <label className="label-application">성명</label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              className={`input-application p-2 ${
                errors?.name ? 'border-red-500' : ''
              }`}
              placeholder="성함을 입력해주세요"
            />
          )}
        />
        {errors?.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div className="flex flex mb-4">
        <label className="label-application">연락처</label>
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              className={`input-application p-2 ${
                errors?.phoneNumber ? 'border-red-500' : ''
              }`}
              placeholder="휴대폰번호를 입력해주세요"
            />
          )}
        />
        {errors?.phoneNumber && (
          <p className="text-red-500">{errors.phoneNumber.message}</p>
        )}
      </div>

      <div className="flex flex mb-4">
        <label className="label-application">비상연락처</label>
        <Controller
          name="emergencyContact"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              className={`input-application p-2 ${
                errors?.emergencyContact ? 'border-red-500' : ''
              }`}
              placeholder="비상연락처를 입력해주세요"
            />
          )}
        />
        {errors?.emergencyContact && (
          <p className="text-red-500">{errors.emergencyContact.message}</p>
        )}
      </div>

      <div className="flex flex mb-4">
        <label className="label-application">성별</label>
        <div className="flex items-center ml-4">
          <Controller
            name="isFemale"
            control={control}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  type="radio"
                  value="female"
                  id="female"
                  className="mr-2"
                />
                <label htmlFor="female" className="mr-4  text-sm">
                  여성
                </label>
              </>
            )}
          />
          <Controller
            name="isFemale"
            control={control}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  type="radio"
                  value="male"
                  id="male"
                  className="mr-2"
                />
                <label htmlFor="male" className="text-sm">
                  남성
                </label>
              </>
            )}
          />
        </div>
        {errors?.isFemale && (
          <p className="text-red-500">{errors.isFemale.message}</p>
        )}
      </div>

      <div className="flex flex mb-4">
        <label className="label-application">나이</label>
        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              className={`input-application p-2 ${
                errors?.age ? 'border-red-500' : ''
              }`}
              placeholder="만나이를 입력해주세요"
            />
          )}
        />
        {errors?.age && <p className="text-red-500">{errors.age.message}</p>}
      </div>

      <div className="flex flex mb-4">
        <label className="label-application">집주소</label>
        <div className="h-[50px] flex align-center text-center gap-2">
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <div className="flex items-center gap-2">
                <input
                  {...field}
                  type="text"
                  readOnly
                  className={`input-application ${
                    errors?.address ? 'border-red-500' : ''
                  }`}
                  value={address}
                />
                <FindAddress
                  setter={(newAddress) => {
                    setAddress(newAddress)
                    field.onChange(newAddress)
                  }}
                />
              </div>
            )}
          />
        </div>
        {errors?.address && (
          <p className="text-red-500">{errors.address.message}</p>
        )}
      </div>

      <div className="flex flex mb-4">
        <label className="label-application">직장정보</label>
        <Controller
          name="occupation"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              className={`input-application p-2 ${
                errors?.occupation ? 'border-red-500' : ''
              }`}
              placeholder="직장정보를 입력해주세요"
            />
          )}
        />
        {errors?.occupation && (
          <p className="text-red-500">{errors.occupation.message}</p>
        )}
      </div>

      <div className="flex flex mb-4">
        <label className="label-application">결혼여부</label>
        <div className="flex items-center ml-4">
          <Controller
            name="isMarried"
            control={control}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  type="radio"
                  value="married"
                  id="married"
                  className="mr-2"
                />
                <label htmlFor="married" className="mr-4 text-sm">
                  기혼
                </label>
              </>
            )}
          />
          <Controller
            name="isMarried"
            control={control}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  type="radio"
                  value="unmarried"
                  id="unmarried"
                  className="mr-2"
                />
                <label htmlFor="unmarried" className="text-sm">
                  미혼
                </label>
              </>
            )}
          />
        </div>
        {errors?.isMarried && (
          <p className="text-red-500">{errors.isMarried.message}</p>
        )}
      </div>

      <div className="flex flex-col mb-4">
        <label className="label-application min-w-[250px]">
          개인정보 수집 및 이용에 대한 동의
        </label>
        <div className="border rounded p-4 bg-white w-[600px] text-sm ml-[100px]">
          - 수집 목적: 반려동물 입양자에 대한 신원 확보 <br />- 수집 항목: 성명,
          주소, 연락처 및 반려동물 입양에 필요한 기본 정보 <br />- 보유 및 이용
          기간: 1년 (해당 정보는 저장되어 가공되거나 다른 목적에 의해 사용되지
          않습니다.)
        </div>
      </div>

      <div className="flex items-center mb-4 ml-[100px]">
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
  )
}

export default PersonalInfoForm
