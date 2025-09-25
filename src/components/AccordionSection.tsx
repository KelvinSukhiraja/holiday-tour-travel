import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { clients } from "@/lib/utils";

export function AccordionSection() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {clients.map((client, index) => {
        if (client.summary) {
          return (
            <AccordionItem value={index.toString()}>
              <AccordionTrigger>
                <div className="w-full flex">
                  <span className="w-1/2">{index + 1}</span>
                  <h1 className="w-full">{client.label}</h1>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>{client.summary}</p>
                <img
                  src={client.image}
                  alt="Contact Us"
                  className="w-1/3 object-cover object-center"
                  loading="lazy"
                />
              </AccordionContent>
            </AccordionItem>
          );
        } else {
          return (
            <AccordionItem value={index.toString()}>
              <div className="w-full flex py-4">
                <span className="w-1/2">{index + 1}</span>
                <h1 className="w-full">{client.label}</h1>
              </div>
            </AccordionItem>
          );
        }
      })}
    </Accordion>
  );
}
