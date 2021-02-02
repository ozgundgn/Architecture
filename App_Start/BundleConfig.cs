using System.Web;
using System.Web.Optimization;

namespace Architecture
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/common").Include(
                "~/Scripts/common-*"));          
            bundles.Add(new ScriptBundle("~/bundles/performance").Include(
                "~/Scripts/performance.js",
                "~/Scripts/performance-d006a09b586a985da86bd-min.en-US.js"));

            //bundles.Add(new ScriptBundle("~/bundles/index4be1").Include(
            //    "~/Scripts/index4be1.js"
            //    ));

              bundles.Add(new ScriptBundle("~/bundles/popper").Include(
                      "~/Scripts/umd/popper.min.js"
                ));
            bundles.Add(new ScriptBundle("~/bundles/site").Include(
                      "~/Scripts/site.js"
                ));  
            bundles.Add(new ScriptBundle("~/bundles/lightbox").Include(
                      "~/Scripts/lightbox.js"
                ));


            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/all.css",
                      "~/Content/font-awesome.css", 
                      "~/Content/site8696.css",
                      "~/Content/site.css"));
            bundles.Add(new StyleBundle("~/Content/lightbox").Include(
                "~/Content/lightbox.min.css"
                      ));
        }

    }
}
