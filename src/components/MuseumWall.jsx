import "./MuseumWall.css";

import { useEffect, useState } from "react";

import Painting from "./Painting";
import paymentqr from "../assets/paymentqr.png";

/* ART */

import art1 from "../assets/art1.jpg";
import art2 from "../assets/art2.jpg";
import art3 from "../assets/art3.jpg";
import art4 from "../assets/art4.jpg";
import art5 from "../assets/art5.jpg";
import art6 from "../assets/art6.jpg";
import art7 from "../assets/art7.jpg";
import art8 from "../assets/art8.jpg";
import art9 from "../assets/art9.jpg";
import art10 from "../assets/art10.jpg";
import art11 from "../assets/art11.jpg";
import art12 from "../assets/art12.jpg";
import art13 from "../assets/art13.jpg";
import art14 from "../assets/art14.jpg";
import art15 from "../assets/art15.jpg";
import art16 from "../assets/art16.jpg";
import art17 from "../assets/art17.jpg";

/* FRAME PNGS */

import design1 from "../assets/frames/design1.png";
import design2 from "../assets/frames/design2.png";
import design3 from "../assets/frames/design3.png";
import design4 from "../assets/frames/design4.png";
import design5 from "../assets/frames/design5.png";

/* PROFILE */

import profile from "../assets/Profile.jpg";

export default function MuseumWall() {

  const [scrollY, setScrollY] = useState(0);
  const [selectedPainting, setSelectedPainting] = useState(null);

  const [darkMode, setDarkMode] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  /* SCROLL */

  useEffect(() => {

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);

  /* DARK MODE */

  useEffect(() => {

    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

  }, [darkMode]);

  /* GALLERY */

  const paintings = [

    {
      image: art1,
      frame: design1,
      className: "f1 vertical large",
      title: "Whispers Around the Fountain",
  description:
    "This detailed pen illustration explores texture, stillness, and the quiet beauty found within ornamental spaces. Through layered linework, cross-hatching, and expressive ink textures, I wanted the fountain to feel aged, atmospheric, and almost suspended in time. The surrounding foliage and stone structure were intentionally kept raw and imperfect to preserve the handmade quality of observational sketching. Rather than focusing on realism alone, this piece was created to capture the calm emotional presence that small architectural corners and garden spaces can quietly hold.",
    },

    {
      image: art2,
      frame: design5,
      className: "f2 horizontal medium",
      title: "Blueprints of Agra Fort",
  description:
    "This blue-ink architectural study reinterprets Agra Fort through a simplified and graphic visual language. Rather than focusing on realism, I reduced the structure into bold outlines, geometric forms, and minimal detailing to create the appearance of an architectural blueprint. The monochromatic palette gives the piece a modern identity while still honoring the strength and grandeur of Mughal architecture. This artwork reflects my interest in blending historical subjects with contemporary sketch aesthetics.",
      
    },

    {
      image: art3,
      frame: design4,
      className: "f6 vertical small",
       title: "Window to Somewhere — Café Interior Study",
  description:
    "This interior sketch explores quietness, natural light, and observational stillness. The large open windows create depth and openness within the composition, while the seated figures subtly suggest everyday life unfolding in the background. I intentionally kept the linework loose and airy to preserve the calm atmosphere of the space. Through this piece, I wanted to capture the experience of sitting quietly in a café, observing light, movement, and passing time through a sketchbook.",
    },

    {
      image: art4,
      frame: design3,
      className: "f7 square medium",
      title: "Afternoon at Khan Market",
  description:
    "This urban sketch captures the everyday movement and visual rhythm of Khan Market through loose linework and watercolor textures. The storefronts, passing vehicles, scattered pedestrians, and layered signage create a lively composition rooted in observation rather than perfection. I wanted the sketch to feel immediate and familiar — like a moment quickly documented while sitting within the energy of the city itself. The artwork reflects my fascination with transforming ordinary urban experiences into visual storytelling.",
    },

    {
      image: art5,
      frame: design1,
      className: "f8 horizontal small",
      title: "Tree in Ultramarine",
  description:
    "This monochromatic botanical sketch explores texture, shadow, and organic form using only blue ink. Through layered pen work and repetitive detailing, I aimed to create depth and movement within the foliage while preserving the spontaneity of hand sketching. Unlike architectural studies that rely on geometry and structure, this piece focuses entirely on natural rhythm and imperfection. It reflects my interest in slowing down observation and finding complexity within simple natural subjects.",
    },

    {
      image: art6,
      frame: design5,
      className: "f5 horizontal large",
      title: "Qutub-e-falak",
  description:
    "Inspired by the towering presence of Qutub Minar, this watercolor and ink sketch explores the relationship between monumentality and atmosphere. I exaggerated the upward perspective to emphasize the scale and verticality of the structure while using bright sky tones to create warmth and openness. Instead of focusing on intricate historical detailing, I approached the monument through expressive color and simplified form, allowing the sketch to feel personal, immediate, and emotionally connected to the experience of seeing it in person.",
    },

    {
      image: art7,
      frame: design1,
      className: "f9 square small",
      title: "Fernweh at St. Paul’s",
  description:
    "This artwork was inspired by the feeling of “fernweh” — a longing for distant places and memories tied to travel. Instead of rendering St. Paul’s Cathedral with technical precision, I approached the structure emotionally through loose ink movement, rough shading, and expressive textures. The handwritten text and dripping shadows transform the sketch into something closer to a journal entry than a conventional architectural study. Through this piece, I wanted to capture how certain places remain emotionally present long after leaving them behind.",
    },

    {
      image: art8,
      frame: design4,
      className: "f11 vertical large",
      title: "Colosseum Afternoon",
  description:
    "This sketch of the Colosseum was approached as a travel memory rather than a highly detailed historical rendering. I focused on warmth, atmosphere, and the emotional experience of witnessing such an iconic structure in person. The watercolor-inspired textures and loose pen detailing preserve the immediacy of on-location sketching while celebrating the timeless presence of Roman architecture. Through this piece, I wanted the monument to feel alive, weathered, and connected to the energy of the surrounding city.",
    },

    {
      image: art9,
      frame: design3,
      className: "f10 vertical medium",
      title: "Pink Hour Boulevard",
  description:
    "This urban sketch experiments with color as emotion rather than realism. Using vivid magenta tones, I transformed a traditional European street into a stylized and dreamlike composition. The architecture remains recognizable, but the exaggerated palette shifts the focus toward atmosphere and feeling instead of documentation. This piece reflects my interest in combining contemporary visual experimentation with the spontaneity of urban sketching.",
    },

    {
      image: art10,
      frame: design5,
      className: "f14 vertical small",
      title: "Sails on Naini Lake",
  description:
    "Inspired by the calm atmosphere of Nainital Lake, this watercolor sketch captures drifting sailboats surrounded by distant hills and open sky. The composition was intentionally kept minimal and airy to preserve the quiet rhythm of the landscape. Loose watercolor textures and soft transitions between blue and green tones create a sense of stillness, while the brightly colored sails introduce small moments of movement and life. This piece reflects my interest in translating peaceful travel experiences into expressive visual memories.",
    },

    {
      image: art11,
      frame: design1,
      className: "f13 square medium",
      title: "Form & Facade",
  description:
    "This artwork was created as part of my exploration into architectural form, structure, and modern design language. Rather than depicting a real location, the sketch functions as a conceptual study where curved glass surfaces, layered volumes, and geometric balance become the main focus. I enjoyed experimenting with marker palettes and perspective while allowing the sketch to remain loose and expressive instead of fully technical. The piece reflects the learning process itself — curiosity, experimentation, and the freedom to imagine spaces that do not yet exist.",
    },

    {
      image: art12,
      frame: design3,
      className: "f15 horizontal large",
      title: "London at Four O’Clock",
  description:
    "This sketch captures the iconic presence of Big Ben through quick, expressive pen work rather than architectural precision. I was inspired by the energy of London itself — the moving clouds, the towering Gothic structure, and the feeling of looking upward while standing in the middle of a busy historic city. The rough textures and spontaneous linework were intentionally preserved to keep the sketch alive and immediate, almost like a visual memory recorded in real time. Instead of treating the monument as a static landmark, I approached it as part of a constantly moving urban atmosphere.",
    },

    {
      image: art13,
      frame: design1,
      className: "f16 square small",
      title: "Brederodestraat Study",
  description:
    "This pen sketch was inspired by the quiet architectural charm of Amsterdam’s residential streets. The narrow vertical structure, repetitive windows, and delicate tree branches create a balance between rigid geometry and organic movement. I focused on simplicity and clean linework to preserve the calm character of the street while still allowing the imperfections of hand sketching to remain visible. The piece reflects my fascination with European urban architecture and the subtle beauty hidden in ordinary neighborhoods.",
    },

    {
      image: art14,
      frame: design4,
      className: "f18 horizontal small",
      title: "Alleys of Valletta",
  description:
    "Inspired by the narrow limestone streets of Valletta, this urban sketch explores depth, intimacy, and the layered character of Mediterranean architecture. The hanging cables, old lanterns, and tightly packed buildings create a sense of closeness that naturally draws the viewer inward. Using two shades of blue ink allowed me to separate structure from atmosphere while maintaining a loose and spontaneous quality. More than a location study, this piece reflects the experience of wandering through unfamiliar streets with a sketchbook, discovering beauty in quiet corners and passing moments.",
    },

    {
      image: art15,
      frame: design5,
      className: "f19 square medium",
      title: "Quiet Corners of Europe",
  description:
    "This sketch documents the quieter side of European architecture — the unnoticed streets, aged facades, and small urban details often overlooked by tourists. Through soft textures and expressive pen work, I wanted the piece to feel intimate and personal, almost like a fragment collected from a travel diary. The artwork reflects my belief that ordinary places often hold the strongest emotional character.",
    },

    {
      image: art16,
      frame: design2,
      className: "f17 vertical medium",
      title: "Road Beyond the Hills",
  description:
    "This landscape painting explores the feeling of travel, openness, and quiet escape. The winding road cutting through rolling hills was inspired by the emotional calm that countryside journeys often bring. Unlike my architectural sketches, this piece relies more heavily on color and atmosphere than on structure or detail. The soft transitions between greens, yellows, and distant skies were created to evoke a sense of freedom and peaceful movement through nature.",
    },

    {
      image: art17,
      frame: design1,
      className: "f20 vertical large",
      title: "Paris in Passing",
  description:
    "This sketch captures the Eiffel Tower as part of everyday Parisian life rather than as a perfectly framed monument. The surrounding streets, loose perspective, and flowing linework were intentionally kept energetic to preserve the movement and rhythm of the city. I enjoy approaching famous landmarks through quick observational sketching because it allows the drawing to feel more personal and immediate. The artwork reflects the fleeting experience of walking through Paris and suddenly finding the city unfolding like a scene from memory.",
    },

    /* ABOUT SECTION */

    {
      type: "about-card",
      className: "about-section",
    },

  ];

  return (

    <section className="museum-wall">

      {/* NAVBAR */}

      <div className="museum-nav">

        <h1>SushiSketches</h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >

          <div className="nav-links">

            <span>Home</span>
            <span>About</span>

          </div>

          {/* THEME TOGGLE */}

          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀" : "☾"}
          </button>

        </div>

      </div>

      {/* LIGHTS */}

      <div className="spotlight s1"></div>
      <div className="spotlight s2"></div>
      <div className="spotlight s3"></div>

      {/* GALLERY */}

      <div
        className="frames-container"
        style={{
          transform: `translateX(-${scrollY * 0.9}px)`
        }}
        
      >
        

        {paintings.map((painting, index) => {

          /* ABOUT CARD */

          if (painting.type === "about-card") {

            return (

              <div
                key={index}
                className={`about-card ${painting.className}`}
              >

                <div className="artist-profile">
                  <img
                    src={profile}
                    alt="artist"
                  />
                </div>

                <h2>ABOUT THE ARTIST</h2>

                <h1>Harshie</h1>

                <p>
                  I’m an artist and software developer behind
                  Sushi Sketches. I create art content focused
                  on urban sketches, portraits, paintings,
                  and expressive artworks. Every artwork
                  featured here is created by me, and this
                  portfolio website was also designed and
                  developed by me.
                </p>

                <div className="social-links">

                  <a
                    href="https://instagram.com/sushiisketches"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>

                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter / X
                  </a>

                </div>

                <div className="other-sites">

                  <h3>My Other Websites</h3>

                  <a href="#">
                    Sushi Sketches Portfolio
                  </a>

                </div>

              </div>

            );

          }

          /* NORMAL PAINTINGS */

          return (

           <Painting
  key={index}
  image={painting.image}
  frame={painting.frame}
  className={painting.className}

  onClick={() => setSelectedPainting(painting)}
/>


          );

        })}

      </div>
      {selectedPainting && (

  <div
    className="painting-modal-overlay"
    onClick={() => setSelectedPainting(null)}
  >

    <div
      className="painting-modal"
      onClick={(e) => e.stopPropagation()}
    >

      {/* LEFT */}

      <div className="modal-left">

        <div className="modal-painting">

          <img
            src={selectedPainting.image}
            alt=""
            className="modal-art"
          />

          <img
            src={selectedPainting.frame}
            alt=""
            className="modal-frame"
          />

        </div>

      </div>

      {/* RIGHT */}

      <div className="modal-right">

        <h1>
          {selectedPainting.title}
        </h1>

        <p>
          {selectedPainting.description}
        </p>

     <button
  className="fund-button"
  onClick={() => setShowPayment(true)}
>
  Love this? Support with 10🪙
</button>

      </div>

    </div>
    {showPayment && (

  <div
    className="payment-overlay"
    onClick={() => setShowPayment(false)}
  >

    <div
      className="payment-modal"
      onClick={(e) => e.stopPropagation()}
    >

      <h2>Support Independent Art ✦</h2>

     

      <img
        src={paymentqr}
        alt="UPI QR"
        className="payment-qr"
      />

      <div className="upi-id">
        harshitarajsingh1@okhdfc
      </div>

      <button
        className="copy-upi"
        onClick={() => {
          navigator.clipboard.writeText(
            "harshitarajsingh1@okhdfc"
          );
        }}
      >
        Copy UPI ID
      </button>

    </div>

  </div>

)}

  </div>

)}

    </section>

  );

}