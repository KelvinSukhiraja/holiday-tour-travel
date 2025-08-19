import ContactForm from "@/components/ContactForm";
import TravelForm from "./TravelForm";

type formPageProp = {
  bgImage: string;
  title: string;
  subtitle: string;
  formType: string;
};

const FormPage = ({ bgImage, title, subtitle, formType }: formPageProp) => {
  return (
    <section className="min-h-screen grid grid-cols-2 relative">
      <picture>
        <source srcSet={bgImage} type="image/webp" />
        <source srcSet={bgImage} type="image/jpeg" />
        <img
          src={bgImage}
          alt="bgImage"
          className="w-full h-full object-cover object-bottom"
          loading="lazy"
        />
      </picture>
      <div className="px-8 md:px-32 md:py-10 flex flex-col justify-center items-center w-full gap-5 bg-white-a text-A">
        <div className="flex flex-col gap-3">
          <h1 className="first-text">{title}</h1>
          <p className="fourth-text">{subtitle}</p>
        </div>
        {formType == "Contact" ? <ContactForm /> : <TravelForm />}
      </div>
    </section>
  );
};

export default FormPage;
