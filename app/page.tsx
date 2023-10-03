import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Home() {
  return (
    <>
      <h2>Welcome to Banuddy!</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Accordion UI입니다.</AccordionTrigger>
          <AccordionContent>Accordion UI를 적용해봤습니다:D</AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}
