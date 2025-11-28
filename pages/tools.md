---
header_transparent: true
layout: basic
permalink: /tools/
title: Tools
date: 2025-06-09T13:15:34+10:00
hero:
  background_gradient: false
  enabled: true
  buttons:
    enabled: false
    list:
      - text: Documentation
        url: https://docs.riskdatalibrary.org/en/latest/
        external: true
        fa_icon: false
        size: large
        outline: true
        style: light
  heading: Tools
  sub_heading: Open source software and code to work with risk data
  background_image_blend_mode: multiply
  fullscreen_mobile: true
  height: 500px
  background_image: ""
  text_color: "#FFFFFF"
  background_color: "#0b3860"
  fullscreen_desktop: false
description: data
---
# Country Climate & Disaster Risk Screening Tools

A collection of analytical tools to support climate and disaster risk screening. Developed since 2022 to support the World Bank's Country Climate and Development Reports (CCDRs), these open-source tools help teams integrate risk analytics by enabling spatial analysis, visualization, and communication of risk findings.

## What you can do with these tools

<style>
.tools-grid {
  margin: 2rem 0;
}
.tool-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2.5rem;
  gap: 1.5rem;
}
.tool-image {
  width: 250px;
  height: 250px;
  flex-shrink: 0;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.tool-content {
  flex: 1;
  padding-top: 0.5rem;
}
.tool-content h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
}
.tool-content p {
  margin: 0;
  line-height: 1.6;
}
@media (max-width: 768px) {
  .tool-item {
    flex-direction: column;
    text-align: center;
  }
  .tool-image {
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }
}
</style>

<div class="tools-grid">

<div class="tool-item">
<img src="https://gfdrr.github.io/CCDR-tools/_images/rdl-disaster-risk-logo.png" alt="Disaster Risk Analysis" class="tool-image" />
<div class="tool-content">
<h3><strong>Analyze disaster risk</strong></h3>
<p>Perform <strong>spatial analytics of disaster risk</strong> using globally available datasets.</p>
</div>
</div>

<div class="tool-item">
<img src="https://gfdrr.github.io/CCDR-tools/_images/rdl-risk-poverty-logo.png" alt="Risk and Poverty Mapping" class="tool-image" />
<div class="tool-content">
<h3><strong>Map the interaction of risk and poverty</strong></h3>
<p>Combine hazard exposure and socio-economic vulnerability to produce <strong>bi-variate maps</strong> highlighting risk-poverty hotspots.</p>
</div>
</div>

<div class="tool-item">
<img src="https://gfdrr.github.io/CCDR-tools/_images/rdl-climate-risk-logo.png" alt="Future Climate Risk" class="tool-image" />
<div class="tool-content">
<h3><strong>Explore future climate risk</strong></h3>
<p>Generate climate risk outlooks based on <strong>CMIP6 climate projections</strong> and standardized risk indices.</p>
</div>
</div>

<div class="tool-item">
<img src="https://gfdrr.github.io/CCDR-tools/_images/rdl-dashboard-logo.png" alt="Interactive Dashboards" class="tool-image" />
<div class="tool-content">
<h3><strong>Build interactive dashboards</strong></h3>
<p>Present results in an <strong>interactive dashboard</strong> format to support communication, exploration, and stakeholder engagement.</p>
</div>
</div>

</div>

![](https://gfdrr.github.io/CCDR-tools/_images/GUI_F3_vln.png)

---

## Getting Started

You can find detailed documentation and source code in the [RDL-tools repository](https://gfdrr.github.io/CCDR-tools)
