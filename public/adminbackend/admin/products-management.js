"use strict";
let getYesWord = $('#message-yes-word').data('text');
let getCancelWord = $('#message-cancel-word').data('text');
let messageAreYouSureDeleteThis = $('#message-are-you-sure-delete-this').data('text');
let messageYouWillNotAbleRevertThis = $('#message-you-will-not-be-able-to-revert-this').data('text');
$('.attribute-delete-button').on('click', function() {
    let attributeId = $(this).attr("id");
    Swal.fire({
        title: messageAreYouSureDeleteThis,
        text: messageYouWillNotAbleRevertThis,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: getYesWord,
        cancelButtonText: getCancelWord,
        type: 'warning',
        reverseButtons: true
    }).then((result) => {
        if (result.value) {
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
                }
            });
            $.ajax({
                url: $('#route-admin-attribute-delete').data('url'),
                method: 'POST',
                data: {
                    id: attributeId
                },
                success: function(response) {
                    toastr.success(response.message);
                    location.reload();
                }
            });
        }
    })
})
$('.brand-delete-button').on('click', function() {
    let brandId = $(this).attr("id");
    Swal.fire({
        title: messageAreYouSureDeleteThis,
        text: messageYouWillNotAbleRevertThis,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: getYesWord,
        cancelButtonText: getCancelWord,
        reverseButtons: true
    }).then((result) => {
        if (result.value) {
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
                }
            });
            $.ajax({
                url: $('#route-admin-brand-delete').data('url'),
                method: 'POST',
                data: {
                    id: brandId
                },
                success: function(response) {
                    toastr.success(response.message);
                    location.reload();
                }
            });
        }
    })
});
$('.category-delete-button').on('click', function() {
    let categoryId = $(this).attr("id");
    Swal.fire({
        title: messageAreYouSureDeleteThis,
        text: messageYouWillNotAbleRevertThis,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: getYesWord,
        cancelButtonText: getCancelWord,
        reverseButtons: true
    }).then((result) => {
        if (result.value) {
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
                }
            });
            $.ajax({
                url: $('#route-admin-category-delete').data('url'),
                method: 'POST',
                data: {
                    id: categoryId
                },
                success: function(response) {
                    toastr.success(response.message);
                    location.reload();
                }
            });
        }
    })
});
$('.action-get-sub-category-onchange').on('change', function() {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });
    $.ajax({
        type: 'POST',
        url: $(this).data('route'),
        data: {
            id: $(this).val()
        },
        success: function(response) {
            $("#parent_id").html(response.html);
        }
    });
});