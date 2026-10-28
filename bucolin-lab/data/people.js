// Everyone in the lab, group by group, in the order they appear on the page.
//
// Faculty:   id, name, role, and url if their name should link to a profile page.
//            The Turkish wording for "Co-Supervisor" has not been settled yet,
//            so it has no tr and shows in English for now.
// Students:  name, and then either advisors or from.
//            advisors is a list of faculty ids, so an advisor's name is typed once.
//            from is the school or department, for students from outside the institute.
// Alumni:    name, plus any of degree, year, thesis, advisors and now.
//
// Texts with an en and a tr version sit between backticks (`like this`).

const FACULTY = [
  {
    id: 'ozates',
    name: 'Şaziye Betül Özateş',
    role: { en: `Head of BUCOLIN LAB`, tr: `BUCOLIN LAB Yöneticisi` },
    url: 'https://dsai.bogazici.edu.tr/en/personel/saziye-betul-ozates/5899/5053',
  },
  {
    id: 'atlamaz',
    name: 'Ümit Atlamaz',
    role: { en: `Co-Supervisor` },
  },
  {
    id: 'atam',
    name: 'Ercan Atam',
    role: { en: `Co-Supervisor` },
    url: 'https://dsai.bogazici.edu.tr/en/personel/ercan-atam/5058/5053',
  },
];

const PHD_STUDENTS = [
  { name: 'Dilara Zeynep Gürer', advisors: ['ozates', 'atlamaz'] },
  { name: 'Nureddin Cüneyd Ünal', advisors: ['ozates'] },
];

const MS_STUDENTS = [
  { name: 'Necip Fazıl Ergün', advisors: ['ozates', 'atlamaz'] },
  { name: 'Kutsal Gündüz', advisors: ['ozates'] },
  { name: 'Ahmet Gürbüz', advisors: ['ozates'] },
  { name: 'Elifnur Polat', advisors: ['ozates'] },
  { name: 'Mustafa Alperen Öztürk', advisors: ['ozates'] },
  { name: 'Kevser Taştan', advisors: ['ozates'] },
];

const BACHELOR_STUDENTS = [
  {
    name: 'Tarık Emre Tıraş',
    from: { en: `Dept. of Linguistics`, tr: `Dilbilimi Bölümü` },
  },
  {
    name: 'Ada Cengiz',
    from: { en: `Dept. of Linguistics`, tr: `Dilbilimi Bölümü` },
  },
  {
    name: 'Alara Elif Özsu',
    from: {
      en: `German Translation and Interpreting, Hacettepe University`,
      tr: `Almanca Mütercim ve Tercümanlık, Hacettepe Üniversitesi`,
    },
  },
];

const HIGH_SCHOOL_STUDENTS = [
  {
    name: 'Ece Yurtseven',
    from: { en: `Robert College`, tr: `Robert Kolej` },
  },
  {
    name: 'Baki Berkay Altunkaynak',
    from: {
      en: `Huseyin Avni Sozen Anatolian High School (IB Programme)`,
      tr: `Hüseyin Avni Sözen Anadolu Lisesi (IB Programı)`,
    },
  },
];

const ALUMNI = [
      {
    name: 'Şükrü Onur Yiğit',
    year: 2026,
    degree: { en: `MS`, tr: `Yüksek Lisans` },
    thesis: 'Multilingual IT Support Tickets Classification via Applying Deep Learning- Based Topic Modeling Techniques',
    advisors: ['ozates'],
  },
    {
    name: 'Ece Elif Adak',
    year: 2026,
    degree: { en: `MS`, tr: `Yüksek Lisans` },
    thesis: 'Exploring the Relationship Between X/Twitter Activity and Stock Market Performance of BIST100 Index in Turkiye',
    advisors: ['ozates'],
  },
  {
    name: 'Enes Köser',
    year: 2026,
    degree: { en: `MS`, tr: `Yüksek Lisans` },
    thesis: 'Deep Learning-Based Public Transport Demand Forecasting',
    advisors: ['ozates'],
  },
  {
    name: 'Efe Eren Genç',
    now: {
      en: `M.S. student at Saarland University`,
      tr: `Saarland Üniversitesi’nde yüksek lisans öğrencisi`,
    },
  },
];
