'use client'

import { useState } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import FindAddress from '@/components/address/Address'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../style.css'

const schema = yup.object().shape({
  name: yup.string().required('이름을 입력하세요'),
  phoneNumber: yup.string().required('휴대폰번호를 입력해주세요'),
  emergencyContact: yup.string().required('비상연락처를 입력해주세요'),
  age: yup.string().required('나이를 입력해주세요'),
  isFemale: yup.boolean().oneOf([true], '성별을 선택해주세요'),
  address: yup.string().required('집주소를 입력하세요'),
  applicants: yup.string().required('희망 참가 인원을 입력해주세요'),
  shelterName: yup.string().required('보호소명을 입력해주세요'),
  shelterContact: yup.string().required('보호소 연락처를 입력해주세요'),
  desiredDate: yup.date().required('희망일자를 선택해주세요'),
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
  isFemale: boolean
  address: string
  applicants: number
  shelterName: string
  shelterContact: string
  desiredDate: Date | null
  consentText: string
  consentCheckbox: boolean
}

const ApplicationForm: React.FC = () => {
  const [address, setAddress] = useState('')
  const [isCalendarOpen, setCalendarOpen] = useState(false)

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: yupResolver(schema) as any,
    // any 이유를 아직 모르겠음.
  })

  const toggleCalendar = () => {
    console.log('clicked', '클릭함')
    setCalendarOpen((prevIsCalendarOpen) => !prevIsCalendarOpen)
  }
  const onSubmit: SubmitHandler<ApplicationFormData> = (data) => {}

  return (
    <>
      <div className="w-content m-auto bg-[#eaebf0] pb-20">
        <div>
          <img src="/images/formHeader.png" />
        </div>
        <div className="flex flex-col text-center">
          <h2 className="text-xl font-bold mb-2 pb-[5px] pt-[10px]">
            봉사 신청
          </h2>
          <p className="pb-[40px]">
            도움의 손길이 필요한 곳에 따뜻한 나눔을 전해보아요!
          </p>
        </div>
        <div className="pl-[80px] ">
          <form onSubmit={handleSubmit(onSubmit)}>
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
                {errors?.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
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
                  <p className="text-red-500">
                    {errors.emergencyContact.message}
                  </p>
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
                          value="true"
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
                          value="false"
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
                {errors?.age && (
                  <p className="text-red-500">{errors.age.message}</p>
                )}
              </div>

              <div className="flex flex mb-4">
                <label className="label-application">집주소</label>
                <div className="h-[50px] flex align-center text-center gap-2">
                  <div>{address}</div>
                  <FindAddress setter={setAddress} />
                </div>
                {errors?.address && (
                  <p className="text-red-500">{errors.address.message}</p>
                )}
              </div>

              <div className="flex flex-col mb-4">
                <label className="label-application" style={{ width: '500px' }}>
                  개인정보 수집 및 이용에 대한 동의
                </label>
                <div className="border rounded p-4 bg-white w-[600px] text-sm ml-[50px]">
                  - 수집 목적: 반려동물 입양자에 대한 신원 확보 <br />
                  - 수집 항목: 성명, 주소, 연락처 및 반려동물 입양에 필요한 기본
                  정보 <br />- 보유 및 이용 기간: 1년 (해당 정보는 저장되어
                  가공되거나 다른 목적에 의해 사용되지 않습니다.)
                </div>
              </div>

              <div className="flex items-center mb-4 ml-[50px]">
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
              <h2 className="text-xl font-bold mb-2 pb-[20px] pt-[30px]">
                봉사 신청 정보
              </h2>

              <div className="flex  mb-4">
                <label className="label-application">보호소명</label>
                <Controller
                  name="shelterName"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="input-application"
                      placeholder="보호소명"
                    />
                  )}
                />
              </div>
              <div className="flex  mb-4">
                <label className="label-application ">보호소 연락처</label>
                <Controller
                  name="shelterContact"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="input-application"
                      placeholder="보호소 연락처"
                    />
                  )}
                />
              </div>

              <div className="flex mb-4">
                <label className="label-application">희망일자</label>
                <Controller
                  name="desiredDate"
                  control={control}
                  render={({ field }) => (
                    <div className="flex items-center">
                      <DatePicker
                        className="input-application-date"
                        placeholderText="희망 일자"
                        selected={field.value}
                        onChange={(date) => {
                          field.onChange(date)
                          toggleCalendar()
                        }}
                        minDate={new Date()}
                        open={isCalendarOpen}
                      />
                      <img
                        src="/icons/calendar.svg"
                        alt="Calendar"
                        className="w-[35px] ml-[10px]"
                        onClick={toggleCalendar}
                      />
                    </div>
                  )}
                />
                {errors?.desiredDate && (
                  <p className="text-red-500">{errors.desiredDate.message}</p>
                )}
              </div>

              <div className="flex mb-4">
                <label className="label-application">희망참가인원</label>
                <Controller
                  name="applicants"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="input-application"
                      placeholder="희망참가인원"
                    />
                  )}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col text-center mt-[50px] mb-[30px] text-sm">
        저희 페이지는 직접 보호소에 봉사 신청을 연결하지 않으며, 입력하신
        개인정보는 저장되지 않습니다. <br /> 봉사활동에 관심이 있으신 분들은
        위의 연락처를 통해 각 보호소의 웹사이트나 연락처로 직접 문의하시기
        바랍니다. <br /> 유기동물에 관심을 가지고 소중한 시간을 내어주신
        여러분들께 감사드립니다.
      </div>
      <button
        className="submit-btn "
        type="submit"
        style={{ display: 'block', margin: '0 auto' }}
      >
        신청하기
      </button>
    </>
  )
}

export default ApplicationForm
