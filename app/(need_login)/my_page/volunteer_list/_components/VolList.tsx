import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const AnimalList: React.FC = () => {
  return (
    <>
      <div>봉사 신청 n건</div>
      <div>봉사 신청 표</div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Accordion UI입니다.</AccordionTrigger>
          <AccordionContent>Accordion UI를 적용해봤습니다:D</AccordionContent>
        </AccordionItem>
      </Accordion>
      <div>페이지네이션</div>
    </>
  )
}

export default AnimalList
