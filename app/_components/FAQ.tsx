import SectionTitle from "@/components/SectionTitle";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

type TFaqParams = {
    question: string,
    answer: string,
    value: string
}[]

export default function FAQ(
    { data }:
        { data: TFaqParams }
) {

    // const FAQs = ;
    return (
        <main className="w-full max-w-[1400px] mx-auto px-standard brk-1400:px-0">
            <SectionTitle title="Frequently Asked Questions (FAQ)" />
            <Accordion
                type="single"
                collapsible
                className="mt-standard text-faded px-small"
            >
                {data.map((faq) => (
                    <AccordionItem
                        value={faq.value}
                        key={faq.value}
                        className="border-b-[#e8e8e8] border-b-2 hover:bg-gray-bg px-small">
                        <AccordionTrigger className="no-underline hover:no-underline text-left space-x-2">
                            <span>
                                {faq.question}
                            </span>
                        </AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </main>
    );
}
