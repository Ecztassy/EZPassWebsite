"use client";

import { Download, ExternalLink, Github, Key, Lock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThreeJsCanvas from "@/components/three-js-canvas";
import { GridBackground } from "@/components/grid-background";
import { TerminalWindow } from "@/components/terminal-window";
import { ScrollFadeSection } from "@/components/scroll-fade-section";
import { BackToTopButton } from "@/components/back-to-top-button";
import { VideoSection } from "@/components/video-section";
import { ScrollButton } from "@/components/scroll-button";
import {ContactForm} from "@/components/ui/contact-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <GridBackground />
      <BackToTopButton />

      {/* Hero Section with Three.js Canvas */}
      <section className="relative h-screen flex flex-col items-center justify-center px-4">
        <div className="absolute inset-0 z-10">
          <ThreeJsCanvas />
        </div>
        <div className="relative z-20 text-center max-w-3xl mx-auto">
          <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-800 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              EZPass
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
              O gestor de Password Open Source escrito em Rust
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ScrollButton
                scrollToId="download"
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white border-none shadow-[0_0_10px_rgba(168,85,247,0.5)]"
              >
                <Download className="mr-2 h-5 w-5" /> Download EZPass
              </ScrollButton>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-purple-400"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* Terminal Section */}
      <ScrollFadeSection delay={100}>
        <section className="relative py-20 px-4" id="terminal">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold mb-6 text-purple-300">O gestor compromissado.</h2>
                <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-500/30 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-3 text-purple-300 flex items-center">
                    <Shield className="mr-2 h-5 w-5" /> Criptografia
                  </h3>
                  <p className="text-purple-100">
                    Protegido pelo ARGON2 e SHA256, dois algoritmos utilizados por agências governamentais e creditas por especialistas.
                    As suas Passwords estarão seguras com mais de 1 camada de segurança.
                    A Masterkey tem o seu tipo de arquivo próprio para garantir incompatibilidade com programas de quebra de criptografia.
                  </p>
                </div>
                <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-500/30 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-3 text-purple-300 flex items-center">
                    <Lock className="mr-2 h-5 w-5" /> Local
                  </h3>
                  <p className="text-purple-100">
                    O programa nunca enviará os seus dados para servidores externos. As suas passwords são guardadas localmente e encriptadas. Orgulhamo-nos na nossa política Open-Source.
                  </p>
                </div>
                <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-500/30 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-3 text-purple-300 flex items-center">
                    <Key className="mr-2 h-5 w-5" /> Masterkey
                  </h3>
                  <p className="text-purple-100">
                    A sua Masterkey serve como mecanismo de recuperação caso esqueça a sua password. Guarde-a numa pendrive e terá sempre como aceder às suas passwords. Também é possível compartilhá-la entre dispositivos.
                  </p>
                </div>
              </div>
              <div className="relative">
                <TerminalWindow />
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeSection>

      {/* App Info Section */}
      <ScrollFadeSection delay={200}>
        <section className="relative py-20 px-4" id="about">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-purple-300">Ao seu agrado.</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-lg opacity-30 blur-xl"></div>
                <div className="relative bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 h-full">
                  <div className="aspect-4/3 rounded-lg overflow-hidden border-2 border-purple-500/50 mb-6">
                    <img
                      src="/program.PNG"
                      alt="App Screenshot"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    <div className="h-12 bg-purple-800/50 rounded-md flex items-center justify-center">
                      <Lock className="h-6 w-6 text-purple-300" />
                    </div>
                    <div className="h-12 bg-purple-800/50 rounded-md flex items-center justify-center">
                      <Key className="h-6 w-6 text-purple-300" />
                    </div>
                    <div className="h-12 bg-purple-800/50 rounded-md flex items-center justify-center">
                      <Shield className="h-6 w-6 text-purple-300" />
                    </div>
                    <div className="h-12 bg-purple-800/50 rounded-md flex items-center justify-center text-2xl font-bold text-purple-300">
                      #
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-500/30 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-3 text-purple-300">Portátil</h3>
                  <p className="text-purple-100">
                    Leve o APP sempre consigo, com a possibilidade de exportar e importar as suas passwords para qualquer dispositivo. Disponibilizamos versões para Windows, Mac e Linux, como também uma versão Portable.
                  </p>
                </div>
                <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-500/30 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-3 text-purple-300">Preenchimento automático</h3>
                  <p className="text-purple-100">
                    Com a ajuda da extensão do EZPass, pode preencher automaticamente as suas passwords em qualquer site, sem ter de se preocupar com a segurança dos seus dados. Defina os campos uma primeira vez e nós lidamos com o resto.
                  </p>
                </div>
                <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-500/30 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-3 text-purple-300">Otimização</h3>
                  <p className="text-purple-100">
                    O EZPass foi construído com o intuito de ser leve, rápido e seguro. Feito em Rust e com o mínimo de dependências possíveis, o máximo de funcionalidade em menos de 50mb de RAM e 5mb de espaço.
                  </p>
                </div>
              </div>
            </div>

            {/* Video Section */}
            <ScrollFadeSection delay={300}>
              <VideoSection />
            </ScrollFadeSection>
          </div>
        </section>
      </ScrollFadeSection>

      {/* Creator Section */}
      <ScrollFadeSection delay={400}>
        <section className="relative py-20 px-4 bg-gradient-to-b from-black to-purple-900/30" id="creator">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-purple-300">O Criador</h2>
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full opacity-70 blur"></div>
              <img
                src="/diogo.jpg"
                alt="Creator Avatar"
                className="relative w-40 h-40 rounded-full border-2 border-purple-400 object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-purple-200">Diogo Fragoso</h3>
            <p className="text-purple-100 max-w-2xl mx-auto mb-8">
              Estudante de TGPSI com um gosto por programação de baixo nível, sistemas operacionais e cibersegurança.
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://github.com/Ecztassy/EZPass" rel="noopener noreferrer" target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-purple-500 text-purple-300 hover:bg-purple-900/20"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://portfoliodiogof.vercel.app/" rel="noopener noreferrer" target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-purple-500 text-purple-300 hover:bg-purple-900/20"
                >
                  <ExternalLink className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </ScrollFadeSection>

      {/* Download Section - Updated with Uniform Button Sizes */}
      <ScrollFadeSection delay={500}>
        <section className="relative py-20 px-4" id="download">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative inline-block w-full">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-lg opacity-30 blur-xl"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 md:p-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-300">A sua vida digital assegurada.</h2>
                <p className="text-purple-100 mb-8">
                  Faça o download do EZPass e comece agora a proteger as suas passwords com a segurança de uma Criptografia
                  que supercomputadores levariam várias vidas a quebrar.
                </p>

                <div className="flex flex-col gap-4 max-w-md mx-auto">
                  {/* Desktop Apps */}
                  <a href="/downloads/EZPass-0.1.0-x86_64.msi" download="EZPass-0.1.0-x86_64.msi">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white border-none w-full h-14 flex items-center justify-center gap-2"
                    >
                      <Download className="h-5 w-5" />
                      <span>Download para Windows</span>
                    </Button>
                  </a>

                  <a href="/downloads/EZPass.zip" download="EZPass.zip">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white border-none w-full h-14 flex items-center justify-center gap-2"
                    >
                      <Download className="h-5 w-5" />
                      <span>Download para Mac</span>
                    </Button>
                  </a>

                  <a href="/downloads/EZPass.zip" download="EZPass.zip">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white border-none w-full h-14 flex items-center justify-center gap-2"
                    >
                      <Download className="h-5 w-5" />
                      <span>Download para Linux</span>
                    </Button>
                  </a>

                  {/* Browser Extensions */}
                  <a href="/downloads/EZPassextension_chrome.zip" download="EZPassextension_chrome.zip">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white border-none w-full h-14 flex items-center justify-center gap-2"
                    >
                      <Download className="h-5 w-5" />
                      <span>Download da Extensão (Chrome)</span>
                    </Button>
                  </a>

                  <a href="/downloads/EZPass.xpi" download="EZPass.xpi">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white border-none w-full h-14 flex items-center justify-center gap-2"
                    >
                      <Download className="h-5 w-5" />
                      <span>Download da Extensão (Firefox)</span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeSection>

      <div className="mt-12 w-full md:max-w-[80%] mx-auto">
        <ContactForm />
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-800/30">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">
              EZPass
            </h3>
          </div>
          <div className="text-purple-400 text-sm">© {new Date().getFullYear()} Diogo Fragoso.</div>
        </div>
      </footer>
    </main>
  );
}
