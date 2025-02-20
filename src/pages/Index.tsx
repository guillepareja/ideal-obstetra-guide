
import { Heart, CheckCircle2, HelpCircle, Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16 text-center">
        <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
            Encuentra al Obstetra Ideal para Ti
          </h1>
          <p className="text-xl text-brand-blue/80 mb-8">
            Tu guía para una experiencia segura y respetada durante el embarazo
          </p>
          <div className="flex items-center justify-center gap-4">
            <Heart className="text-brand-red w-8 h-8" />
          </div>
        </motion.div>
      </section>

      {/* Why It's Important Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-blue">¿Por qué es importante elegir bien?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow border-brand-gray/20">
              <p className="text-brand-blue/80">No todos los obstetras son iguales: necesitas un profesional con el que te sientas cómoda, segura y respetada.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow border-brand-gray/20">
              <p className="text-brand-blue/80">La atención médica personalizada y de confianza es clave para un embarazo saludable.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow border-brand-gray/20">
              <p className="text-brand-blue/80">Tu obstetra será tu principal guía en cada consulta, ecografía y decisión sobre el parto.</p>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Key Factors Section */}
      <section className="container mx-auto px-4 py-16 bg-brand-gray/10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-blue">¿Cómo saber si un obstetra es el indicado para ti?</h2>
          <div className="space-y-4">
            {[
              "Experiencia y formación en embarazos de bajo y alto riesgo.",
              "Afinidad con tu estilo de comunicación y necesidades personales.",
              "Disponibilidad y accesibilidad para responder dudas y emergencias.",
              "Filosofía de atención alineada con tus deseos sobre el parto y la lactancia.",
              "Respeto por tus derechos como paciente y por el concepto de parto respetado."
            ].map((factor, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle2 className="text-brand-red w-6 h-6 flex-shrink-0 mt-1" />
                <p className="text-brand-blue/80">{factor}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Download Guide Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-brand-gray/10 rounded-2xl p-8 md:p-12">
            <HelpCircle className="w-12 h-12 mx-auto mb-6 text-brand-blue" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brand-blue">¿No sabes por dónde empezar?</h2>
            <p className="text-lg mb-8 text-brand-blue/80">
              Descarga nuestra guía gratuita con todo lo que necesitas saber para elegir el obstetra ideal.
            </p>
            <Button
              size="lg"
              className="bg-brand-red hover:bg-brand-red/90 text-white"
            >
              <Download className="mr-2 h-5 w-5" /> Descargar Guía Gratuita
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Important Questions Section */}
      <section className="container mx-auto px-4 py-16 bg-brand-gray/10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-blue">Preguntas que deberías hacer en tu primera consulta</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "¿Estará presente en el parto o hay otro profesional en su equipo?",
              "¿Cuál es su postura sobre la inducción del parto o el uso de anestesia?",
              "¿Cómo maneja las emergencias y cuál es su disponibilidad fuera de horario?",
              "¿Con qué clínica u hospital trabaja?",
              "¿Qué opina sobre el parto natural vs. cesárea?"
            ].map((question, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-brand-gray/20">
                <div className="flex items-start gap-3">
                  <ArrowRight className="text-brand-red w-6 h-6 flex-shrink-0 mt-1" />
                  <p className="text-brand-blue/80">{question}</p>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-brand-gray/10 to-brand-gray/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-brand-blue">Tu bienestar y el de tu bebé son lo más importante</h2>
            <p className="text-lg mb-8 text-brand-blue/80">
              No dejes esta decisión al azar. Tómate el tiempo de investigar, hacer preguntas y elegir con confianza.
            </p>
            <Button
              size="lg"
              className="bg-brand-red hover:bg-brand-red/90 text-white"
            >
              <Download className="mr-2 h-5 w-5" /> Descarga ahora la guía completa
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
