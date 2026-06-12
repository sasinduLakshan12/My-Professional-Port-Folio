import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Send } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Contact = () => {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResult("Sending...");

        const formData = new FormData(e.target);
        formData.append("access_key", "c15a357e-0771-4303-a506-ab360ee75732");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Thank you! Your message has been sent 🚀");
                e.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.log("Error", error);
            setResult("An error occurred while sending.");
        }
        
        setIsSubmitting(false);
        // Clear success message after 5 seconds
        setTimeout(() => setResult(""), 5000);
    }

    return (
        <section
            id="contact"
            className="
        relative py-28 overflow-hidden
        bg-gradient-to-b from-gray-100 via-white to-gray-100
        dark:from-gray-950 dark:via-gray-900 dark:to-gray-950
      "
        >
            {/* BACKGROUND GLOW */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full" />

            <div className="relative max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="
            bg-white/70 dark:bg-gray-900/70
            backdrop-blur-xl
            rounded-3xl
            border border-gray-200/50 dark:border-gray-800
            shadow-2xl
            p-6 md:p-10
          "
                >
                    {/* HEADER */}
                    <div className="text-center mb-14">
                        <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
                            Contact
                        </p>
                        <h2 className="text-4xl font-extrabold mt-2">
                            Get In <span className="text-blue-600">Touch</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-xl mx-auto">
                            Let’s connect and build something meaningful together.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">

                        {/* LEFT INFO */}
                        <div className="space-y-6">
                            {/* EMAIL */}
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                href="mailto:sasindu125lakshan@gmail.com"
                                className="
                  flex items-center gap-4
                  bg-gray-100 dark:bg-gray-800
                  p-4 md:p-5 rounded-2xl
                  hover:shadow-lg transition
                  overflow-hidden
                "
                            >
                                <div className="p-3 md:p-4 bg-blue-600 text-white rounded-xl flex-shrink-0">
                                    <Mail />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="font-semibold text-sm md:text-base">Email</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm break-all">
                                        sasindu125lakshan@gmail.com
                                    </p>
                                </div>
                            </motion.a>

                            {/* GITHUB */}
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                href="https://github.com/Sasindu-Lakshn"
                                target="_blank"
                                className="
                  flex items-center gap-4
                  bg-gray-100 dark:bg-gray-800
                  p-4 md:p-5 rounded-2xl
                  hover:shadow-lg transition
                  overflow-hidden
                "
                            >
                                <div className="p-3 md:p-4 bg-gray-900 text-white rounded-xl flex-shrink-0">
                                    <FaGithub size={22} />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="font-semibold text-sm md:text-base">GitHub</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm break-all">
                                        Sasindu-Lakshn
                                    </p>
                                </div>
                            </motion.a>

                            {/* LINKEDIN */}
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                href="https://www.linkedin.com/in/sasindu-lakshan-5b404933a/"
                                target="_blank"
                                className="
                  flex items-center gap-4
                  bg-gray-100 dark:bg-gray-800
                  p-4 md:p-5 rounded-2xl
                  hover:shadow-lg transition
                  overflow-hidden
                "
                            >
                                <div className="p-3 md:p-4 bg-blue-700 text-white rounded-xl flex-shrink-0">
                                    <FaLinkedin size={22} />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="font-semibold text-sm md:text-base">LinkedIn</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm break-all">
                                        Sasindu Lakshan
                                    </p>
                                </div>
                            </motion.a>
                        </div>

                        {/* FORM */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="
                  w-full px-4 py-3 rounded-xl
                  bg-gray-100 dark:bg-gray-800
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                "
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="
                  w-full px-4 py-3 rounded-xl
                  bg-gray-100 dark:bg-gray-800
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                "
                                required
                            />

                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                className="
                  w-full px-4 py-3 rounded-xl
                  bg-gray-100 dark:bg-gray-800
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                "
                                required
                            />

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`
                  w-full inline-flex items-center justify-center gap-2
                  ${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:scale-[1.02]'}
                  text-white font-medium
                  py-3 rounded-xl
                  shadow-lg shadow-blue-600/30
                  transition
                `}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"} <Send size={18} />
                            </button>
                            
                            {result && (
                                <div className="text-center text-sm font-medium text-green-600 dark:text-green-400 mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                                    {result}
                                </div>
                            )}
                        </form>

                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
