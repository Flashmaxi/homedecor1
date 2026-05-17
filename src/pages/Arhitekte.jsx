import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { RiArrowRightUpLine, RiCheckLine, RiErrorWarningLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import PageLayout from "../components/ui/PageLayout";
import { useReveal } from "../hooks/useReveal";

export default function Arhitekte() {
  const [status, setStatus] = useState({ type: null, message: "" });
  const [sending, setSending] = useState(false);
  const form = useRef();
  const { t } = useTranslation();
  const ref = useReveal({ stagger: 0.08 });

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: null, message: "" });

    emailjs
      .sendForm("service_s1ko0qh", "template_r4b1nmm", form.current, {
        publicKey: "XyctHlwlL5OVaodPG",
      })
      .then(
        () => {
          setStatus({ type: "success", message: "Poruka je uspešno poslata. Javljamo se uskoro." });
          form.current.reset();
          setSending(false);
        },
        () => {
          setStatus({ type: "error", message: "Došlo je do greške prilikom slanja. Pokušajte ponovo." });
          setSending(false);
        }
      );
  };

  return (
    <PageLayout>
      <section ref={ref} className="section bg-cream-50 relative overflow-hidden">
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />

        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left text */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
              <span data-reveal className="eyebrow mb-6 inline-flex items-center">
                <span className="inline-block w-6 h-px bg-accent align-middle mr-3" />
                Home Decor
              </span>
              <h1 data-reveal className="display-2 mb-8">
                {t("arhitekte.arhitekteTitle")}
              </h1>
              <div data-reveal className="h-px w-20 bg-accent mb-8" />
              <p data-reveal className="lead mb-6">
                {t("arhitekte.arhitekteText")}
              </p>
              <p data-reveal className="text-primary font-primary text-2xl">
                {t("arhitekte.arhitekteCta")}
              </p>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <form
                ref={form}
                onSubmit={sendEmail}
                data-reveal
                className="bg-cream-100 p-8 lg:p-12 space-y-7"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <Field
                    label={t("arhitekte.arhitektaIme")}
                    name="user_name"
                    type="text"
                  />
                  <Field
                    label={t("arhitekte.arthitektaKompanija")}
                    name="company_name"
                    type="text"
                  />
                  <Field
                    label={t("arhitekte.arhiEmail")}
                    name="user_email"
                    type="email"
                  />
                  <Field
                    label={t("arhitekte.arhiTelefon")}
                    name="user_number"
                    type="tel"
                  />
                </div>

                <Field
                  label={t("arhitekte.arhiPoruka")}
                  name="message"
                  type="textarea"
                />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4">
                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-primary group disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? "Šaljemo..." : t("arhitekte.arthiBtnText")}
                    <RiArrowRightUpLine className="text-accent text-lg transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>

                  {status.message && (
                    <div
                      className={`flex items-center gap-2 text-sm ${
                        status.type === "success" ? "text-green-700" : "text-red-700"
                      }`}
                    >
                      {status.type === "success" ? (
                        <RiCheckLine className="text-lg" />
                      ) : (
                        <RiErrorWarningLine className="text-lg" />
                      )}
                      {status.message}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function Field({ label, name, type = "text" }) {
  const isTextarea = type === "textarea";
  return (
    <div className="field-luxe">
      {isTextarea ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          required
          placeholder=" "
          className="input-luxe resize-none"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required
          placeholder=" "
          className="input-luxe"
        />
      )}
      <label htmlFor={name} className="label-luxe">
        {label}
      </label>
    </div>
  );
}
