import Image from "next/image"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-green-800 font-medium tracking-wider">VOICE</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">Voices from Fermy Users</h2>
          <p className="text-gray-600 leading-relaxed">
            We've received many joyful testimonials from people who have incorporated Fermy into their daily health
            routine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KZxMVixr7qeQLP1cObvOpD5bHHv6o1.png"
              alt="Woman drinking Fermy"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-xl text-gray-900 font-medium italic">
              "I've been drinking it as a morning habit for 3 months. My digestion has improved, and my skin condition
              has gotten better. I like that it's easy to continue because of its natural sweetness and drinkability."
            </blockquote>
            <div>
              <p className="font-bold text-gray-900">Misaki Sato (32)</p>
              <p className="text-gray-600">Office Worker / Using for 3 months</p>
            </div>
          </div>
        </div>

        {/* 追加のレビュー */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              comment: "I drink it after the gym. It makes me feel refreshed and lighter.",
              name: "Kenichi Tanaka",
              role: "Fitness Trainer",
              period: "Using for 6 months",
            },
            {
              comment: "I was concerned about my gut health, but it's improved since I started drinking Fermy.",
              name: "Yuko Yamada",
              role: "Nutritionist",
              period: "Using for 1 year",
            },
            {
              comment: "I drink it as a breakfast replacement. It's convenient to get nutrition easily.",
              name: "Miho Suzuki",
              role: "Freelancer",
              period: "Using for 2 months",
            },
          ].map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"{review.comment}"</p>
              <div>
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-600">
                  {review.role} / {review.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
