---
layout: page
title: Publications
permalink: /publications/
share: false
link-years:
  - 2017
  - 2016
  - 2015
  - 2014
  - 2013
  - 2012
  - Before 2012
  - Opinion
  - Talks
  - Posters
---

{% comment %} Script required for altmetric embed. {% endcomment %}  
<script type='text/javascript' src='https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js'></script>
  
{% comment %} Navigation shortcut. {% endcomment %}  
<p>
{% for year in page.link-years %}
<a href="/publications/#{{ year }}">{{ year }}</a>&nbsp;&nbsp;&nbsp;
{% endfor %}
</p><br>

### Peer Reviewed
  <ol reversed>
    {% for pub in site.data.peer_review %}
      {% if year != pub.year %}
        {% assign year = pub.year %}
        <a class="anchor" id="{{ year }}"><h4>{{ year }}</h4></a>
      {% endif %}
      <li>
        {% if pub.year == "Before 2012" %}
          {{ pub.author }}. {{ pub.title }}. {{ pub.ref }}.
        {% elsif pub.year != "Before 2012" %}
          {{ pub.author }} ({{ pub.year }}). {{ pub.title }}. {{ pub.ref }}.
        {% endif %}
        {% if pub.doi %}
          <br/>doi: <a href="http://dx.doi.org/{{ pub.doi }}">{{pub.doi}}</a>&nbsp;&nbsp; 
        {% endif %}
        {% if pub.pmcid %}
          <br/>pmcid: <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/{{ pub.pmcid }}">{{pub.pmcid}}</a>&nbsp;&nbsp; 
        {% endif %}
        
        {% if pub.doi %}
        <div style="display: inline" data-badge-popover="right" data-badge-type="4" data-doi="{{pub.doi}}" data-hide-no-mentions="true" class="altmetric-embed"></div>
        {% endif %}
        
        {% if pub.link %}
          <br/>links: <a href="{{ pub.link }}">{{pub.text}}</a>&nbsp;&nbsp; 
        {% endif %}
      </li><br>
    {% endfor %}
  </ol>

<a class="anchor" id="Opinion"></a>

### Opinion
  {% assign opinion_count = site.data.opinion.size %}
  
  <ol reversed>
    {% for pub in site.data.opinion %}
      <li>
        {{ pub.author }} ({{ pub.year }}). {{ pub.title }}. {{ pub.ref }}.
        {% if pub.doi %}
          <br/>doi: <a href="http://dx.doi.org/{{ pub.doi }}">{{pub.doi}}</a>&nbsp;&nbsp; 
        {% endif %}
        {% if pub.pmcid %}
          <br/>pmcid: <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/{{ pub.pmcid }}">{{pub.pmcid}}</a>&nbsp;&nbsp; 
        {% endif %}
        
        {% if pub.doi %}
        <div style="display: inline" data-badge-popover="right" data-badge-type="4" data-doi="{{pub.doi}}" data-hide-no-mentions="true" class="altmetric-embed"></div>
        {% endif %}
        
        {% if pub.link %}
          <br/>links: <a href="{{ pub.link }}">{{pub.text}}</a>&nbsp;&nbsp; 
        {% endif %}
      </li><br>
    {% endfor %}
  </ol>


<a class="anchor" id="Talks"></a>

### Invited Talks
  {% assign count = site.data.invited_talks.size %}
  
  <ol reversed>
    {% for pub in site.data.invited_talks %}
      <li> 
        {{ pub.author }} ({{ pub.year }}). {{ pub.title }}. {{ pub.location }}.<br/>
      </li><br>
    {% endfor %}
  </ol>

<a class="anchor" id="Posters"></a>  

### Poster Presentations

  {% assign count = site.data.poster_presentations.size %}
  
  <ol reversed>
    {% for pub in site.data.poster_presentations %}
      <li>
        {% if pub.note != null %}
          {{ pub.author }} ({{ pub.year }}). {{ pub.title }}. {{ pub.location }}. <b>{{ pub.note }}</b> <br/>
        {% else %}
          {{ pub.author }} ({{ pub.year }}). {{ pub.title }}. {{ pub.location }}.<br/>
        {% endif %}
      </li><br>
    {% endfor %}
  </ol>
