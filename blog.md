---
layout: default
title: James B. Milton, Designer & Developer
permalink: /blog/
---

<div class="posts">
  {% for post in site.posts %}

  <article class="post">

  {{ post.title }}

  <div class="entry">{{ post.excerpt }}</div>
  <a href="{{ post.url }}" class="">Read More</a>.
  </article>

  {% endfor %}
</div>
