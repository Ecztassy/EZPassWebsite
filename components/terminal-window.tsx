"use client"

import { useEffect, useRef, useState } from "react"

export function TerminalWindow() {
  const [text, setText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const terminalRef = useRef<HTMLDivElement>(null)

  const securityMessages = [
    "Tentativa de Iniciar o EZPass...",
    "Inicialização bem-sucedida...",
    "Verificando credenciais de segurança...",
    "Nenhuma credencial encontrada...",
    "Criação de nova credencial...",
    "A executar hashing...",
    "A executar encriptação...",
    "Credencial criada com sucesso...",
    "Sincronização com a extensão...",
    "Sincronização bem-sucedida...",
    "A Preencher credenciais...",
    "Credenciais preenchidas com sucesso...",
    "A Iniciar sessão...",
    "Sessão iniciada com sucesso...",
    "A Criar nova credencial...",
    "Credencial criada com sucesso...",
    "A exportar credenciais...",
    "A importar credenciais...",
    "Funcionalidade 100%...",	
    "SEJA BEM-VINDO AO EZPASS",
  ]

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    // Typing effect
    let currentText = ""
    let messageIndex = 0
    let charIndex = 0

    const typeInterval = setInterval(() => {
      if (messageIndex >= securityMessages.length) {
        clearInterval(typeInterval)
        return
      }

      const currentMessage = securityMessages[messageIndex]

      if (charIndex < currentMessage.length) {
        currentText += currentMessage[charIndex]
        setText(currentText)
        charIndex++
      } else {
        currentText += "\n"
        setText(currentText)
        messageIndex++
        charIndex = 0

        // Auto-scroll to bottom
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight
        }
      }
    }, 50)

    return () => {
      clearInterval(cursorInterval)
      clearInterval(typeInterval)
    }
  }, [])

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-lg opacity-30 blur-xl"></div>
      <div className="relative bg-black border border-purple-500/50 rounded-lg overflow-hidden">
        {/* Terminal header */}
        <div className="bg-purple-900/50 px-4 py-2 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-center flex-1 text-sm font-mono text-purple-200">Terminal</div>
        </div>

        {/* Terminal content */}
        <div
          ref={terminalRef}
          className="bg-black/80 p-4 h-80 overflow-y-auto font-mono text-sm text-green-400 whitespace-pre-wrap"
        >
          {text}
          {cursorVisible && <span className="bg-green-400 text-transparent">█</span>}
        </div>

        {/* Terminal input */}
        <div className="bg-black/90 border-t border-purple-500/30 p-2 flex items-center">
          <span className="text-purple-500 mr-2">$</span>
          <div className="flex-1 bg-transparent text-green-400 font-mono text-sm">
            Acompanhado pelo EZPass
          </div>
        </div>
      </div>
    </div>
  )
}

