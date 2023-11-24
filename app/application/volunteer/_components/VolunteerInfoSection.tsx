'use client'

import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Controller, Control, FieldErrors } from 'react-hook-form'
import { ApplicationFormData } from '../page'
import '../../style.css'

interface VolunteerInfoSectionProps {
  control: Control<ApplicationFormData>
  errors: FieldErrors<ApplicationFormData>
}

const VolunteerInfoSection: React.FC<VolunteerInfoSectionProps> = ({
  control,
  errors,
}) => {
  const [isCalendarOpen, setCalendarOpen] = useState(false)

  const toggleCalendar = () => {
    setCalendarOpen((prevIsCalendarOpen) => !prevIsCalendarOpen)
  }

  return (
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
            <div className="flex items-center" onClick={toggleCalendar}>
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
  )
}

export default VolunteerInfoSection
