import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionSection() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="w-full grid grid-cols-3">
            <span>01</span>
            <h1>BCA</h1>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            itaque iste ea architecto voluptatum, ullam dignissimos deserunt
            inventore fuga, odio, natus eveniet velit dolores necessitatibus
            similique quas alias dolore consequuntur.
          </p>
          <img
            src={"/src/assets/ABOUT-US/CLIENTS/BCA.png"}
            alt="Contact Us"
            className="w-1/3 object-cover object-center"
            loading="lazy"
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <div className="w-full grid grid-cols-3">
            <span>02</span>
            <h1>BCA</h1>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            itaque iste ea architecto voluptatum, ullam dignissimos deserunt
            inventore fuga, odio, natus eveniet velit dolores necessitatibus
            similique quas alias dolore consequuntur.
          </p>
          <img
            src={"/src/assets/ABOUT-US/CLIENTS/BCA.png"}
            alt="Contact Us"
            className="w-1/3 object-cover object-center"
            loading="lazy"
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <div className="w-full grid grid-cols-3">
            <span>03</span>
            <h1>BCA</h1>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            itaque iste ea architecto voluptatum, ullam dignissimos deserunt
            inventore fuga, odio, natus eveniet velit dolores necessitatibus
            similique quas alias dolore consequuntur.
          </p>
          <img
            src={"/src/assets/ABOUT-US/CLIENTS/BCA.png"}
            alt="Contact Us"
            className="w-1/3 object-cover object-center"
            loading="lazy"
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          <div className="w-full grid grid-cols-3">
            <span>04</span>
            <h1>BCA</h1>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            itaque iste ea architecto voluptatum, ullam dignissimos deserunt
            inventore fuga, odio, natus eveniet velit dolores necessitatibus
            similique quas alias dolore consequuntur.
          </p>
          <img
            src={"/src/assets/ABOUT-US/CLIENTS/BCA.png"}
            alt="Contact Us"
            className="w-1/3 object-cover object-center"
            loading="lazy"
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          <div className="w-full grid grid-cols-3">
            <span>05</span>
            <h1>BCA</h1>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            itaque iste ea architecto voluptatum, ullam dignissimos deserunt
            inventore fuga, odio, natus eveniet velit dolores necessitatibus
            similique quas alias dolore consequuntur.
          </p>
          <img
            src={"/src/assets/ABOUT-US/CLIENTS/BCA.png"}
            alt="Contact Us"
            className="w-1/3 object-cover object-center"
            loading="lazy"
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>
          <div className="w-full grid grid-cols-3">
            <span>06</span>
            <h1>BCA</h1>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            itaque iste ea architecto voluptatum, ullam dignissimos deserunt
            inventore fuga, odio, natus eveniet velit dolores necessitatibus
            similique quas alias dolore consequuntur.
          </p>
          <img
            src={"/src/assets/ABOUT-US/CLIENTS/BCA.png"}
            alt="Contact Us"
            className="w-1/3 object-cover object-center"
            loading="lazy"
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
