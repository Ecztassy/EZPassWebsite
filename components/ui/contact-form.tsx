"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Loader2, Send, AlertCircle } from "lucide-react"
import { sendContactEmail } from "@/app/actions/contact"

export function ContactForm() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    try {
      const result = await sendContactEmail(formState)

      if (result.success) {
        setStatus("success")
        setFormState({ name: "", email: "", message: "" })
      } else {
        throw new Error(result.error || "Falha ao enviar o email")
      }
    } catch (err) {
      setStatus("error")
      setErrorMessage(err instanceof Error ? err.message : "Unexpected error")
    }
  }

  return (
    <div className="p-6 border border-purple-400/20 bg-black/60 rounded-lg">
      {status === "success" ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <CheckCircle className="w-10 h-10 text-purple-400 mx-auto mb-4" />
          <h2 className="text-lg font-bold text-purple-300">Mensagem Enviada!</h2>
          <p className="text-purple-400/70 mt-2">Entraremos em contato brevemente.</p>
          <button
            className="mt-4 border border-purple-400 text-purple-400 px-4 py-2 hover:bg-purple-400/10 transition"
            onClick={() => setStatus("idle")}
          >
            Contactar Novamente
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-sm text-purple-300">Nome</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formState.name}
              onChange={handleChange}
              disabled={status === "submitting"}
              className="w-full mt-1 p-2 bg-black border border-purple-500/30 text-purple-200 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm text-purple-300">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              disabled={status === "submitting"}
              className="w-full mt-1 p-2 bg-black border border-purple-500/30 text-purple-200 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm text-purple-300">Mensagem</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formState.message}
              onChange={handleChange}
              disabled={status === "submitting"}
              className="w-full mt-1 p-2 bg-black border border-purple-500/30 text-purple-200 rounded-md resize-none"
            />
          </div>

          {status === "error" && (
            <div className="flex items-center space-x-2 text-red-400 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full flex justify-center items-center gap-2 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition disabled:opacity-50"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                A Enviar...
              </>
            ) : (
              <>
                Mandar Mensagem
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  )
}
