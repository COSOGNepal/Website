import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  // IMPORTANT : give different items their unique value (as demo)
  const FAQs = [
    {
      question: "What has keys but can't open locks?",
      answer: "A piano",
      value: "item-1",
    },
    {
      question:
        "What comes once in a minute, twice in a moment, but never in a thousand years?",
      answer: "The letter 'M'",
      value: "item-2",
    },
    {
      question: "What has a heart that doesn't beat?",
      answer: "An artichoke",
      value: "item-3",
    },
    {
      question: "What has an endless supply of letters but starts empty?",
      answer: "A mailbox",
      value: "item-4",
    },
    {
      question: "What has a head, a tail, is brown, and has no legs?",
      answer: "A penny",
      value: "item-5",
    },
    {
      question:
        "What has cities but no houses, forests but no trees, and rivers but no water?",
      answer: "A map",
      value: "item-6",
    },
  ];
  return (
    <main>
      <h2
        className={
          "text-xl md:text-3xl text-faded font-normal my-10 w-11/12 mx-auto "
        }
      >
        Frequently asked questions (FAQ)
      </h2>
      <Accordion
        type="single"
        collapsible
        className="mx-3 w-full md:w-10/12 md:mx-auto"
      >
        {FAQs.map((quest) => (
          <AccordionItem value={quest.value} key={quest.value}>
            <AccordionTrigger>{quest.question}</AccordionTrigger>
            <AccordionContent>{quest.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
}
