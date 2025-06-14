# Research Interests (Future)

Looking ahead, I want to explore systems that sit at the intersection of fairness, automation, and high-stakes decision-making. If you're working on adjacent topics and want to collaborate, get in [contact](/contact)!

There are several areas I'm keen on diving deeper into in the future:

* L(L)M's / Foundation models for data beyond text and image, especially on medical data (e.g. cytometry)
* LLM's as interactive agents for AutoML, model auditing, and decision support
* Interactive/Human in the Loop and Fairness-aware AutoML systems
* Causality- & fairness-aware AutoML
* Integrating AutoML and Causality
* Better and more realistic benchmarks for asynchronous & noisy HPO/NAS


I’m especially interested in where things break—when models drift, benchmarks mislead, or optimization leads to unintended incentives. 

# Previous Work

Throughout my PhD I researched several topics with the overarching goal to robustify, simplify and improve machine learning for non-expert users.
This website only shows a selected subset of my work, please refer to my [google scholar](https://scholar.google.de/citations?user=GLgMzvEAAAAJ&hl=en) profile for an up-to-date and more comprehensive overview.

{{< figure src="overview.png" alt="Overview of research interests">}}


## AutoML

**Abstract:** My interests in AutoML are mainly in meta-learning and hyperparameter optimization (HPO). The goal there is to improve existing HPO optimizers or to figure out if (and how) we can use results from previous experiments to jumpstart optimization on a new dataset. I am similarly interested in developing AutoML beyond its current scope, e.g. by extending AutoML systems towards optimizing multiple criteria such as *fairness* or *interpretability*.

**Selected Publication(s):**
- **F. Pfisterer\***, L. Schneider*, J. Moosbauer, M. Binder, and B. Bischl. YAHPO Gym - Design Criteria and a new multifidelity Benchmark for Hyperparameter Optimization, 2022 1st International Conference on Automated Machine Learning.
<br>[LINK](https://arxiv.org/abs/2109.03670)<br>
- P. Gijsbers*, **F. Pfisterer\***, J. N. van Rijn, B. Bischl, and J. Vanschoren. Meta-learning
for symbolic hyperparameter defaults. In 2021 Genetic and Evolutionary Computa-
tion Conference Companion (GECCO ’21 Companion), Lile, France, 2021. ACM
<br>[LINK](https://arxiv.org/abs/2106.05767)<br>
- **F. Pfisterer**, J. N. van Rijn, P. Probst, A. Müller, and B. Bischl. Learning multiple defaults for machine learning algorithms. In 2021 Genetic and Evolutionary
Computation Conference Companion (GECCO ’21 Companion), Lile, France, 2021.
ACM
<br>[LINK](https://arxiv.org/abs/1811.09409)<br>
- **F. Pfisterer**, S. Coors, J. Thomas, and B. Bischl. Multi-objective automatic machine learning with AutoxgboostMC. Automating Data Science Workshop at ECML 2019

## Algorithmic Fairness

**Abstract:** My interests in fairness are mostly of practical nature. In my opinion, models that lead to decisions about individuals are already widely deployed (e.g. in credit risk assessment, criminal justice, ...) and we need to provide practitioners with the knowledge and tools to assess models with respect to potential biases as well as avenues towards alleviating such problems. I am therefore interested in whether bias can be reliably identified in models and whether bias mitigation strategies reliably reduce biases. In the future I would like to work on the intersection of fairness and AutoML with the hope to provide practitioners with better tooling for bias assessment and mitigation.

**Selected Publication(s):** 
- H. Weerts*, **F. Pfisterer\***, Matthias Feurer, Katharina Eggensperger, Edward Bergman, Noor Awad, Joaquin Vanschoren, Mykola Pechenizkiy, Bernd Bischl, Frank Hutter. 
Can Fairness be Automated? Guidelines and Opportunities for Fairness-aware AutoML,
In Journal of Artificial Intelligence Research 79 (2024): 639-677.
<br>[LINK](https://arxiv.org/abs/2303.08485)<br>
- A. Agrawal, **F. Pfisterer**, B. Bischl, J. Chen, S. Sood, S. Shah, F. Buet-Golfouse, B. A. Mateen, and S. Vollmer. Debiasing classifiers: is reality at variance with expectation? 2020.
<br>[LINK](https://arxiv.org/abs/2011.02407)<br>
- S. Dandl*, **F. Pfisterer\***, and B. Bischl. Multi-objective counterfactual fairness. In 2022 Genetic and Evolutionary Computation Conference Companion
(GECCO ’22 Companion), Lile, France, 2022. ACM
<br>[LINK](https://dl.acm.org/doi/abs/10.1145/3520304.3528779)<br>
- **F. Pfisterer**, S. Wei, S. Vollmer M. Lang and B. Bischl. Fairness Audits And Debiasing Using
mlr3fairness
<br>[LINK](https://github.com/mlr-org/mlr3fairness)<br>


## Benchmarking

**Abstract:** With the increasing amount of publications proposing new methods, it is often hard to discern methodological advances in the general field from methods that only work in limited, small domains. Benchmarks can provide an unbiased view on this progress and allow readers to select methods that robustly work across several settings.
This is especially important for practitioners that lack time and knowledge to implement a variety of methods or to prevent bloating the amount of methods implemented in AutoML tools.

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

## Software

**Abstract:** Last but not least, I enjoy developing Open Source software. During my PhD, I have (co-)developed several extensions for the [mlr3](https://github.com/mlr-org/mlr3) ecosystem and contributed to even more. 

**Selected Software/Publication(s):** 
- [mlr3pipelines](https://github.com/mlr-org/mlr3pipelines/): Machine learning pipelines for **mlr3**.<br>
    M. Binder, **F. Pfisterer**, M. Lang, L. Schneider, L. Kotthoff, and B. Bischl. mlr3pipelines - flexible machine learning pipelines in R. Journal of Machine Learning Research, 22(184):1–7, 2021
- [mcboost](https://github.com/mlr-org/mcboost/): Multi-calibration and multi-accuracy boosting.<br>
    **F. Pfisterer**, C. Kern, S. Dandl, M. Sun, M. P. Kim, and B. Bischl. mcboost: Multi-
    calibration boosting for R. Journal of Open Source Software, 6(64):3453, 2021
- [mlr3fairness](https://github.com/mlr-org/mlr3fairness/): Bias Audits for **mlr3**.<br>
    **F. Pfisterer**, S. Wei, S. Vollmer M. Lang and B. Bischl. Fairness Audits And Debiasing Using
    mlr3fairness
- [mlr3keras](https://github.com/mlr-org/mlr3keras/): Deep Learning with **keras** and **mlr3**.<br>
  A first attempt to integrate **keras** with mlr3. Superseded by [mlr3torch](https://github.com/mlr-org/mlr3torch).


---
\* indicates equal contribution