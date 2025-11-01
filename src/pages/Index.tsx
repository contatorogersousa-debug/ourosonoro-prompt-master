import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const images = [
    {
      src: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029820006/KLjiiZFoekJSOhHb.jpg",
      alt: "Cena hiper-realista estilo Shibuya à noite, tons frios e reflexos dourados na chuva"
    },
    {
      src: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029820006/sbkwwithCqmPEldh.jpg",
      alt: "Mulher com capa metálica e guarda-chuva vermelho sob néons dourados"
    },
    {
      src: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029820006/ROGRouMOcKVkuXqS.jpg",
      alt: "Reflexo de luzes douradas no chão molhado, ambiente noturno cinematográfico"
    }
  ];

  const testimonials = [
    {
      text: "Comprei os prompts do OuroSonoro e em menos de 1 mês recuperei o investimento. Agora é lucro puro.",
      author: "Lucas M., Belo Horizonte"
    },
    {
      text: "Os prompts realmente geram resultado. Além de relaxar com o ASMR, consegui vender mais do que esperava.",
      author: "Renata S., São Paulo"
    },
    {
      text: "Nunca pensei que algo tão simples pudesse me render tanto. OuroSonoro é o nome certo.",
      author: "Felipe A., Curitiba"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          OuroSonoro — Prompts Lucrativos
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
          Os 37 Prompts de IA que Geraram Mais de R$ 50 Mil em 90 Dias
        </p>
        <Button
          size="lg"
          className="text-lg px-8 py-6 animate-pulse-gold"
          asChild
        >
          <a href="https://payment.ticto.app/OFA02C78D" target="_blank" rel="noopener noreferrer">
            Quero Me Tornar Lucrativo
          </a>
        </Button>
      </section>

      {/* Sales Letter Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-12 space-y-6 text-lg leading-relaxed">
            <p>
              Se você já tentou criar conteúdo com IA, mas nunca conseguiu transformar isso em dinheiro de verdade, esta pode ser a página mais importante que você vai ler hoje.
            </p>

            <p>
              Depois de meses testando centenas de ideias, encontrei os <strong>37 prompts exatos</strong> que geraram mais de <strong>R$ 50.000,00 em 90 dias</strong> — e agora estou liberando esse mesmo conjunto completo.
            </p>

            <p>
              Esses prompts foram desenhados para <strong>automatizar postagens, gerar textos virais, criar produtos digitais e acelerar lucros</strong> usando apenas ChatGPT e outras IAs populares. Tudo isso enquanto você multiplica seus resultados e escala seu negócio no piloto automático.
            </p>

            <p>
              O pacote <strong>OuroSonoro — Prompts Lucrativos</strong> é o atalho que elimina tentativas e erros.
              <br />
              Você receberá instruções detalhadas, templates prontos e exemplos reais de uso.
              <br />
              É conteúdo direto, pronto para aplicar e lucrar.
            </p>

            <p>
              Você pode continuar tentando sozinho, ou pode pegar hoje mesmo os mesmos comandos que já provaram funcionar — com resultados reais e rastreáveis.
            </p>

            <p className="text-center font-bold text-xl pt-4">
              Decida agora investir no seu resultado.
            </p>

            <div className="text-center pt-6">
              <Button
                size="lg"
                className="text-lg px-8 py-6 animate-pulse-gold"
                asChild
              >
                <a href="https://payment.ticto.app/OFA02C78D" target="_blank" rel="noopener noreferrer">
                  Quero Me Tornar Lucrativo
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Imersão Visual</h2>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Cada imagem foi criada no estilo cinematográfico do OuroSonoro — um universo de luxo, foco e inspiração noturna, com contrastes dourados, reflexos de néon e detalhes realistas que evocam calma e poder criativo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border-2 border-primary transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Depoimentos Reais</h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-primary">
              <CardContent className="p-8">
                <p className="italic text-lg mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-bold text-primary text-right">
                  — {testimonial.author}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="comprar" className="container mx-auto px-4 py-20 text-center">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-12">
            <p className="text-2xl md:text-3xl font-bold mb-8 leading-tight">
              Adquira Agora e Transforme Seus Prompts em Lucro Real
            </p>
            <Button
              size="lg"
              className="text-xl px-12 py-8 animate-pulse-gold"
              asChild
            >
              <a href="https://payment.ticto.app/OFA02C78D" target="_blank" rel="noopener noreferrer">
                Adquirir Agora
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer Spacing */}
      <div className="pb-12" />
    </div>
  );
};

export default Index;
