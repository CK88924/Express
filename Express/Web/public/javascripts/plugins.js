const router = require ('express').Router ();
const express = require ('express');

router.use ('/bootstrap', express.static ('./node_modules/bootstrap/'));
router.use ('/bootstrap-icons', express.static ('./node_modules/bootstrap-icons/'));
router.use ('/jquery', express.static ('./node_modules/jquery'));
router.use ('/jqueryui', express.static ('./node_modules/jquery-ui-bundle'));
router.use ('/phosphor-icons', express.static ('./node_modules/phosphor-icons/src'));
router.use ('/free-jqgrid', express.static ('./node_modules/free-jqgrid'));
router.use ('/jodit', express.static ('./node_modules/jodit'));
module.exports = router;


/*

  <!-- sweetalert -->
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

    <!-- phosphor-icons -->
     <link rel="stylesheet" href="/plugins/phosphor-icons/css/phosphor.css" />

    <!--jquery-->
    <script src="/plugins/jquery/dist/jquery.min.js"></script>
    
    <!--jqueryui-->
    <script src="/plugins/jqueryui/jquery-ui.min.js"></script>
    <link rel="stylesheet" href="/public/css/jqueryui/jquery-ui.min.css" />

    <!--bootstrap-->
    <link href="/plugins/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet"/>
    <script src="/plugins/bootstrap/dist/js/bootstrap.bundle.min.js"></script>


    <!--bootstrap-icons-->
    <link href="/plugins/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet"/>


    <!--free-jqGrid-->
    <link rel="stylesheet" href="/plugins/free-jqgrid/css/ui.jqgrid.min.css" />
    <script src="/plugins/free-jqgrid/dist/jquery.jqgrid.min.js"></script>

    <!--jodit-->
    <link href="/plugins/jodit/build/jodit.min.css" rel="stylesheet"/>
    <script src="/plugins/jodit/build/jodit.min.js"></script>
    
    <!--exclusive-->

    <script src="/public/js/tools/reSizeGrid.js" defer="defer"></script>


kendo非存在伺服器內，因授權問題 無法存至伺服器

    <!--kendo-->
      <script src="https://kendo.cdn.telerik.com/2019.1.115/js/kendo.ui.core.min.js"></script>
    <link rel="stylesheet" href="https://kendo.cdn.telerik.com/2019.1.115/styles/kendo.common.min.css">
    <link rel="stylesheet" href="https://kendo.cdn.telerik.com/2019.1.115/styles/kendo.default.min.css">
    <link rel="stylesheet" href="https://kendo.cdn.telerik.com/2018.3.1017/styles/kendo.blueopal.min.css">

*/