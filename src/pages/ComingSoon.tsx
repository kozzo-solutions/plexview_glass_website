"use client"

import type React from "react"
import { useTranslation } from "react-i18next"

const YELLOW_GRADIENT = "bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200"
const YELLOW_SHADOW = "shadow-yellow-300/30"

const ComingSoon: React.FC = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center p-4 relative overflow-hidden">
      <div className="relative z-10 max-w-2xl w-full text-center">
        <h1
          className={`text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-100 bg-clip-text text-transparent leading-tight drop-shadow-lg`}
          dangerouslySetInnerHTML={{ __html: t("comingSoon.heading") }}
        />
        <p className="text-xl text-yellow-100 mb-12 max-w-lg mx-auto leading-relaxed">
          {t("comingSoon.description")}
        </p>
        <div className="text-sm text-gray-500">
          &copy; {currentYear} PlexView. {t("footer.copyright")}
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-200/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default ComingSoon