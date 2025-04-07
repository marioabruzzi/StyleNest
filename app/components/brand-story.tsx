import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function BrandStory() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="text-green-800 font-medium tracking-wider">ABOUT FERMY</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Where Tradition Meets Innovation, a New Fermentation Culture is Born.
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The traditional fermented drink 'Miki' has been passed down through generations in Amami Oshima. By
            combining this ancient wisdom with modern technology, we wanted to bring health to more people. That's how
            Fermy was born.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uvTlVqL6zdl3rxG3ValUpgRBIBKT0z.png"
              alt="Rich Nature of Amami Oshima"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Traditional Fermentation Culture Nurtured by Amami Oshima's Rich Nature
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Amami Oshima is surrounded by beautiful nature as shown in the photo. In this land blessed with a warm
              climate and rich environment, the fermented drink 'Miki' has supported the health of islanders since
              ancient times, crystallizing the blessings of the land and the wisdom of ancestors.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Fermy focuses on this traditional fermentation technology. We have evolved the potential of 'Miki', whose
              health benefits are being scientifically proven through the latest research, to suit modern lifestyles.
            </p>
            <Button variant="outline" className="mt-4">
              Fermy's Development Story
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">🌱</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900">Harmony with Nature</h4>
            <p className="text-gray-600">
              Environmentally conscious sourcing and manufacturing processes in Amami Oshima
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">🔬</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900">Scientific Approach</h4>
            <p className="text-gray-600">Fusion of traditional fermentation techniques and latest research findings</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">💫</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900">Legacy for the Future</h4>
            <p className="text-gray-600">
              Our mission to pass on the value of traditional culture to the next generation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
