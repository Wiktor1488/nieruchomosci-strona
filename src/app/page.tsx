"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Home,
  Search,
  Key,
  Award,
  CheckCircle,
  Menu,
  ExternalLink,
  TrendingUp,
  Users,
} from "lucide-react";

export default function RealEstateWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const stats = [
    { number: "8+", label: "Lat doświadczenia", icon: Award },
    { number: "200+", label: "Zadowolonych klientów", icon: Users },
    { number: "45", label: "Średnio dni do sprzedaży", icon: TrendingUp },
    { number: "98%", label: "Zadowolonych klientów", icon: Star },
  ];

  const services = [
    {
      title: "Sprzedaż Nieruchomości",
      icon: Home,
      color: "from-slate-50 to-slate-100",
      iconBg: "bg-slate-700",
      features: [
        "Bezpłatna wycena",
        "Profesjonalna fotografia",
        "Marketing w 15+ portalach",
        "Prowizja tylko po sprzedaży",
      ],
      highlight: "Średni czas sprzedaży: 45 dni (vs 90 dni rynek)",
    },
    {
      title: "Kupno Nieruchomości",
      icon: Search,
      color: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-700",
      features: [
        "Analiza potrzeb i budżetu",
        "Dostęp do ofert spoza portali",
        "Negocjacje w Twoim imieniu",
        "Pomoc z kredytem hipotecznym",
      ],
      highlight: "Oszczędność: Średnio 15-20k zł na negocjacjach",
    },
    {
      title: "Wynajem i Zarządzanie",
      icon: Key,
      color: "from-emerald-50 to-emerald-100",
      iconBg: "bg-emerald-700",
      features: [
        "Selekcja najemców",
        "Przygotowanie umów",
        "Zarządzanie najmem",
        "Obsługa reklamacji",
      ],
      highlight: "Rentowność: 5-8% rocznie przy pełnej obsłudze",
    },
  ];

  const testimonials = [
    {
      text: "Pan Sylwester sprzedał nasze mieszkanie w rekordowym czasie za cenę wyższą niż oczekiwaliśmy. Profesjonalizm na najwyższym poziomie!",
      author: "Małgorzata i Piotr W.",
      location: "Kielce, Czarnów",
      rating: 5,
    },
    {
      text: "Dzięki panu Sylwesterowi znaleźliśmy dom marzeń. Załatwił wszystko od A do Z, negocjacje, kredyt, formalności. Polecamy!",
      author: "Rodzina Nowak",
      location: "Kielce, Barwinek",
      rating: 5,
    },
    {
      text: "Bardzo profesjonalne podejście do klienta. Pan Sylwester jest zawsze dostępny i szybko odpowiada. Mieszkanie wynajęte w tydzień!",
      author: "Anna K.",
      location: "Właścicielka, Kielce",
      rating: 5,
    },
  ];

  const achievements = [
    {
      title: "Licencja Pośrednika Nieruchomości",
      description: "PFRN nr 26546 - oficjalnie licencjonowany pośrednik",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      year: "2016",
      authority: "Polska Federacja Rynku Nieruchomości",
    },
    {
      title: "Pośrednik Roku 2023",
      description: "Wyróżnienie za najlepsze wyniki sprzedaży w Kielcach",
      image:
        "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop",
      year: "2023",
      authority: "Portal Nieruchomości.pl",
    },
    {
      title: "Certyfikat Wyceny Nieruchomości",
      description:
        "Specjalizacja w profesjonalnej wycenie wszystkich typów nieruchomości",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop",
      year: "2022",
      authority: "Polska Izba Rzeczoznawców Majątkowych",
    },
    {
      title: "Top Agent 2022",
      description:
        "Miejsce w TOP 10 najlepszych agentów w województwie świętokrzyskim",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      year: "2022",
      authority: "RynekPierwotny.pl",
    },
    {
      title: "Certyfikat Zarządzania Najmem",
      description:
        "Uprawnienia do profesjonalnego zarządzania nieruchomościami na wynajem",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
      year: "2021",
      authority: "Stowarzyszenie Zarządców Nieruchomości",
    },
    {
      title: "Wyróżnienie za Etykę w Biznesie",
      description: "Nagroda za uczciwe i transparentne prowadzenie transakcji",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
      year: "2021",
      authority: "Izba Gospodarcza Kielce",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg"
            : "bg-white/95 backdrop-blur-sm shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-slate-800">
                Sylwester Pawlik
              </span>
              <span className="ml-2 text-slate-600 font-medium">
                Nieruchomości
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-slate-700 hover:text-blue-700 font-medium transition-colors"
              >
                Start
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-700 hover:text-blue-700 font-medium transition-colors"
              >
                O Mnie
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-slate-700 hover:text-blue-700 font-medium transition-colors"
              >
                Usługi
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="text-slate-700 hover:text-blue-700 font-medium transition-colors"
              >
                Opinie
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-700 hover:text-blue-700 font-medium transition-colors"
              >
                Kontakt
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-700 hover:text-blue-700"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-slate-700 hover:text-blue-700 hover:bg-slate-50 w-full text-left font-medium rounded-md"
              >
                Start
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-slate-700 hover:text-blue-700 hover:bg-slate-50 w-full text-left font-medium rounded-md"
              >
                O Mnie
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block px-3 py-2 text-slate-700 hover:text-blue-700 hover:bg-slate-50 w-full text-left font-medium rounded-md"
              >
                Usługi
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="block px-3 py-2 text-slate-700 hover:text-blue-700 hover:bg-slate-50 w-full text-left font-medium rounded-md"
              >
                Opinie
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-slate-700 hover:text-blue-700 hover:bg-slate-50 w-full text-left font-medium rounded-md"
              >
                Kontakt
              </button>
            </div>
          </div>
        )}
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 relative"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Twój lokalny ekspert od nieruchomości w{" "}
                <span className="text-blue-400">Kielcach</span>
              </h1>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-slate-200 leading-relaxed">
                Ponad 8 lat doświadczenia • 200+ zadowolonych klientów • Średni
                czas sprzedaży: 45 dni
              </p>
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Umów bezpłatną konsultację
                </button>
                <div className="flex items-center space-x-4 text-white bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-lg">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0" />
                  <span className="text-base sm:text-lg font-semibold">
                    +48 786 221 221
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 bg-white rounded-full shadow-2xl overflow-hidden floating">
                  {!imageError ? (
                    <Image
                      src="zdjecie-profilowe.jpg"
                      alt="Sylwester Pawlik - Pośrednik nieruchomości"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                      onError={() => setImageError(true)}
                      priority
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-800 to-blue-800 flex items-center justify-center">
                      <span className="text-white text-4xl sm:text-6xl font-bold">
                        SP
                      </span>
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-blue-600 p-3 sm:p-4 rounded-full shadow-lg">
                  <Home className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 group-hover:text-blue-700" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-slate-600 font-medium px-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-slate-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
                Poznaj mnie bliżej
              </h2>
              <div className="space-y-4 sm:space-y-6 text-slate-700">
                <p className="text-base sm:text-lg leading-relaxed">
                  Nazywam się Sylwester Pawlik, jestem licencjonowanym
                  pośrednikiem nieruchomości z ponad 8-letnim doświadczeniem na
                  rynku świętokrzyskim. Specjalizuję się w sprzedaży, kupnie i
                  wynajmie nieruchomości w Kielcach i okolicach.
                </p>
                <p className="text-base sm:text-base leading-relaxed">
                  Moja pasja to pomaganie ludziom w znalezieniu idealnego domu
                  lub w sprzedaży nieruchomości za najlepszą cenę. Każdego
                  klienta traktuję indywidualnie, dostosowując strategię do jego
                  unikalnych potrzeb.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
                  {[
                    { number: "300+", label: "Transakcji sprzedaży" },
                    { number: "200+", label: "Transakcji kupna" },
                    { number: "8+", label: "Lat doświadczenia" },
                    { number: "500+", label: "Zadowolonych klientów" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white p-3 sm:p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-slate-200"
                    >
                      <div className="text-xl sm:text-2xl font-bold text-slate-800">
                        {item.number}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600 font-medium leading-tight">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-slate-200">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-slate-900">
                  Moje Certyfikaty
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    "Licencja pośrednika nieruchomości nr 26546",
                    "Członek Polskiej Federacji Rynku Nieruchomości",
                    "Certyfikat zarządzania nieruchomościami",
                    "Szkolenie z wyceny nieruchomości",
                  ].map((cert, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        {cert}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-800 text-white p-4 sm:p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  Moje motto
                </h3>
                <p className="text-sm sm:text-base italic leading-relaxed">
                  &ldquo;Każda nieruchomość ma swojego idealnego właściciela.
                  Moją rolą jest połączyć te dwie strony w sposób uczciwy,
                  profesjonalny i opłacalny dla wszystkich.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              Moje Usługi
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              Kompleksowa obsługa nieruchomości od A do Z. Każda usługa
              dostosowana do Twoich indywidualnych potrzeb.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${service.color} p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200`}
              >
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 ${service.iconBg} rounded-lg flex items-center justify-center mb-4 sm:mb-6`}
                >
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2 text-slate-700 mb-4 sm:mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-xs sm:text-sm text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                  <strong>{service.highlight}</strong>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 text-center text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Gotowy na współpracę?
            </h3>
            <p className="text-lg sm:text-xl mb-4 sm:mb-6 text-slate-200">
              Umów się na bezpłatną konsultację i zobacz, jak mogę Ci pomóc
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Skontaktuj się już dziś
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="bg-slate-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              Co mówią o mnie klienci
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 sm:w-6 sm:h-6 fill-current"
                  />
                ))}
              </div>
              <span className="text-sm sm:text-base text-slate-600 ml-2 font-medium">
                4.9/5 na podstawie 47 opinii Google
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-slate-200"
              >
                <div className="flex text-amber-400 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-slate-700 mb-3 sm:mb-4 italic leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-800">
                    {testimonial.author}
                  </strong>{" "}
                  - {testimonial.location}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button className="inline-flex items-center text-blue-700 hover:text-blue-800 font-semibold text-sm sm:text-base">
              Zobacz wszystkie opinie w Google
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              Moje Sukcesy i Osiągnięcia
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Certyfikaty, licencje i wyróżnienia potwierdzające mój
              profesjonalizm
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 group"
              >
                <div className="relative mb-4 sm:mb-6">
                  <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      width={300}
                      height={225}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    {achievement.year}
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mb-3 leading-relaxed">
                  {achievement.description}
                </p>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">
                  <div className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-emerald-600 mr-2 flex-shrink-0" />
                    {achievement.authority}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                Doświadczenie i certyfikaty na które możesz liczyć
              </h3>
              <p className="text-lg sm:text-xl mb-4 sm:mb-6 text-blue-100">
                Każdy certyfikat to gwarancja profesjonalnej obsługi i
                najwyższej jakości usług
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold">8+</div>
                  <div className="text-sm text-blue-100">lat licencji</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold">6</div>
                  <div className="text-sm text-blue-100">certyfikatów</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold">4</div>
                  <div className="text-sm text-blue-100">wyróżnień</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-blue-100">zadowolenia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-slate-900 text-white py-12 sm:py-16 lg:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
                Skontaktuj się ze mną
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed">
                Jestem dostępny 7 dni w tygodniu. Umów się na bezpłatną
                konsultację lub zadaj pytanie.
              </p>

              <div className="space-y-4 sm:space-y-6">
                {[
                  { icon: Phone, title: "Telefon", value: "+48 786 221 221" },
                  {
                    icon: Mail,
                    title: "Email",
                    value: "biuro@ckdom.pl",
                  },
                  {
                    icon: MapPin,
                    title: "Biuro",
                    value: "Aleja Solidarności 5\n25-001 Kielce",
                  },
                  {
                    icon: Clock,
                    title: "Godziny pracy",
                    value: "Pon-Pt: 8:00-20:00\nSob-Nie: 10:00-18:00",
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 sm:space-x-4"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <contact.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm sm:text-base">
                        {contact.title}
                      </div>
                      <div className="text-slate-300 whitespace-pre-line text-sm sm:text-base">
                        {contact.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative max-w-md w-full">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  {!imageError ? (
                    <Image
                      src="wizytowka.jpg"
                      alt="Wizytówka Sylwester Pawlik - CKDom.pl"
                      width={400}
                      height={600}
                      className="w-full h-auto object-cover"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-6 sm:p-8">
                      <div className="text-center mb-6">
                        <div className="text-2xl sm:text-3xl font-bold mb-2">
                          CK DOM.PL
                        </div>
                        <div className="text-sm sm:text-base opacity-90">
                          BIURO NIERUCHOMOŚCI
                        </div>
                      </div>

                      <div className="bg-white text-slate-800 p-4 rounded-lg mb-4">
                        <div className="text-center mb-3">
                          <div className="text-xs font-semibold text-red-600 mb-1">
                            LICENCJONOWANY
                          </div>
                          <div className="text-xs font-semibold text-red-600">
                            POŚREDNIK NIERUCHOMOŚCI
                          </div>
                        </div>

                        <div
                          className="text-2xl font-bold text-center mb-4 text-slate-800"
                          style={{ fontFamily: "cursive" }}
                        >
                          Sylwester Pawlik
                        </div>

                        <div className="space-y-2 text-sm">
                          <div>
                            <strong>KIELCE</strong>
                          </div>
                          <div>ALEJA SOLIDARNOŚCI 5</div>
                          <div>
                            <strong>TEL. 786-221-221</strong>
                          </div>
                          <div>BIURO@CKDOM.PL</div>
                          <div className="text-xs">NR LICENCJI PFRN 26546</div>
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="text-lg font-bold">WWW.CKDOM.PL</div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 text-center">
                  <p className="text-slate-300 text-sm sm:text-base mb-4">
                    Zapisz moje dane kontaktowe lub zrób zdjęcie wizytówki
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="tel:+48786221221"
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300 text-sm sm:text-base inline-flex items-center justify-center"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Zadzwoń teraz
                    </a>
                    <a
                      href="mailto:biuro@ckdom.pl"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300 text-sm sm:text-base inline-flex items-center justify-center"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Wyślij email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                Sylwester Pawlik
              </h3>
              <p className="text-slate-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                Licencjonowany pośrednik nieruchomości w Kielcach. Ponad 8 lat
                doświadczenia w branży nieruchomości.
              </p>
              <div className="text-xs sm:text-sm text-slate-400">
                <p>Licencja nr 26546</p>
                <p>NIP: 123-456-78-90</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                Przydatne linki
              </h3>
              <div className="space-y-1 sm:space-y-2">
                <a
                  href="#"
                  className="block text-slate-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Polityka prywatności
                </a>
                <a
                  href="#"
                  className="block text-slate-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Regulamin
                </a>
                <a
                  href="#"
                  className="block text-slate-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Mapa strony
                </a>
                <a
                  href="#"
                  className="block text-slate-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Blog
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                Obsługiwane rejony
              </h3>
              <div className="text-slate-300 space-y-0.5 sm:space-y-1 text-sm sm:text-base">
                <p>Kielce (wszystkie dzielnice)</p>
                <p>Masłów, Chęciny</p>
                <p>Cedzyna, Daleszyce</p>
                <p>Morawica, Strawczyn</p>
                <p>Sitkówka-Nowiny</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-slate-400">
            <p className="text-xs sm:text-sm">
              &copy; 2025 Sylwester Pawlik - CKDom. Wszystkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
