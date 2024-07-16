'use strict';
$('#free-delivery-responsibility').on('change', function() {
    let getAmountAdminArea = $('#free-delivery-over-amount-admin-area');
    if ($(this).val() === 'admin') {
        getAmountAdminArea.fadeIn();
    } else {
        getAmountAdminArea.fadeOut();
    }
});
$('#background-color').on('change', function() {
    let background_color = $('#background-color').val();
    $('#background-color-set').text(background_color);
});
$('#text-color').on('change', function() {
    let text_color = $('#text-color').val();
    $('#text-color-set').text(text_color);
});
$('#maintenance-mode-form').on('submit', function(e) {
    e.preventDefault();
    if ($('#get-application-environment-mode').data('value') !== 'demo') {
        callDemo()
        setTimeout(() => {
            location.reload();
        }, 3000);
    } else {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
            }
        });
        $.ajax({
            url: $(this).attr('action'),
            method: $(this).attr('method'),
            data: $(this).serialize(),
            beforeSend: function() {
                $('#loading').fadeIn();
            },
            success: function(data) {
                toastr.success(data.message);
            },
            complete: function() {
                $('#loading').fadeOut();
            },
        });
    }
});
$('#update-settings').on('submit', function(e) {
    let minimum_add_fund_amount = parseFloat($('#minimum_add_fund_amount').val());
    let maximum_add_fund_amount = parseFloat($('#maximum_add_fund_amount').val());
    if (maximum_add_fund_amount < minimum_add_fund_amount) {
        e.preventDefault();
        toastr.error($('#get-minimum-amount-message').data('error'));
    }
});
$(document).ready(function() {
    $('#dataTable').DataTable();
});
$(document).on('click', '.edit', function() {
    let route = $(this).attr("data-id");
    $.ajax({
        url: route,
        type: "GET",
        data: {
            "_token": "{{ csrf_token() }}"
        },
        dataType: "json",
        success: function(data) {
            $("#question-filed").val(data.question);
            $("#answer-field").val(data.answer);
            $("#ranking-field").val(data.ranking);
            $("#update-form-submit").attr("action", route);
        }
    });
});
$('#software-update-form').on('submit', function(e) {
    e.preventDefault();
    let formData = new FormData(document.getElementById('software-update-form'));
    let getSoftwareUpdate = $('#get-software-update-route');
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        type: "POST",
        url: getSoftwareUpdate.data('action'),
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function() {
            $('.progress').removeClass('d-none');
            $('#product_form').find('.submit').text('submitting...');
        },
        xhr: function() {
            let xhr = new window.XMLHttpRequest();
            xhr.upload.addEventListener("progress", (evt) => {
                if (evt.lengthComputable) {
                    let percentage = (evt.loaded / evt.total) * 100
                    let percentageFormatted = percentage.toFixed(0)
                    $('.progress-bar').css('width', `${percentageFormatted}%`).text(`${percentageFormatted}%`);
                }
            }, false);
            return xhr;
        },
        success: function(response) {},
        complete: function() {
            location.href = getSoftwareUpdate.data('redirect-route') + '/' + $('#update_key').val()
        },
        error: function(xhr, ajaxOption, thrownError) {}
    });
});