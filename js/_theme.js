/* =========================================================================
global variables
========================================================================== */
//watchers for major breakpoint changes - move from small screen to large screen layout/styles
//these match up to
(function () {
    var mq = {
        end: window.matchMedia("(max-width: 799px)")
    }

    //container ID/class names called by specific functions
    var selectors = {
        searchForm: '.search-form',
        advancedSearchForm: '.advanced-search-form',
        pageWrap: '#page',
        socialShare: '.social-share',
        socialShareMore: '.share-more'
    }

    /* =========================================================================
    search form panel
    ========================================================================== */
    //make search form expandable only on small screens
    function searchFormExpandable() {
        if (mq.end.matches) {
            $(selectors.searchForm).expandable('revive');
            $(selectors.advancedSearchForm).expandable('revive');
        }
        else {
            $(selectors.searchForm).expandable('kill');
            $(selectors.searchForm).children('div').removeAttr('style');
            $(selectors.advancedSearchForm).expandable('kill');
            $(selectors.advancedSearchForm).children('div').removeAttr('style');
        }
        return;
    }
    searchFormExpandable();
    mq.end.addListener(searchFormExpandable);

    /* =========================================================================
    slideout filters for search results on small screens
    ========================================================================= */
    if ($('#search-results').length == 1) window.APP.MODELS.FilterSlideOut.create({
        breakpoint: 800,
        animationSpeed: 200,
        pageWrapId: 'page',
        filterType: 'search',
        openToggle: 'Search Filter',
        closeToggle: 'Close'
    });

    /* =========================================================================
    social share open/close toggle
    ========================================================================== */
    $(selectors.socialShare)
        .on('click', selectors.socialShareMore, function () {
            var parent = $(this).parents(selectors.socialShare);
            parent.toggleClass('share-open');
            var moreText = $(this).attr('data-more-text');
            var lessText = $(this).attr('data-less-text');
            //on large screens, move the second list items into the first list, instead of sliding the list down
            if (parent.hasClass('share-open')) {
                $(this).text(lessText);
            }
            else {
                $(this).text(moreText);
            }
            return;
        });
})();

/* =========================================================================
Toggles
========================================================================== */
$(document).ready(function(){
  $('.toggle-button').attr("aria-expanded", "false").click(function(){
  $(this).attr('aria-expanded', function (i, attr) {

        return attr == 'true' ? 'false' : 'true'

  }).next('.toggle').slideToggle("fast");
  $(this).toggleClass('open');
  });
});

$(document).ready(function(){
  $('.up-toggler .toggle-button').click(function(){
  $(this).prev().slideToggle("fast");
  });
});

$(document).ready(function(){
  $('.ajd-nav-button').click(function(){
  $('.ajd_navigation').slideToggle("fast");
  $(this).toggleClass('x')
  });
});


$(document).ready(function(){
    $('.mobile-toggler').click(function(){
        if ( $(window).width() < 1000) {
            $(this).parent().find('.mobile-toggle').slideToggle("fast");
        }
    });
});

/* =========================================================================
Footer links toggle
========================================================================== */

$('.footer-toggle').click(function(){
  if ( $(window).width() < 800) {
    $(this).next('.toggle-sm').slideToggle("fast");
    $(this).toggleClass('open');
    }
 });

/* =========================================================================
 Filter toggle - SR page
========================================================================== */
     $(document).ready(function(){
         $('.filter-btn').click(function(){
             $('.filter-toggle').slideToggle();
             $(this).toggleClass('open');
         });
     });

/* =========================================================================
AJD Benefits Tabs
========================================================================== */
$(document).ready(function(){

  $('.benefits-icon').hover(function(){
   var tab_id = $(this).attr('data-tab');

   $('.benefits-icon').removeClass('current');
   $('.tab-content').removeClass('current');

   $(this).addClass('current');
   $("#"+tab_id).addClass('current');
  })

})

/* =========================================================================
Location Tabs
========================================================================== */
$(document).ready(function(){

  $('.location-tabs .tab-link').click(function(){
   var tab_id = $(this).attr('data-tab');

   $('.location-tabs .tab-link').removeClass('current');
   $('.location-tabs .tab-content').removeClass('current');

   $(this).addClass('current');
   $("#"+tab_id).addClass('current');
  })

})

/* =========================================================================
Featured jobs animations
========================================================================== */
$(document).ready(function(){
      $('.featured-jobs ul').addClass('animateOnce');
     $('.featured-jobs ul').addClass('animatedParent');
     $('.featured-jobs ul').attr('data-sequence', '500');
     $('.featured-jobs li').addClass('animated');
     $('.featured-jobs li').addClass('fadeInDownShort');
     $('.featured-jobs li:first-child').attr('data-id', '1');
     $('.featured-jobs li:nth-child(2)').attr('data-id', '2');
     $('.featured-jobs li:last-child').attr('data-id', '3');

});


 /* =========================================================================
 Fancybox
 ========================================================================== */

 $(document).ready(function() {
        // Youtube videos
         $('.vidpop').click(function(e){
             e.preventDefault();
         });
         $('.vidpop').fancybox({
             // maxWidth: 950,
             // autoSize : true,
             // autoWidth: true,
             // autoHeight: true,
             // fitToView: true,
             // type: 'iframe',
             // closeBtn: true,

             'width':851,
             'height':533,
             'autoScale':true,
             'transitionIn':'none',
             'transitionOut':'none',
             'type': 'iframe',
             'cyclic': true

         });

         // HTML5 videos
         $('.vidpopHtml').click(function(e){
             e.preventDefault();
         });
         $('.vidpopHtml').fancybox({
             'width':851,
             'height':533,
             'autoScale':true,
             'transitionIn':'none',
             'transitionOut':'none',
             'type': 'inline',
             'cyclic': true,
             afterShow: function() {
              // After the show-slide-animation has ended - play the vide in the current slide
              this.content.find('video').get(0).play();
            }
         });
     });


 /* =========================================================================
 Related Content
 ========================================================================== */

 var relatedContentItems = $('.related-content a');
 relatedContentItems.each(function(){
 var linkUrl = $(this).attr('href');
 if(linkUrl.indexOf('youtube.com') > -1){

   $(this).parent().next().remove()
   $(this).parent().addClass('video-wrapper')
   $(this).append('<div class="playbutton-container"><span class="playbutton"></span><h4 class="click-to-play">Click to Play</h4></div>')
   // $(this).children().css('border-radius', '10px')


 	$(this).click(function(){
 		// $.fancybox.open('<iframe src="' + linkUrl + '" width="640" height="360"></iframe>');
 		// return false;
    $(this).addClass('vidpop');

 	});
 }
 });


 $(document).ready(function(){
      $('.related-content li').addClass('animated');
      $('.related-content li:first-child').addClass('fadeInLeftShort');
      $('.related-content li:last-child').addClass('fadeInRightShort');

 });


 /* =========================================================================
 sliders
 ========================================================================== */
 $('.content-img-slider').slick({
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 6800,
  focusOnSelect: true
});

$('.content-text-slider').slick({
 dots: false,
 infinite: true,
 speed: 600,
 slidesToShow: 1,
 slidesToScroll: 1,
 infinite: true,
 arrows: true
});

/* =========================================================================
Customer Service Page - Hurricane Support Popup
========================================================================== */
$(document).ready(function(){
    console.log("popup loaded");
    $( ".hurricane-support-popup button.close" ).click(function() {
        $('.hurricane-support-bg').hide();
    });
});

$(document).ready(function(){
    console.log("popup loaded");
    $( ".urgent-need-popup button.close" ).click(function() {
        $('.urgent-need-bg').hide();
    });
});

// Video Hero Banner (VHB)
// Developer: Michael Spellacy (Spell), https://michaelspellacy.com

// Note: If you have a PWA, please see https://github.com/michaelspellacy/video-hero-banner/issues/7 before using

var heroBanner = document.getElementById("hero-banner");

// Check if banner exists.

if(heroBanner) {

	// Check Cookie. If set to true, pause video.

	var heroBannerPaused = getCookie("heroBannerPaused");

	// Set "active" hook to main element

	heroBanner.classList.add("hero-banner-active");

	// Variables

	var heroBannerMedia = heroBanner.getAttribute("data-banner-media");
	var heroBannerAll = heroBanner.getAttribute("data-banner-all");
	var heroBannerDesktop = heroBanner.getAttribute("data-banner-desktop");
	var heroBannerMobile = heroBanner.getAttribute("data-banner-mobile");
	var heroBannerDescription = heroBanner.getAttribute("data-banner-description");
	var heroBannerCaption = heroBanner.getAttribute("data-banner-caption");
	var heroBannerPlay = "Play Background Animation";
	var heroBannerPause = "Pause Background Animation";
	var heroBannerState = "paused";

	// Create: Video

	var heroBannerVideo = document.createElement("video");
	heroBannerVideo.id = "hero-banner-video";
	heroBannerVideo.setAttribute("aria-label", "Background Animation");
	heroBannerVideo.setAttribute("loop", "");
	heroBannerVideo.setAttribute("playsinline", "");
	heroBannerVideo.setAttribute("disableRemotePlayback", "");

	// If captions are present, then controls have to be present

	if(heroBannerCaption !== null) {

		heroBannerVideo.setAttribute("controls", "");

	}

	if(heroBannerCaption !== null || heroBannerDescription !== null) {

		heroBannerVideo.setAttribute("crossorigin", "anonymous");

	}

	// TODO: Add fallback Image

	// Add: Video

	heroBanner.appendChild(heroBannerVideo);

	// Add: Audio Description

	if(heroBannerDescription !== null) {

		var heroBannerDescValue = heroBannerDescription.split(",");
		var n = 3;

		for (var i = 0; i < heroBannerDescValue.length; i += n) {

			// Append track to video

			var heroBannerAudioDescription = document.createElement("track");
			heroBannerAudioDescription.setAttribute("kind", "descriptions");
			heroBannerAudioDescription.setAttribute("srclang", heroBannerDescValue[i+1].trim());
			heroBannerAudioDescription.setAttribute("label", heroBannerDescValue[i+2].trim());
			heroBannerAudioDescription.setAttribute("src", heroBannerDescValue[i].trim());

			heroBannerVideo.appendChild(heroBannerAudioDescription);

		}

	}

	// Add: Audio Description

	if(heroBannerCaption !== null) {

		var heroBannerCaptionValue = heroBannerCaption.split(",");
		var n = 3;

		for (var i = 0; i < heroBannerCaptionValue.length; i += n) {

			// Append track to video

			var heroBannerAudioCaption = document.createElement("track");
			heroBannerAudioCaption.setAttribute("kind", "captions");
			heroBannerAudioCaption.setAttribute("srclang", heroBannerCaptionValue[i+1].trim());
			heroBannerAudioCaption.setAttribute("label", heroBannerCaptionValue[i+2].trim());
			heroBannerAudioCaption.setAttribute("src", heroBannerCaptionValue[i].trim());

			heroBannerVideo.appendChild(heroBannerAudioCaption);

		}

	}

	// Create: Play/Pause Button

	var heroBannerButton = document.createElement("button");
	heroBannerButton.id = "hero-banner-button";

	// Fire Viewport Width

	var mediaQuery = window.matchMedia(heroBannerMedia);
	mediaQuery.addListener(viewPortWidth);
	viewPortWidth(mediaQuery);

	// Fire Prefers Reduced Motion

	var motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
	motionQuery.addListener(viewportMotion);
	viewportMotion(motionQuery);

	// Add: Play/Pause Button

	// Note: The pause button should _never_ be removed from the UI (unless captions present, which will add controls). This is an important accessibility feature.
	// While script does make use of prefers-reduced-motion, we can't fully depend on it.

	if(heroBannerCaption === null) {

		heroBanner.appendChild(heroBannerButton);

	}

	// Event: Play/Pause Button

	heroBannerButton.onclick = function(){

		if (heroBanner.classList.contains(heroBannerState)) {

			document.cookie = "heroBannerPaused=; expires=Thu, 01 Jan 1970 00:00:00 UTC; Secure; path=/;";

			playVideo();

		} else {

			pauseVideo();

			document.cookie = "heroBannerPaused=true; Secure; path=/";

		}

	};

}

// Get Cookie

function getCookie(name) {

	var re = new RegExp(name + "=([^;]+)");
	var value = re.exec(document.cookie);
	return (value !== null) ? unescape(value[1]):null;

}

// Pause Video

function pauseVideo() {

	heroBannerVideo.pause();
	heroBanner.classList.add(heroBannerState);
	heroBannerButton.setAttribute("aria-label", heroBannerPlay);

}

// Play Video

function playVideo() {

	heroBannerVideo.play();
	heroBanner.classList.remove(heroBannerState);
	heroBannerButton.setAttribute("aria-label", heroBannerPause);

}

// Viewport Width

function viewPortWidth(mediaQuery) {

	if(heroBannerAll !== null) {

		heroBannerVideo.setAttribute("src", heroBannerAll);

	} else {

		if (mediaQuery.matches) {

			heroBannerVideo.setAttribute("src", heroBannerDesktop);

		} else {

			heroBannerVideo.setAttribute("src", heroBannerMobile);

		}

	}

	heroBannerVideo.load();

	// Only mute video if captions are not present (video will not autoplay under this condition)

	if(heroBannerCaption === null) {

		heroBannerVideo.muted = true;

	}

	// If cookie exists, then pause video

	if(heroBannerPaused !== null) {

			heroBanner.classList.add(heroBannerState);

	} else {

		heroBannerButton.setAttribute("aria-label", heroBannerPause);

	}

	if(heroBanner.classList.contains("paused")) {

		heroBannerVideo.pause();

	} else {

		heroBannerVideo.play();

	}

	// Since this is decorative, let us disable the video menu.

	if(heroBannerDescription === null || heroBannerCaption === null) {

		heroBannerVideo.oncontextmenu = function(){

			return false;

		};

	}

}

// Prefers Reduced Motion

function viewportMotion(motionQuery){

	if (motionQuery.matches) {

		pauseVideo();

	}

}
