Y.use("node", "squarespace-gallery-ng", "squarespace-image-loader", function(a) {
    window.Site = Singleton.create({
        ready: function() {
            this.thumbnails = this.slideshow = null;
            a.on("domready", this.initialize, this);
            a.one(window).on("resize",
                function() {
                    this.checkHeaderHeight();
                    this.setSidebarFixed()
                },
                this)
        },
        initialize: function() {
            this.setupNavigation();
            this.setSidebarFixed();
            a.one("body.collection-type-gallery") && (this.setupGalleries(), this.checkHeaderHeight());
            this.setupTweakHandlers();
            this.handleAnnouncementBar();
            a.all(".main-image img[data-src]").each(function(a) {
                ImageLoader.load(a,
                    {
                        load: !0
                    })
            })
        },
        setSidebarFixed: function() {
            if (a.one(".sidebar-fixed") && a.one("body").get("winWidth") && this.getBodyWidth()) {
                a.all("#slideshow .slide img[data-src]").each(function(a) {
                    ImageLoader.load(a,
                        {
                            load: !0
                        });
                    a.removeAttribute("data-load");
                    a.addClass("loaded")
                });
                a.all("#slideshow .sqs-video-wrapper").each(function(b) {
                    b.plug(a.Squarespace.VideoLoader);
                    b.videoloader.set("mode", "none")
                });
                a.one(window).on("resize",
                    function() {
                        800 <= this.getBodyWidth() && !this.slideshow && this.setupGalleries()
                    },
                    this);
                var b = a.config.win.location.hash;
                if (b)
                    var b = b.replace(/\#itemId\=/, ""),
                        c = a.one('[data-slide-id\x3d"' + b + '"]'),
                        d = setInterval(function() {
                                c.one("img").hasClass("loaded") &&
                                (setTimeout(function() {
                                        window.scrollTo(0, c.getY())
                                    },
                                    200), clearInterval(d))
                            },
                            100)
            } else
                a.one("body.enable-gallery-thumbnails.initial-gallery-view-thumbnails") ||
                    a.one("body.enable-gallery-thumbnails.homepage.homepage-gallery-view-thumbnails")
                    ? a.one("body.enable-gallery-thumbnails.homepage.homepage-gallery-view-slideshow")
                    ? this.setupSlideshow()
                    : (b = window.location.hash, this.setupSlideshow(), b
                        ? a.later(100,
                            this,
                            function() {
                                a.one("body").removeClass("thumbnail-view").set("scrollTop", 0);
                                this.slideshow.refresh();
                                a.all(".sqs-video-wrapper").each(function(a) {
                                    a.videoloader.reload()
                                });
                                this.checkHeaderHeight()
                            })
                        : this.showThumbnails())
                    : this.setupSlideshow(), a.all(".thumbnail-toggle").each(function(a) {
                        a.on("click",
                            function() {
                                this.showThumbnails()
                            },
                            this)
                    },
                    this), a.one("#thumbnails").delegate("click",
                    function(b) {
                        b = a.all(".thumb").indexOf(b.currentTarget);
                        this.slideshow ? this.slideshow.set("currentIndex", b) : this.setupSlideshow(b);
                        a.later(100,
                            this,
                            function() {
                                a.one("body").removeClass("thumbnail-view").set("scrollTop", 0);
                                this.slideshow.refresh();
                                a.all(".sqs-video-wrapper").each(function(a) {
                                    a.videoloader.reload()
                                });
                                this.checkHeaderHeight();
                                history.pushState &&
                                    history.pushState("itemId", null, a.one(".sqs-active-slide").getData("slide-url"))
                            })
                    },
                    ".thumb",
                    this);
            a.one("#galleryWrapper .meta").setStyle("opacity", 1)
        },
        setupThumbnailGrid: function() {
            this.thumbnails ||
            (this.thumbnails = new a.Squarespace.Gallery2({
                container: a.one("#thumbnails"),
                element: a.all(".thumb"),
                design: "autocolumns",
                designOptions: {
                    columnWidth: parseInt(a.Squarespace.Template.getTweakValue("@thumbnailWidth")),
                    columnWidthBehavior: "min",
                    gutter: 10,
                    aspectRatio: this.getAspectRatio(a.Squarespace.Template.getTweakValue("thumbnail-aspect-ratio"))
                },
                lazyLoad: !0,
                refreshOnResize: !0
            }))
        },
        setupSlideshow: function(b) {
            if (!this.slideshow) {
                a.Squarespace.Template.getTweakValue("galleryPadding") &&
                    a.one("#slideshowWrapper").setStyle("height",
                        parseInt(a.one("body").getComputedStyle("height"), 10) -
                        2 * parseInt(a.Squarespace.Template.getTweakValue("galleryPadding"), 10) +
                        "px");
                if (a.one("#slideshow .slide")) {
                    var c = "fit";
                    a.Squarespace.Template.getTweakValue("gallery-style") &&
                        (c = a.Squarespace.Template.getTweakValue("gallery-style").toLowerCase());
                    this.slideshow = new a.Squarespace.Gallery2({
                        container: "#slideshow",
                        currentIndex: b || 0,
                        element: a.all(".slide"),
                        loop: !0,
                        elements: {
                            next: ".next-slide, .right-control",
                            previous: ".prev-slide, .left-control",
                            controls: "#dotControls, #numberControls"
                        },
                        design: "stacked",
                        designOptions: {
                            autoHeight: !1,
                            speed: 0.6
                        },
                        loaderOptions: {
                            mode: c
                        },
                        historyHash: !0
                    });
                    b = new a.Squarespace.Gallery2({
                        container: "#imageData",
                        currentIndex: this.slideshow.get("currentIndex"),
                        loop: !0,
                        keyboard: !1,
                        design: "base"
                    });
                    this.slideshow.addChild(b);
                    1 >= a.all("#slideshow .slide").size() && a.all(".gallery-controls").setStyle("display", "none")
                }
                a.one(window).on("resize",
                    function() {
                        a.Squarespace.Template.getTweakValue("galleryPadding") &&
                            a.one("#slideshowWrapper").setStyle("height",
                                parseInt(a.one("body").getComputedStyle("height"), 10) -
                                2 * parseInt(a.Squarespace.Template.getTweakValue("galleryPadding"), 10) +
                                "px");
                        this.slideshow &&
                            this.slideshow.refresh({
                                type: "resize"
                            })
                    },
                    this)
            }
        },
        showThumbnails: function() {
            a.one("body").addClass("thumbnail-view");
            this.thumbnails ? this.thumbnails.refresh() : this.setupThumbnailGrid();
            window.history && window.history.replaceState("itemId", null, Static.SQUARESPACE_CONTEXT.collection.fullUrl)
        },
        checkHeaderHeight: function() {
            var b = parseInt(a.one("#canvasWrapper").getComputedStyle("height"), 10),
                c = parseInt(a.one("#header").get("offsetHeight"), 10),
                d = 2 * parseInt(a.one("#canvas").getStyle("paddingTop"), 10),
                e = 0;
        }

    })
})
    
