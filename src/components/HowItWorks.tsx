import { motion } from "framer-motion";
import { Package, Truck, CheckCircle, CreditCard } from "lucide-react";

const steps = [
  { icon: Package, title: "Choose Your Pair", desc: "Browse our curated collection of 100+ styles", step: "01" },
  { icon: CreditCard, title: "Easy Payment", desc: "Pay via Cash, UPI, or Card — whatever suits you", step: "02" },
  { icon: Truck, title: "Fast Delivery", desc: "Get it delivered to your doorstep or pick up in store", step: "03" },
  { icon: CheckCircle, title: "Rock Your Style", desc: "Step out in style and turn heads everywhere", step: "04" },
];

const HowItWorks = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] via-transparent to-primary/[0.03]" />
      
      {/* Decorative circles */}
      <div className="absolute left-[5%] top-[20%] h-64 w-64 rounded-full border border-primary/[0.04]" />
      <div className="absolute right-[10%] bottom-[10%] h-48 w-48 rounded-full border border-primary/[0.04]" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 font-body text-[11px] uppercase tracking-[0.3em] text-primary">Simple Process</p>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-6xl">
            How It <span className="text-gradient">Works</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl border border-border bg-card p-7 text-center transition-all duration-500 hover:border-primary/20"
            >
              {/* Step number */}
              <span className="absolute -right-1 -top-1 font-display text-6xl font-bold text-primary/[0.06]">
                {step.step}
              </span>

              <div className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                <step.icon className="h-6 w-6" />
              </div>

              <h3 className="font-display text-base font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-[1px] w-6 bg-border lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
