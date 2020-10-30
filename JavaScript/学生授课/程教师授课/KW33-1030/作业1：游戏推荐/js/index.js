$('#listbox').on('click', '.del', function () {
    console.log($(this));
    $(this).parents('dl').remove();
});

$('.add').click(function (e) {
    e.stopPropagation()
    var str = '';
    str += `<dl>
        <dt><img src="images/p4.jpg" /></dt>
        <dd>大航海家OL</dd>
        <dd><a class="del" href="javascript:void(0);">删除</a></dd>
        </dl>`;
    $($('.clear')).before(str);
});