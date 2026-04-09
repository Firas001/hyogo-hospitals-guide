import { Hospital } from "@/types";

export const hospitals: Hospital[] = [
    {
        key: "yoshida-ardent-hospital",
        area: "jica-kansai-area",
        specialties: [
            "internal-medicine",
            "gastroenterology",
            "cardiovascular-medicine",
            "respiratory-medicine",
            "neurology",
            "radiology",
            "department-of-surgery",
            "orthopedics",
            "neurosurgery",
            "plastic-surgery",
            "rehabilitation-department"
        ],
        phone: "078-861-0001",
        website: "http://www.voshida-ardent-hospital.com",
        mapUrl: "https://maps.app.goo.gl/kizssXEdW6V4n918",
        hours: [
            { days: [], note: "variesByDept" }
        ]
    },
    {
        key: "ogawa-clinic",
        area: "jica-kansai-area",
        specialties: [
            "primary-care",
            "internal-medicine-problems",
            "check-up-physical",
            "vaccinations"
        ],
        phone: "078-805-3282",
        website: "http://ogawa-clinic.info/english/index.html",
        mapUrl: "https://maps.app.goo.gl/T9BJ6niNevDSAL789",
        hours: [
            { days: ["mon", "tue", "fri", "sat"], times: "9:00~12:00" },
            { days: ["mon", "tue", "fri"], times: "16:00~19:00" },
            { days: ["tue", "sun", "nationalHolidays"], closed: true }
        ]
    },
    {
        key: "towa-clinic",
        area: "jica-kansai-area",
        specialties: [
            "cardiovascular-internal-medicine",
            "general-internal-medicine",
            "respiratory-internal-medicine",
            "smoking-cessation-internal-medicine",
            "chinese-herbal-medicine",
            "vaccination"
        ],
        phone: "078-881-0588",
        website: "https://www.towa-clinic.in/menu/medicalguidance.html",
        mapUrl: "https://maps.app.goo.gl/nS316He/CwF6Ty2s5",
        hours: [
            { days: ["mon", "tue", "wed", "thu", "fri", "sat"], times: "9:00~12:00" },
            { days: ["mon", "tue", "wed", "thu", "fri"], times: "15:30~18:30" },
            { days: ["sun", "nationalHolidays"], closed: true }
        ]
    },
    {
        key: "takahashi-clinic",
        area: "jica-kansai-area",
        specialties: [
            "internal-medicine",
            "dermatology",
            "diabetes",
            "vaccinations"
        ],
        phone: "078-882-6432",
        website: "http://www.takahashi-ped.com/clinic/index.html",
        mapUrl: "https://maps.app.goo.gl/DCckyY3dkvMsLvp8A",
        hours: [
            { days: ["mon", "tue", "wed", "thu", "fri", "sat"], times: "9:00~12:00" },
            { days: ["mon", "tue", "thu", "fri"], times: "16:00~19:00" },
            { days: ["sun", "nationalHolidays"], closed: true }
        ]
    },
    {
        key: "hayashi-ophthalmology-clinic",
        area: "kic-area",
        specialties: [
            "ophthalmology"
        ],
        phone: "078-241-7511",
        website: "https://hayashigannka.doctorsfile.jp/",
        mapUrl: "https://maps.app.goo.gl/G9qGPdqme3DB3S4d6",
        hours: [
            { days: ["mon", "thu", "sat"], times: "9:30~12:30" },
            { days: ["tue"], times: "9:30~12:00" },
            { days: ["wed", "fri", "sun", "nationalHolidays"], closed: true }
        ]
    },
    {
        key: "kagayaki-diabetic-endocrinology-and-chinese-medicine-clinic-shin-kobe",
        area: "kic-area",
        specialties: [
            "diabetes-mellitus",
            "endocrine-diseases",
            "lifestyle-diseases",
            "allergy",
            "surgery"
        ],
        phone: "078-241-1350",
        website: "https://okada-dmcl.jp/english.html",
        mapUrl: "https://maps.app.goo.gl/uCYvvrQisS7YZTSL9",
        hours: [
            { days: ["mon", "tue", "wed", "thu", "fri", "sat"], times: "9:30~12:30" },
            { days: ["mon", "sat"], times: "15:00~16:30" },
            { days: ["tue", "fri"], times: "16:00~18:30" },
            { days: ["sun", "nationalHolidays"], closed: true }
        ]
    },
    {
        key: "ohkado-heart-clinic",
        area: "kic-area",
        specialties: [
            "respiratory",
            "surgery",
            "cardiology"
        ],
        phone: "078-871-5201",
        website: "https://ohkado-heart-clinic.com/english/",
        mapUrl: "https://maps.app.goo.gl/nED7VvdMS2WIwAPЬЯ",
        hours: [
            { days: ["mon", "tue", "wed", "thu", "fri", "sat"], times: "9:00~12:00" },
            { days: ["mon", "tue", "wed", "fri"], times: "16:00~19:00" },
            { days: ["sun", "nationalHolidays"], closed: true }
        ]
    },
    {
        key: "maruyama-ear",
        area: "kic-area",
        specialties: [
            "otolaryngology",
            "tracheoesophageal",
            "head-and-neck-surgery",
            "allergy"
        ],
        phone: "078-221-1303",
        website: "http://www.maruvama-ent.net/",
        mapUrl: "https://maps.app.goo.gl/6xmk42K822bmS1cP8",
        hours: [
            { days: ["mon", "tue", "wed", "thu", "fri"], times: "9:00~12:00" },
            { days: ["sat"], times: "9:00~13:00" },
            { days: ["mon", "tue", "wed", "fri"], times: "15:00~18:30" },
            { days: ["sun", "nationalHolidays"], closed: true }
        ]
    },
    {
        key: "kobayashi-clinic",
        area: "kobe-university-area",
        specialties: [
            "internal-medicine",
            "urology",
            "home-medical-care"
        ],
        phone: "078-846-5330",
        website: "https://kobe-kobayashiclinic.com/",
        mapUrl: "https://maps.app.goo.gl/6xmk42K8z2bmS1eP8",
        hours: [
            { days: ["mon", "tue", "wed", "thu", "fri", "sat"], times: "9:00~12:00" },
            { days: ["mon", "wed", "fri"], times: "17:00~19:00" },
            { days: ["thu", "sun", "nationalHolidays"], closed: true }
        ]
    },
    {
        key: "nagama-clinic",
        area: "kobe-university-area",
        specialties: [
            "gastroenterology",
            "pediatrics"
        ],
        phone: "078-453-7322",
        website: "http://nagama-iin.byoinnavi.jp/pc/",
        mapUrl: "https://maps.app.goo.gl/uxoEC67dk4HUvNRw7",
        hours: [
            { days: ["mon", "tue", "thu", "fri", "sat", "sun"], times: "9:00~12:00" },
            { days: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"], times: "17:00~19:00" },
            { days: ["nationalHolidays"], closed: true }
        ]
    },
    {
        key: "kobe-kaisei-hospital",
        area: "kobe-university-area",
        specialties: [
            "internal-medicine"
        ],
        phone: "078-871-5201",
        website: "https://www.kobe-kaisei.org/en/",
        mapUrl: "https://maps.app.goo.gl/tt7dfZJjYkc1HboF9",
        hours: [
            { days: ["weekdays"], times: "8:30~17:00", note: "receptionTelOnly" }
        ]
    },
    {
        key: "concept-lio-dental-clinic",
        area: "kobe-university-area",
        specialties: [
            "dental"
        ],
        phone: "078-453-0828",
        website: "https://fukae-vumadental.jp/",
        mapUrl: "https://maps.app.goo.gl/cPuvEq6NcDVeRJ6S7",
        hours: [
            { days: ["mon", "wed", "sat"], times: "9:00~13:00" },
            { days: ["tue", "thu", "fri"], times: "10:00~14:00" },
            { days: ["sun"], times: "9:30~13:00" },
            { days: ["mon", "wed"], times: "14:00~18:30" },
            { days: ["tue", "thu", "fri"], times: "15:30~19:30" },
            { days: ["nationalHolidays"], closed: true }
        ]
    },
    {
        key: "fumi-neurology-clinic",
        area: "kobe-university-area",
        specialties: [
            "neurology",
            "diabetes-internal-medicine",
            "women-s-internal-medicine"
        ],
        phone: "078-451-1211",
        website: "https://fumi-neurology.com/clinic/",
        mapUrl: "https://mans.app.goo.gl/HvvD3mVvuZ1mXrao6",
        hours: [
            { days: ["mon", "wed", "thu", "fri", "sat"], times: "9:00~12:00" },
            { days: ["mon", "wed", "thu", "fri"], times: "12:30~15:00" },
            { days: ["tue", "sun", "nationalHolidays"], closed: true }
        ]
    },
    {
        key: "ito-mental-clinic",
        area: "kobe-sannomiya-area",
        specialties: [
            "psychiatry"
        ],
        phone: "078-945-8507",
        website: "https://imc-kobe.com/",
        mapUrl: "https://maps.app.goo.gl/ezkbXhvXL2Lqm5Bc8",
        hours: [
            { days: ["mon", "tue", "wed", "fri", "sat"], times: "9:00~12:00" },
            { days: ["mon", "tue", "wed", "fri"], times: "16:00~18:30" },
            { days: ["thu", "sun", "nationalHolidays"], closed: true }
        ]
    },
    {
        key: "ueno-internal-medicine-diabetes-clinic",
        area: "kobe-sannomiya-area",
        specialties: [
            "internal-medicine",
            "diabetes"
        ],
        phone: "078-391-7500",
        website: "https://uenonaika-clinic.com/",
        mapUrl: "https://maps.app.goo.gl/YcqMsmneCUA6nGfW8",
        hours: [
            { days: ["tue", "wed", "fri", "sat"], times: "9:00~11:30" },
            { days: ["tue"], times: "15:00~17:30" },
            { days: ["mon", "thu", "sun", "nationalHolidays"], closed: true }
        ]
    },
    {
        key: "kobe-city-medical-center-general-hospital",
        area: "kobe-sannomiya-area",
        specialties: [
            "internal-medicine",
            "surgical",
            "perinatal-and-pediatric-division",
            "central-medical-department",
            "outpatient-departments",
            "nursing-department",
            "clinical-trials-research"
        ],
        phone: "078-302-4321",
        website: "https://chuo.kcho.jp/en/",
        mapUrl: "https://maps.app.goo.gl/5L",
        hours: [
            { days: ["weekdays"], times: "8:30~11:00", note: "initialConsultation" },
            { days: ["sat", "sun", "nationalHolidays"], closed: true }
        ]
    },
    {
        key: "minato-motomachi-internal-clinic",
        area: "kobe-sannomiya-area",
        specialties: [
            "internal-medicine",
            "surgical"
        ],
        phone: "078-451-1211",
        website: "https://m-m-n-clinic.p-kit.com/",
        mapUrl: "https://maps.app.goo.gl/ezTT3n5B6axw35118",
        hours: [
            { days: ["mon", "tue", "wed", "thu", "fri", "sat"], times: "9:00~12:00" },
            { days: ["mon", "wed"], times: "14:00~17:00" },
            { days: ["tue", "thu"], times: "14:00~18:00" },
            { days: ["sun", "nationalHolidays"], closed: true }
        ]
    },
    {
        key: "mori-clinic",
        area: "kobe-sannomiya-area",
        specialties: [
            "internal-medicine",
            "diabetes"
        ],
        phone: "078-575-3608",
        website: "https://mori-naikaclinic.jp/",
        mapUrl: "https://maps.app.goo.gl/T16dtufeYr7LxaAA",
        hours: [
            { days: ["mon", "tue", "wed", "fri", "sat"], times: "9:00~13:00" },
            { days: ["mon", "tue", "wed", "fri"], times: "17:00~19:00" },
            { days: ["thu", "sun", "nationalHolidays"], closed: true }
        ]
    },
    {
        key: "shukugawa-naishikyonaikamaeda-clinic",
        area: "nishinomiya-area",
        specialties: [
            "internal-medicine",
            "urology"
        ],
        phone: "0798-56-8480",
        website: "https://www.shukugawa-naishikyo.com/english.html",
        mapUrl: "https://maps.app.goo.gl/vYQbA",
        hours: [
            { days: ["mon", "wed", "thu", "fri", "sat"], times: "9:00~15:00" },
            { days: ["mon", "wed", "thu", "fri"], times: "15:00~18:00" },
            { days: ["tue", "sun", "nationalHolidays"], closed: true }
        ]
    },
    {
        key: "kawano-internal-medical-clinic",
        area: "nishinomiya-area",
        specialties: [
            "internal-medicine",
            "cardiovascular-medicine",
            "allergy-medicine"
        ],
        phone: "078-453-7322",
        website: "https://www.kawanonaika.com",
        mapUrl: "https://maps.app.goo.gl/byJhj8YJe4ptiRq07",
        hours: [
            { days: ["mon", "tue", "wed", "thu", "fri", "sat"], times: "9:00~12:30" },
            { days: ["mon", "tue", "wed", "fri"], times: "16:30~19:00" },
            { days: ["sun", "nationalHolidays"], closed: true }
        ]
    }
];