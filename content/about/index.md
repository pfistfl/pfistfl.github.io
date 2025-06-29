---
date: 2023-01-01
draft: false
---

{{< card >}}
<section id="about">

# <i class="fas fa-user"></i> About

<!-- Fun fact: Florian always wears blue trousers with blue shirts on saturdays -->

I'm a statistician and AI/ML engineer, currently leading ML at [hema.to](https://hema.to). My work focuses on AI for clinical diagnostics, with a passion for robust, fair, and accountable machine learning.

**Key interests:** Foundation models in medicine, fairness, and real-world AI deployment.

[More about my research →](/research) | [See my open-source projects →](/software)

Feel free to reach out via the [contact page](/contact).

### <i class="fas fa-lightbulb"></i> What I care about

Within my current role, I'm especially interested in applying foundation models and LLMs to clinical workflows—how we can fine-tune or prompt them to support high-stakes medical decision-making under regulatory constraints.

* Building systems that actually hold up in the real world
* Ensuring systems are fair and align with regulations 
* Figuring out how humans and algorithms miss-align -- and how to fix it
* Making sure models don't just fail unpredictably
* Building foundational model for the bio / medical space -- the weirder the data, the more interesting

<span class="secondary-text">
Previously I enjoyed researching the practical aspects of algorithmic fairness and how practitioners can be enabled to develop more equitable algorithms.
One aspect I find highly fascinating is the intersection of humans and algorithms -- how incentives, KPIs, and decision processes shape real-world AI performance. I use systems thinking and goal alignment frameworks to anticipate and address such unintended consequences in ML deployment.
</span>

### <i class="fas fa-briefcase"></i> Experience

* **Team Lead AI**, ([hema.to](https://hema.to), current)
  * Building ML systems for clinical diagnostic support (cytometry).
  * Making the most of our data -- optimize tooling, including agentic/LLM workflows, ensure high quality data labelling to speed up development.
  * Ensuring our systems are aligned with required regulations (IVDR, AI Act).
  * Interfacing and aligning with customers to ensure our models deliver real diagnostic value.
  * Aligning AI development with internal and external stakeholders and across multi-disciplinary teams.

* **Freelance**, various clients
  * Teaching courses on topics at the intersection of statistics, computer science and AI
  * AI / ML consulting


<span class="secondary-text">See my CV / Linkedin for a full list.</span>

### <i class="fas fa-graduation-cap"></i> Background 

Prior to starting my PhD I completed a B.Sc. as well as a M.Sc. in Statistics at [LMU Munich](https://www.lmu.de/en/) with two exchanges at [Universidad Complutense de Madrid](https://www.ucm.es/) and [Universitat Politècnica de Catalunya](https://www.upc.edu/en) (Barcelona).

Throughout my studies I worked part time at several companies such as [Telefónica Germany](https://www.telefonica.de/) where I worked on automated quality control for data bases, risk scoring and text analytics. During my master's thesis at the [Bosch Center for Artificial Intelligence (BCAI)](https://www.bosch-ai.com/) I worked on a method for anomaly detection in time-series data. Before finishing my degree, I interned at [Telefónica Alpha](https://www.telefonicaalpha.com/) in Barcelona working on a moonshot project related to mental health and personal wellbeing. During my PhD I interned with [Roche Pharma](https://www.roche.com/) in personalised healthcare working on domain generalization for clinical survival models.

During my PhD i furthermore freelanced in several capacities, e.g. giving [programming, machine learning / deep learning|](https://www.essentialds.de/) #courses at several DAX companies but also applied machine learning/computer vision projects .</span>

I'm open to collaboration around high-stakes AI systems.
Feel free to reach out if you want to discuss AI for cytometry, foundation models in the bio-med field or building software in the clinical space and other topics!

### <i class="fas fa-chalkboard-teacher"></i> Teaching 
I am currently teaching the Innovation Lab Big Data Science where I supervise student groups on machine learning and data science software development projects provided by companies, NGO's and research institutions.

</section>
{{< /card >}}

{{< card >}}
<section id="research">

# <i class="fas fa-flask"></i> Research

### Research Interests (Future)

Looking ahead, I want to explore systems that sit at the intersection of fairness, automation, and high-stakes decision-making. If you're working on adjacent topics and want to collaborate, get in [contact](/contact)!

There are several areas I'm keen on diving deeper into in the future:

* L(L)M's / Foundation models for data beyond text and image, especially on medical data (e.g. cytometry)
* LLM's as interactive agents for AutoML, model auditing, and decision support
* Interactive/Human in the Loop and Fairness-aware AutoML systems
* Causality- & fairness-aware AutoML
* Integrating AutoML and Causality
* Better and more realistic benchmarks for asynchronous & noisy HPO/NAS

<span class="secondary-text">I'm especially interested in where things break—when models drift, benchmarks mislead, or optimization leads to unintended incentives.</span> 

### Previous Work

<span class="secondary-text">Throughout my PhD I researched several topics with the overarching goal to robustify, simplify and improve machine learning for non-expert users.
This website only shows a selected subset of my work, please refer to my [google scholar](https://scholar.google.de/citations?user=GLgMzvEAAAAJ&hl=en) profile for an up-to-date and more comprehensive overview.</span>

{{< figure src="overview.png" alt="Overview of research interests">}}

#### AutoML

<span class="secondary-text">**Abstract:** My interests in AutoML are mainly in meta-learning and hyperparameter optimization (HPO). The goal there is to improve existing HPO optimizers or to figure out if (and how) we can use results from previous experiments to jumpstart optimization on a new dataset. I am similarly interested in developing AutoML beyond its current scope, e.g. by extending AutoML systems towards optimizing multiple criteria such as *fairness* or *interpretability*.</span>

**Selected Publication(s):**
- **F. Pfisterer\***, L. Schneider*, J. Moosbauer, M. Binder, and B. Bischl. YAHPO Gym - Design Criteria and a new multifidelity Benchmark for Hyperparameter Optimization, 2022 1st International Conference on Automated Machine Learning.
<br>[LINK](https://arxiv.org/abs/2109.03670)<br>
- P. Gijsbers*, **F. Pfisterer\***, J. N. van Rijn, B. Bischl, and J. Vanschoren. Meta-learning
for symbolic hyperparameter defaults. In 2021 Genetic and Evolutionary Computa-
tion Conference Companion (GECCO '21 Companion), Lile, France, 2021. ACM
<br>[LINK](https://arxiv.org/abs/2106.05767)<br>
- **F. Pfisterer**, J. N. van Rijn, P. Probst, A. Müller, and B. Bischl. Learning multiple defaults for machine learning algorithms. In 2021 Genetic and Evolutionary
Computation Conference Companion (GECCO '21 Companion), Lile, France, 2021.
ACM
<br>[LINK](https://arxiv.org/abs/1811.09409)<br>
- **F. Pfisterer**, S. Coors, J. Thomas, and B. Bischl. Multi-objective automatic machine learning with AutoxgboostMC. Automating Data Science Workshop at ECML 2019

#### Algorithmic Fairness

<span class="secondary-text">**Abstract:** My interests in fairness are mostly of practical nature. In my opinion, models that lead to decisions about individuals are already widely deployed (e.g. in credit risk assessment, criminal justice, ...) and we need to provide practitioners with the knowledge and tools to assess models with respect to potential biases as well as avenues towards alleviating such problems. I am therefore interested in whether bias can be reliably identified in models and whether bias mitigation strategies reliably reduce biases. In the future I would like to work on the intersection of fairness and AutoML with the hope to provide practitioners with better tooling for bias assessment and mitigation.</span>

**Selected Publication(s):** 
- H. Weerts*, **F. Pfisterer\***, Matthias Feurer, Katharina Eggensperger, Edward Bergman, Noor Awad, Joaquin Vanschoren, Mykola Pechenizkiy, Bernd Bischl, Frank Hutter. 
Can Fairness be Automated? Guidelines and Opportunities for Fairness-aware AutoML,
In Journal of Artificial Intelligence Research 79 (2024): 639-677.
<br>[LINK](https://arxiv.org/abs/2303.08485)<br>
- A. Agrawal, **F. Pfisterer**, B. Bischl, J. Chen, S. Sood, S. Shah, F. Buet-Golfouse, B. A. Mateen, and S. Vollmer. Debiasing classifiers: is reality at variance with expectation? 2020.
<br>[LINK](https://arxiv.org/abs/2011.02407)<br>
- S. Dandl*, **F. Pfisterer\***, and B. Bischl. Multi-objective counterfactual fairness. In 2022 Genetic and Evolutionary Computation Conference Companion
(GECCO '22 Companion), Lile, France, 2022. ACM
<br>[LINK](https://dl.acm.org/doi/abs/10.1145/3520304.3528779)<br>
- **F. Pfisterer**, S. Wei, S. Vollmer M. Lang and B. Bischl. Fairness Audits And Debiasing Using
mlr3fairness
<br>[LINK](https://github.com/mlr-org/mlr3fairness)<br>

#### Benchmarking

<span class="secondary-text">**Abstract:** With the increasing amount of publications proposing new methods, it is often hard to discern methodological advances in the general field from methods that only work in limited, small domains. Benchmarks can provide an unbiased view on this progress and allow readers to select methods that robustly work across several settings.
This is especially important for practitioners that lack time and knowledge to implement a variety of methods or to prevent bloating the amount of methods implemented in AutoML tools.</span>

**Selected Publication(s):** 
- **F. Pfisterer**, C. Harbron, G. Jansen, and T. Xu. Evaluating domain generalization
for survival analysis in clinical studies. In G. Flores, G. H. Chen, T. Pollard, J. C.
Ho, and T. Naumann, editors, Proceedings of the Conference on Health, Inference,
and Learning, volume 174 of Proceedings of Machine Learning Research, pages 32–47.
PMLR, 07–08 Apr 2022
<br>[LINK](https://proceedings.mlr.press/v174/pfisterer22a.html)<br>
- **F. Pfisterer**, L. Beggel, X. Sun, F. Scheipl, and B. Bischl. Benchmarking time series
classification – functional data vs machine learning approaches, 2019
<br>[LINK](https://arxiv.org/abs/1911.07511)<br>
- F. Pargent, **F. Pfisterer**, J. Thomas, and B. Bischl. Regularized target encoding
outperforms traditional methods in supervised machine learning with high cardinality
features. Computational Statistics, pages 1–22, 2022
<br>[LINK](https://arxiv.org/abs/2104.00629)<br>

---
</section>
{{< /card >}}

{{< card >}}
<section id="software">

# <i class="fas fa-code"></i> Software

<span class="secondary-text">I enjoy developing Open Source software and currently do so mostly in R and Python.<br>
During my PhD, I have (co-)developed several extensions for the [mlr3](https://github.com/mlr-org/mlr3) ecosystem and contributed to several others.</span> 

### mlr3

- [mlr3pipelines](https://github.com/mlr-org/mlr3pipelines/): Machine learning pipelines for **mlr3**.<br>
    M. Binder, **F. Pfisterer**, M. Lang, L. Schneider, L. Kotthoff, and B. Bischl. mlr3pipelines - flexible machine learning pipelines in R. Journal of Machine Learning Research, 22(184):1–7, 2021
- [mlr3fairness](https://github.com/mlr-org/mlr3fairness/): Bias Audits for **mlr3**.<br>
    **F. Pfisterer**, S. Wei, S. Vollmer M. Lang and B. Bischl. Fairness Audits And Debiasing Using
    mlr3fairness
- [mlr3keras](https://github.com/mlr-org/mlr3keras/): Deep Learning with **keras** and **mlr3**.<br>
  A first attempt to integrate **keras** with mlr3. Superseded by [mlr3torch](https://github.com/mlr-org/mlr3torch).
- [mlr3torch](https://github.com/mlr-org/mlr3torch/): Deep Learning with **torch** and **mlr3**.<br>
  I help developing mlr3torch mainly in a supervisory capacity.

### R

- [mlr3pipelines](https://github.com/mlr-org/mlr3pipelines/) 
  Machine learning pipelines for **mlr3**.
- [mlr3fairness](https://github.com/mlr-org/mlr3fairness/) 
  Auditing, visualization and bias mitigation for learners from **mlr3**.
- [Deepregression](https://github.com/neural-structured-additive-learning/deepregression): Fitting Semi-Structured Deep Distributional Regression in R
- [mcboost](https://github.com/mlr-org/mcboost/): Multi-calibration and multi-accuracy boosting.<br>
    **F. Pfisterer**, C. Kern, S. Dandl, M. Sun, M. P. Kim, and B. Bischl. mcboost: Multi-
    calibration boosting for R. Journal of Open Source Software, 6(64):3453, 2021
- [AutoxgboostMC](https://github.com/ja-thomas/autoxgboostMC):
  A simplistic AutoML system based on tuning **xgboost** models.
- [YAHPO Gym](https://github.com/slds-lmu/yahpo_gym):
  An R Interface to the Pyhon YAHPO Gym library.

### Python 

- [YAHPO Gym](https://github.com/slds-lmu/yahpo_gym):
  A multi-objective multi-fidelity benchmark for HPO optimizers.
  For this paper, I developed software to interface surrogates and a tiny AutoML system that allows fitting surrogate models for use with YAHPO Gym called `yahpo_train`.

### Web

- [MCML](https://mcml.ai/): I created the initial website for the [Munich Center of Machine Learning (MCML)](https://mcml.ai/).
</section>
{{< /card >}}

{{< card >}}
<section id="contact">

# <i class="fas fa-envelope"></i> Contact

<span class="secondary-text">The best way to contact me is via email at **pfistererf+dev@gmail.com**.
I am also part of several Slack/Mattermost channels:

* [mlr-org Mattermost](https://lmmisld-lmu-stats-slds.srv.mwn.de/mlr_invite/)</span>

{{< /card >}}