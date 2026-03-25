Hi! I am an assistant professor at the [Institute for Data Science and Artificial Intelligence](https://dsai.boun.edu.tr/) at [Boğaziçi University](https://www.boun.edu.tr/) who specializes in natural language processing and machine learning.  

I have received my bachelor's degree and master's degree from the [Department of Computer Engineering](https://www.cmpe.boun.edu.tr/) at [Boğaziçi University](https://www.boun.edu.tr/). I completed my PhD studies in the same place under the guidance of [Dr. Arzucan Özgür](https://www.cmpe.boun.edu.tr/~ozgur/) and [Dr. Tunga Güngör](https://www.cmpe.boun.edu.tr/~gungort/). Previously, I worked as a researcher at the [Institute of Natural Language Processing](https://www.ims.uni-stuttgart.de/) at the [University of Stuttgart](https://www.uni-stuttgart.de/). I also worked at [KUIS AI Center](https://ai.ku.edu.tr/) as a post-doctoral research fellow working on [automatic learning of procedural language from natural language instructions](https://gozdesahin.github.io/projects/tubitak2232).

## Publications

To see my publication record please check out my [Google Scholar profile](https://scholar.google.com/citations?user=EAlmj9yYJP0C&hl=en&oi=ao).

## Software and Data

### Turkish NLP Resources

#### BOUN Treebank: 
Extracted from Turkish National Corpus (TNC), BOUN Treebank consists of 9,761 syntactically annotated sentences (121,214 tokens) from five different text types: Biographical texts, national newspapers, instructional texts, popular culture articles, and essays. [treebank](https://tulap.cmpe.boun.edu.tr/repository/xmlui/handle/20.500.12913/33), [paper](https://link.springer.com/article/10.1007/s10579-021-09558-0).

#### IMST Treebank:  
IMST Treebank consists of 5,635 syntactically annotated sentences collected from daily news reports and novels. [treebank](https://github.com/UniversalDependencies/UD_Turkish-IMST), [paper](https://aclanthology.org/W19-8013.pdf).

#### PUD Treebank:
This is the most updated version of the UD_Turkish-PUD treebank which was originally a part of the Parallel Universal Dependencies (PUD) treebanks created for the CoNLL 2017 shared task on Multilingual Parsing from Raw Text to Universal Dependencies. It consists of 1,000 sentences that were parallel annotated for 18 languages. [treebank](https://github.com/UniversalDependencies/UD_Turkish-PUD), [paper](https://aclanthology.org/W19-4019.pdf).

### Historical Turkish NLP Resources:

#### OTA-BOUN Treebank:
This is the first Ottoman Turkish dependency treebank in the Universal Dependencies (UD) annotation style. The OTA-BOUN Treebank currently includes 1,742 manually annotated sentences from twelve different texts by ten different writers. All of the texts are from literature published between 1880 and 1928. [treebank](https://github.com/UniversalDependencies/UD_Ottoman_Turkish-BOUN/tree/dev), [paper-coming soon].

#### OTC Corpus:
Ottoman Text Corpus is a clean corpus of transliterated historical Turkish texts that spans a wide range of historical periods. Currently OTC encompasses a total of 11 million tokens. [corpus](https://huggingface.co/datasets/BUCOLIN/OTC-Corpus), [paper](https://arxiv.org/abs/2501.04828).

#### HisTR NER Dataset:  
HisTR is the first named entity recognition (NER) dataset for historical Turkish, comprising 812 sentences from the 17th to the 19th centuries. PERSON, LOCATION, and ORGANIZATION entities are manually labeled within the dataset. [dataset](https://huggingface.co/datasets/BUCOLIN/HisTR), [paper-coming soon].

#### RuznamceNER Dataset:
RuznamceNER is a manually annotated NER dataset derived from Kazasker Ruznamçe documents spanning two centuries. The sentences are extracted from transcripts of three ruznamçe volumes from the years 1603, 1720 and 1807. The dataset contains 2,138 sentences and a total of 8,730 annotated entities of types PERSON, LOCATION, and ORGANIZATION. [dataset](https://huggingface.co/datasets/BUCOLIN/RuznamceNER).

### Tools

#### BOUN-Pars:
BOUN-Pars is a Turkish dependency parser that creates parse trees of Turkish sentences in CoNLL-U format. It employs an LSTM-based model and uses linguistically oriented rules and morphological information of words. [code](https://github.com/sb-b/BOUN-PARS), [demo](https://tabilab.cmpe.boun.edu.tr/BOUN-PARS/demo.php), [paper](https://ieeexplore.ieee.org/abstract/document/9869804).

#### Semi-supervised Deep Dependency Parser: 
This dependency parser employs a semi-supervised learning approach "DCST" and utilizes auxiliary tasks for dependency parsing of code-switched (CS) language pairs (and low-resource languages, in general). There are two versions of the parsing model, one is LSTM-based and the other is XLM-R-based. [code](https://github.com/sb-b/ss-cs-depparser), [paper](https://aclanthology.org/2022.findings-naacl.87/).

#### Sentence Similarity Kernels:
These methods use the dependency grammar representations of sentences to compute sentence similarity for extractive multi-document summarization. 
[code](https://github.com/sb-b/SentenceSimKernels), [paper](https://aclanthology.org/L16-1452/).

#### Language-aware Morphological Tagger for Code-switched Languages:
This repository contains a language-aware morphological parser implementation which utilizes an XLM-R model for code-switched language pairs. [paper](https://aclanthology.org/2021.calcs-1.10/),[code](https://github.com/sb-b/steps-parser)


### Biomedical NLP Resources:

#### AINA Dataset:  
AINA is a novel dataset for automated screening in the domain of Antibacterial Nanoparticles from our work titled "Automated Screening of Antibacterial Nanoparticle Literature: Dataset Curation and Model Evaluation". [dataset](https://github.com/alperenmo/AINA_Dataset), [paper](https://aclanthology.org/2026.eacl-long.20/).

#### Trained BioBERT and SVM classifiers for screening Antibacterial Nanoparticle literature:
This [repo](https://github.com/alperenmo/AINA_Dataset/tree/main/models) contains Python implementations for the best performing models BioBERT and SVM with TF-IDF classifiers from this [paper](https://aclanthology.org/2026.eacl-long.20/).


