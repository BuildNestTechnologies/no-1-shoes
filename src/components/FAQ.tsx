import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  { q: "Do you offer home delivery?", a: "Yes! We offer free delivery on orders above ₹999 within Bhiwandi and surrounding areas. For other locations, nominal delivery charges apply." },
  { q: "Are all products genuine?", a: "Absolutely. We sell 100% genuine products sourced from authorized distributors. Every pair comes with quality assurance." },
  { q: "What is the return policy?", a: "We offer a 7-day hassle-free return policy. If the shoes don't fit or you're not satisfied, just bring them back in original condition." },
  { q: "What payment methods do you accept?", a: "We accept Cash, all UPI apps (GPay, PhonePe, Paytm), Debit/Credit Cards, and Net Banking." },
  { q: "Can I try shoes before buying?", a: "Of course! Visit our store at Bharat Medical, Thane Road, Bhiwandi. We have all sizes available for trial." },
  { q: "Do you have kids' shoes?", a: "Yes! We have a growing collection of kids' shoes in all sizes. Visit our store or call us for the latest stock." },
  { q: "How can I check if my size is available?", a: "Simply call or WhatsApp us at 7558764648 with the shoe name and your size — we'll confirm instantly!" },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
              <HelpCircle className="h-6 w-6 text-primary" />
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">Got questions? We've got answers.</p>
          </motion.div>

          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/10"
              >
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display text-sm font-semibold text-foreground">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openIdx === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIdx === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="border-t border-border/50 px-5 pb-5 pt-4 text-sm leading-relaxed text-muted-foreground">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
