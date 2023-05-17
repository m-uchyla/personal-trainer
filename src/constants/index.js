import { damianAfter, damianBefore, MariuszAfter, MariuszBefore } from "../assets"

export const navLinks = [
    {
        id: "about",
        title: "O mnie",
        href: "#about"
    },
    {
        id: "changes",
        title: "Przemiany Klientów",
        href: "#transforms"
    },
    
    {
        id: "offer",
        title: "Oferta",
        href: "#pricing"
    },
    {
        id: "contact",
        title: "Kontakt",
        href: "#contact"
    }
]
export const transforms = [
    {
        id: "damian",
        name: "Damian",
        age: "39",
        img1: damianBefore,
        img2: damianAfter
    },
    {
        id: "mariusz",
        name: "Mariusz",
        age: "32",
        img1: MariuszBefore,
        img2: MariuszAfter
    }
]
export const privacy = [
    {
        id: "politykaPrywatności",
        title: "Polityka Prywatności"
    },
    {
        id: "cookies",
        title: "Cookies"
    },
    {
        id: "regulamin",
        title: "Regulamin"
    },
]

export const pricing = [
    {
        name: "Plan treningowy",
        price: [149,99],
        per:"Jednorazowo",
        desc: "Plan dostosowany do Twoich potrzeb i umiejętności",
        features:[
            "Indywidualny plan dla każdego klienta z osobna",
            "Wersje A i B do stosowania naprzemiennie",
            "Podstawowe wskazówki żywieniowe"
        ]
    },
    {
        name: "Trening w grupie",
        price: [29,99],
        per:"Za godzinę treningu",
        desc: "Trening odbywa się w 4 osobowych grupach",
        features:[
            "Zajęcia w godzinach wieczornych",
            "Kameralna grupa",
            "Grupa treningowa dobierana na podstawie podobnych predyspozycji"
        ]
    },
    {
        name: "Trening prywatny",
        price: [79,99],
        per:"Za godzinę treningu",
        desc: "Trening, gdzie cały czas poświęcony jest tylko Tobie",
        features:[
            "Spotkania w ustalonych przez Ciebie godzinach",
            "Pełna opieka techniczna przez 100% czasu treningowego",
            "Przygotowania pod trenowanie samodzielne"
        ]
    },
]