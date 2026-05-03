import { ContactForm, Hero, OfficeVisit, Support } from "@/components/lien-he";

export default function LienHe() {
  return (
    <div className="text-white space-y-4 pt-14 mt-3 mb-10">
      <Hero />
      <div className="px-8 space-y-8">
        <ContactForm />
        <OfficeVisit />
        <Support />
      </div>
    </div>
  );
}
