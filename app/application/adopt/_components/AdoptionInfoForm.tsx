'use client'

import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Controller, Control, FieldErrors } from 'react-hook-form'
import { AdoptApplicationFormData } from '../page'
import '../../style.css'

interface AdoptionInfoFormProps {
  control: Control<AdoptApplicationFormData>
  errors: FieldErrors<AdoptApplicationFormData>
}

const AdoptionInfoForm: React.FC<AdoptionInfoFormProps> = ({
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
        입양정보 입력
      </h2>
      <div className="flex mb-4">
        <label className="label-application">희망동물 이름</label>
        <Controller
          name="animalName"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              className="input-application"
              placeholder="희망동물 이름"
            />
          )}
        />
        {errors?.animalName && (
          <p className="text-red-500">{errors.animalName.message}</p>
        )}
      </div>
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
        {errors?.shelterName && (
          <p className="text-red-500">{errors.shelterName.message}</p>
        )}
      </div>
    </div>
  )
}

export default AdoptionInfoForm
