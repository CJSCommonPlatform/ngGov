angular.module("nav-side/nav-side.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav-side/nav-side.html",
    "<div class=\"nav-side\">\n" +
    "  <nav>\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <button type=\"button\"\n" +
    "              class=\"navbar-toggle side-nav-toggle\"\n" +
    "              data-toggle=\"isCollapsed = !isCollapsed\"\n" +
    "              data-ng-click=\"isCollapsed = !isCollapsed\"\n" +
    "              data-ng-class=\"{'nav-open': isCollapsed}\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar-title\" data-ng-bind=\"collapseTitle\"></span>\n" +
    "        <span class=\"icon-bars\">\n" +
    "          <span class=\"icon-bar\"></span>\n" +
    "          <span class=\"icon-bar\"></span>\n" +
    "          <span class=\"icon-bar\"></span>\n" +
    "        </span>\n" +
    "      </button>\n" +
    "    </div>\n" +
    "    <div class=\"navbar-collapse\" data-collapse=\"isCollapsed\">\n" +
    "      <ul class=\"accordion\">\n" +
    "        <li data-accordion data-ng-repeat=\"navItem in navigationItems\">\n" +
    "          <ul data-accordion-group heading=\"{{navItem.title}}\"  ng-class=\"{'active':isOpen(navItem)}\" is-open=\"{{ isOpen(navItem) }}\" ui-sref-active=\"active\" data-ng-if=\"navItem.children\" class=\"nav-item nav-item-with-children\">\n" +
    "            <li data-ng-repeat=\"subNavItem in navItem.children\">\n" +
    "\n" +
    "              <!-- If Permissions -->\n" +
    "              <a data-ng-if=\"subNavItem.type === 'scroll-to'\" data-ng-show=\"subNavItem.permissions\" data-only-access data-permissions=\"{{subNavItem.permissions}}\" data-scroll-to=\"{{subNavItem.ref}}\" href=\"#\" offset=\"20\" class=\"subnav-link clearfix\" data-ng-class=\"{'has-detail' : !!subNavItem.detail}\">\n" +
    "                <span class=\"list-item-title\">{{subNavItem.title}}</span>\n" +
    "                <span data-ng-if=\"!!subNavItem.detail\" class=\"list-item-detail\" data-ng-bind-html=\"subNavItem.detail\"></span>\n" +
    "              </a>\n" +
    "              <!-- If no permissions -->\n" +
    "              <a data-ng-if=\"subNavItem.type === 'scroll-to'\" data-ng-hide=\"subNavItem.permissions\" data-scroll-to=\"{{subNavItem.ref}}\" href=\"#\" offset=\"20\" class=\"subnav-link clearfix\" data-ng-class=\"{'has-detail' : !!subNavItem.detail}\">\n" +
    "                <span class=\"list-item-title\">{{subNavItem.title}}</span>\n" +
    "                <span data-ng-if=\"!!subNavItem.detail\" class=\"list-item-detail\" ng-bind-html=\"subNavItem.detail\"></span>\n" +
    "              </a>\n" +
    "\n" +
    "\n" +
    "\n" +
    "              <!-- If Permissions -->\n" +
    "              <a data-ng-if=\"subNavItem.type === 'ui-sref'\" data-ng-show=\"subNavItem.permissions\" data-only-access data-permissions=\"{{subNavItem.permissions}}\" ui-sref=\"{{subNavItem.ref}}\" ui-sref-active=\"active\" offset=\"20\" class=\"subnav-link clearfix\" data-ng-class=\"{'has-detail' : !!subNavItem.detail}\">\n" +
    "                <span class=\"list-item-title\">{{subNavItem.title}}</span>\n" +
    "                <span data-ng-if=\"!!subNavItem.detail\" class=\"list-item-detail\" ng-bind-html=\"subNavItem.detail\"></span>\n" +
    "              </a>\n" +
    "              <!-- If no permissions -->\n" +
    "              <a data-ng-if=\"subNavItem.type === 'ui-sref'\" data-ng-hide=\"subNavItem.permissions\" ui-sref=\"{{subNavItem.ref}}\" ui-sref-active=\"active\" offset=\"20\" class=\"subnav-link clearfix\" data-ng-class=\"{'has-detail' : !!subNavItem.detail}\">\n" +
    "                <span class=\"list-item-title\">{{subNavItem.title}}</span>\n" +
    "                <span data-ng-if=\"!!subNavItem.detail\" class=\"list-item-detail\" ng-bind-html=\"subNavItem.detail\"></span>\n" +
    "              </a>\n" +
    "\n" +
    "\n" +
    "\n" +
    "              <!-- If Permissions -->\n" +
    "              <a data-ng-if=\"subNavItem.type === 'href'\" data-ng-show=\"subNavItem.permissions\" data-only-access data-permissions=\"{{subNavItem.permissions}}\" href=\"{{subNavItem.ref}}\" offset=\"20\" class=\"subnav-link clearfix\" data-ng-class=\"{'has-detail' : !!subNavItem.detail}\">\n" +
    "                <span class=\"list-item-title\">{{subNavItem.title}}</span>\n" +
    "                <span data-ng-if=\"!!subNavItem.detail\" class=\"list-item-detail\" ng-bind-html=\"subNavItem.detail\"></span>\n" +
    "              </a>\n" +
    "              <!-- If no permissions -->\n" +
    "              <a data-ng-if=\"subNavItem.type === 'href'\" data-ng-hide=\"subNavItem.permissions\" href=\"{{subNavItem.ref}}\" offset=\"20\" class=\"subnav-link clearfix\" data-ng-class=\"{'has-detail' : !!subNavItem.detail}\">\n" +
    "                <span class=\"list-item-title\">{{subNavItem.title}}</span>\n" +
    "                <span data-ng-if=\"!!subNavItem.detail\" class=\"list-item-detail\" ng-bind-html=\"subNavItem.detail\"></span>\n" +
    "              </a>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "          <div class=\"panel-heading nav-item\" data-ng-if=\"!navItem.children\">\n" +
    "            <!-- If Permissions -->\n" +
    "            <h4 data-ng-show=\"navItem.permissions\" class=\"panel-title\" data-only-access data-permissions=\"{{navItem.permissions}}\">\n" +
    "              <a data-ng-if=\"navItem.type === 'scroll-to'\" data-scroll-to=\"{{navItem.ref}}\" href=\"#\" offset=\"20\">{{navItem.title}}</a>\n" +
    "              <a data-ng-if=\"navItem.type === 'ui-sref'\" ui-sref=\"{{navItem.ref}}\" offset=\"20\" ui-sref-active=\"active\">{{navItem.title}}</a>\n" +
    "              <a data-ng-if=\"navItem.type === 'href'\" href=\"{{navItem.href}}\" offset=\"20\">{{navItem.title}}</a>\n" +
    "            </h4>\n" +
    "            <!-- If no permissions -->\n" +
    "            <h4 data-ng-hide=\"navItem.permissions\" class=\"panel-title\">\n" +
    "              <a data-ng-if=\"navItem.type === 'scroll-to'\" data-scroll-to=\"{{navItem.ref}}\" href=\"#\" offset=\"20\">{{navItem.title}}</a>\n" +
    "              <a data-ng-if=\"navItem.type === 'ui-sref'\" ui-sref=\"{{navItem.ref}}\" offset=\"20\" ui-sref-active=\"active\">{{navItem.title}}</a>\n" +
    "              <a data-ng-if=\"navItem.type === 'href'\" href=\"{{navItem.href}}\" offset=\"20\">{{navItem.title}}</a>\n" +
    "            </h4>\n" +
    "          </div>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </nav>\n" +
    "</div>\n" +
    "");
}]);
