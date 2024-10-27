import React from "react";
import Header from "../components/Header";
import Hero from "./Hero";
import Information from "./Information";
import OurServices from "./OurServices";
import MemberCountries from "./MemberCountries";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Information />
      <OurServices />

      <section className="px-4 py-6">
        <div className="max-w-[1320px] w-full mx-auto flex items-center md:gap-12 flex-col md:flex-row">
          <div className="flex-1">
            <h2 className="text-xl font-semibold tracking-[-.8px] text-[#121926] mb-2">
              ESTA France : Visiter les Etats-Unis avec un visa B-2 ou une
              autorisation de voyage
            </h2>
            <p className="text-sm text-[#121926] mb-4">
              Tous les citoyens français qui se rendent aux États-Unis
              d’Amérique doivent être en possession d’un visa ou d’une
              autorisation de voyage (ESTA) en cours de validité, à moins qu’ils
              ne soient titulaires d’une carte verte. Alors que le visa est
              délivré par une ambassade américaine, l’autorisation de voyage est
              demandée et délivrée en ligne. Le système électronique
              d’autorisation de voyage (ESTA) est une plateforme en ligne conçue
              pour faciliter le processus de demande dans le cadre du programme
              américain d’exemption de visa. Pour les personnes qui prévoient de
              se rendre aux États-Unis par voie aérienne ou maritime,
              l’obtention d’une autorisation de voyage par l’intermédiaire de
              l’ESTA est une condition préalable à l’embarquement.
            </p>
          </div>

          <img
            src="/assets/ESTA-Application.webp"
            alt="ESTA Application"
            className="h-full md:h-[148px] w-full md:w-auto"
          />
        </div>
      </section>

      <section className="px-4 py-6 bg-[#f8fafc]">
        <div className="max-w-[1320px] w-full mx-auto">
          <div className="flex-1">
            <h2 className="text-xl font-semibold tracking-[-.8px] text-[#121926] mb-2">
              Quelles sont les conditions à remplir pour faire une demande
              d’ESTA pour les citoyens français?
            </h2>
            <p className="text-sm text-[#121926] mb-4">
              Le programme d’exemption de visa est réservé aux citoyens de 41
              pays éligibles. Pour obtenir une autorisation de voyage, une
              demande ESTA doit être dûment remplie. En outre, un passeport
              biométrique comportant une puce et le symbole correspondant sur sa
              couverture est obligatoire. Le programme d’exemption de visa
              permet des séjours d’une durée maximale de 90 jours, à des fins de
              tourisme, d’affaires, de transit, de soins de santé ou de
              participation à des programmes d’études non accrédités.
            </p>

            <p className="text-sm text-[#121926] mb-4">
              Il est recommandé aux voyageurs de faire une demande d’ESTA avant
              de réserver un hôtel ou un vol, car ils pourraient avoir besoin
              d’un visa complet. Une fois votre demande ESTA approuvée, vous
              avez la possibilité de la mettre à jour avec les derniers détails
              de votre itinéraire avant votre départ.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 bg-[#f8fafc]">
        <div className="max-w-[1320px] w-full mx-auto border border-[#eef2f6] rounded p-3">
          <h2 className="text-xl font-semibold tracking-[-.8px] text-[#121926] mb-2">
            Liste de contrôle pour les citoyens français visitant les États-Unis
            d’Amérique
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-14">
            <ul className="flex flex-col gap-2 text-sm text-[#121926]">
              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                Passeport valide
              </li>

              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                Approuvé ESTA ou Visa
              </li>

              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                Itinéraire et détails de l’hébergement.
              </li>

              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                Contacts d’urgence
              </li>

              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                Cartes et applications de voyage
              </li>

              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                Accès à Internet
              </li>
            </ul>

            <ul className="flex flex-col gap-2 text-sm text-[#121926]">
              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                Moyens de paiement et monnaie locale (USD)
              </li>
              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                Options de transport
              </li>
              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                Lire les dernières nouvelles
              </li>
              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                Application de traduction (si nécessaire)
              </li>
              <li className="flex gap-[10px] items-center">
                <img src="/assets/check-green.svg" alt="check-green" />
                Adaptateurs pour 110V
              </li>
            </ul>
          </div>
        </div>
      </section>

      <MemberCountries />
      <Footer />
    </>
  );
};

export default Home;
