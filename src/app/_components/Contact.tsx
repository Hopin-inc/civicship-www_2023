import { contactForm } from "@/constants/url";

const Contact = () => (
  <section id="contact" className="flex flex-col py-4">
    <h2>お問い合わせ</h2>
    <iframe src={ contactForm } className="w-full h-[75vh] mt-6 bg-white rounded-xl">
      読み込んでいます…
    </iframe>
  </section>
);

export default Contact;
