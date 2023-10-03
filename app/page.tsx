import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Home() {
  return (
    <>
      <div className="w-fuill flex flex-col ">Welcome to Banuddy!</div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Accordion UI입니다.</AccordionTrigger>
          <AccordionContent>Accordion UI를 적용해봤습니다:D</AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}
