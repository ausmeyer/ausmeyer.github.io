---
layout: page
title: Research
permalink: /research/
share: false
---

### Science
In the past, I have worked to build predictive models of protein evolution. I was particularly interested in the way protein structure constrains and determines evolution, the evolution and epidemiology of viruses, the way evolution and epidemiology are connected, the tools and models that are used to study evolution, and how large datasets can be used to forecast the emergence and evolution of viruses. When time allows, I try to continue to work in this field.
<br><br>
Here is a word cloud generated from the text of my publications. I think it does a good job outlining what I worked on during graduate school, postdoc, and medical school.
<div style="display:block;text-align:center"><img src="../images/work_wordcloud.png" width='500px'></div>

### Software
In addition to my scientific research interests, I am interested in scientific computing, open science, and computational statistics. I know and program in Python, R, Bash, and C++ as well as some intermittent Mathematica, Matlab, and Tcl/Tk. In addition, the Wilke lab maintains a public git repository of the one-off tools we've produced for various projects. 
<br><br>
[https://github.com/clauswilke/WilkeLabProteinEvolutionToolbox](https://github.com/clauswilke/WilkeLabProteinEvolutionToolbox).
<br><br>
If there is any piece of software that seems related to what we do but is not in the repository I may have it laying around or it may be in a github repository for one of our papers.
  
### Current Research
Currently I'm a medical resident. I try to be as involved as I can be with research. My current interests revolve around chronic disease management and care in indigent populations.

### Past Research in the Wilke Lab
 
#### Time dependence of evolutionary metrics during an emerging influenza virus outbreak
For example, here is a plot of the molecular clock rate versus time. It shows the molecular clock rate of the hemagglutinin protein during the first 25 months of the 2009 pandemic flu outbreak. This work appeared in the journal <i>Virus Evolution</i>.

<div style="display:block;text-align:center"><img src="../images/clock_rate.png"></div>
<font size='2'><b>Molecular clock rate computed by BEAST for pH1 hemagglutinin and pN1 neuraminidase from the pH1N1 outbreak.</b> In panel A, we show the molecular clock rate over time for pH1, and in panel B we show the molecular clock rate over time for pN1. The error bars represent the HPD 95% of the mean, as reported by BEAST. The plot shows a four-fold decline in the substitution rate estimates from single month of data to 25 months of aggregated data. Further, the molecular clock HPD 95% for the first 2 months of data, for both pH1 and pN1, does not overlap the final clock rate, indicating that these early estimates are in no way representative of the long-term estimates.</font>

#### Predicting viral evolution
By combining techniques from bioinformatics, statistical mechanics, biochemistry, molecular biology, and genetics it may be possible to predict the path of viral escape from host challenges. To accomplish this <img src="../images/force_curve.png" style="display:inline;float:left;margin:5px 10px 0px 0px" width="320">we can narrow the field of possible mutations with evolutionary intuition and bioinformatics, build a data set for training an in silico evolutionary algorithm, and test our resulting predictions experimentally.<br>

Our first foray into the field is to use steered molecular dynamics to pull apart the two proteins in a complex several dozens times and calculate the force that was required to successful separate the complex. <br>

The curve is generated with an anchored receptor and a force applied to the viral spike protein in our test system. The plot shows the average interpolated force over the replicas with p-value for difference in maximum force in the bottom left. This work combines folks from Wilke, Ellington, and Sawyer lab. This article has been published in <i>PeerJ</i> and is available <a href="http://dx.doi.org/10.7717/peerj.266">here</a>.<br>

#### Biophysical constraints on protein coding sequence evolution
On a whole genome scale, a direct correlation between relative solvent accessibility (RSA) of sites (amino acids) in proteins and the rate of evolution (measured as rate of non-synonymous versus synonymous substitutions) at that site was established previously <a href="http://mbe.oxfordjournals.org/content/early/2009/07/13/molbev.msp146.short">here</a>, providing a reasonable model for (relatively) neutral mutations.<br>

Fitting the rate versus RSA curve one can find sites that differ significantly from neutrality, then, compare the predictions to the current state-of-the-art methods for functional predictions. Results from this work was published in two separate articles appearing <a href="http://dx.doi.org/10.1093/molbev/mss217">here</a> in <i>Molecular Biology and Evolution</i> and <a href="http://dx.doi.org/10.1098/rstb.2012.0334">here</a> in <i>Philosophical Transactions of the Royal Society B</i>.<br>
<div style="display:block;text-align:center"><img src="../images/ha_plotkin_ave.png"></div>
<font size='2'><b>Plot of dN/dS versus RSA using a model with an expected linear dependence builtin.</b>Red points represent amino acid sites identified in other studies of Hemagglutinin H1. Points that do not fall between show significant deviation from neutrality. Sites above the dashed line in the preceding plots.</font>

### Past Research in the Barrick Lab

#### Population evolutionary simulator
Written in C++, [bpopsim](http://code.google.com/p/bpopsim/), has the ability to output several useful statistics regarding organismal evolution. It may be reasonable to compare this to something like the relative frequency of simultaneously sweeping mutations in a laboratory evolution experiment.<br>

Below are some preliminary results from my test runs with bpopsim. The genotype frequencies plot was assembled and plotted in R.<br>
<div style="display:block;text-align:center"><img src="../images/muller_lod_gray_2.png"></div>
<font size='2'><b>Evolutionary simulation of an asexual constant size population utilizing bpopsim code.</b> Blue tones show the line of descent to the final dominant genotype. Gray tones represents all lineages that died out.</font>

### Past Research in the Sutton Lab
My master's work, in structural biology, was completed in the lab of Dr. Bryan Sutton at Texas Tech University Health Sciences Center in Lubbock, TX. I crystallized several novel constructs of the human proteins Synaptotagmin-1 and Dysferlin; I also used fluorescence spectroscopy to measure the potential for calcium binding of each domain in the proteins.
