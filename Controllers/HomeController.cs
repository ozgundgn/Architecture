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
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            return View();
        }
        public ActionResult References()
        {
            return View();
        }
        public ActionResult IcMimari()
        {
            return View();
        }  
        public ActionResult MimariRuhsat()
        {
            return View();
        } 
        public ActionResult Restorasyon()
        {
            return View();
        }
        public ActionResult AhsapKutuk()
        {
            return View();
        }
        public ActionResult Designs()
        {
            return View();
        }
        public ActionResult Media()
        {
            return View();
        }
        public ActionResult Error()
        {
            return View();
        }
        
    }
}