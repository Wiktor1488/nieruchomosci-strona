"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Calculator,
  Home,
  Search,
  Key,
  Award,
  CheckCircle,
  X,
  Menu,
  ExternalLink,
  TrendingUp,
  Users,
} from "lucide-react";

export default function RealEstateWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [calculatorType, setCalculatorType] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Credit calculator state
  const [creditData, setCreditData] = useState({
    price: 500000,
    downPayment: 20,
    years: 25,
  });

  // Valuation calculator state
  const [valuationData, setValuationData] = useState({
    area: 75,
    district: 6500,
    condition: 1.0,
  });

  // Costs calculator state
  const [costsData, setCostsData] = useState({
    propertyValue: 400000,
    transactionType: "buy",
  });

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

  const openCalculator = (type: string) => {
    setCalculatorType(type);
    setCalculatorOpen(true);
  };

  const calculateCredit = () => {
    const loanAmount = creditData.price * (1 - creditData.downPayment / 100);
    const monthlyRate = 0.06 / 12;
    const months = creditData.years * 12;
    const monthlyPayment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, months))) /
      (Math.pow(1 + monthlyRate, months) - 1);

    return {
      loanAmount: Math.round(loanAmount),
      monthlyPayment: Math.round(monthlyPayment),
    };
  };

  const calculateValuation = () => {
    const baseValue = valuationData.area * valuationData.district;
    const finalValue = baseValue * valuationData.condition;

    return {
      value: Math.round(finalValue),
      pricePerSqm: Math.round(finalValue / valuationData.area),
    };
  };

  const calculateCosts = () => {
    let costs: Record<string, number> = {};

    if (costsData.transactionType === "buy") {
      costs = {
        "Podatek PCC (2%)": Math.round(costsData.propertyValue * 0.02),
        Notariusz: 2500,
        "Sąd wieczystoksięgowy": 200,
        "Pośrednik (3%)": Math.round(costsData.propertyValue * 0.03),
        "Inne koszty": 1000,
      };
    } else {
      costs = {
        "Pośrednik (3%)": Math.round(costsData.propertyValue * 0.03),
        Notariusz: 1500,
        "Podatek PIT (19%)":
          costsData.propertyValue > 250000
            ? Math.round((costsData.propertyValue - 250000) * 0.19)
            : 0,
        "Inne koszty": 500,
      };
    }

    const totalCosts = Object.values(costs).reduce(
      (sum, cost) => sum + cost,
      0
    );
    return { costs, totalCosts };
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
      text: "Pan Marcin sprzedał nasze mieszkanie w rekordowym czasie za cenę wyższą niż oczekiwaliśmy. Profesjonalizm na najwyższym poziomie!",
      author: "Małgorzata i Piotr W.",
      location: "Kielce, Czarnów",
      rating: 5,
    },
    {
      text: "Dzięki panu Marcinowi znaleźliśmy dom marzeń. Załatwił wszystko od A do Z, negocjacje, kredyt, formalności. Polecamy!",
      author: "Rodzina Nowak",
      location: "Kielce, Barwinek",
      rating: 5,
    },
    {
      text: "Bardzo profesjonalne podejście do klienta. Pan Marcin jest zawsze dostępny i szybko odpowiada. Mieszkanie wynajęte w tydzień!",
      author: "Anna K.",
      location: "Właścicielka, Kielce",
      rating: 5,
    },
  ];

  const tools = [
    {
      title: "Kalkulator Kredytu",
      description: "Sprawdź ile możesz pożyczyć i jakie będą raty",
      icon: Calculator,
      color: "from-slate-50 to-slate-100",
      iconBg: "bg-slate-700",
      type: "credit",
    },
    {
      title: "Wycena Nieruchomości",
      description: "Wstępna wycena na podstawie lokalizacji i parametrów",
      icon: Home,
      color: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-700",
      type: "valuation",
    },
    {
      title: "Koszty Transakcji",
      description: "Sprawdź wszystkie koszty kupna/sprzedaży",
      icon: TrendingUp,
      color: "from-emerald-50 to-emerald-100",
      iconBg: "bg-emerald-700",
      type: "costs",
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
                    +48 600 123 456
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 bg-white rounded-full shadow-2xl overflow-hidden floating">
                  {!imageError ? (
                    <Image
                      src="/zdjecie-profilowe.jpg"
                      alt="Twoje zdjęcie profilowe"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                      onError={() => setImageError(true)}
                      priority
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-800 to-blue-800 flex items-center justify-center">
                      <span className="text-white text-4xl sm:text-6xl font-bold">
                        ME
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
                  Jestem Sylwester Pawlik, licencjonowany pośrednik
                  nieruchomości z ponad 8-letnim doświadczeniem na rynku
                  kieleckim. Specjalizuję się w sprzedaży, kupnie i wynajmie
                  nieruchomości w Kielcach i okolicach.
                </p>
                <p className="text-base sm:text-base leading-relaxed">
                  Moja pasja to pomaganie ludziom w znalezieniu idealnego domu
                  lub w sprzedaży nieruchomości za najlepszą cenę. Każdego
                  klienta traktuję indywidualnie, dostosowując strategię do jego
                  unikalnych potrzeb.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
                  {[
                    { number: "180+", label: "Transakcji sprzedaży" },
                    { number: "120+", label: "Transakcji kupna" },
                    { number: "80M+", label: "zł wartość transakcji" },
                    { number: "15", label: "Dzielnic Kielc" },
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
                    "Licencja pośrednika nieruchomości nr 15342",
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

      {/* Tools Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              Narzędzia dla Klientów
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Przydatne kalkulatory i narzędzia do wyceny nieruchomości
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {tools.map((tool, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${tool.color} p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200`}
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 ${tool.iconBg} rounded-lg flex items-center justify-center mb-3 sm:mb-4`}
                >
                  <tool.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                  {tool.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4 leading-relaxed">
                  {tool.description}
                </p>
                <button
                  onClick={() => openCalculator(tool.type)}
                  className="text-blue-700 hover:text-blue-800 font-semibold text-sm sm:text-base"
                >
                  Użyj kalkulatora →
                </button>
              </div>
            ))}
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
                  { icon: Phone, title: "Telefon", value: "+48 600 123 456" },
                  {
                    icon: Mail,
                    title: "Email",
                    value: "marcin@nieruchomosci-kielce.pl",
                  },
                  {
                    icon: MapPin,
                    title: "Biuro",
                    value: "ul. Sienkiewicza 15/3\n25-001 Kielce",
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

            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 text-slate-900">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Wyślij wiadomość
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Imię
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Rodzaj usługi
                  </label>
                  <select className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base">
                    <option>Sprzedaż nieruchomości</option>
                    <option>Kupno nieruchomości</option>
                    <option>Wynajem</option>
                    <option>Wycena</option>
                    <option>Inne</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Wiadomość
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base"
                    placeholder="Opisz czym mogę Ci pomóc..."
                  ></textarea>
                </div>
                <button
                  onClick={() =>
                    alert(
                      "Dziękuję za wiadomość! Skontaktuję się z Tobą w ciągu 24 godzin."
                    )
                  }
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-colors duration-300 text-sm sm:text-base"
                >
                  Wyślij wiadomość
                </button>
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
                <p>Licencja nr 15342</p>
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

      {/* Calculator Modal */}
      {calculatorOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg sm:text-xl font-bold">
                {calculatorType === "credit" &&
                  "Kalkulator Kredytu Hipotecznego"}
                {calculatorType === "valuation" &&
                  "Wstępna Wycena Nieruchomości"}
                {calculatorType === "costs" && "Kalkulator Kosztów Transakcji"}
              </h3>
              <button
                onClick={() => setCalculatorOpen(false)}
                className="text-slate-500 hover:text-slate-700"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="space-y-4">
              {calculatorType === "credit" && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Cena nieruchomości (zł)
                    </label>
                    <input
                      type="number"
                      value={creditData.price}
                      onChange={(e) =>
                        setCreditData({
                          ...creditData,
                          price: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base"
                      placeholder="500000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Wkład własny (%)
                    </label>
                    <input
                      type="number"
                      value={creditData.downPayment}
                      onChange={(e) =>
                        setCreditData({
                          ...creditData,
                          downPayment: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base"
                      placeholder="20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Okres kredytu (lata)
                    </label>
                    <input
                      type="number"
                      value={creditData.years}
                      onChange={(e) =>
                        setCreditData({
                          ...creditData,
                          years: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base"
                      placeholder="25"
                    />
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <div className="text-sm sm:text-base">
                      Kwota kredytu:{" "}
                      <strong className="text-slate-800">
                        {calculateCredit().loanAmount.toLocaleString()} zł
                      </strong>
                    </div>
                    <div className="text-sm sm:text-base">
                      Miesięczna rata:{" "}
                      <strong className="text-slate-800">
                        {calculateCredit().monthlyPayment.toLocaleString()} zł
                      </strong>
                    </div>
                  </div>
                </>
              )}

              {calculatorType === "valuation" && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Powierzchnia (m²)
                    </label>
                    <input
                      type="number"
                      value={valuationData.area}
                      onChange={(e) =>
                        setValuationData({
                          ...valuationData,
                          area: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base"
                      placeholder="75"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Dzielnica
                    </label>
                    <select
                      value={valuationData.district}
                      onChange={(e) =>
                        setValuationData({
                          ...valuationData,
                          district: parseInt(e.target.value),
                        })
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base"
                    >
                      <option value={6500}>Centrum - 6500 zł/m²</option>
                      <option value={5800}>Czarnów - 5800 zł/m²</option>
                      <option value={5200}>Barwinek - 5200 zł/m²</option>
                      <option value={4800}>Szydłówek - 4800 zł/m²</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Stan
                    </label>
                    <select
                      value={valuationData.condition}
                      onChange={(e) =>
                        setValuationData({
                          ...valuationData,
                          condition: parseFloat(e.target.value),
                        })
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base"
                    >
                      <option value={1.1}>Do zamieszkania - +10%</option>
                      <option value={1.0}>Dobry - bez zmian</option>
                      <option value={0.9}>Do remontu - -10%</option>
                    </select>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="text-sm sm:text-base">
                      Szacowana wartość:
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-blue-700">
                      {calculateValuation().value.toLocaleString()} zł
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600">
                      {calculateValuation().pricePerSqm.toLocaleString()} zł/m²
                    </div>
                  </div>
                </>
              )}

              {calculatorType === "costs" && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Wartość nieruchomości (zł)
                    </label>
                    <input
                      type="number"
                      value={costsData.propertyValue}
                      onChange={(e) =>
                        setCostsData({
                          ...costsData,
                          propertyValue: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base"
                      placeholder="400000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Typ transakcji
                    </label>
                    <select
                      value={costsData.transactionType}
                      onChange={(e) =>
                        setCostsData({
                          ...costsData,
                          transactionType: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base"
                    >
                      <option value="buy">Kupno</option>
                      <option value="sell">Sprzedaż</option>
                    </select>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg space-y-2 border border-emerald-200">
                    {Object.entries(calculateCosts().costs).map(
                      ([name, cost]) => (
                        <div
                          key={name}
                          className="flex justify-between text-sm sm:text-base"
                        >
                          <span className="text-slate-700">{name}:</span>
                          <strong className="text-slate-800">
                            {cost.toLocaleString()} zł
                          </strong>
                        </div>
                      )
                    )}
                    <hr className="my-2 border-emerald-200" />
                    <div className="flex justify-between text-base sm:text-lg">
                      <span className="text-slate-700">RAZEM:</span>
                      <strong className="text-emerald-700">
                        {calculateCosts().totalCosts.toLocaleString()} zł
                      </strong>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
