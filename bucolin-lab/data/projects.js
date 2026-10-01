// Research projects. Ongoing ones first, then the completed ones.
//
//   title    en and tr. Two of the Turkish titles are the registered ones (marked below);
//            the rest are our own translations of the English title.
//   funder   optional, as we usually write it
//   from/to  optional years. Leave "to" out while the project is still running.
//   with     optional: the people we run it with
//   papers   optional: ids from publications.js
//
// When a project ends, move its block down to COMPLETED_PROJECTS and give it a "to" year.

const ONGOING_PROJECTS = [
  {
    title: {
      en: `Towards Accurate Neural Machine Translation for Historical Languages`,
      tr: `Tarihi Diller için Yüksek Doğruluklu Nöral Makine Çevirisine Doğru`,
    },
    funder: 'PRESTIJ 2026',
  },
  {
    title: {
      en: `From Archives to Cultural Landscape`,
      tr: `Arşivlerden Kültürel Peyzaja`,
    },
    funder: 'YÖK ADEP',
    from: 2026,
    with: ['Paolo Girardelli'],
  },
  {
    title: {
      en: `Continual Pre-training of Large Language Models for Historical Language Understanding`,
      tr: `Tarihi Dillerin Anlaşılması için Büyük Dil Modellerinin Sürekli Ön Eğitimi`,
    },
    from: 2025,
  },
  {
    title: {
      en: `Deep Learning-Based Extraction of Antibacterial Nanoparticle Activity in Nanomedicine Literature`,
      tr: `Nanotıp Literatüründen Antibakteriyel Nanoparçacık Etkinliğinin Derin Öğrenme Tabanlı Çıkarımı`,
    },
    with: ['E. S. Turalı-Emre'],
  },
  {
    title: {
      en: `Automatic Processing and Analysis of Kazasker Ruznamçe Records with Digital Methods`,
      // registered title
      tr: `Kazasker Ruznamçe Kayıtlarının Dijital Yöntemlerle İşlenmesi ve Analizi`,
    },
    funder: 'TÜBİTAK 3005',
    from: 2024,
    with: ['E. F. B. Taşdemir'],
  },
  {
    title: {
      en: `Analysis of Calligraphy Artworks Using Artificial Intelligence: Understanding Cultural Heritage and Accessibility`,
      tr: `Hat Sanatı Eserlerinin Yapay Zeka ile Analizi: Kültürel Mirasın Anlaşılması ve Erişilebilirlik`,
    },
    funder: 'TÜBİTAK 3005',
    from: 2026,
    with: ['D. Z. Gürer'],
  },
];

const COMPLETED_PROJECTS = [
  {
    title: {
      en: `Deep Learning-based Exploration of Linguistic Structures and Semantic Entities in Historical Turkish Texts`,
      // registered title
      tr: `Tarihi Türkçe Metinlerde Dilbilimsel Yapıların ve Anlamsal Varlıkların Derin Öğrenme Tabanlı Keşfi`,
    },
    funder: 'BAP',
    from: 2024,
    to: 2026,
    papers: ['ruznamcener', 'ota-boun'],
  },
  {
    title: {
      en: `Development of a Deep Learning-Based Data Expansion Tool for Predicting the Efficacy of Antibacterial Nanoparticles Used in Nanomedicine`,
      tr: `Nanotıpta Kullanılan Antibakteriyel Nanoparçacıkların Etkinliğinin Tahmini için Derin Öğrenme Tabanlı Veri Genişletme Aracının Geliştirilmesi`,
    },
    funder: 'TÜBİTAK BİLGEM',
    from: 2024,
    to: 2025,
    with: ['E. S. Turalı-Emre'],
    papers: ['antibacterial-screening'],
  },
  {
    title: {
      en: `Building Natural Language Processing Resources for Ottoman Turkish`,
      tr: `Osmanlı Türkçesi için Doğal Dil İşleme Kaynaklarının Oluşturulması`,
    },
    from: 2023,
    to: 2025,
    papers: ['foundations', 'ottoman-dependency', 'clean-corpus'],
  },
];
