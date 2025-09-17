// /components/escola/OnboardingStep3.tsx
"use client"

import { OnboardingData } from "@/types/onboarding"

type Props = {
  onBack: () => void
  onFinish: () => void
  data: OnboardingData
  updateData: (data: Partial<OnboardingData>) => void
  loading?: boolean
}

export default function OnboardingStep3({ onBack, onFinish, data, updateData, loading }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onFinish()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold mb-2">👩‍🏫 Equipe Inicial</h2>
      <p className="text-sm text-gray-500 mb-6">
        Convide professores e equipe administrativa para começar a usar o sistema.
      </p>

      <div>
        <label className="block text-sm font-medium mb-1">E-mail do Professor</label>
        <input
          type="email"
          value={data.teacherEmail}
          onChange={(e) => updateData({ teacherEmail: e.target.value })}
          placeholder="professor@escola.com"
          className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-moxinexa-teal focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">E-mail da Secretária</label>
        <input
          type="email"
          value={data.staffEmail}
          onChange={(e) => updateData({ staffEmail: e.target.value })}
          placeholder="secretaria@escola.com"
          className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-moxinexa-teal focus:border-transparent"
        />
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-3 rounded-lg border hover:bg-gray-100"
        >
          Voltar
        </button>
        <button
          type="submit"
          disabled={!!loading}
          className={`px-6 py-3 rounded-lg text-white ${loading ? "bg-teal-400 cursor-not-allowed" : "bg-moxinexa-teal hover:bg-teal-600"}`}
        >
          {loading ? "Finalizando…" : "Finalizar"}
        </button>
      </div>
    </form>
  )
}
