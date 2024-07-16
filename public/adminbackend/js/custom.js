function HSDemo() {

    var settings = {
        headerMain: document.getElementById("headerMain").innerHTML,
        headerFluid: document.getElementById("headerFluid").innerHTML,
        headerDouble: document.getElementById("headerDouble").innerHTML,
        sidebarMain: document.getElementById("sidebarMain").innerHTML,
    }

    // Layouts
    var body = document.getElementsByTagName('body')[0],
        header = document.getElementsByClassName('navbar')[0],
        navbarVerticalAside = document.getElementsByClassName('navbar-vertical-aside')[0];

    // Radios
    var radiosSkin = Array.prototype.slice.call(document.querySelectorAll('input[type=radio][name="layoutSkinsRadio"]'), 0),
        radiosSidebarMode = Array.prototype.slice.call(document.querySelectorAll('input[type=radio][name="sidebarLayoutOptions"]'), 0),
        radiosHeaderMode = Array.prototype.slice.call(document.querySelectorAll('input[type=radio][name="headerLayoutOptions"]'), 0);

    // Local Storage
    var skin = window.localStorage.getItem('hs-builder-skin') === null ? 'default' : window.localStorage.getItem('hs-builder-skin'),
        sidebarMode = window.localStorage.getItem('hs-builder-sidebar-mode') === null ? 'default' : window.localStorage.getItem('hs-builder-sidebar-mode'),
        headerMode = window.localStorage.getItem('hs-builder-header-mode') === null ? 'false' : window.localStorage.getItem('hs-builder-header-mode');

    var appendLayout = function appendLayout(str) {
        body.insertAdjacentHTML('afterbegin', str);
    };

    function addContainer() {
        var style = document.createElement('style');
        document.head.appendChild(style);
        style.textContent = "         \n      .content,\n      .footer {\n        width: 100%;\n        padding-right: 15px !important;\n        padding-left: 15px !important;\n        margin-right: auto;\n        margin-left: auto;\n      }\n      \n      @media (min-width: 1400px) {\n        .content,\n        .footer {\n          max-width: 1320px;\n        }\n      }       \n      \n      @media (min-width: 1400px) {\n        .content,\n        .footer {\n          max-width: 1320px;\n        }\n      }\n    ";
    }

    if (sidebarMode !== false || headerMode !== false) {
        body.classList.remove('navbar-vertical-aside-mini-mode');
    }

    if (headerMode == 'false') {
        if (!sidebarMode || sidebarMode === 'default') {
            appendLayout(settings.sidebarMain);
        } else if (sidebarMode === 'navbar-vertical-aside-compact-mode') {
            appendLayout(settings.sidebarCompact);
            document.body.className += ' navbar-vertical-aside-compact-mode navbar-vertical-aside-compact-mini-mode';
            var style = document.createElement('style');
            document.head.appendChild(style);
            style.textContent = "\n@media(min-width: 993px) {\n.js-navbar-vertical-aside-toggle-invoker {\ndisplay: none !important;\n}\n}\n";
        } else if (sidebarMode === 'navbar-vertical-aside-mini-mode') {
            appendLayout(settings.sidebarMain);
            document.body.className += ' navbar-vertical-aside-mini-mode';
        }

        document.body.className += ' footer-offset has-navbar-vertical-aside navbar-vertical-aside-show-xl';
    }

    if (headerMode === 'single') {
        if (skin === 'navbar-dark') {
            settings.headerFluid = settings.headerFluid.replace(/btn-ghost-secondary/g, 'btn-ghost-light');
        }



        appendLayout(settings.headerFluid);
        body.classList.add('footer-offset');
        var _header = document.getElementsByClassName('navbar')[0],
            oldHeaderContent = _header.innerHTML;
        _header.innerHTML = '<div class="container">' + oldHeaderContent + '</div>';
        addContainer();
    } else if (headerMode === 'double') {
        appendLayout(settings.headerDouble);
        body.classList.add('footer-offset');

        if ('scrollRestoration' in history) {
            // Back off, browser, I got this...
            history.scrollRestoration = 'manual';
        }
    } else if (headerMode === 'double-container') {
        appendLayout(settings.headerDouble);
        body.classList.add('footer-offset');
        var _header2 = document.getElementsByClassName('navbar')[0],
            fisrtElement = _header2.firstElementChild;
        fisrtElement.innerHTML = '<div class="navbar-dark w-100"> <div class="container">' + fisrtElement.firstElementChild.innerHTML + '</div> </div>';
        _header2.innerHTML = fisrtElement.innerHTML + ' <div class="container">' + _header2.lastElementChild.innerHTML + '</div>';
        addContainer();

        if ('scrollRestoration' in history) {
            // Back off, browser, I got this...
            history.scrollRestoration = 'manual';
        }
    } else {
        appendLayout(settings.headerMain);
    }

    if (skin && headerMode !== 'double' && headerMode !== 'double-container') {
        var _header3 = document.getElementsByClassName('navbar')[0],
            sidebar = document.getElementsByClassName('navbar-vertical-aside')[0];

        if (headerMode === 'single' || headerMode === 'single-container') {
            _header3.classList.add(skin);
        }

        if (sidebar) {
            sidebar.classList.add(skin);
        }

        if (skin === 'navbar-light') {
            if (_header3) {
                _header3.classList.remove('navbar-bordered');
            }

            if (sidebar) {
                sidebar.classList.remove('navbar-bordered');
            }
        } else if (skin === 'navbar-dark') {
            if (sidebar) {
                for (var i = 0; i < document.querySelectorAll('aside .navbar-brand-logo').length; i++) {
                    document.querySelectorAll('aside .navbar-brand-logo')[i].setAttribute('src', document.querySelectorAll('aside .navbar-brand-logo')[0].getAttribute('src').replace('logo.svg', 'logo-white.svg'));
                }
            } else {
                for (var i = 0; i < document.querySelectorAll('header .navbar-brand-logo').length; i++) {
                    document.querySelectorAll('header .navbar-brand-logo')[i].setAttribute('src', document.querySelectorAll('header .navbar-brand-logo')[0].getAttribute('src').replace('logo.svg', 'logo-white.svg'));
                }
            }

            for (var i = 0; i < document.getElementsByClassName('navbar-brand-logo-mini').length; i++) {
                document.getElementsByClassName('navbar-brand-logo-mini')[i].setAttribute('src', document.getElementsByClassName('navbar-brand-logo-mini')[0].getAttribute('src').replace('logo-short.svg', 'logo-short-white.svg'));
            }

            for (var i = 0; i < document.getElementsByClassName('navbar-brand-logo-short').length; i++) {
                document.getElementsByClassName('navbar-brand-logo-short')[i].setAttribute('src', document.getElementsByClassName('navbar-brand-logo-short')[0].getAttribute('src').replace('logo-short.svg', 'logo-short-white.svg'));
            }
        }
    }

    radiosSkin.forEach(function (radio) {
        if (skin === radio.value) {
            radio.checked = true;
        }

        radio.addEventListener('change', function () {
            skin = radio.value;
        });
    });
    radiosSidebarMode.forEach(function (radio) {
        if (sidebarMode === radio.value) {
            radio.checked = true;
        }

        radio.addEventListener('change', function () {
            sidebarMode = radio.value;
            radiosSkin.forEach(function (radio) {
                if (skin === radio.value) {
                    radio.checked = true;
                }

                radio.disabled = false;
            });
            radiosHeaderMode.forEach(function (radio) {
                radio.checked = false;
                headerMode = false;
            });
        });
    });
    radiosHeaderMode.forEach(function (radio) {
        if (headerMode === radio.value) {
            radio.checked = true;

            if (radio.value === 'double' || radio.value === 'double-container') {
                radiosSkin.forEach(function (radio) {
                    radio.checked = false;
                    radio.disabled = true;
                });
                document.getElementById('js-builder-disabled').style.opacity = 1;
            }

            radiosSidebarMode.forEach(function (radio) {
                radio.checked = false;
            });
        }

        radio.addEventListener('change', function (e) {
            if (radio.value !== 'default') {
                headerMode = radio.value;
            } else {
                headerMode = false;
            }

            if (e.target.value === 'double' || radio.value === 'double-container') {
                radiosSkin.forEach(function (radio) {
                    radio.checked = false;
                    radio.disabled = true;
                });
            } else {
                radiosSkin.forEach(function (radio) {
                    if (skin === false && radio.value === 'default' || skin === radio.value) {
                        radio.checked = true;
                    }

                    radio.disabled = false;
                });
            }

            radiosSidebarMode.forEach(function (radio) {
                radio.checked = false;
                sidebarMode = false;
            });
        });
    });
    Array.prototype.slice.call(document.querySelectorAll('.custom-checkbox-card-input'), 0).forEach(function (radio) {
        radio.addEventListener('change', function () {
            radiosSkin.forEach(function (radio) {
                if (radio.disabled) {
                    document.getElementById('js-builder-disabled').style.opacity = 1;
                } else {
                    document.getElementById('js-builder-disabled').style.opacity = 0;
                }
            });
        });
    });

    document.getElementById("headerMain").parentNode.removeChild(document.getElementById("headerMain"));
    document.getElementById("headerFluid").parentNode.removeChild(document.getElementById("headerFluid"));
    document.getElementById("headerDouble").parentNode.removeChild(document.getElementById("headerDouble"));
    document.getElementById("sidebarMain").parentNode.removeChild(document.getElementById("sidebarMain"));
}

HSDemo();

$('.change-language').on('click', function () {
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="_token"]').attr("content"),
        },
    });
    $.ajax({
        type: "POST",
        url: $(this).data('action'),
        data: {
            language_code: $(this).data('language-code'),
        },
        success: function (data) {
            toastr.success(data.message);
            location.reload();
        },
    });
})

$("#formUrlChange").on('click', function () {
    let action = $(this).data('action');
    $('#form-data').attr('action', action);
});

function callDemo() {
    $(".call-demo").on('click', function () {
        toastr.info($('#call-demo-message').data('text'), {
            CloseButton: true,
            ProgressBar: true
        });
    });
}
callDemo()

$('.toggle-switch-dynamic-image').on('click', function (event) {
    event.preventDefault();
    const modalId = $(this).data('modal-id')
    const toggleId = $(this).data('toggle-id');
    const onImage = $(this).data('on-image');
    const offImage = $(this).data('off-image');
    const onTitle = $(this).data('on-title');
    const offTitle = $(this).data('off-title');
    const onMessage = $(this).data('on-message');
    const offMessage = $(this).data('off-message');
    toggleModal(modalId, toggleId, onImage, offImage, onTitle, offTitle, onMessage, offMessage)
});

$('.toggle-switch-message').on('click', function (event) {
    event.preventDefault();
    let rootPath = $('#get-root-path-for-toggle-modal-image').data('path');
    const modalId = $(this).data('modal-id')
    const toggleId = $(this).data('toggle-id');
    const onImage = rootPath + '/' + $(this).data('on-image');
    const offImage = rootPath + '/' + $(this).data('off-image');
    const onTitle = $(this).data('on-title');
    const offTitle = $(this).data('off-title');
    const onMessage = $(this).data('on-message');
    const offMessage = $(this).data('off-message');
    toggleModal(modalId, toggleId, onImage, offImage, onTitle, offTitle, onMessage, offMessage)
});

function toggleModal(modalId, toggleId, onImage = null, offImage = null, onTitle, offTitle, onMessage, offMessage) {
    if ($('#' + toggleId).is(':checked')) {
        $('#' + modalId + '-title').empty().append(onTitle);
        $('#' + modalId + '-message').empty().append(onMessage);
        $('#' + modalId + '-image').attr('src', onImage);
        $('#' + modalId + '-ok-button').attr('toggle-ok-button', toggleId);
    } else {
        $('#' + modalId + '-title').empty().append(offTitle);
        $('#' + modalId + '-message').empty().append(offMessage);
        $('#' + modalId + '-image').attr('src', offImage);
        $('#' + modalId + '-ok-button').attr('toggle-ok-button', toggleId);
    }
    $('#' + modalId).modal('show');
}

$('#toggle-modal-ok-button').on('click', function () {
    const toggleIdName = ($(this).attr('toggle-ok-button'));
    const toggleId = $('#' + ($(this).attr('toggle-ok-button')));
    if (toggleId.is(':checked')) {
        toggleId.prop('checked', false);
    } else {
        toggleId.prop('checked', true);
    }
    $('#toggle-modal').modal('hide');
    if (toggleIdName === 'email-verification') {
        if ($("#email-verification").is(':checked') && $("#otp-verification").is(':checked')) {
            $('#otp-verification').removeAttr('checked');
            toastr.info($('#get-email-and-otp-verification-info-message').data('info'));
        }
    }
    if (toggleIdName === 'otp-verification' && $('#get-application-environment-mode').data('value') !== 'demo') {
        if ($("#otp-verification").is(':checked') && $("#email-verification").is(':checked')) {
            $('#email-verification').removeAttr('checked');
            toastr.info($('#get-email-and-otp-verification-info-message').data('info'));
        }
    } else {
        callDemo();
    }
})

$('#toggle-status-modal-ok-button').on('click', function () {
    const toggleId = $('#' + $(this).attr('toggle-ok-button'));
    if (toggleId.is(':checked')) {
        toggleId.prop('checked', false);
    } else {
        toggleId.prop('checked', true);
    }
    let toggleOkButton = $(this).attr('toggle-ok-button') + '-form';
    submitStatusUpdateForm(toggleOkButton);
});
function submitStatusUpdateForm(formId) {
    const form = $('#' + formId);
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });
    let updateText = $('#get-update-status-message');
    $.ajax({
        url: form.attr('action'),
        method: form.attr('method'),
        data: form.serialize(),
        success: function (data) {
            switch (form.data('from')) {
                case 'deal':
                    toastr.success(updateText.data('text'));
                    location.reload();
                    break;
                case 'default-withdraw-method-status':
                    let defaultWithdrawMethodMessage = $('#get-withdrawal-method-default-text');
                    if (data.success) {
                        toastr.success(defaultWithdrawMethodMessage.data('success'));
                    } else {
                        toastr.error(defaultWithdrawMethodMessage.data('error'));
                    }
                    location.reload();
                    break;

                case 'withdraw-method-status':
                    if (data.success) {
                        toastr.success(updateText.data('text'));
                    } else {
                        toastr.error(updateText.data('error'));
                    }
                    location.reload();
                    break;

                case 'featured-product-status':
                    toastr.success($('#get-featured-status-message').data('success'));
                    break;
                case 'product-status-update':
                    if (data.success) {
                        toastr.success(updateText.data('text'));
                    } else {
                        toastr.error(updateText.data('error'));
                        location.reload();
                    }
                    break;

                case 'shop':
                case 'delivery-restriction':
                case 'default-language':
                    toastr.success(data.message);
                    location.reload();
                    break;
                case 'product-status':
                    if (data.success) {
                        toastr.success(data.message);
                    } else {
                        toastr.error(data.message);
                        setTimeout(function () {
                            location.reload();
                        }, 2000);
                    }
                    break;
                default:
                    toastr.success(updateText.data('text'));
                    break;
            }

        }
    });
}

$('.js-toggle-password').each(function () {
    new HSTogglePassword(this).init()
});

$('.delete-data').on('click', function () {
    let getText = $('#get-confirm-and-cancel-button-text-for-delete');
    Swal.fire({
        title: getText.data('sure'),
        text: getText.data('text'),
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: getText.data('cancel'),
        confirmButtonText: getText.data('confirm'),
        reverseButtons: true
    }).then((result) => {
        if (result.value) {
            // console.log($(this).data());
            $.ajax({
                url: $(this).data('action'),
                method: 'POST',
                data: { id: $(this).data('id') },
                success: function (data) {
                    if (data.success) {
                        toastr.success(data.message);
                    } else {
                        toastr.error(data.message);
                    }
                    location.reload();
                }
            });
        }
    })
})

$('.delete-data-without-form').on('click', function () {
    let getText = $('#get-confirm-and-cancel-button-text-for-delete');
    Swal.fire({
        title: getText.data('sure'),
        text: getText.data('text'),
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: getText.data('cancel'),
        confirmButtonText: getText.data('confirm'),
        reverseButtons: true
    }).then((result) => {
        if (result.value) {
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
                }
            });
            let id = $(this).data('id')
            $.ajax({
                url: $(this).data('action'),
                method: 'POST',
                data: { id: id },
                success: function (data) {
                    if ($(this).data('from') === 'currency') {
                        if (parseInt(data.status) === 1) {
                            toastr.success($('#get-delete-currency-message').data('success'));
                        } else {
                            toastr.warning($('#get-delete-currency-message').data('warning'));
                        }
                    } else {
                        toastr.success($('#get-deleted-message').data('text'));
                    }
                    location.reload();
                }
            });
        }
    })
})

function locationReload() {
    $('.reload-by-onclick').on('click', function () {
        location.reload()
    })
}
locationReload();
$('.image-input').on('change', function () {
    let input = this;
    let img = document.getElementById($(this).data('image-id'));
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            if (img !== null) {
                img.src = e.target.result;
            }
            let imgName = input.files[0].name;
            if (input.closest('[data-title]')) {
                input.closest('[data-title]').setAttribute("data-title", imgName);
            }

        };
        reader.readAsDataURL(input.files[0]);
    }
});

$('.copy-to-clipboard').on('click', function () {
    let copiedText = $($(this).data('id')).text();
    let tempInput = $('<textarea>');
    $('body').append(tempInput);
    tempInput.val(copiedText).select();
    document.execCommand('copy');
    tempInput.remove();
    toastr.success($('#get-copy-to-clipboard').data('success'));
});

$(window).on('load', function () {
    try {
        var swiper = new Swiper(".mySwiper", {
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
                autoHeight: true,
            },
        });
    } catch (e) {
    }
});

$('.onerror-chatting').on('error', function () {
    let image = $('#onerror-chatting').data('onerror-chatting');
    $(this).attr('src', image);
});

$('.onerror-user').on('error', function () {
    let image = $('#onerror-user').data('onerror-user');
    $(this).attr('src', image);
});

var backgroundImage = $("[data-bg-img]");
backgroundImage.css("background-image", function () {
    return 'url("' + $(this).data("bg-img") + '")';
}).removeAttr("data-bg-img").addClass("bg-img");

function onErrorImage() {
    $('.onerror-image').on('error', function () {
        let image = $(this).data('onerror');
        $(this).attr('src', image);
    });
}
onErrorImage()
$(window).on('load', function () {
    onErrorImage()
})

$('.get-customer-list-by-ajax-request').select2({
    data: [{ id: '', text: 'Select your option', disabled: true, selected: true }],
    ajax: {
        url: $('#get-customer-list-route').data('action'),
        data: function (params) {
            return {
                searchValue: params.term, // search term
                page: params.page
            };
        },
        processResults: function (data) {
            return {
                results: data

            };
        },
        __port: function (params, success, failure) {
            var $request = $.ajax(params);

            $request.then(success);
            $request.fail(failure);

            return $request;
        }

    }
});
$('#start-date-time,#end-date-time').change(function () {
    let from = $('#start-date-time');
    let to = $('#end-date-time');
    if (from.val() !== '' && to.val() !== '' && from.val() > to.val()) {
        from.val('');
        to.val('');
        toastr.error($('#get-date-range-message').data('error'), Error, {
            CloseButton: true,
            ProgressBar: true
        });
    }
})
$('.set-customer-value').on('change', function () {
    $('input[name="customer_id"]').val($(this).val());
});

$('.withdraw-status-filter').on('change', function () {
    location.href = $(this).data('action') + '?' + 'approved' + '=' + $(this).val();
});
$('.form-alert').on('click', function () {
    let getText = $('#get-confirm-and-cancel-button-text');
    Swal.fire({
        title: getText.data('sure'),
        text: $(this).data('message'),
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: getText.data('cancel'),
        confirmButtonText: getText.data('confirm'),
        reverseButtons: true
    }).then((result) => {
        if (result.value) {
            $('#' + $(this).data('id')).submit()
        }
    })
})

$("#general-section").click(function () {
    $("#password-section").removeClass("active");
    $("#general-section").addClass("active");
    $('html, body').animate({
        scrollTop: $("#general-div").offset().top
    }, 2000);
});
$("#password-section").click(function () {
    $("#general-section").removeClass("active");
    $("#password-section").addClass("active");
    $('html, body').animate({
        scrollTop: $("#password-div").offset().top
    }, 2000);
});

$('.image-preview-before-upload').on('change', function () {
    let getElementId = $(this).data('preview');
    $(getElementId).attr('src', window.URL.createObjectURL(this.files[0]))
})

var backgroundImage = $("[data-bg-img]");
backgroundImage.css("background-image", function () {
    return 'url("' + $(this).data("bg-img") + '")';
}).removeAttr("data-bg-img").addClass("bg-img");

$('#temporary-close-form').on('submit', function (e) {
    e.preventDefault();
    let status = $('#temporary_close').prop("checked") === true ? 'checked' : 'unchecked';
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });
    $.ajax({
        url: $(this).attr('action'),
        method: 'POST',
        data: { status: status },
        success: function (response) {
            toastr.success(response.message);
            location.reload();
        }
    });
});

$('#inhouse-vacation-start-date, #inhouse-vacation-end-date').change(function () {
    let elementFromDate = $('#inhouse-vacation-start-date');
    let elementToDate = $('#inhouse-vacation-end-date');
    let fromDate = elementFromDate.val();
    let toDate = elementToDate.val();
    if (fromDate !== '') {
        elementToDate.attr('required', 'required');
    }
    if (toDate !== '') {
        elementFromDate.attr('required', 'required');
    }
    if (fromDate !== '' && toDate !== '') {
        if (fromDate > toDate) {
            elementFromDate.val('');
            elementToDate.val('');
            toastr.error($('#message-invalid-date-range').data('text'), Error, {
                CloseButton: true,
                ProgressBar: true
            });
        }
    }
})

$(".js-example-theme-single").select2({
    theme: "classic"
});

$(".js-example-responsive").select2({
    width: 'resolve'
});

$('.action-admin-products-updated-shipping').on('click', function () {
    let productId = $(this).data('product-id');
    let status = $(this).data('status');

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });
    $.ajax({
        url: $('#route-admin-products-updated-shipping').data('url'),
        method: 'POST',
        data: {
            product_id: productId,
            status: status
        },
        success: function (response) {
            toastr.success(response.message);
            location.reload();
        }
    });
})

$('.admin-product-status-form').on('submit', function (event) {
    event.preventDefault();
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });
    $.ajax({
        url: $(this).attr('action'),
        method: 'POST',
        data: $(this).serialize(),
        success: function (response) {
            if (response.success) {
                toastr.success(response.message);
            } else {
                toastr.error(response.message);
                setTimeout(function () {
                    location.reload();
                }, 2000);
            }
        }
    });
});

$('.action-update-product-quantity').on('click', function () {
    $.get({
        url: $(this).data('url'),
        dataType: 'json',
        success: function (data) {
            $('.rest-part').empty().html(data.view);
            updateProductQuantityByKeyUp()
        },
    });
})

$('.action-onclick-reload-page').on('click', function () {
    location.reload()
})

$('.action-select-onchange-get-view').on('click', function () {
    let getUrlPrefix = $(this).data('url-prefix');
    location.href = getUrlPrefix + $(this).val();
})

$('.action-upload-section-dot-area').on('change', function () {
    if (this.files && this.files[0]) {
        let reader = new FileReader();
        reader.onload = () => {
            let imgName = this.files[0].name;
            $(this).closest('[data-title]').attr("data-title", imgName);
        };
        reader.readAsDataURL(this.files[0]);
    }
});

// function getRequestFunctionalityRender() {
//     $('.action-get-request-onchange').on('change', function () {
//         let getUrlPrefix = $(this).data('url-prefix');
//         let id = $(this).data('element-id');
//         let getElementType = $(this).data('element-type');
//         let value = $(this).val();
//         getRequestFunctionality(getUrlPrefix, id, getElementType, value)
//     });
// }
// getRequestFunctionalityRender()

function getRequestFunctionality(getUrlPrefix, id, getElementType, value) {
    console.log();
    let message = $('#message-select-word').data('text');
    $('#sub-sub-category-select').empty().append(`<option value="null" selected disabled>---` + message + `---</option>`);
    $.get({
        url: getUrlPrefix + value,
        dataType: 'json',
        success: function (data) {
            if (getElementType === 'select') {
                $('#' + id).empty().append(data.select_tag);
            }
        },
    });
}

$('.action-print-invoice').on('click', function () {
    printDiv($(this).data('value'));
})

function printDiv(divName) {
    let printContents = document.getElementById(divName).innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}

$(".form-system-language-tab").on('click', function (e) {
    e.preventDefault();
    $(".form-system-language-tab").removeClass('active');
    $(".form-system-language-form").addClass('d-none');
    $(this).addClass('active');
    let form_id = this.id;
    let lang = form_id.split("-")[0];
    $("#" + lang + "-form").removeClass('d-none');
});
$('.logout').on('click', function () {
    let getText = $('#get-logout-text');
    Swal.fire({
        title: getText.data('title'),
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonColor: '#377dff',
        cancelButtonColor: '#363636',
        confirmButtonText: getText.data('confirm'),
        denyButtonText: getText.data('deny'),
        cancelButtonText: getText.data('cancel'),
    }).then((result) => {
        if (result.value) {
            location.href = "/logout";
        } else {
            Swal.fire('Canceled', '', 'info')
        }
    })
})

$('.open-info-web').on('click', function () {
    let websiteInfo = document.getElementById("website_info");
    if (websiteInfo.style.display === "none") {
        websiteInfo.style.display = "block";
    } else {
        websiteInfo.style.display = "none";
    }
})

$(window).on('load', function () {
    if ($(".navbar-vertical-content li.active").length) {
        $('.navbar-vertical-content').animate({
            scrollTop: $(".navbar-vertical-content li.active").offset().top - 150
        }, 10);
    }
});

let $rows = $('.navbar-vertical-content .navbar-nav > li');
$('#search-bar-input').keyup(function () {
    let val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

    $rows.show().filter(function () {
        let text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(val);
    }).hide();
});

$("#reset").on('click', function () {
    let placeholderImg = $("#placeholderImg").data('img');
    $('#viewer').attr('src', placeholderImg);
    $('.spartan_remove_row').click();
});

$('.check-order').on('click', function () {
    location.href = $('#get-orders-list-route').data('action');
})

$(document).mouseup(function (e) {
    let container = $("#search-card");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
    }
});

function getPageViewOnClick() {
    $('.get-view-by-onclick').on('click', function () {
        location.href = $(this).data('link');
    });
}
getPageViewOnClick()



function updateProductQuantity() {
    let elementCurrentStock = $('input[name="current_stock"]');
    let totalQuantity = 0;
    let quantityElements = $('input[name^="qty_"]');
    for (let i = 0; i < quantityElements.length; i++) {
        totalQuantity += parseInt(quantityElements.eq(i).val());
    }
    if (quantityElements.length > 0) {
        elementCurrentStock.attr("readonly", true);
        elementCurrentStock.val(totalQuantity);
    } else {
        elementCurrentStock.attr("readonly", false);
    }
}

function updateProductQuantityByKeyUp() {
    $('input[name^="qty_"]').on('keyup', function () {
        let total_qty = 0;
        let qty_elements = $('input[name^="qty_"]');
        console.log(qty_elements.length)
        for (let i = 0; i < qty_elements.length; i++) {
            total_qty += parseInt(qty_elements.eq(i).val());
        }
        $('input[name="current_stock"]').val(total_qty);
    });
}
updateProductQuantityByKeyUp();
$('.onsubmit-disable-action-button').on('submit', function () {
    $('.onsubmit-disable-action-button button[type="submit"]').attr('disabled', true);
});
$('.reset-button').on('click', function () {
    $('.select-product-button').text($('#get-select-product-text').data('text'));
})