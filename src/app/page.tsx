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
    { number: "300+", label: "Zadowolonych klientów", icon: Users },
    { number: "14", label: "Średnio dni do sprzedaży", icon: TrendingUp },
    { number: "100%", label: "Profesjonalizmu", icon: Star },
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
      highlight: "Średni czas sprzedaży: 14 dni (vs 90 dni rynek)",
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
      highlight: "Wygoda: zero stresu, więcej czasu, stały dochód",
    },
  ];

  const testimonials = [
    {
      text: "Pan Sylwester sprzedał nasze mieszkanie w rekordowym czasie za cenę wyższą niż oczekiwaliśmy. Profesjonalizm na najwyższym poziomie!",
      author: "Małgorzata i Piotr W.",
      location: "Kielce",
      rating: 5,
    },
    {
      text: "Dzięki panu Sylwestrowi znaleźliśmy dom marzeń. Załatwił wszystko od A do Z, negocjacje, kredyt, formalności. Polecamy!",
      author: "Rodzina Nowak",
      location: "Nowiny",
      rating: 5,
    },
    {
      text: "Bardzo profesjonalne podejście do klienta. Pan Sylwester jest zawsze dostępny i szybko odpowiada. Mieszkanie wynajęte w tydzień!",
      author: "Anna K.",
      location: "Kielce",
      rating: 5,
    },
  ];

  const achievements = [
    {
      title: "Licencja Pośrednika Nieruchomości",
      description: "PFRN nr 26546 - oficjalnie licencjonowany pośrednik",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      year: "2021",
      authority: "Polska Federacja Rynku Nieruchomości",
    },
    {
      title: "Tu cos mozna wstawic",
      description: "Ale nie wiem co",
      image:
        "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop",
      year: "2023",
      authority: "Portal Nieruchomości.pl",
    },
    {
      title: "Lider Jakości PRO",
      description:
        "Odznaka Lider Jakości PRO to wyróżnienie przyznawane tym biurom, których jakość ogłoszeń jest na najwyższym poziomie.",
      image: "lider-jakosci.jpg",
      year: "2024",
      authority: "Otodom.pl",
    },
    {
      title: "Tu cos mozna wstawic",
      description: "Ale nie wiem co",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      year: "2022",
      authority: "RynekPierwotny.pl",
    },
    {
      title: "Tu cos mozna wstawic",
      description: "Ale nie wiem co",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
      year: "2021",
      authority: "Stowarzyszenie Zarządców Nieruchomości",
    },
    {
      title: "Tu cos mozna wstawic",
      description: "Ale nie wiem co",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
      year: "2021",
      authority: "Izba Gospodarcza Kielce",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg"
            : "bg-white/95 backdrop-blur-sm shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-22">
            <div className="flex items-center">
              <button
                onClick={() => scrollToSection("home")}
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <Image
                  src="logo.png"
                  alt="Sylwester Pawlik Nieruchomości - Logo"
                  width={400}
                  height={200}
                  className="h-16 sm:h-20 w-auto"
                  priority
                />
              </button>
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

      {/* Hero Section */}
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
                Ponad 8 lat doświadczenia • 300+ zadowolonych klientów • Średni
                czas sprzedaży: 14 dni
              </p>
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Umów bezpłatną konsultację
                </button>
                <div className="flex items-center justify-center space-x-4 text-white bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-lg">
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
                <p className="text-base sm:text-lg leading-relaxed text-justify">
                  Nazywam się Sylwester Pawlik, jestem licencjonowanym
                  pośrednikiem nieruchomości z ponad 8-letnim doświadczeniem na
                  rynku kieleckim. Specjalizuję się w sprzedaży, kupnie i
                  wynajmie nieruchomości w Kielcach i okolicach. Jednym z moich
                  największych atutów jest bardzo wysoka skuteczność, będąca
                  efektem połączenia dwudziestoletniego doświadczenia w
                  bezpośrednich kontaktach z klientami zdobytego w różnych
                  branżach oraz rozległej wiedzy na temat lokalnego rynku
                  nieruchomości. Od 2019 w branży nieruchomosci działający na
                  terenie Kielc i okolic.{" "}
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-justify">
                  Członek Świętokrzyskiego Stowarzyszenia Pośredników w Obrocie
                  Nieruchomości. Jestem rekomendowanym fotografem wirtualnych
                  spacerów. Ponad 22 lat zdobywam doświadczenie w handlu i
                  obsłudze Klienta. Mam ponad 8 lat doświadczenia w branży
                  pośrednictwa w obrocie nieruchomościami. Specjalizuje się w
                  szybkiej sprzedaży mieszkań, domów, działek, dzięki trafnemu
                  nowoczesnemu marketingowi i współpracy z większością
                  Pośredników nieruchomości w kraju. Sprzedaż nieruchomości to
                  proces wymagający wielu czynności, umiejętności i czasu. W
                  swojej pracy dążę do maksymalnego odciążenia moich klientów,
                  gwarantując pewność i spokój na każdym kroku.
                </p>

                <p className="text-base sm:text-base leading-relaxed">
                  Wolę sprzedawać nieruchomości niż je kolekcjonować — dlatego
                  posiadam tak mało ofert. Uważam, że takie działania wykonują
                  najskuteczniejsi agenci nieruchomości. Każdego klienta
                  traktuję indywidualnie, dostosowując strategię do jego
                  unikalnych potrzeb.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
                  {[
                    { number: "180+", label: "Transakcji sprzedaży" },
                    { number: "120+", label: "Transakcji kupna" },
                    { number: "8+", label: "Lat doświadczenia" },
                    { number: "300+", label: "Zadowolonych klientów" },
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
              {/* Główny certyfikat - licencja */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-6 rounded-xl shadow-xl border border-slate-200">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-3">
                      <Award className="w-4 h-4 mr-1" />
                      Oficjalna Licencja
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                      Licencja Pośrednika Nieruchomości
                    </h3>
                  </div>

                  <div className="flex justify-center mb-4">
                    <div className="relative max-w-sm w-full">
                      <Image
                        src="licencja.jpg"
                        alt="Licencja PFRN nr 26546 - Sylwester Pawlik"
                        width={300}
                        height={400}
                        className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                      />
                      <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                        2021
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 bg-black/80 text-white p-2 rounded text-center">
                        <div className="text-xs font-semibold">
                          PFRN Nr 26546
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm font-medium text-slate-700">
                        Polska Federacja Rynku Nieruchomości
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">
                      Oficjalnie licencjonowany pośrednik nieruchomości
                    </p>
                  </div>
                </div>
              </div>

              {/* Pozostałe certyfikaty */}
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-slate-200">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-slate-900">
                  Kluczowe atuty
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    "Członek Polskiej Federacji Rynku Nieruchomości",
                    "Certyfikat zarządzania nieruchomościami",
                    "Szkolenie z wyceny nieruchomości",
                    "Specjalista od wirtualnych spacerów",
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

          <div className="text-center mt-8 sm:mt-12"></div>
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

          <div className="mt-12 sm:mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 rounded-2xl p-6 sm:p-8 text-center text-white">
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
                  <div className="text-sm text-blue-100">lat doświadczenia</div>
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
                  <div className="text-sm text-blue-100">skuteczności</div>
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
                    Skontaktuj się już dziś!
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
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                Znajdziesz mnie na:
              </h3>
              <div className="space-y-3">
                <a
                  href="https://www.facebook.com/biurokielce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors text-sm sm:text-base group"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.tiktok.com/@biurockdom?lang=pl-PL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors text-sm sm:text-base group"
                >
                  <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center group-hover:bg-pink-500 transition-colors">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43V7.56a8.16 8.16 0 004.77 1.52v-3.39a4.85 4.85 0 01-1.04 0z" />
                    </svg>
                  </div>
                  <span>TikTok</span>
                </a>
                <a
                  href="https://www.ckdom.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors text-sm sm:text-base group"
                >
                  <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center group-hover:bg-slate-500 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <span>ckdom.pl</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                Biuro nieruchomości
              </h3>
              <div className="text-slate-300 space-y-3 text-sm sm:text-base">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Home className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">CKDom Kielce</div>
                    <div className="text-slate-400 text-xs">Główne biuro</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Home className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      CKDom Staszów
                    </div>
                    <div className="text-slate-400 text-xs">Oddział</div>
                  </div>
                </div>
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
