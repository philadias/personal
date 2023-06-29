---
toc: true
layout: post
classes:
 - landing 
 - dark-theme
description: Trillion Pixel GeoAI Challenge Workshop
categories: [reflections]
title: Trillion Pixel GeoAI Challenge Workshop
---

Last week I had the privilege to participate as a panelist in the "Trillion-Pixel GeoAI Challenge” Workshop hosted at ORNL. A quite unique aspect of this workshop is the presence of experts from academia, national laboratories, large private sector companies such as NVIDIA/IBM, startups, data providers such as Planet/Maxar/Umbra, as well as government agencies such as NASA, NGA, USGS and DHS. 

It has been about 2 years since I started my “migration” to the GeoAI domain, where the expertise on AI and Computer Vision techniques that I’ve been gathering over my career has been meeting the remote sensing and geospatial data analysis domains. As such, it was very fulfilling to engage in face-to-face conversations with some of the greatest researchers and organizations in this domain. 

Our work is underway on preparing a Workshop Report that captures the great discussions that took place in the 2-days of workshop. Below I present some *personal* takeaways, which are likely to be less thorough (and not as well written) than the upcoming report, and may reflect different opinions.

**Some of my main takeaways:**

Of course, multiple discussions of revolved around “Foundation Models”, in particular in the “AI Foundations” panel that I was part of with colleagues from NASA, NVIDIA, DHS and IBM. Topics ranged from the “foundation” nomenclature itself, to more targeted discussions on main building blocks/aspects toward Foundation Models for GeoAI.

I tend to summarize these key “ingredients” as 

1. Large/diverse unlabeled datasets
2. Suitable self-supervised pretraining objectives
3. Parallelizable/scalable model architectures
4. Supercomputer-level high performance computing (HPC) resources
5. Downstream adaptation & evaluation protocols

In addition to these 5 main ingredients, we highlighted how our team sees *Multimodal reasoning* as a key missing capability needed to enable effective FMs for GeoAI. We are definitely not alone in this view, as multiple comments from other panelists and the audience also revolved around multiple dimensions of multimodality. How to design models capable of handling vector-based representations? How to enable joint reasoning with optical, SAR, hyperspectral images? How to infuse spatiotemporal reasoning within such models? 

Another well-known issue is how the development of such very large models has been restricted to large profit-oriented companies, such that major conflicts of interest arise when it comes to improving transparency, risks/biases assessment and mitigation, privacy, sustainability and overall democratization of such tools. Ideally, experts with less biased interest and a variety of backgrounds should be enabled to act as consultants when it comes to informing decision-makers and society at large about capabilities and limitations/risks of such models.

We argued on how ORNL as non-profit institution with expertise in GeoAI area and the availability of Summit and Frontier supercomputers could play an important role on development and assessment of FM-like models for GeoAI. More than just making larger models and dumping more data, the development of pretraining objectives that leverage domain-specific characteristics from geospatial data is something I’m particularly interested at. 

From the perspective of model assessment, the R&D of evaluation protocols will only increase in importance. Rather than a single “accuracy-like” benchmark metric that everyone tries to squeeze +0.1% at all costs, efforts such as the [HELM benchmark](https://crfm.stanford.edu/helm/latest/) and the recent [Draft EU AI Act](https://www.europarl.europa.eu/news/en/headlines/society/20230601STO93804/eu-ai-act-first-regulation-on-artificial-intelligence) are informative examples on how several aspects/requirements need to be measured and documented to enable decision making on when/where to use different models. In addition to working with domain-experts and affected communities to develop suitable disaggregated evaluations, the traceability of the data used for training, transparency of energy costs, risk assessment, standardized documentation, and developing mechanisms for informative visualizations are some important aspects needed in this context. 

Discussions around open science were very rich with the presence of academics, private sector, as well as agencies with different core policies. It’s great to have institutions like NASA pushing for open-science/data, but it’s also clear how we still lack more incentives to enable and support open-source efforts as a community, and in a way that doesn’t rely so much on workers having to put passion hours to give back to the community.

Finally, the discussion on outreach for recruiting talent for GeoAI domains and better informing the general public around activities in this domain was another highlight for me. It’s difficult for academic departments to recruit and form students interested in this domain, and even harder for agencies, national labs and smaller companies in the GeoAI domain to hire them given the competition with richer companies from the broader “AI world”. For those of you with AI expertise and searching for an application domain that combines interesting research questions and opportunities for meaningful impact, take a look at the GeoAI domain. I’ve been having fun these last two years.
