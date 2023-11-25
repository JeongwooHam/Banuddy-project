'use client'

import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import '../style.css'
import Modal from '@/components/modal/Modal'
import { useSearchParams } from 'next/navigation'
import PersonalInfoForm from './_components/PersonaIInfoForm'
import AdoptionInfoForm from './_components/AdoptionInfoForm'

const schema = yup.object().shape({
  name: yup.string().required('이름을 입력하세요'),
  phoneNumber: yup.string().required('휴대폰번호를 입력해주세요'),
  emergencyContact: yup.string().required('비상연락처를 입력해주세요'),
  age: yup.string().required('나이를 입력해주세요'),
  occupation: yup.string().required('직장정보를 입력해주세요'),
  isFemale: yup
    .string()
    .required('성별을 선택해주세요')
    .oneOf(['male', 'female']),
  isMarried: yup
    .string()
    .required('결혼여부를 선택하세요')
    .oneOf(['married', 'unmarried'], '결혼여부를 선택하세요'),
  address: yup.string().required('집주소를 입력하세요'),
  animalName: yup.string().required('희망동물 이름을 입력해주세요'),
  shelterName: yup.string().required('보호소명을 입력해주세요'),
  consentText: yup
    .string()
    .required('개인정보 수집 및 이용에 대한 동의를 입력하세요'),
  consentCheckbox: yup.boolean().oneOf([true], '동의해야 합니다'),
})

export interface AdoptApplicationFormData {
  name: string
  phoneNumber: string
  emergencyContact: string
  age: string
  occupation: string
  isFemale: string
  isMarried: string
  address: string
  animalName: string
  shelterName: string
  consentText: string
  consentCheckbox: boolean
}

const ApplicationForm: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const searchParams = useSearchParams()
  const animalName = searchParams.get('animalName')
  const shelterName = searchParams.get('shelterName')

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<AdoptApplicationFormData>({
    resolver: yupResolver(schema) as any,
    // any 이유를 아직 모르겠음.
    defaultValues: {
      animalName: animalName || '',
      shelterName: shelterName || '',
    },
  })

  const onSubmit: SubmitHandler<AdoptApplicationFormData> = async (data) => {}
  //   try {
  //     const docRef = await addDoc(collection(db, 'application'), data)
  //     console.log(docRef.id)
  //     setIsModalOpen(true)
  //   } catch (error) {
  //     console.error('Error', error)
  //   }
  // }

  // useEffect(() => {
  //   setValue('address', address)
  //}, [address, setValue])

  return (
    <>
      <div className="w-content m-auto bg-[#eaebf0] pb-20">
        <div>
          <img src="/images/formHeader.png" />
        </div>
        <div className="flex flex-col text-center">
          <h2 className="text-xl font-bold mb-2 pb-[5px] pt-[10px]">
            입양 신청
          </h2>
          <p className="pb-[40px]">
            평생 책임질 준비가 되셨나요? <br />
            동물들에게 입양은 마지막 기회이자 유일한 희망입니다.
          </p>
        </div>
        <div className="flex flex-col text-center items-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <PersonalInfoForm control={control} errors={errors} />
            <AdoptionInfoForm control={control} errors={errors} />
            <div className="flex flex-col text-center mt-[50px] mb-[30px] text-sm">
              저희 페이지는 직접 유기동물의 입양을 진행하지 않으며, 입력하신
              개인정보는 저장되지 않습니다. <br /> 입양에 관심이 있으신 분들은
              위의 연락처를 통해 각 보호소의 웹사이트나 연락처로 직접 문의하시기
              바랍니다. <br />
              반려동물 입양은 한 생명에 대한 결정이므로, 책임감과 충분한 사전
              조사를 거친 뒤 결정을 내려주시길 부탁드립니다. <br />
              유기동물에 관심을 가지고 소중한 선택을 하신 여러분들께
              감사드립니다.
            </div>
            <button
              className="submit-btn"
              type="submit"
              style={{ display: 'block', margin: '0 auto' }}
            >
              제출하기
            </button>
          </form>
        </div>
      </div>
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>입양 신청이 완료되었습니다! 담당자가 곧 연락드릴 예정입니다.</p>
      </Modal>
    </>
  )
}

export default ApplicationForm
