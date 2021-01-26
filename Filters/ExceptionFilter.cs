using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Architecture.Filters
{
    public class ExceptionFilter : FilterAttribute, IExceptionFilter
    {
        public void OnException(ExceptionContext filterContext)
        {
            if (!filterContext.ExceptionHandled)
            {
                filterContext.Controller.TempData["error"] = filterContext.Exception;
                filterContext.ExceptionHandled = true;
                filterContext.Result = new RedirectResult("/Home/Error");

            }
        }
    }
}