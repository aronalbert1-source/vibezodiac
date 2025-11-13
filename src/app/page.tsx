"use client";

import { useState } from "react";
import { Sparkles, Moon, Star, Heart, Zap, ArrowRight, Lock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const signos = [
  { nome: "Áries", emoji: "♈", elemento: "fogo" },
  { nome: "Touro", emoji: "♉", elemento: "terra" },
  { nome: "Gêmeos", emoji: "♊", elemento: "ar" },
  { nome: "Câncer", emoji: "♋", elemento: "água" },
  { nome: "Leão", emoji: "♌", elemento: "fogo" },
  { nome: "Virgem", emoji: "♍", elemento: "terra" },
  { nome: "Libra", emoji: "♎", elemento: "ar" },
  { nome: "Escorpião", emoji: "♏", elemento: "água" },
  { nome: "Sagitário", emoji: "♐", elemento: "fogo" },
  { nome: "Capricórnio", emoji: "♑", elemento: "terra" },
  { nome: "Aquário", emoji: "♒", elemento: "ar" },
  { nome: "Peixes", emoji: "♓", elemento: "água" },
];

const humores = [
  { nome: "Energizado", icon: Zap, cor: "from-yellow-400 to-orange-500" },
  { nome: "Tranquilo", icon: Moon, cor: "from-blue-400 to-indigo-500" },
  { nome: "Apaixonado", icon: Heart, cor: "from-pink-400 to-rose-500" },
  { nome: "Reflexivo", icon: Star, cor: "from-purple-400 to-violet-500" },
];

const personalidades = [
  { nome: "Aventureiro", desc: "Busca novos desafios" },
  { nome: "Sonhador", desc: "Vive de ideais e imaginação" },
  { nome: "Realista", desc: "Pés no chão e prático" },
  { nome: "Sensível", desc: "Conectado com emoções" },
];

const frasesMisticas = {
  fogo: [
    "O universo conspira a favor da sua chama interior",
    "Sua energia ilumina os caminhos mais sombrios",
    "As estrelas dançam ao ritmo da sua paixão",
  ],
  terra: [
    "Suas raízes são profundas como as montanhas ancestrais",
    "A terra sussurra segredos de prosperidade para você",
    "Sua estabilidade é a força que move mundos",
  ],
  ar: [
    "Os ventos cósmicos carregam suas ideias para o infinito",
    "Sua mente voa livre como as constelações",
    "O ar que você respira é pura inspiração divina",
  ],
  água: [
    "Suas emoções são oceanos de sabedoria profunda",
    "A lua reflete seus sentimentos mais puros",
    "Você flui como rios que encontram seu destino",
  ],
};

export default function FraseDoSigno() {
  const [etapa, setEtapa] = useState(0);
  const [signoSelecionado, setSignoSelecionado] = useState<string>("");
  const [humorSelecionado, setHumorSelecionado] = useState<string>("");
  const [personalidadeSelecionada, setPersonalidadeSelecionada] = useState<string>("");
  const [mostrarPaywall, setMostrarPaywall] = useState(false);
  const [pagamentoConcluido, setPagamentoConcluido] = useState(false);

  const gerarFrasePersonalizada = () => {
    const signo = signos.find((s) => s.nome === signoSelecionado);
    if (!signo) return "";

    const frasesDoElemento = frasesMisticas[signo.elemento as keyof typeof frasesMisticas];
    const fraseBase = frasesDoElemento[Math.floor(Math.random() * frasesDoElemento.length)];

    const complementos = {
      Energizado: "Sua energia magnética atrai abundância.",
      Tranquilo: "A paz interior é seu maior tesouro.",
      Apaixonado: "O amor é a força que guia seus passos.",
      Reflexivo: "Sua sabedoria ilumina os que estão ao seu redor.",
    };

    const finalPersonalidade = {
      Aventureiro: "Novos horizontes aguardam sua coragem.",
      Sonhador: "Seus sonhos são profecias do futuro.",
      Realista: "Sua praticidade constrói impérios.",
      Sensível: "Sua empatia cura almas.",
    };

    return `${fraseBase} ${complementos[humorSelecionado as keyof typeof complementos]} ${finalPersonalidade[personalidadeSelecionada as keyof typeof finalPersonalidade]}`;
  };

  const avancar = () => {
    if (etapa === 3) {
      setMostrarPaywall(true);
    } else {
      setEtapa(etapa + 1);
    }
  };

  const simularPagamento = () => {
    // Simulação de pagamento - aqui você integraria com Stripe, Mercado Pago, etc.
    setTimeout(() => {
      setPagamentoConcluido(true);
      setMostrarPaywall(false);
    }, 1500);
  };

  if (pagamentoConcluido) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full bg-white/10 backdrop-blur-lg border-white/20 p-8 md:p-12 text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-pink-500 flex items-center justify-center animate-pulse">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sua Frase Mística Revelada
          </h1>
          
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-6 mb-6 border border-white/30">
            <p className="text-xl md:text-2xl text-white leading-relaxed font-light italic">
              "{gerarFrasePersonalizada()}"
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 text-white/80 mb-6">
            <div className="flex flex-col items-center">
              <span className="text-3xl mb-1">
                {signos.find((s) => s.nome === signoSelecionado)?.emoji}
              </span>
              <span className="text-sm">{signoSelecionado}</span>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-white/60">Humor</span>
              <span className="text-sm font-medium">{humorSelecionado}</span>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-white/60">Essência</span>
              <span className="text-sm font-medium">{personalidadeSelecionada}</span>
            </div>
          </div>

          <Button
            onClick={() => {
              setEtapa(0);
              setSignoSelecionado("");
              setHumorSelecionado("");
              setPersonalidadeSelecionada("");
              setPagamentoConcluido(false);
            }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
          >
            Fazer Nova Consulta
          </Button>
        </Card>
      </div>
    );
  }

  if (mostrarPaywall) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 flex items-center justify-center p-4">
        <Card className="max-w-md w-full bg-white/10 backdrop-blur-lg border-white/20 p-8 text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-pink-500 flex items-center justify-center">
              <Lock className="w-8 h-8 text-white" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Desbloqueie Sua Frase Mística
          </h2>

          <p className="text-white/80 mb-6">
            Sua frase personalizada está pronta! Desbloqueie agora por apenas:
          </p>

          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-6 mb-6 border border-white/30">
            <div className="text-5xl font-bold text-white mb-2">R$ 2,00</div>
            <div className="text-white/60 text-sm">Pagamento único</div>
          </div>

          <div className="space-y-3 mb-6 text-left">
            <div className="flex items-center gap-3 text-white/90">
              <Check className="w-5 h-5 text-green-400" />
              <span>Frase 100% personalizada</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <Check className="w-5 h-5 text-green-400" />
              <span>Baseada em astrologia mística</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <Check className="w-5 h-5 text-green-400" />
              <span>Acesso imediato ao resultado</span>
            </div>
          </div>

          <Button
            onClick={simularPagamento}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-lg py-6 mb-3"
          >
            Desbloquear Agora
          </Button>

          <Button
            onClick={() => setMostrarPaywall(false)}
            variant="ghost"
            className="w-full text-white/60 hover:text-white hover:bg-white/10"
          >
            Voltar
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-pink-500 flex items-center justify-center animate-pulse">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Frase do Signo
          </h1>
          <p className="text-white/70 text-lg">
            Descubra sua mensagem mística personalizada
          </p>
        </div>

        {/* Progress */}
        <div className="flex justify-center gap-2 mb-8">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i <= etapa ? "w-12 bg-gradient-to-r from-purple-400 to-pink-400" : "w-8 bg-white/20"
              }`}
            />
          ))}
        </div>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6 md:p-8">
          {/* Etapa 0: Boas-vindas */}
          {etapa === 0 && (
            <div className="text-center">
              <Moon className="w-16 h-16 text-purple-300 mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Bem-vindo ao Universo Místico
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Responda algumas perguntas e receba uma frase única sobre você, 
                conectada com as energias do cosmos.
              </p>
              <Button
                onClick={avancar}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg px-8 py-6"
              >
                Começar Jornada
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          )}

          {/* Etapa 1: Signo */}
          {etapa === 1 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                Qual é o seu signo?
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
                {signos.map((signo) => (
                  <button
                    key={signo.nome}
                    onClick={() => setSignoSelecionado(signo.nome)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      signoSelecionado === signo.nome
                        ? "border-purple-400 bg-purple-500/30 scale-105"
                        : "border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40"
                    }`}
                  >
                    <div className="text-3xl mb-2">{signo.emoji}</div>
                    <div className="text-white font-medium text-sm">{signo.nome}</div>
                  </button>
                ))}
              </div>
              <Button
                onClick={avancar}
                disabled={!signoSelecionado}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continuar
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          )}

          {/* Etapa 2: Humor */}
          {etapa === 2 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                Como você está se sentindo hoje?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {humores.map((humor) => {
                  const Icon = humor.icon;
                  return (
                    <button
                      key={humor.nome}
                      onClick={() => setHumorSelecionado(humor.nome)}
                      className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                        humorSelecionado === humor.nome
                          ? "border-purple-400 bg-purple-500/30 scale-105"
                          : "border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${humor.cor} flex items-center justify-center mx-auto mb-3`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-white font-medium text-lg">{humor.nome}</div>
                    </button>
                  );
                })}
              </div>
              <Button
                onClick={avancar}
                disabled={!humorSelecionado}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continuar
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          )}

          {/* Etapa 3: Personalidade */}
          {etapa === 3 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                Qual palavra te define melhor?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {personalidades.map((personalidade) => (
                  <button
                    key={personalidade.nome}
                    onClick={() => setPersonalidadeSelecionada(personalidade.nome)}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                      personalidadeSelecionada === personalidade.nome
                        ? "border-purple-400 bg-purple-500/30 scale-105"
                        : "border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40"
                    }`}
                  >
                    <div className="text-white font-bold text-xl mb-2">{personalidade.nome}</div>
                    <div className="text-white/70 text-sm">{personalidade.desc}</div>
                  </button>
                ))}
              </div>
              <Button
                onClick={avancar}
                disabled={!personalidadeSelecionada}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Ver Minha Frase
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
            </div>
          )}
        </Card>

        {/* Footer */}
        <div className="text-center mt-6 text-white/50 text-sm">
          Feito com magia e tecnologia ✨
        </div>
      </div>
    </div>
  );
}
