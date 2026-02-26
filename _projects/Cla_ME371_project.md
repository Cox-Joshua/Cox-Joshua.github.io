---
layout: page
title: "[WIP]Mechanical Design II"
description: ME371
img: assets/img/9.jpg
importance: 2
category: Class Projects
---

Every project has a beautiful feature showcase page.
It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width.

<!-- big left | smol right -->
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/ISS_General/1.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/ISS_General/2.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<!-- smol left | big right -->
<div class="row justify-content-sm-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/ISS_General/3.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/ISS_General/4.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<!-- triple pics centered -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/ISS_General/5.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/ISS_General/6.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/ISS_General/7.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<!-- double pics centered -->
<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/ISS_General/8.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/ISS_General/9.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>