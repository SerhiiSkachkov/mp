var ua = navigator.userAgent;
ua = ua.toString();
$('html').attr('data-agent', ua);

$(function() {
    // Main navigation
    // --------------------

    // Add 'active' class to parent list item in all levels
    $('#mainSidebar .navigation').find('li.active').parents('li').addClass('active');

    // Hide all nested lists
    $('#mainSidebar .navigation').find('li').not('.active, .navigation-header').has('ul').children('ul').addClass('hidden-ul');

    // Highlight children links
    $('#mainSidebar .navigation').find('li').has('ul').children('a').addClass('has-submenu');

    // Main navigation
    $('#mainSidebar .navigation').find('li').has('ul').children('a').on('click', function (e) {
        e.preventDefault();

        // Collapsible
        $(this).parent('li').not('.disabled').not($('.sidebar-minimize').find('.sidebar-main .navigation').children('li')).toggleClass('active').children('ul').slideToggle(250);

        // Accordion
        if ($('.navigation-main').hasClass('navigation-accordion')) {
            $(this).parent('li').not('.disabled').not($('.sidebar-minimize').find('.navigation').children('li')).siblings(':has(.has-submenu)').removeClass('active').children('ul').slideUp(250);
        }
    });

    $('.toggle-sidebar-main_js').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('sidebar-minimize');
    });

    if ($('.custom-scroll').length > 0) {
        $(".custom-scroll").mCustomScrollbar({theme:"minimal-dark"});
    }

    for (var i = 1; i <=10; i++) {
        if ($('.set-height-' + i + '_js').length > 0) {
            setLayoutHeight('.set-height-' + i + '_js');
        }
    }

    useSelect2();

    if($('[data-toggle="tooltip"]').length > 0){
        $('[data-toggle="tooltip"]').tooltip();
    }

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "50000",
        "extendedTimeOut": "100000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    $('.profile-data select.select2').select2('destroy');
    $('.profile-data .form-control').prop('readonly', true);

    $('.show-edit_js').on('click', function() {
        $(this).hide();
        $(this).siblings('.hide-edit_js').show();
        $('.profile-data [data-field="edit"] .form-control').prop('readonly', false);
        useSelect2();
    });

    $('.hide-edit_js').on('click', function() {
        $(this).hide();
        $(this).siblings('.show-edit_js').show();
        $('.profile-data .form-control').prop('readonly', true);
        $('.profile-data select.select2').select2('destroy');
    });

    $('.edit-pass_js').on('click', function() {
        $('#showPass').hide();
        $('#formEditPass').show();
    });

    $('.cancel-edit-pass_js').on('click', function() {
        $('#formEditPass').hide();
        $('#showPass').show();
    });

    $('.edit-telegram_js').on('click', function() {
        $(this).closest('[data-field="data"]').hide().siblings('[data-field="edit"]').show();

    });

    $(document).on('shown.bs.modal', function (e) {
        useSelect2();
        $('html').addClass('modal-open');
    });

    $(document).on('hide.bs.modal', function (e) {
        $('html').removeClass('modal-open');
    });

    if ($('.js-data-table').length > 0) {
        $('.js-data-table').DataTable({
            "paging":   false,
            "ordering": true,
            "info":     false,
            "searching":   false
        });
    }

});

$(window).on('load', function() {
    callSetLayoutHeight();
});

$(window).resize(function() {
    callSetLayoutHeight();
    useSelect2();
});

function setLayoutHeight(sellector) {
    jQuery(sellector).height('auto');
    var highestBox = 0;
    jQuery(sellector).each(function() {
        if (jQuery(this).height() > highestBox) {
            highestBox = jQuery(this).height();
        }
    });
    jQuery(sellector).height(highestBox);
};

function callSetLayoutHeight() {
    for (var i = 1; i <=10; i++) {
        if ($('.set-height-' + i + '_js').length > 0) {
            setLayoutHeight('.set-height-' + i + '_js');
        }
    }
}

function useSelect2() {
    if ($('.select2').length > 0) {
        $('.select2').select2({
            minimumResultsForSearch: Infinity
        });
    }
}


/* new era */
$(".dropdown-td").click(function(){
    $(this).toggleClass("active");
    $("tr[data-parent='#" + $(this).attr("id") +"']").toggle();
});
$(".close-popup").click(function(){
    $($(this).data("target")).fadeOut();
});
$(".highlight-input").focus(function(){
    $(this).parent().removeClass("normalize-input");
});
$(".highlight-input").blur(function(){
    $(this).parent().addClass("normalize-input");
});

$('.js-nav-controls').click(function(e){
    e.preventDefault();
    $('.nav-sub').toggleClass('d-none');
})