<!doctype html>
<!--
  Minimal Mistakes Jekyll Theme 4.21.0 by Michael Rose
  Copyright 2013-2020 Michael Rose - mademistakes.com | @mmistakes
  Free for personal and commercial use under the MIT license
  https://github.com/mmistakes/minimal-mistakes/blob/master/LICENSE
-->
<html lang="en" class="no-js">
  <head>
    <meta charset="utf-8">

<!-- begin _includes/seo.html --><title>Philipe Dias</title>
<meta name="description" content="My codes, papers, CV and some random thoughts.">


  <meta name="author" content="Philipe A. Dias">
  


<meta property="og:type" content="website">
<meta property="og:locale" content="en_US">
<meta property="og:site_name" content="Philipe Dias">
<meta property="og:title" content="Philipe Dias">
<meta property="og:url" content="https://philadias.github.io/personal/assets/js/search.js">


  <meta property="og:description" content="My codes, papers, CV and some random thoughts.">











  

  


<link rel="canonical" href="https://philadias.github.io/personal/assets/js/search.js">




<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    
      "@type": "Person",
      "name": "Philipe A. Dias",
      "url": "https://philadias.github.io/personal/"
    
  }
</script>






<!-- end _includes/seo.html -->


<link href="/personal/feed.xml" type="application/atom+xml" rel="alternate" title="Philipe Dias Feed">

<!-- https://t.co/dKP3o1e -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<script>
  document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + ' js ';
</script>

<!-- For all browsers -->
<link rel="stylesheet" href="/personal/assets/css/main.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5/css/all.min.css">

<!--[if IE]>
  <style>
    /* old IE unsupported flexbox fixes */
    .greedy-nav .site-title {
      padding-right: 3em;
    }
    .greedy-nav button {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
    }
  </style>
<![endif]-->



    <!-- start custom head snippets -->

<!-- insert favicons. use https://realfavicongenerator.net/ -->

<!-- end custom head snippets -->

  </head>

  <body class="layout--single">
    <nav class="skip-links">
  <h2 class="screen-reader-text">Skip links</h2>
  <ul>
    <li><a href="#site-nav" class="screen-reader-shortcut">Skip to primary navigation</a></li>
    <li><a href="#main" class="screen-reader-shortcut">Skip to content</a></li>
    <li><a href="#footer" class="screen-reader-shortcut">Skip to footer</a></li>
  </ul>
</nav>

    <!--[if lt IE 9]>
<div class="notice--danger align-center" style="margin: 0;">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience.</div>
<![endif]-->

    

<div class="masthead">
  <div class="masthead__inner-wrap">
    <div class="masthead__menu">
      <nav id="site-nav" class="greedy-nav">
        
        <a class="site-title" href="/personal/">
          Philipe Dias
          
        </a>
        <ul class="visible-links"></ul>
        
        <button class="greedy-nav__toggle hidden" type="button">
          <span class="visually-hidden">Toggle menu</span>
          <div class="navicon"></div>
        </button>
        <ul class="hidden-links hidden"></ul>
      </nav>
    </div>
  </div>
</div>


    <div class="initial-content">
      



<div id="main" role="main">
  
  <div class="sidebar sticky">
  


<div itemscope itemtype="https://schema.org/Person">

  

  <div class="author__content">
    
      <h3 class="author__name" itemprop="name">Philipe A. Dias</h3>
    
    
      <div class="author__bio" itemprop="description">
        <p>I am a researcher working on (un)supervised learning for image understanding. Main topics include semantic segmentation &amp; image annotation, now delving into the world of uncertainty estimation. Applications on agricultural, health-care related and now satellite imagery domains.</p>

      </div>
    
  </div>

  <div class="author__urls-wrapper">
    <button class="btn btn--inverse">Follow</button>
    <ul class="author__urls social-icons">
      
        <li itemprop="homeLocation" itemscope itemtype="https://schema.org/Place">
          <i class="fas fa-fw fa-map-marker-alt" aria-hidden="true"></i> <span itemprop="name">Milwaukee (USA)</span>
        </li>
      

      
        
          
        
          
        
          
        
          
        
          
        
          
        
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      <!--
  <li>
    <a href="http://link-to-whatever-social-network.com/user/" itemprop="sameAs" rel="nofollow noopener noreferrer">
      <i class="fas fa-fw" aria-hidden="true"></i> Custom Social Profile Link
    </a>
  </li>
-->
    </ul>
  </div>
</div>

  
  </div>



  <article class="page" itemscope itemtype="https://schema.org/CreativeWork">
    
    
    
    

    <div class="page__inner-wrap">
      
        <header>
          
          


        </header>
      

      <section class="page__content" itemprop="text">
        
        // from https://github.com/pmarsceill/just-the-docs/blob/master/assets/js/just-the-docs.js#L47

(function (jtd, undefined) {

// Event handling

jtd.addEvent = function(el, type, handler) {
  if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
}
jtd.removeEvent = function(el, type, handler) {
  if (el.detachEvent) el.detachEvent('on'+type, handler); else el.removeEventListener(type, handler);
}
jtd.onReady = function(ready) {
  // in case the document is already rendered
  if (document.readyState!='loading') ready();
  // modern browsers
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', ready);
  // IE <= 8
  else document.attachEvent('onreadystatechange', function(){
      if (document.readyState=='complete') ready();
  });
}

// Show/hide mobile menu

// function initNav() {
//     const mainNav = document.querySelector('.js-main-nav');
//     const pageHeader = document.querySelector('.js-page-header');
//     const navTrigger = document.querySelector('.js-main-nav-trigger');
  
//     jtd.addEvent(navTrigger, 'click', function(e){
//       e.preventDefault();
//       var text = navTrigger.innerText;
//       var textToggle = navTrigger.getAttribute('data-text-toggle');
  
//       mainNav.classList.toggle('nav-open');
//       pageHeader.classList.toggle('nav-open');
//       navTrigger.classList.toggle('nav-open');
//       navTrigger.innerText = textToggle;
//       navTrigger.setAttribute('data-text-toggle', text);
//       textToggle = text;
//     })
//   }


// Site search

function initSearch() {
    var request = new XMLHttpRequest();
    request.open('GET', '/personal/assets/js/search-data.json', true);
  
    request.onload = function(){
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        
        
        lunr.tokenizer.separator = /[\s\-/]+/
        
        
        var index = lunr(function () {
          this.ref('id');
          this.field('title', { boost: 200 });
          this.field('content', { boost: 2 });
          this.field('url');
          this.metadataWhitelist = ['position']
  
          for (var i in data) {
            this.add({
              id: i,
              title: data[i].title,
              content: data[i].content,
              url: data[i].url
            });
          }
        });
  
        searchResults(index, data);
      } else {
        // We reached our target server, but it returned an error
        console.log('Error loading ajax request. Request status:' + request.status);
      }
    };
  
    request.onerror = function(){
      // There was a connection error of some sort
      console.log('There was a connection error');
    };
  
    request.send();
  
    function searchResults(index, data) {
      var index = index;
      var docs = data;
      var searchInput = document.querySelector('.js-search-input');
      var searchResults = document.querySelector('.js-search-results');
  
      function hideResults() {
        searchResults.innerHTML = '';
        searchResults.classList.remove('active');
      }
  
      jtd.addEvent(searchInput, 'keydown', function(e){
        switch (e.keyCode) {
          case 38: // arrow up
            e.preventDefault();
            var active = document.querySelector('.search-result.active');
            if (active) {
              active.classList.remove('active');
              if (active.parentElement.previousSibling) {
                var previous = active.parentElement.previousSibling.querySelector('.search-result');
                previous.classList.add('active');
              }
            }
            return;
          case 40: // arrow down
            e.preventDefault();
            var active = document.querySelector('.search-result.active');
            if (active) {
              if (active.parentElement.nextSibling) {
                var next = active.parentElement.nextSibling.querySelector('.search-result');
                active.classList.remove('active');
                next.classList.add('active');
              }
            } else {
              var next = document.querySelector('.search-result');
              if (next) {
                next.classList.add('active');
              }
            }
            return;
          case 13: // enter
            e.preventDefault();
            var active = document.querySelector('.search-result.active');
            if (active) {
              active.click();
            } else {
              var first = document.querySelector('.search-result');
              if (first) {
                first.click();
              }
            }
            return;
        }
      });
  
      jtd.addEvent(searchInput, 'keyup', function(e){
        switch (e.keyCode) {
          case 27: // When esc key is pressed, hide the results and clear the field
            hideResults();
            searchInput.value = '';
            return;
          case 38: // arrow up
          case 40: // arrow down
          case 13: // enter
            e.preventDefault();
            return;
        }
  
        hideResults();
  
        var input = this.value;
        if (input === '') {
          return;
        }
  
        var results = index.query(function (query) {
          var tokens = lunr.tokenizer(input)
          query.term(tokens, {
            boost: 10
          });
          query.term(tokens, {
            wildcard: lunr.Query.wildcard.TRAILING
          });
        });
  
        if (results.length > 0) {
          searchResults.classList.add('active');
          var resultsList = document.createElement('ul');
          resultsList.classList.add('search-results-list');
          searchResults.appendChild(resultsList);
  
          for (var i in results) {
            var result = results[i];
            var doc = docs[result.ref];
  
            var resultsListItem = document.createElement('li');
            resultsListItem.classList.add('search-results-list-item');
            resultsList.appendChild(resultsListItem);
  
            var resultLink = document.createElement('a');
            resultLink.classList.add('search-result');
            resultLink.setAttribute('href', doc.url);
            resultsListItem.appendChild(resultLink);
  
            var resultTitle = document.createElement('div');
            resultTitle.classList.add('search-result-title');
            resultTitle.innerText = doc.title;
            resultLink.appendChild(resultTitle);
  
            var resultRelUrl = document.createElement('span');
            resultRelUrl.classList.add('search-result-rel-date');
            resultRelUrl.innerText = doc.date;
            resultTitle.appendChild(resultRelUrl);
  
            var metadata = result.matchData.metadata;
            var contentFound = false;
            for (var j in metadata) {
              if (metadata[j].title) {
                var position = metadata[j].title.position[0];
                var start = position[0];
                var end = position[0] + position[1];
                resultTitle.innerHTML = doc.title.substring(0, start) + '<span class="search-result-highlight">' + doc.title.substring(start, end) + '</span>' + doc.title.substring(end, doc.title.length)+'<span class="search-result-rel-date">'+doc.date+'</span>';
  
              } else if (metadata[j].content && !contentFound) {
                contentFound = true;
  
                var position = metadata[j].content.position[0];
                var start = position[0];
                var end = position[0] + position[1];
                var previewStart = start;
                var previewEnd = end;
                var ellipsesBefore = true;
                var ellipsesAfter = true;
                for (var k = 0; k < 3; k++) {
                  var nextSpace = doc.content.lastIndexOf(' ', previewStart - 2);
                  var nextDot = doc.content.lastIndexOf('.', previewStart - 2);
                  if ((nextDot > 0) && (nextDot > nextSpace)) {
                    previewStart = nextDot + 1;
                    ellipsesBefore = false;
                    break;
                  }
                  if (nextSpace < 0) {
                    previewStart = 0;
                    ellipsesBefore = false;
                    break;
                  }
                  previewStart = nextSpace + 1;
                }
                for (var k = 0; k < 10; k++) {
                  var nextSpace = doc.content.indexOf(' ', previewEnd + 1);
                  var nextDot = doc.content.indexOf('.', previewEnd + 1);
                  if ((nextDot > 0) && (nextDot < nextSpace)) {
                    previewEnd = nextDot;
                    ellipsesAfter = false;
                    break;
                  }
                  if (nextSpace < 0) {
                    previewEnd = doc.content.length;
                    ellipsesAfter = false;
                    break;
                  }
                  previewEnd = nextSpace;
                }
                var preview = doc.content.substring(previewStart, start);
                if (ellipsesBefore) {
                  preview = '... ' + preview;
                }
                preview += '<span class="search-result-highlight">' + doc.content.substring(start, end) + '</span>';
                preview += doc.content.substring(end, previewEnd);
                if (ellipsesAfter) {
                  preview += ' ...';
                }
  
                var resultPreview = document.createElement('div');
                resultPreview.classList.add('search-result-preview');
                resultPreview.innerHTML = preview;
                resultLink.appendChild(resultPreview);
              }
            }
          }
        }
      });
  
      // jtd.addEvent(searchInput, 'blur', function(){
      //   setTimeout(function(){ hideResults() }, 300);
      // });
    }
  }
  
//   function pageFocus() {
//     var mainContent = document.querySelector('.js-main-content');
//     mainContent.focus();
//   }
  
  // Document ready
  
  jtd.onReady(function(){
    // initNav();
    // pageFocus();
    if (typeof lunr !== 'undefined') {
      initSearch();
    }
  });
  
  })(window.jtd = window.jtd || {});
        
      </section>

      <footer class="page__meta">
        
        


        

      </footer>

      

      
    </div>

    
  </article>

  
  
</div>

    </div>

    

    <div id="footer" class="page__footer">
      <footer>
        <!-- start custom footer snippets -->

<!-- end custom footer snippets -->
        <div class="page__footer-follow">
  <ul class="social-icons">
    

    
      
        
      
        
      
        
      
        
      
        
      
        
      
    

    <li><a href="/personal/feed.xml"><i class="fas fa-fw fa-rss-square" aria-hidden="true"></i> Feed</a></li>
  </ul>
</div>

<div class="page__footer-copyright">&copy; 2020 Philipe A. Dias. Powered by <a href="https://jekyllrb.com" rel="nofollow">Jekyll</a> &amp; <a href="https://mademistakes.com/work/minimal-mistakes-jekyll-theme/" rel="nofollow">Minimal Mistakes</a>.</div>

      </footer>
    </div>

    
  <script src="/personal/assets/js/main.min.js"></script>










  </body>
</html>
