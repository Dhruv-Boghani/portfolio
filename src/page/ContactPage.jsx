import React from "react";
import PageHero from "../components/PageHero";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "../components/Footer";
import Fixdivider from "../components/Fixdivider";

const ContactPage = () => {
  const items = [
    {
      icon: <Mail size={22} strokeWidth={1.5} />,
      label: "EMAIL",
      value: "dhruvboghani624@gmail.com",
      href: "mailto:dhruvboghani624@gmail.com",
      link: true,
    },
    {
      icon: <FaLinkedin size={22} strokeWidth={1.5} />,
      label: "NETWORK",
      value: "Dhruv Boghani",
      href: "https://www.linkedin.com/in/dhruv-boghani-b795a133a",
      link: true,
    },
    {
      icon: <FaGithub size={22} strokeWidth={1.5} />,
      label: "CODE",
      value: "github.com/Dhruv-Boghani",
      href: "https://github.com/Dhruv-Boghani",
      link: true,
    },
    {
      icon: <FaXTwitter size={22} strokeWidth={1.5} />,
      label: "SOCIAL",
      value: "@Dhruv_Boghani",
      href: "https://x.com/Dhruv_Boghani",
      link: true,
    },
    {
      icon: <FaWhatsapp size={22} strokeWidth={1.5} />,
      label: "CHAT",
      value: "+91 9408564882",
      href: "https://wa.me/919408564882?text=Hi%20Dhruv,%20let's%20Connect%20to%20Develop",
      link: true,
    },
    {
      icon: <Phone size={22} strokeWidth={1.5} />,
      label: "PHONE",
      value: "+91 9408564882",
      href: "tel:+919408564882",
      link: true,
    },
    {
      icon: <MapPin size={22} strokeWidth={1.5} />,
      label: "LOCATION",
      value: "Gujarat, India - Available remotely",
      href: null,
      link: false,
    },
  ];
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title={
          <>
            Good ideas <br />
            deserve a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] to-[#0891b2] dark:from-[#5eead4] dark:to-[#22d3ee]">
              thoughtful build.
            </span>
          </>
        }
        description="Tell me what you are exploring, what is currently difficult, or simply what kind of system you wish existed."
        watermark="CO"
      />

      <section className="w-full pb-24 md:pb-32 px-4 md:px-12 max-w-[1400px] mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full rounded-[2.5rem] bg-white/50 dark:bg-[#0a1414]/80 border border-black/5 dark:border-white/5 shadow-xl p-8 md:p-12 lg:p-16 flex flex-col justify-between"
          >
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-[#0891b2] dark:text-[#22d3ee] uppercase mb-8 font-bold">
                START A CONVERSATION
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f1f1f] dark:text-[#f5f7f7] leading-[1.1] mb-8">
                Let's make the <br /> first message <br /> simple.
              </h2>
              <p className="text-sm md:text-base text-[#4b5f5f] dark:text-[#9db3b3] leading-relaxed font-medium max-w-md mb-12">
                Email is the best place to begin. Reach out whenever you are
                ready to discuss your next project, architecture review, or AI
                integration.
              </p>
            </div>

            <a
              href="mailto:dhruvboghani624@gmail.com"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#14b8a6] to-[#0891b2] dark:from-[#5eead4] dark:to-[#22d3ee] text-white dark:text-teal-950 font-bold px-6 py-4 rounded-xl shadow-[0_0_30px_rgba(8,145,178,0.3)] dark:shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:scale-[1.02] transition-transform w-fit"
            >
              <Mail size={20} strokeWidth={2.5} />
              <span className="text-sm md:text-base tracking-wide">
                dhruvboghani624@gmail.com
              </span>
            </a>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full rounded-[2.5rem] bg-white/50 dark:bg-[#0a1414]/80 border border-black/5 dark:border-white/5 shadow-xl p-6 md:p-10 lg:p-14 flex flex-col"
          >
            {items.map((item, index, array) => {
              const Component = item.link ? "a" : "div";

              return (
                <Component
                  key={index}
                  {...(item.link
                    ? {
                        href: item.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                  className={`flex items-center justify-between w-full py-6 group
        ${item.link ? "cursor-pointer" : ""}
        ${
          index !== array.length - 1
            ? "border-b border-black/10 dark:border-white/5"
            : ""
        }
      `}
                >
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="text-[#0891b2] dark:text-[#22d3ee] mt-1 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>

                    {/* Label and Value */}
                    <div>
                      <p className="font-mono text-[10px] md:text-xs tracking-widest text-[#4b5f5f] dark:text-[#9db3b3] font-bold uppercase mb-1">
                        {item.label}
                      </p>

                      <p
                        className={`font-bold text-[#0f1f1f] dark:text-[#f5f7f7]
              text-sm md:text-base transition-colors
              ${
                item.link
                  ? "group-hover:text-[#0891b2] dark:group-hover:text-[#22d3ee]"
                  : ""
              }
            `}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  {item.link && (
                    <div className="text-[#4b5f5f] dark:text-[#9db3b3] group-hover:text-[#0891b2] dark:group-hover:text-[#22d3ee] transition-colors">
                      <ArrowUpRight size={20} strokeWidth={2} />
                    </div>
                  )}
                </Component>
              );
            })}
          </motion.div>
        </div>
      </section>

      <Fixdivider />
      <Footer />
    </>
  );
};

export default ContactPage;
