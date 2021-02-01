using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;
using System.Web.Mvc;
using Architecture.Filters;


namespace Architecture.Controllers
{
  
    public class HomeController : Controller
    {
        [ExceptionFilter]
        public ActionResult Index()
        {
            ViewBag.ActiveLink = "Index";
            return View();
        }

        public ActionResult About()
        {
            ViewBag.ActiveLink = "About";
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.ActiveLink = "Contact";

            return View();
        }
        public ActionResult References()
        {
            ViewBag.ActiveLink = "References";
            return View();
        }
        public ActionResult IcMimari()
        {
            ViewBag.Collection = "Projeler";
            ViewBag.ActiveLink = "IcMimari";
            return View();
        }  
        public ActionResult MimariRuhsat()
        {
            ViewBag.Collection = "Projeler";
            ViewBag.ActiveLink = "MimariRuhsat";

            return View();
        } 
        public ActionResult Restorasyon()
        {
            ViewBag.Collection = "Projeler";
            ViewBag.ActiveLink = "Restorasyon";
            return View();
        }
        public ActionResult AhsapKutuk()
        {
            ViewBag.Collection = "Projeler";
            ViewBag.ActiveLink = "AhsapKutuk";
            return View();
        }
        
        public ActionResult Media()
        {
            ViewBag.Collection = "Projeler";
            ViewBag.ActiveLink = "Media";
            return View();
        }
        public ActionResult Designs()
        {
            ViewBag.ActiveLink = "Designs";
            return View();
        }
        public ActionResult Error()
        {
            return View();
        }
        
    }
}